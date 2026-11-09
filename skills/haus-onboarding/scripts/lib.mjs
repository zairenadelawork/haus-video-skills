// v9 "Editorial": calm paper stage, refined type, accurate product UI, slow confident motion.
// No grids, ghost words, HUDs, streaks, confetti or bounce. Beats are timed to the narration.
// usage: node build3.mjs   then: hyperframes render scenes3/<id> -o out/v9_<id>.mp4 -q looks -w 2
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Engine library: helpers, CSS, GSAP helpers, icons, logos. Scene files import from here.
// Skill-relative assets (fonts, icons, brand logos, sfx, gsap). Output goes to the current working directory.
const SKILL = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const HERE = process.cwd();                       // project folder; scenes are written to ./scenes/<id>/
const GSAP = path.join(SKILL, "vendor", "gsap.min.js");
const FONTS = ["TheSeasons-lt.ttf", "TheSeasons-ltit.ttf", "VisbyCF-Regular.otf", "VisbyCF-Medium.otf", "VisbyCF-DemiBold.otf"];
const DUR_SFX = { tap: 0.3, click: 0.1, chime: 1.1, whoosh: 0.9 };

const GOOGLE = '<svg class="gl" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/></svg>';

function icon(name, size, cls = "ic", stroke) {
  let s = fs.readFileSync(path.join(SKILL, "icons", name + ".svg"), "utf8").replace(/<!--[\s\S]*?-->/g, "").trim();
  const i = s.indexOf(">");
  let head = s.slice(0, i).replace(/class="[^"]*"/, `class="${cls}"`).replace(/\s(width|height|stroke-width)="[^"]*"/g, "");
  if (size) head = head.replace("<svg", `<svg width="${size}" height="${size}"`);
  let out = head + s.slice(i);
  if (stroke) out = out.replace('stroke="currentColor"', `stroke="${stroke}"`);
  return out;
}
const CHECK = (c = "#FAF7F2", w = 3) => `<svg viewBox="0 0 24 24" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg>`;
const MONO = (t, bg) => `<span class="mono" style="background:${bg}">${t}</span>`;

const GLOGO = {
  drive: '<svg viewBox="0 0 87.3 78" width="38" height="34"><path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z" fill="#00ac47"/><path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z" fill="#ea4335"/><path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>',
  sheets: '<svg viewBox="0 0 48 64" width="28" height="38"><path d="M29 0H6a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V19z" fill="#0F9D58"/><path d="M29 0v13a6 6 0 0 0 6 6h13z" fill="#87CEAC"/><rect x="10" y="29" width="28" height="23" rx="1.5" fill="#F1F1F1"/><rect x="10" y="35.5" width="28" height="2.5" fill="#0F9D58"/><rect x="10" y="43" width="28" height="2.5" fill="#0F9D58"/><rect x="21" y="29" width="2.5" height="23" fill="#0F9D58"/></svg>',
  gmail: '<svg viewBox="52 42 88 66" width="38" height="29"><path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6"/><path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15"/><path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2"/><path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92"/><path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2"/></svg>',
  analytics: '<svg viewBox="0 0 48 48" width="34" height="34"><rect x="32" y="4" width="12" height="40" rx="6" fill="#F9AB00"/><rect x="17" y="19" width="12" height="25" rx="6" fill="#E37400"/><circle cx="8" cy="38" r="6" fill="#E37400"/></svg>',
  ads: '<svg viewBox="0 0 48 44" width="36" height="33"><line x1="23" y1="9" x2="10" y2="33" stroke="#FBBC04" stroke-width="11" stroke-linecap="round"/><line x1="24" y1="9" x2="38" y2="34" stroke="#4285F4" stroke-width="11" stroke-linecap="round"/><circle cx="10" cy="34" r="6.5" fill="#34A853"/></svg>',
};
const W = (parts, extra = "") =>
  parts.flatMap(([t, em]) => t.split(" ").map((w) => `<span class="w"><span class="wi${em ? " em" : ""}">${w}${em && extra ? extra : ""}</span></span>`)).join(" ");

