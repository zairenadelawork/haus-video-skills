---
name: haus-onboarding
description: Create or edit any Evolution Haus / HAUS Platform onboarding or tutorial video (welcome, connect an integration like Google, Gmail/Outlook, Zoom/Meet or Stripe, calendar setup, billing, domain access, or any other how-to) in the approved house style: premium cream B-roll cards built with HyperFrames, karaoke captions rendered with FFmpeg, very quiet sound effects, assembled and finished in CapCut. Use whenever the user asks to edit, make, redo or add B-roll/captions to a HAUS onboarding video, or to match the look of the "Connect Your Google Account" video.
---

# HAUS onboarding videos (any topic)

One style for every onboarding video; only the content changes. The style was approved on video 01 ("Connect Your Google Account", kept in `examples/` as the reference). Follow it exactly and do not "improve" it: the user iterated through ~25 rounds. Read `DESIGN.md` first.

## What changes per video vs. what never changes
- **Changes:** topic, screens to illustrate, step list, narration-driven timing, the "Coming next" target, which app/service logos appear.
- **Never changes:** palette, fonts, logo, motion rules, caption style, sound level, scene structure, CapCut workflow.

## Series (for "Coming next" and outros)
00 Welcome to Evolution Haus 2:30 · 01 Connect Your Google Account 2:00 · 02 Connect Your Gmail or Outlook Email 3:00 · 03 Set Up Your Calendar Availability 3:30 · 04 Google Calendar Sync & Conflicting Calendars 4:00 · 05 Connect Zoom or Google Meet 3:00 · 06 Create, Verify & Connect Stripe 5:00 · 07 Set Up Your Account Billing 2:30 · 08 Give Evolution Haus Access to Your Domain 3:30. Each video's "Coming next" card and outro point to the next in this list. If the voiceover still names the old next topic, tell the user it needs re-recording or a caption change.

## Workflow for a new video
1. **Brief**: confirm the topic, which CapCut project to use (confirm it is the open one; never touch other projects), and read the narration/caption text from `draft_content.json` (find the current folder via `root_meta_info.json`; folders get renamed).
2. **Plan scenes from the narration, not from the screen.** List the spoken beats with timestamps, then choose one scene archetype per beat group (below). Only illustrate what is said. Show only the relevant item (e.g. one Google row, not decoy rows). Use real app logos wherever an app is named.
3. **Cut dead air first** in CapCut (split both ends, delete, ripple, then shift every other track left by the same amount; verify in the draft JSON).
4. **Author a scenes file** by copying `examples/google-account.scenes.mjs` (each scene = `{ dur, sfx, body, js }`), keeping `ambient(...)`, the helpers and the CSS from `scripts/lib.mjs`. Slot lengths must match the clip slots in the edit.
5. **Build + lint + render** (from the project folder):
   - `node <skill>/scripts/build-broll.mjs <scenes-file.mjs>` writes `./scenes/<id>/`.
   - `hyperframes lint` in each scene must show 0 errors and 0 warnings; fix `overlapping_gsap_tweens`, do not ignore.
   - `hyperframes render scenes/<id> -o out/<name>.mp4 -q looks -w 2` (low-RAM machine). New filename every round or CapCut serves the cached old file.
6. **Captions**: `DRAFT=<draft_content.json> FFMPEG=<ffmpeg> node <skill>/scripts/captions-karaoke.mjs` (run from the project folder) writes `captions/*.mov` (transparent ProRes 4444). Retime from the draft after any edit change.
7. **Assemble in CapCut** (computer-use): Import > From device; swap B-roll with right-click > **Replace clip** (type the path, Return, then the "Replace clip" button near (778,523)); caption overlay on its own top track, dragged left once to clamp at 0:00; Fade In/Out animation on overlay clips; trim the music to the end. Read the draft JSON afterwards to confirm names and start times.
8. **Verify** by extracting frames from the encoded MP4 (ffmpeg `select`/`tile` contact sheets) and reading them, plus a CapCut spot-check. Lint passing is not proof.
9. Do not export unless asked.

