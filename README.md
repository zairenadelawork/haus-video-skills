# haus-video-skills

[Claude Code](https://claude.com/claude-code) skills for editing Evolution Haus / HAUS Platform videos in a consistent house style.

| Skill | What it does |
| --- | --- |
| [`haus-onboarding`](skills/haus-onboarding) | Any HAUS onboarding or tutorial video: premium cream B-roll built with [HyperFrames](https://hyperframes.heygen.com), karaoke captions rendered with FFmpeg, very quiet sound effects, finished in CapCut. Includes the "Connect Your Google Account" video as a worked example. |

More skills (for example a style for talking-head videos) will be added under `skills/`.

## Install a skill

Copy the skill folder into your Claude Code skills directory:

```bash
cp -r skills/haus-onboarding ~/.claude/skills/
```

Then ask Claude for a HAUS onboarding video, or run `/haus-onboarding`.

## Requirements

Node.js 18+, [HyperFrames](https://www.npmjs.com/package/hyperframes) (`npm i hyperframes`), FFmpeg with libass, and CapCut for the final assembly.

## Licensing

Code and docs are MIT licensed. The bundled fonts, logos, GSAP and the Google product logos are third-party materials with their own terms; see [LICENSE](LICENSE). If you fork this for another brand, replace `brand/` and `fonts/`.