const CSS = `
@font-face{font-family:Seasons;src:url(fonts/TheSeasons-lt.ttf);font-weight:300}
@font-face{font-family:Seasons;src:url(fonts/TheSeasons-ltit.ttf);font-weight:300;font-style:italic}
@font-face{font-family:Visby;src:url(fonts/VisbyCF-Regular.otf);font-weight:400}
@font-face{font-family:Visby;src:url(fonts/VisbyCF-Medium.otf);font-weight:500}
@font-face{font-family:Visby;src:url(fonts/VisbyCF-DemiBold.otf);font-weight:600}
:root{--ink:#4A3270;--mute:rgba(74,50,112,.62);--line:rgba(106,76,156,.14);--lav:#E4D6F3;--lil:#B98DF0;--cream:#F8F5EF;--peach:#E9A27A;--plum:#6A4C9C}
*{box-sizing:border-box;margin:0;padding:0}
html,body{width:1920px;height:1080px;overflow:hidden;background:var(--cream)}
body{font-family:Visby,sans-serif;color:var(--ink);-webkit-font-smoothing:antialiased}
#root{position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:hidden;background:var(--cream)}
.layer{position:absolute;inset:0;pointer-events:none}
.light{position:absolute;border-radius:50%}
#l1{left:-260px;top:-380px;width:1500px;height:1200px;background:radial-gradient(closest-side,rgba(206,183,236,.55),rgba(206,183,236,0))}
#l2{left:1100px;top:560px;width:1200px;height:900px;background:radial-gradient(closest-side,rgba(240,196,168,.32),rgba(240,196,168,0))}
.vig{background:radial-gradient(ellipse at 50% 45%,transparent 60%,rgba(185,141,240,.10) 100%)}
.grain{opacity:.045;mix-blend-mode:multiply;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")}
#endfade{opacity:0}
#cam{position:absolute;inset:0;transform-origin:50% 50%}
.abs{position:absolute}
.center{left:0;right:0;margin-left:auto;margin-right:auto;width:max-content}
.beat{position:absolute;inset:0}
.hid{opacity:0}
.eyebrow{font-weight:600;font-size:18px;letter-spacing:.34em;text-transform:uppercase;white-space:nowrap;color:var(--plum)}
.eyebrow.peach{color:#C9805A}
.title{font-family:Seasons;font-weight:300;line-height:1.04;white-space:nowrap;letter-spacing:-.02em}
.w{display:inline-block;vertical-align:top}
.wi{display:inline-block;will-change:transform}
.wi.em{font-style:italic;color:#E0926A;padding-right:.04em;position:relative}
.sub{font-size:28px;color:var(--mute);line-height:1.45}
.rule{height:1px;background:rgba(106,76,156,.35);transform-origin:center}
.ul{position:absolute;left:.06em;right:.06em;bottom:.02em;height:3px;border-radius:2px;background:var(--peach);transform-origin:left center}
.panel{background:#FFFDF9;border-radius:28px;border:1px solid rgba(106,76,156,.10);box-shadow:0 1px 0 rgba(255,255,255,.8) inset,0 2px 4px rgba(106,76,156,.05),0 24px 48px -20px rgba(106,76,156,.18),0 70px 120px -50px rgba(185,141,240,.28)}
.tile{border-radius:18px;display:grid;place-items:center;background:#FFFDF9;border:1px solid var(--line);box-shadow:0 1px 2px rgba(106,76,156,.08),0 8px 18px -10px rgba(106,76,156,.22)}
.tile svg.ic{width:52%;height:52%;stroke:var(--plum);stroke-width:1.6}
.tile.dark{background:linear-gradient(160deg,#CDB2EE,#A985D8);border-color:transparent}
.tile.dark img{width:70%}
.gl{width:52%;height:52%}
.mono{width:52%;height:52%;border-radius:10px;color:#FAF7F2;font-weight:600;font-size:22px;display:grid;place-items:center;letter-spacing:-.02em}

.badge{border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle at 35% 30%,#8B6CC2,#5A3E8C);box-shadow:0 14px 30px -8px rgba(90,62,140,.55),inset 0 1px 0 rgba(255,255,255,.25)}
.btn{display:grid;place-items:center;border-radius:12px;font-weight:600;font-size:18px}
.btn.out{border:1px solid rgba(106,76,156,.35);color:var(--plum)}
.btn.fill{background:var(--plum);color:#FAF7F2}
.shine-wrap{position:absolute;inset:0;border-radius:inherit;overflow:hidden;pointer-events:none}
.shine{position:absolute;top:-20%;left:0;width:35%;height:140%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.75),transparent);transform:skewX(-18deg)}
#cur{position:absolute;left:0;top:0;width:34px;height:34px;opacity:0;z-index:30;filter:drop-shadow(0 4px 8px rgba(106,76,156,.35))}
.cur-ring{position:absolute;width:70px;height:70px;margin:-35px 0 0 -35px;border-radius:50%;border:2px solid #B98DF0;opacity:0;z-index:29}
.dot{display:inline-block;width:7px;height:7px;border-radius:50%;background:var(--peach);vertical-align:middle;margin:0 .5em}
`;