## Scene archetypes (see the example for working code of each)
| Archetype | Use for | Example scene |
|---|---|---|
| Title | opening: logo, eyebrow, big headline with peach italic word, one sub line | `intro` beat A |
| Two things connect | "connect X to HAUS": two cards joined by a line, lock badge closes | `intro` beat B |
| What it unlocks | a row of service logos/cards for what the integration gives access to | `intro` beat C |
| Hub / list | an Integrations-style page: header, tabs, grid of app cards, one highlighted + cursor click | `hub` |
| Step-by-step dialog | a third-party dialog going through steps (choose account, permissions, allow) with a step list on the left and a cursor | `connect21` |
| Confirmation | success state: filled plum badge check, then "You're connected" | `connect21` screen 4 |
| Status check | single row going Connecting to Connected with a soft glow ripple | `verify` |
| Coming next | next tutorial's logos, "Coming next · Tutorial 0N", headline, sub | `next` |
| Outro | check badge, "<Topic> *Complete*", support pill, logo + "See you in the next tutorial" | `outro` |
For other topics (calendar availability, billing, domain DNS, Stripe, Zoom) compose the same pieces: build an accurate mini version of the real product screen with the cream panel/row/toggle/button components, add the cursor for click-through, finish with the confirmation badge. Reuse, do not invent new visual vocabulary.

## B-roll look (approved)
- Flat cream page `#F8F5EF`. No gradients, glows, vignette, grid. Faint paper grain only.
- Headlines: The Seasons Light, deep lilac text, the **italic accent word in peach**. Small tracked-caps eyebrows. Large type (96-170px).
- Cream/white panels with soft lilac shadows; accurate mini product UI.
- Real HAUS logo vector from `brand/` (never redraw). Deep lilac on cream, cream on lilac tiles.
- Badges: filled plum gradient circle with cream icon (`.badge`). Lock joins two cards (open, then closed with a small pop). Success check = same badge, check strokes in.
- "Connected" pill: purple, check, then one soft lilac glow ring spreading evenly via box-shadow (about 1.3s). Never scale a copy of an outline.
- Google service logos are vectors in `GLOGO` (Drive, Sheets, Gmail, Analytics, Ads); add vector logos for other apps the same way (official colors).
- Cursor: small plum arrow, quick press, short click ripple. Each cursor move must finish before the next starts (`min(.8, gap-.25)`) or it jitters.
- Step lists: active step = brighter text only, no side bar. Advance promptly after the action.
- Screen changes inside a dialog: old fades out about .25s, new fades in about .45s right after. Never a blank dialog.
- Motion: **opacity-only** reveals, then card contents settle in line by line (`LINES`, .1s stagger). Scene ends with a short fade to cream (intro fades to white).
- Every composition ends with `tl.to({}, { duration: DUR }, 0)`.

## Captions (approved)
Karaoke, bottom center, **one font only (Visby CF Demi Bold)**, white with a thin dark outline, spoken word in **lilac**. No Seasons italic, no colored band. Brand spellings: HAUS (never "House"), HAUS Platform, HAUS Support Team. Keep the overlay small (about 100-250MB); a 2.5GB file broke CapCut's preview.

## Sound effects
FFmpeg-synthesized (`sfx/`: tap, click, chime, whoosh), baked into B-roll as `<audio data-volume>` 0.08-0.3 (about -20 dB under the voice). Only on visible actions: card lands, lock closes, click, success chime. Never on every cut. CapCut-placed effects at -20 to -22 dB.

## Transitions
The recording may end in black; a 0.5s Dissolve into the outro reads as a fade from black. Overlay B-roll clips get CapCut Animation In "Fade In" and Out "Fade Out".

## Never do (user rejected these)
Floating/bobbing/pulsing cards, sheen sweeps, camera zoom/push-in, scale-in, slide or blur text reveals, perspective grids, ghost words, HUD/chapter bars, light streaks, confetti, orbiting icons, black UI elements, a lilac band behind captions, lilac/peach background gradients, fake placeholder rows, generic "AI slop" decoration.

## Pitfalls already solved
- libass loses alpha on a transparent canvas: the caption script renders a color pass and a matte pass and `alphamerge`s them.
- `filter: blur()` tweens override a CSS `brightness(0)` logo trick: use the colored SVG logos.
- CapCut context menus only appear when the right-click lands on the clip; if a click hits the wrong lane, scroll the timeline and re-check. After a CapCut restart re-run `request_access` for `capcut.exe`. A file-explorer window can cover CapCut; bring CapCut forward before clicking.
- Re-render under a new filename every round (CapCut caches by path).
- Prohibited in this environment: purchases or credit buys in CapCut; if a click opens a credits window, close it.

## Files
`scripts/lib.mjs` engine (CSS, helpers, icons, logos, cursor, ambient) · `scripts/build-broll.mjs` builder · `scripts/captions-karaoke.mjs` captions · `examples/google-account.scenes.mjs` reference scenes · `brand/` logos · `fonts/` · `icons/` · `sfx/` · `vendor/gsap.min.js` · `DESIGN.md`.
