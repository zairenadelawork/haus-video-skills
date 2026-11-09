// Builds an ASS karaoke caption track from the CapCut auto-caption timing, then renders it with FFmpeg
// to a transparent ProRes 4444 overlay (captions/haus_captions.mov) for CapCut.
// usage: node captions.mjs [seconds]   (optional seconds = render only the first N seconds as a test)
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { spawnSync } from "child_process";

const SKILL = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const HERE = process.cwd();                                   // captions are written to ./captions/
const FFMPEG = process.env.FFMPEG || "ffmpeg";                // any ffmpeg with libass on PATH, or set FFMPEG=<path>
// CapCut draft with the auto-caption text track: set DRAFT=<path to draft_content.json>
const DRAFT = process.env.DRAFT || (() => { throw new Error("Set DRAFT to the project's draft_content.json"); })();
const OUT = path.join(HERE, "captions");
fs.mkdirSync(path.join(OUT, "fonts"), { recursive: true });
for (const f of ["VisbyCF-DemiBold.otf", "VisbyCF-Medium.otf"]) fs.copyFileSync(path.join(SKILL, "fonts", f), path.join(OUT, "fonts", f));

const d = JSON.parse(fs.readFileSync(DRAFT, "utf8"));
const mats = new Map(d.materials.texts.map((t) => [t.id, t]));
const segs = [];
for (const tr of d.tracks) {
  if (tr.type !== "text") continue;
  for (const s of tr.segments) {
    const m = mats.get(s.material_id);
    const w = m.words, words = [];
    w.text.forEach((tok, i) => { if (tok.trim()) words.push({ t: tok, a: w.start_time[i] / 1000, b: w.end_time[i] / 1000 }); });
    segs.push({ start: s.target_timerange.start / 1e6, dur: s.target_timerange.duration / 1e6, words });
  }
}
segs.sort((a, b) => a.start - b.start);

// brand + readability fixes to the auto transcript
function clean(words) {
  const out = words.map((x) => ({ ...x }));
  out.forEach((x, i) => {
    const l = x.t.toLowerCase(), p = i ? out[i - 1].t : "";
    if (l === "house") x.t = "HAUS";
    else if (p === "HAUS" && l === "platform") x.t = "Platform";
    else if (p === "HAUS" && l === "support") x.t = "Support";
    else if (p === "Support" && l === "team") x.t = "Team";
  });
  out[0].t = out[0].t[0].toUpperCase() + out[0].t.slice(1);
  return out;
}

const ts = (s) => { const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), x = s - h * 3600 - m * 60; return `${h}:${String(m).padStart(2, "0")}:${x.toFixed(2).padStart(5, "0")}`; };
const PEACH = "&H00F08DB9&", WHITE = "&H00FFFFFF&";
const esc = (t) => t.replace(/[{}\\]/g, "");

let events = "";
for (const s of segs) {
  const ws = clean(s.words), end = s.start + s.dur;
  ws.forEach((w, i) => {
    const a = s.start + w.a, b = i < ws.length - 1 ? s.start + ws[i + 1].a : end;
    if (b - a < 0.02) return;
    const line = ws.map((x, j) => (j === i ? `{\\c${PEACH}}${esc(x.t)}{\\c${WHITE}}` : esc(x.t))).join(" ");
    const lead = i === 0 ? "{\\fad(160,0)\\fscx94\\fscy94\\t(0,200,\\fscx100\\fscy100)}" : i === ws.length - 1 ? "{\\fad(0,160)}" : "";
    // for the first word also cover any leading gap from the segment start
    const from = i === 0 ? s.start : a;
    events += `Dialogue: 0,${ts(from)},${ts(b)},Cap,,0,0,0,,${lead}${line}\n`;
  });
}

const ass = `[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 0
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name,Fontname,Fontsize,PrimaryColour,SecondaryColour,OutlineColour,BackColour,Bold,Italic,Underline,StrikeOut,ScaleX,ScaleY,Spacing,Angle,BorderStyle,Outline,Shadow,Alignment,MarginL,MarginR,MarginV,Encoding
Style: Cap,Visby CF Demi Bold,60,${WHITE},${WHITE},&H00331C1C&,&H70000000&,0,0,0,0,100,100,0.5,0,1,4,2,2,380,380,90,1

[Events]
Format: Layer,Start,End,Style,Name,MarginL,MarginR,MarginV,Effect,Text
${events}`;
fs.writeFileSync(path.join(OUT, "haus_captions.ass"), ass);
const total = Math.ceil(segs.at(-1).start + segs.at(-1).dur + 0.6);
console.log("segments", segs.length, "events", events.split("\n").length - 1, "length", total + "s");

// FFmpeg's ass filter loses alpha on a transparent canvas, so render colour and matte passes and merge them.
const matte = ass.replace(/&H00331C1C&,&H70000000&/, "&H00FFFFFF&,&H70FFFFFF&").replace(/\{\\c&H[0-9A-F]+&\}/g, "");
fs.writeFileSync(path.join(OUT, "haus_captions_matte.ass"), matte);
const test = process.argv[2] ? Number(process.argv[2]) : 0;
const dur = test || total;
const out = test ? "haus_captions_test.mov" : "haus_captions_karaoke_v2.mov";
const src = `color=c=black:s=1920x1080:r=30:d=${dur},format=rgb24`;
const r = spawnSync(FFMPEG, ["-v", "error", "-y", "-f", "lavfi", "-i", src, "-f", "lavfi", "-i", src,
  "-filter_complex", "[0:v]ass=haus_captions.ass:fontsdir=fonts[rgb];[1:v]ass=haus_captions_matte.ass:fontsdir=fonts,format=gray[a];[rgb][a]alphamerge,format=yuva444p10le[v]",
  "-map", "[v]", "-c:v", "prores_ks", "-profile:v", "4444", "-pix_fmt", "yuva444p10le", "-vendor", "apl0", out],
  { cwd: OUT, encoding: "utf8" });
if (r.status !== 0) { console.error(r.stderr); process.exit(1); }
console.log("wrote", path.join(OUT, out));