// motion vocabulary: soft, long, decelerating. No overshoot, no heavy blur.
const HELPERS = `
window.__timelines = window.__timelines || {};
const tl = gsap.timeline({ paused: true });
const IN = (s, t, o = {}) => tl.from(s, { opacity: 0, duration: o.d ?? 1.1, ease: o.e ?? "power2.out", stagger: o.s ?? 0 }, t);
const RISE = (s, t, o = {}) => tl.from(s, { opacity: 0, duration: o.d ?? 1.2, ease: o.e ?? "power2.out", stagger: o.s ?? 0 }, t);
const WORDS = (s, t, o = {}) => tl.from(s + " .wi", { opacity: 0, duration: o.d ?? 1.1, ease: "power2.out", stagger: o.s ?? .06 }, t);
const LINES = (sel, t, st = .1) => tl.from(sel, { opacity: 0, duration: .8, ease: "power2.out", stagger: st }, t);
const OUT = (s, t, d = .7) => tl.to(s, { opacity: 0, duration: d, ease: "power2.inOut" }, t);
const SHOW = (s, t) => tl.set(s, { opacity: 1 }, t);
`;
const CUR = `<svg id="cur" viewBox="0 0 24 24"><path d="M4 2.5l15 7.2-6.6 1.7-3 6.3z" fill="#6A4C9C" stroke="#FAF7F2" stroke-width="1.6" stroke-linejoin="round"/></svg><i class="cur-ring" id="cur-ring"></i>`;
// cursor path: [[t, x, y, click?], ...] in stage px
const cursorJs = (pts) => {
  const out = [`tl.set("#cur", { x: ${pts[0][1]}, y: ${pts[0][2]} }, 0); tl.to("#cur", { opacity: 1, duration: .3 }, ${pts[0][0]});`];
  let prev = pts[0][0];
  for (const [t, x, y, c] of pts.slice(1)) {
    // each move must finish before the next one starts, or the tweens fight and the cursor jumps
    const d = Math.min(.8, t - prev - .25);
    out.push(`tl.to("#cur", { x: ${x}, y: ${y}, duration: ${d.toFixed(2)}, ease: "power3.inOut" }, ${(t - d - .05).toFixed(2)});`);
    prev = t;
    if (c) out.push(`tl.to("#cur", { scale: .82, duration: .1, yoyo: true, repeat: 1 }, ${t}); tl.set("#cur-ring", { x: ${x + 6}, y: ${y + 4} }, ${t}); tl.fromTo("#cur-ring", { scale: .4, opacity: .8 }, { scale: 1.5, opacity: 0, duration: .45, ease: "power2.out", immediateRender: false }, ${t});`);
  }
  out.push(`tl.to("#cur", { opacity: 0, duration: .4 }, ${pts.at(-1)[0] + .8});`);
  return out.join(" ");
};
const ambient = (D, o = {}) => `
gsap.set("#endfade", { backgroundColor: "${o.color ?? "#F8F5EF"}" });
${o.cursor ?? ""}
tl.to("#endfade", { opacity: 1, duration: ${o.end ?? 0.5}, ease: "power2.inOut" }, ${(D - (o.end ?? 0.5) - 0.02).toFixed(2)});
tl.to({}, { duration: ${D} }, 0);
`;


export { SKILL, HERE, GSAP, FONTS, DUR_SFX, GOOGLE, icon, CHECK, MONO, GLOGO, W, CSS, HELPERS, CUR, cursorJs, ambient };
