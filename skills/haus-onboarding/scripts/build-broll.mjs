// Builds one HyperFrames project per scene from a scenes file.
// usage (from the project folder):  node <skill>/scripts/build-broll.mjs <scenes-file.mjs>
// output: ./scenes/<id>/index.html (+ fonts, logos, gsap, sfx). Then: hyperframes render scenes/<id> -o out/<name>.mp4 -q looks -w 2
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";
import { SKILL, HERE, GSAP, FONTS, DUR_SFX, CSS, HELPERS, CUR } from "./lib.mjs";

const file = process.argv[2];
if (!file) { console.error("usage: node build-broll.mjs <scenes-file.mjs>"); process.exit(1); }
const scenes = (await import(pathToFileURL(path.resolve(file)).href)).default;

// ---------- write projects ----------
for (const [id, s] of Object.entries(scenes)) {
  const dir = path.join(HERE, "scenes", id);
  fs.mkdirSync(path.join(dir, "fonts"), { recursive: true });
  fs.mkdirSync(path.join(dir, "sfx"), { recursive: true });
  for (const f of FONTS) fs.copyFileSync(path.join(SKILL, "fonts", f), path.join(dir, "fonts", f));
  for (const f of ["logo-deep.svg", "logo-cream.svg", "logo-lilac.svg"]) fs.copyFileSync(path.join(SKILL, "brand", f), path.join(dir, f));
  fs.copyFileSync(GSAP, path.join(dir, "gsap.min.js"));
  for (const n of Object.keys(DUR_SFX)) fs.copyFileSync(path.join(SKILL, "sfx", n + ".wav"), path.join(dir, "sfx", n + ".wav"));
  const audio = s.sfx.map(([n, t, v], i) => `<audio id="sfx-${i}" src="sfx/${n}.wav" data-start="${t}" data-duration="${DUR_SFX[n]}" data-track-index="${20 + i}" data-volume="${v}"></audio>`).join("\n  ");
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=1920, height=1080"><title>HAUS B-roll · ${id}</title>
<style>${CSS}</style></head>
<body>
<div id="root" data-composition-id="${id}" data-start="0" data-duration="${s.dur}" data-width="1920" data-height="1080">
  
  <div id="cam">${s.body}
  </div>
  ${CUR}
  <div class="layer grain"></div><div class="layer" id="endfade"></div>
  ${audio}
</div>
<script src="gsap.min.js"></script>
<script>
${HELPERS}
${s.js}
window.__timelines["${id}"] = tl;
</script>
</body></html>`;
  fs.writeFileSync(path.join(dir, "index.html"), html);
  fs.copyFileSync(path.join(SKILL, "DESIGN.md"), path.join(dir, "DESIGN.md"));
  console.log("wrote", id);
}
