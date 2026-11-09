// Worked example: video 01, "Connect Your Google Account" (the approved reference edit).
// A scenes file exports { id: { dur, sfx, body, js } }. Copy this file for a new video and rewrite the scenes.
import * as L from "../scripts/lib.mjs";
const { DUR_SFX, GOOGLE, icon, CHECK, MONO, GLOGO, W, CUR, cursorJs, ambient } = L;

const scenes = {};

// ============================================================= INTRO 21.7s  (VO: welcome 5.8 · "connect your Google account to your HAUS account" 8.0-12.6 · "supported Google integrations… let's get started" 12.9-18.2)
scenes.intro = {
  dur: 21.7,
  sfx: [["tap", 8.05, 0.16], ["tap", 8.4, 0.14], ["click", 11.3, 0.22], ["chime", 11.38, 0.1], ["tap", 13.4, 0.1], ["tap", 17.4, 0.12]],
  body: `
  <div class="beat" id="a">
    <div class="abs center" id="a-logo" style="top:300px"><img src="logo-deep.svg" style="width:150px;display:block"></div>
    <div class="abs rule" id="a-rule" style="left:920px;top:392px;width:80px"></div>
    <div class="abs center eyebrow" id="a-eye" style="top:428px">Tutorial 01 · Integrations</div>
    <div class="abs center title" id="a-title" style="top:474px;font-size:124px">${W([["Connect Your Google", 0], ["Account", 1]])}</div>
    <div class="abs center sub" id="a-sub" style="top:650px">Welcome to HAUS Platform</div>
  </div>
  <div class="beat hid" id="b">
    <div class="abs center eyebrow" id="b-eye" style="top:282px">What we'll do</div>
    <div class="abs panel b-card" id="b-g" style="left:300px;top:380px;width:500px;height:300px">
      <div class="abs tile" style="left:44px;top:44px;width:76px;height:76px">${GOOGLE}</div>
      <div class="abs eyebrow" style="left:44px;top:156px;font-size:15px;color:var(--mute)">Google account</div>
      <div class="abs" style="left:44px;top:188px;font-size:32px;font-weight:600;letter-spacing:-.01em">Your business account</div>
      <div class="abs" style="left:44px;top:234px;font-size:20px;color:var(--mute)">Drive · Sheets · Gmail · Analytics · Ads</div>
    </div>
    <div class="abs panel b-card" id="b-h" style="left:1120px;top:380px;width:500px;height:300px">
      <div class="abs tile dark" style="left:44px;top:44px;width:76px;height:76px"><img src="logo-cream.svg"></div>
      <div class="abs eyebrow" style="left:44px;top:156px;font-size:15px;color:var(--mute)">HAUS Platform</div>
      <div class="abs" style="left:44px;top:188px;font-size:32px;font-weight:600;letter-spacing:-.01em">Your HAUS workspace</div>
      <div class="abs" style="left:44px;top:234px;font-size:20px;color:var(--mute)">Settings · Integrations</div>
    </div>
    <svg class="abs" style="left:0;top:0" width="1920" height="1080"><path id="b-line" d="M800 530 L1120 530" stroke="#B98DF0" stroke-width="2" fill="none" pathLength="1" stroke-dasharray="1 1.2" stroke-dashoffset="1.1"/></svg>
    <div class="abs badge" id="b-node" style="left:922px;top:492px;width:76px;height:76px"><div id="b-plug" style="position:absolute;inset:0;display:grid;place-items:center">${icon("lock-open", 32, "x", "#FAF7F2")}</div><div id="b-ok" style="position:absolute;inset:0;display:grid;place-items:center;opacity:0">${icon("lock", 32, "x", "#FAF7F2")}</div></div>
    <div class="abs center sub" id="b-cap" style="top:740px">Connect your Google account to your HAUS Platform account</div>
  </div>
  <div class="beat hid" id="c">
    <div class="abs center eyebrow peach" id="c-eye" style="top:360px">Supported Google integrations</div>
    <div class="abs center" id="c-row" style="top:420px;display:flex;gap:16px">
      <div class="panel c-svc" style="position:relative;width:200px;height:150px;border-radius:22px;flex:none">
        <div class="abs tile" style="left:24px;top:22px;width:52px;height:52px;border-radius:14px">${GLOGO.drive}</div>
        <div class="abs" style="left:24px;top:96px;font-size:22px;font-weight:600">Drive</div></div>
      <div class="panel c-svc" style="position:relative;width:200px;height:150px;border-radius:22px;flex:none">
        <div class="abs tile" style="left:24px;top:22px;width:52px;height:52px;border-radius:14px">${GLOGO.sheets}</div>
        <div class="abs" style="left:24px;top:96px;font-size:22px;font-weight:600">Sheets</div></div>
      <div class="panel c-svc" style="position:relative;width:200px;height:150px;border-radius:22px;flex:none">
        <div class="abs tile" style="left:24px;top:22px;width:52px;height:52px;border-radius:14px">${GLOGO.gmail}</div>
        <div class="abs" style="left:24px;top:96px;font-size:22px;font-weight:600">Gmail</div></div>
      <div class="panel c-svc" style="position:relative;width:200px;height:150px;border-radius:22px;flex:none">
        <div class="abs tile" style="left:24px;top:22px;width:52px;height:52px;border-radius:14px">${GLOGO.analytics}</div>
        <div class="abs" style="left:24px;top:96px;font-size:22px;font-weight:600">Analytics</div></div>
      <div class="panel c-svc" style="position:relative;width:200px;height:150px;border-radius:22px;flex:none">
        <div class="abs tile" style="left:24px;top:22px;width:52px;height:52px;border-radius:14px">${GLOGO.ads}</div>
        <div class="abs" style="left:24px;top:96px;font-size:22px;font-weight:600">Ads</div></div>
    </div>
    <div class="abs center sub" id="c-sub" style="top:620px">Unlocked once your account is connected</div>
  </div>
  <div class="beat hid" id="d">
    <div class="abs center title" id="d-go" style="top:430px;font-size:150px">${W([["Let's get", 0], ["started", 1]], '<i class="ul" id="d-ul"></i>')}</div>
  </div>`,
  js: `
  // A · title, held while "Welcome to HAUS Platform" is spoken
  IN("#a-logo", .25, { y: 12, d: 1.4 });
  tl.from("#a-rule", { scaleX: 0, duration: 1.2, ease: "power3.inOut" }, .7);
  IN("#a-eye", .9, { y: 10, d: 1.1 });
  WORDS("#a-title", 1.2, { s: .09, d: 1.4 });
  IN("#a-sub", 5.55, { y: 12, d: 1.1 });
  OUT("#a", 7.25);
  // B · Google account -> HAUS account (VO 8.0-12.6)
  SHOW("#b", 7.6);
  IN("#b-eye", 7.7, { y: 10, d: 1.0 });
  RISE("#b-g", 7.9); RISE("#b-h", 8.25);
  tl.to("#b-line", { strokeDashoffset: 0, duration: 1.6, ease: "power2.inOut" }, 9.4);
  tl.from("#b-node", { opacity: 0, scale: .9, duration: .9, ease: "power3.out" }, 9.9);
  tl.to("#b-plug", { opacity: 0, duration: .25, ease: "power1.inOut" }, 11.3); tl.to("#b-ok", { opacity: 1, duration: .3, ease: "power1.inOut" }, 11.3); tl.fromTo("#b-node", { scale: 1 }, { scale: 1.08, duration: .15, yoyo: true, repeat: 1, ease: "power2.out", immediateRender: false }, 11.3);
  tl.to("#b-line", { stroke: "#6A4C9C", duration: .5 }, 11.3);
  IN("#b-cap", 10.3, { y: 10, d: 1.1 });
  OUT("#b", 12.75);
  // C · what it unlocks (VO 12.9-16.1)
  SHOW("#c", 13.1);
  IN("#c-eye", 13.2, { y: 10, d: 1.0 });
  IN(".c-svc", 13.45, { y: 16, d: 1.0, s: .09 });
  IN("#c-sub", 14.6, { y: 10, d: 1.0 });
  OUT("#c", 17.0);
  // D · let's get started (VO 17.3)
  SHOW("#d", 17.35);
  WORDS("#d-go", 17.4, { s: .12, d: 1.5 });
  tl.from("#d-ul", { scaleX: 0, duration: 1.1, ease: "power3.inOut" }, 18.4);
  LINES("#b-g > .abs", 8.3); LINES("#b-h > .abs", 8.65); LINES(".c-svc > .abs", 13.65, .06);
  ` + ambient(21.7, { color: "#FFFFFF", end: 0.8, push: 1.025 }),
};

// ============================================================= HUB 5s  (VO: "where you can manage supported third party applications and accounts connected to your HAUS Platform")
const apps = [
  [`<div class="abs tile" style="left:24px;top:24px;width:56px;height:56px;border-radius:14px">${icon("calendar-days")}</div>`, "Google Calendar", "Two-way calendar sync"],
  [`<div class="abs tile" style="left:24px;top:24px;width:56px;height:56px;border-radius:14px">${GOOGLE}</div>`, "Google", "Drive, Sheets, Gmail & Ads"],
  [`<div class="abs tile" style="left:24px;top:24px;width:56px;height:56px;border-radius:14px">${MONO("f", "#1877F2")}</div>`, "Facebook", "Pages, leads & messages"],
  [`<div class="abs tile" style="left:24px;top:24px;width:56px;height:56px;border-radius:14px">${MONO("in", "#0A66C2")}</div>`, "LinkedIn", "Company page & ads"],
  [`<div class="abs tile" style="left:24px;top:24px;width:56px;height:56px;border-radius:14px">${MONO("W", "#25D366")}</div>`, "WhatsApp", "Business messaging"],
  [`<div class="abs tile" style="left:24px;top:24px;width:56px;height:56px;border-radius:14px">${MONO("S", "#4A154B")}</div>`, "Slack", "Team notifications"],
];
scenes.hub = {
  dur: 5.0,
  sfx: [["tap", 0.35, 0.14], ["click", 2.55, 0.2]],
  body: `
  <div class="abs eyebrow" id="h-eye" style="left:150px;top:380px">Settings &nbsp;→&nbsp; Integrations</div>
  <div class="abs title" id="h-title" style="left:146px;top:424px;font-size:112px">${W([["Integrations", 0]])}</div>
  <div class="abs sub" id="h-sub" style="left:150px;top:572px;width:540px">Manage the apps and accounts connected to your HAUS Platform.</div>
  <div class="abs panel" id="h-panel" style="left:800px;top:190px;width:960px;height:700px">
    <div class="abs" style="left:40px;top:36px;font-size:28px;font-weight:600;letter-spacing:-.01em">Integrations</div>
    <div class="abs" style="left:40px;top:90px;display:flex;gap:30px;font-size:18px;font-weight:500">
      <span style="color:var(--plum);position:relative">All Integrations<i style="position:absolute;left:0;right:0;bottom:-15px;height:2px;background:var(--plum)"></i></span><span style="color:var(--mute)">Private Integrations</span></div>
    <div class="abs" style="left:0;right:0;top:128px;height:1px;background:var(--line)"></div>
    ${apps.map(([ic, name, desc], k) => { const x = 40 + (k % 3) * 300, y = 160 + Math.floor(k / 3) * 250; return `<div class="abs h-card${k === 1 ? " hot" : ""}" style="left:${x}px;top:${y}px;width:280px;height:230px;border-radius:18px;border:1px solid var(--line);background:#FFFDF9">
      ${ic}<div class="abs" style="left:24px;top:100px;font-size:22px;font-weight:600">${name}</div><div class="abs" style="left:24px;top:132px;font-size:17px;color:var(--mute)">${desc}</div>
      <div class="abs btn out${k === 1 ? " h-btn" : ""}" style="left:24px;right:24px;top:166px;height:42px">Connect</div></div>`; }).join("")}
  </div>`,
  js: `
  IN("#h-eye", .15, { y: 10, d: 1.0 }); WORDS("#h-title", .25, { d: 1.3 }); IN("#h-sub", .7, { y: 12, d: 1.1 });
  RISE("#h-panel", .2, { y: 50, d: 1.5 });
  IN(".h-card", .55, { y: 16, d: 1.0, s: .07 });
  tl.to(".hot", { borderColor: "rgba(185,141,240,.9)", boxShadow: "0 0 0 4px rgba(185,141,240,.22), 0 18px 36px -18px rgba(106,76,156,.3)", duration: .8, ease: "power2.out" }, 2.5);
  tl.to(".h-btn", { backgroundColor: "#6A4C9C", color: "#FAF7F2", borderColor: "rgba(106,76,156,0)", duration: .6, ease: "power2.out" }, 2.65);
  LINES("#h-panel > .abs:not(.h-card)", .5, .12); LINES(".h-card > *", .8, .025);
  ` + ambient(5.0, { push: 1.02, cursor: cursorJs([[1.5, 1560, 960], [2.6, 1280, 537, 1]]) }),
};

// ============================================================= CONNECT 9.5s  (Google's own consent flow, in three honest states)
const step = (n, t) => `<div class="cs" style="display:flex;align-items:baseline;gap:22px;height:64px"><span style="font-family:Seasons;font-size:40px;color:var(--plum);width:56px">${n}</span><span style="font-size:27px;font-weight:500">${t}</span></div>`;
const perm = (t) => `<div class="pm" style="display:flex;align-items:center;gap:20px;height:72px;border-bottom:1px solid var(--line)"><div class="box" style="width:30px;height:30px;border-radius:8px;border:1.5px solid rgba(106,76,156,.35);display:grid;place-items:center;flex:none"><div class="bx" style="width:30px;height:30px;border-radius:8px;background:var(--plum);display:grid;place-items:center;opacity:0"><div style="width:20px;height:20px">${CHECK()}</div></div></div><span style="font-size:22px">${t}</span></div>`;
scenes.connect = {
  dur: 9.5,
  sfx: [["click", 2.45, 0.2], ["tap", 4.75, 0.08], ["tap", 5.15, 0.08], ["tap", 5.55, 0.08], ["click", 7.55, 0.22], ["chime", 7.95, 0.1]],
  body: `
  <div class="abs eyebrow peach" id="k-eye" style="left:150px;top:300px">Step two · What happens next</div>
  <div class="abs title" id="k-title" style="left:146px;top:344px;font-size:96px;line-height:1.06">${W([["Google asks three", 0]])}<br>${W([["quick", 1], ["things", 0]])}</div>
  <div class="abs" id="k-steps" style="left:150px;top:610px">
    
    ${step("01", "Choose your account")}${step("02", "Review permissions")}${step("03", "Click Allow")}
  </div>
  <div class="abs panel" id="k-win" style="left:900px;top:230px;width:820px;height:620px">
    <div class="abs" style="left:40px;top:34px;display:flex;align-items:center;gap:14px;font-size:20px;font-weight:500;color:var(--mute)"><div style="width:30px;height:30px">${GOOGLE.replace('class="gl"', 'width="30" height="30"')}</div>Sign in with Google</div>
    <div class="abs" style="left:0;right:0;top:96px;height:1px;background:var(--line)"></div>
    <div class="abs k-s" id="s1" style="left:60px;right:60px;top:140px;bottom:40px">
      <div class="title" style="font-size:54px">Choose an account</div>
      <div class="sub" style="font-size:22px;margin-top:10px">to continue to <b style="color:var(--ink);font-weight:600">HAUS Platform</b></div>
      <div id="s1-row" style="margin-top:44px;display:flex;align-items:center;gap:20px;height:96px;padding:0 24px;border-radius:16px;border:1px solid var(--line)">
        <div style="width:52px;height:52px;border-radius:50%;background:#6A4C9C;color:#FAF7F2;display:grid;place-items:center;font-weight:600;font-size:22px">H</div>
        <div><div style="font-size:24px;font-weight:600">HAUS Business</div><div style="font-size:19px;color:var(--mute);margin-top:2px">Your business Google account</div></div>
        <div id="s1-ok" style="margin-left:auto;width:34px;height:34px;border-radius:50%;background:var(--plum);display:grid;place-items:center;opacity:0"><div style="width:20px;height:20px">${CHECK()}</div></div></div>
      <div style="margin-top:14px;display:flex;align-items:center;gap:20px;height:84px;padding:0 24px;border-radius:16px;border:1px solid var(--line);color:var(--mute);font-size:21px">
        <div style="width:52px;height:52px;border-radius:50%;border:1.5px dashed rgba(106,76,156,.3);display:grid;place-items:center">${icon("user-round", 24, "x", "rgba(106,76,156,.55)")}</div>Use another account</div>
    </div>
    <div class="abs k-s hid" id="s2" style="left:60px;right:60px;top:140px;bottom:40px">
      <div class="title" style="font-size:46px;white-space:normal;line-height:1.12">HAUS Platform wants to access your Google Account</div>
      <div style="margin-top:40px;border-top:1px solid var(--line)">${perm("See and manage your Google Calendar")}${perm("View and manage your Google Drive files")}${perm("View your Google Analytics and Ads data")}</div>
    </div>
    <div class="abs k-s hid" id="s3" style="left:60px;right:60px;top:140px;bottom:40px">
      <div class="title" style="font-size:46px">Make sure you trust HAUS</div>
      <div class="sub" style="font-size:22px;margin-top:18px;width:640px">You can review or remove this access at any time from your Google Account settings.</div>
      <div style="margin-top:46px;display:flex;align-items:center;gap:22px">
        <div class="tile" style="width:84px;height:84px;border-radius:22px">${GOOGLE}</div>
        <div style="flex:none;width:120px;height:1px;background:rgba(106,76,156,.35);position:relative"><i style="position:absolute;left:50%;top:-4px;width:9px;height:9px;margin-left:-4px;border-radius:50%;background:var(--plum)"></i></div>
        <div class="tile dark" style="width:84px;height:84px;border-radius:22px"><img src="logo-cream.svg"></div>
        <div style="margin-left:14px"><div style="font-size:22px;font-weight:600">HAUS Platform</div><div style="font-size:18px;color:var(--mute);margin-top:4px">will connect to your Google Account</div></div>
      </div>
      <div class="abs" style="right:0;bottom:30px;display:flex;gap:16px">
        <div class="btn" style="width:140px;height:64px;color:var(--plum);font-size:21px">Cancel</div>
        <div class="btn fill" id="s3-allow" style="width:180px;height:64px;font-size:21px">Allow</div></div>
    </div>
    <div class="abs k-s hid" id="s4" style="left:60px;right:60px;top:110px;bottom:40px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
      <div style="position:relative;width:124px;height:124px">
        <i id="s4-ring" style="position:absolute;inset:0;border-radius:50%;border:2px solid #B98DF0;opacity:0"></i>
        <div class="badge" id="s4-b" style="position:absolute;inset:0;width:124px;height:124px"><svg width="62" height="62" viewBox="0 0 24 24" fill="none"><path id="s4-k" d="M5 12.5l4.2 4.2L19 7" stroke="#FAF7F2" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1 1.2" stroke-dashoffset="1.1"/></svg></div>
      </div>
      <div class="title s4-l" style="font-size:52px;margin-top:26px">You're connected</div>
      <div class="sub s4-l" style="font-size:22px;margin-top:10px">Google is now linked to <b style="color:var(--ink);font-weight:600">HAUS Platform</b></div>
    </div>
    <div class="abs" id="k-toast" style="left:50%;bottom:-34px;transform:translateX(-50%);display:flex;align-items:center;gap:12px;padding:16px 28px;border-radius:999px;background:#6A4C9C;color:#FAF7F2;font-size:20px;font-weight:500;white-space:nowrap;opacity:0;box-shadow:0 18px 40px -16px rgba(106,76,156,.55)"><div style="width:22px;height:22px">${CHECK("#B98DF0")}</div>Connected to HAUS Platform</div>
  </div>`,
  js: `
  IN("#k-eye", .15, { y: 10, d: 1.0 }); WORDS("#k-title", .3, { s: .08, d: 1.3 });
  IN(".cs", .9, { y: 12, d: 1.0, s: .12 });
  tl.from("#k-bar", { scaleY: 0, transformOrigin: "50% 0%", duration: .6, ease: "power2.out" }, 1.5);
  RISE("#k-win", .35, { y: 50, d: 1.5 });
  // step focus: active row full ink, others recede
  const rows = document.querySelectorAll(".cs");
  tl.set(rows, { opacity: .32 }, 2.3); tl.set(rows[0], { opacity: 1 }, 2.3);
  const go = (k, t) => { rows.forEach((r, i) => tl.to(r, { opacity: i === k ? 1 : .32, duration: .5 }, t)); tl.to("#k-bar", { y: k * 64, duration: .7, ease: "power3.inOut" }, t); };
  // state 1 · choose account
  tl.to("#s1-row", { backgroundColor: "rgba(185,141,240,.14)", borderColor: "rgba(185,141,240,.8)", duration: .5, ease: "power2.out" }, 2.4);
  tl.to("#s1-ok", { opacity: 1, duration: .4 }, 2.5);
  // state 2 · permissions
  go(1, 3.85);
  tl.to("#s1", { opacity: 0, duration: .5, ease: "power2.inOut" }, 3.8);
  tl.fromTo("#s2", { opacity: 0 }, { opacity: 1, duration: .7, ease: "power2.out", immediateRender: false }, 4.1);
  tl.to(".bx", { opacity: 1, duration: .3, ease: "power1.out", stagger: .4 }, 4.75);
  // state 3 · allow
  go(2, 6.5);
  tl.to("#s2", { opacity: 0, duration: .5, ease: "power2.inOut" }, 6.45);
  tl.fromTo("#s3", { opacity: 0 }, { opacity: 1, duration: .7, ease: "power2.out", immediateRender: false }, 6.75);
  tl.to("#s3-allow", { scale: .965, backgroundColor: "#4E3577", duration: .14, ease: "power2.out" }, 7.55);
  tl.to("#s3-allow", { scale: 1, duration: .3, ease: "power2.out" }, 7.7);
  tl.fromTo("#k-toast", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: .6, ease: "power3.out", immediateRender: false }, 7.95);
  ` + ambient(9.5),
};

// ============================================================= CONNECT 21s (placed 0:51-1:12 under the sign-in narration)
// VO: "click connect… a Google sign-in window will appear" 0.97 · "select the Google account" 4.57 · "review the permissions" 11.63
//     "requested by the integration" 14.23 · "review… and click allow" 16.23 · "authorize the connection" 18.8
scenes.connect21 = {
  ...scenes.connect,
  dur: 21.0,
  sfx: [["tap", 2.3, 0.12], ["click", 6.6, 0.2], ["tap", 9.8, 0.08], ["tap", 10.3, 0.08], ["tap", 10.8, 0.08], ["click", 18.0, 0.22], ["chime", 19.8, 0.1]],
  js: `
  IN("#k-eye", .15, { y: 10, d: 1.0 }); WORDS("#k-title", .3, { s: .08, d: 1.3 });
  IN(".cs", .9, { y: 12, d: 1.0, s: .12 });
  RISE("#k-win", 1.9, { y: 50, d: 1.5 });
  const rows = document.querySelectorAll(".cs");
    rows.forEach((r, i) => tl.to(r, { opacity: i === 0 ? 1 : .32, duration: .5 }, 4.5));
  const go = (k, t) => { rows.forEach((r, i) => tl.to(r, { opacity: i === k ? 1 : .32, duration: .5 }, t));  };
  tl.to("#s1-row", { backgroundColor: "rgba(185,141,240,.14)", borderColor: "rgba(185,141,240,.8)", duration: .5, ease: "power2.out" }, 6.6);
  tl.to("#s1-ok", { opacity: 1, duration: .4 }, 6.7);
  go(1, 8.6);
  tl.to("#s1", { opacity: 0, duration: .25, ease: "power2.in" }, 8.55);
  tl.fromTo("#s2", { opacity: 0 }, { opacity: 1, duration: .45, ease: "power2.out", immediateRender: false }, 8.72);
  tl.to(".bx", { opacity: 1, duration: .3, ease: "power1.out", stagger: .5 }, 9.8);
  go(2, 16.2);
  tl.to("#s2", { opacity: 0, duration: .25, ease: "power2.in" }, 16.15);
  tl.fromTo("#s3", { opacity: 0 }, { opacity: 1, duration: .45, ease: "power2.out", immediateRender: false }, 16.32);
  tl.to("#s3-allow", { scale: .965, backgroundColor: "#4E3577", duration: .14, ease: "power2.out" }, 18.0);
  tl.to("#s3-allow", { scale: 1, duration: .3, ease: "power2.out" }, 18.15);
  tl.to("#s3", { opacity: 0, duration: .25, ease: "power2.in" }, 18.5);
  tl.fromTo("#s4", { opacity: 0 }, { opacity: 1, duration: .45, ease: "power2.out", immediateRender: false }, 18.67);
  tl.from("#s4-b", { scale: .85, opacity: 0, duration: .6, ease: "power3.out" }, 18.7);
  tl.to("#s4-k", { strokeDashoffset: 0, duration: .45, ease: "power2.out" }, 19.35);
  tl.fromTo("#s4-ring", { scale: 1, opacity: .6 }, { scale: 1.6, opacity: 0, duration: 1.1, ease: "power2.out", immediateRender: false }, 19.8);
  LINES(".s4-l", 19.1, .15);
  LINES("#k-win > .abs:not(.k-s):not(#k-toast)", 2.3); LINES("#s1 > *", 2.5, .14); 
  ` + ambient(21.0, { push: 1.02, cursor: cursorJs([[5.0, 1500, 1000], [6.6, 1320, 560, 1], [9.8, 975, 549, 1], [10.3, 975, 621, 1], [10.8, 975, 693, 1], [18.0, 1570, 748, 1]]) }),
};

// ============================================================= VERIFY 6.4s
const vrow = (ic, name, desc, hot) => `<div class="abs${hot ? "" : " v-dim"}" style="left:0;right:0;top:${hot ? 0 : name === "Google Calendar" ? 0 : 224}px;height:112px;display:flex;align-items:center;gap:24px;padding:0 36px;${hot ? "" : "opacity:.42"}">
  <div class="tile" style="width:60px;height:60px;border-radius:16px;flex:none">${ic}</div>
  <div><div style="font-size:26px;font-weight:600">${name}</div><div style="font-size:18px;color:var(--mute);margin-top:4px">${desc}</div></div>
  ${hot ? `<div id="v-pill" style="margin-left:auto;position:relative;width:200px;height:52px;border-radius:26px;border:1px solid rgba(106,76,156,.3);display:grid;place-items:center;font-weight:600;font-size:19px">
    <span id="v-conn" style="display:flex;align-items:center;gap:10px;color:var(--plum)"><svg id="v-spin" width="20" height="20" viewBox="0 0 28 28"><circle cx="14" cy="14" r="11" fill="none" stroke="rgba(106,76,156,.2)" stroke-width="3"/><path d="M14 3a11 11 0 0 1 11 11" fill="none" stroke="#6A4C9C" stroke-width="3" stroke-linecap="round"/></svg>Connecting</span>
    <span id="v-done" style="position:absolute;display:flex;align-items:center;gap:10px;color:#FAF7F2;opacity:0"><span style="width:20px;height:20px;display:block">${CHECK("#FAF7F2", 3)}</span>Connected</span></div>`
    : `<div class="btn out" style="margin-left:auto;width:160px;height:48px;opacity:.8">${name === "Facebook" ? "Connect" : "Manage"}</div>`}
</div>`;
scenes.verify = {
  dur: 6.4,
  sfx: [["click", 2.6, 0.2], ["chime", 2.68, 0.12]],
  body: `
  <div class="abs center eyebrow peach" id="v-eye" style="top:210px">Almost done</div>
  <div class="abs center title" id="v-title" style="top:252px;font-size:108px">${W([["Check your", 0], ["connection", 1]])}</div>
  <div class="abs panel" id="v-list" style="left:510px;top:470px;width:900px;height:132px;overflow:hidden">
    <div style="position:absolute;left:0;right:0;top:10px;height:112px">${vrow(GOOGLE, "Google", "Drive, Sheets, Gmail, Analytics & Ads", true)}</div>
  </div>
  <div class="abs center sub" id="v-cap" style="top:660px">Look for this on your Integrations page</div>`,
  js: `
  IN("#v-eye", .15, { y: 10, d: 1.0 }); WORDS("#v-title", .3, { s: .1, d: 1.3 });
  RISE("#v-list", .55, { y: 40, d: 1.4 });
  gsap.set("#v-spin", { transformOrigin: "50% 50%" });
  tl.to("#v-spin", { rotation: 900, duration: 2.6, ease: "none" }, 0);
  tl.to("#v-conn", { opacity: 0, duration: .35, ease: "power1.inOut" }, 2.6); tl.to("#v-done", { opacity: 1, duration: .45, ease: "power1.inOut" }, 2.65);
  tl.to("#v-pill", { backgroundColor: "#6A4C9C", borderColor: "rgba(106,76,156,0)", boxShadow: "0 12px 26px -12px rgba(80,55,130,.65)", duration: .55, ease: "power2.out" }, 2.6);
  tl.fromTo("#v-pill", { boxShadow: "0 12px 26px -12px rgba(80,55,130,.65), 0 0 0 0px rgba(185,141,240,.55)" }, { boxShadow: "0 12px 26px -12px rgba(80,55,130,.65), 0 0 0 22px rgba(185,141,240,0)", duration: 1.3, ease: "power2.out", immediateRender: false }, 3.15);
  IN("#v-cap", 3.3, { y: 12, d: 1.1 });
  LINES("#v-list .abs > *", .95, .1);
  ` + ambient(6.4, { push: 1.015 }),
};

// ============================================================= NEXT 5s  (VO: "calendar synchronization and scheduling settings in a separate tutorial")
scenes.next = {
  dur: 5.0,
  sfx: [["tap", 0.35, 0.14], ["tap", 0.75, 0.1]],
  body: `
  <div class="abs" id="n-cal" style="left:0;right:0;top:220px;display:flex;justify-content:center;align-items:center;gap:28px">
    <div class="tile" style="width:150px;height:150px;border-radius:38px">${GLOGO.gmail.replace('width="38" height="29"', 'width="78" height="60"')}</div>
    <div style="width:70px;height:1px;background:rgba(106,76,156,.35);position:relative"><i style="position:absolute;left:50%;top:-4px;width:9px;height:9px;margin-left:-4px;border-radius:50%;background:var(--plum)"></i></div>
    <div class="tile" style="width:150px;height:150px;border-radius:38px"><svg viewBox="0 0 48 48" width="74" height="74"><rect x="18" y="8" width="26" height="32" rx="3" fill="#28A8EA"/><path d="M18 22l13 8 13-8v15a3 3 0 0 1-3 3H21a3 3 0 0 1-3-3z" fill="#0F6CBD"/><rect x="4" y="13" width="24" height="22" rx="3" fill="#0F6CBD"/><ellipse cx="16" cy="24" rx="5.5" ry="6.5" fill="none" stroke="#FAF7F2" stroke-width="3"/></svg></div>
  </div>
  <div class="abs center eyebrow peach" id="n-eye" style="top:500px">Coming next · Tutorial 02</div>
  <div class="abs center title" id="n-title" style="top:544px;font-size:120px">${W([["Connect your", 0], ["Email", 1]])}</div>
  <div class="abs center sub" id="n-sub" style="top:710px">Connect your Gmail or Outlook email to HAUS Platform</div>`,
  js: `
  LINES("#n-cal > *", .3, .18);
  IN("#n-eye", .55, { y: 10, d: 1.0 }); WORDS("#n-title", .75, { s: .12, d: 1.3 }); IN("#n-sub", 1.5, { y: 12, d: 1.1 });
  ` + ambient(5.0),
};

// ============================================================= OUTRO 15s (14.8 used)  (VO: "and that's it" 1.5 · "successfully connected" 2.4-5.7 · "any issues" 5.8 · "reach out to the HAUS support team" 8.4-10.7 · "see you in the next tutorial" 10.7-13.1)
scenes.outro = {
  dur: 15.0,
  sfx: [["chime", 1.25, 0.12], ["tap", 6.05, 0.1], ["tap", 10.75, 0.12]],
  body: `
  <div class="beat" id="oa">
    <div class="abs center badge" id="o-mark" style="top:200px;width:120px;height:120px"><svg width="60" height="60" viewBox="0 0 24 24" fill="none"><path id="o-k" d="M5 12.5l4.2 4.2L19 7" stroke="#FAF7F2" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" pathLength="1" stroke-dasharray="1 1.2" stroke-dashoffset="1.1"/></svg></div>
    <div class="abs center eyebrow" id="o-eye" style="top:380px">Tutorial 01 · Complete</div>
    <div class="abs center title" id="o-title" style="top:424px;font-size:100px">${W([["Google Account Integration", 0], ["Complete", 1]])}</div>
    <div class="abs rule" id="o-rule" style="left:900px;top:576px;width:120px"></div>
    <div class="abs center" id="o-sup" style="top:616px;display:flex;align-items:center;gap:14px;padding:18px 32px;border-radius:999px;background:#FFFDF9;border:1px solid var(--line);box-shadow:0 14px 30px -18px rgba(106,76,156,.3);font-size:22px;font-weight:500;color:var(--plum)">${icon("message-circle", 24, "x", "#6A4C9C")}Questions? Reach out to the HAUS Support Team</div>
  </div>
  <div class="beat hid" id="ob">
    <div class="abs center" id="o-logo" style="top:350px"><img src="logo-deep.svg" style="width:210px;display:block"></div>
    <div class="abs center eyebrow peach" id="o-neye" style="top:470px">Up next · Gmail &amp; Outlook</div>
    <div class="abs center title" id="o-next" style="top:514px;font-size:104px">${W([["See you in the", 0], ["next tutorial", 1]])}</div>
  </div>`,
  js: `
  tl.from("#o-mark", { opacity: 0, scale: .85, duration: .8, ease: "power3.out" }, .25);
  tl.to("#o-k", { strokeDashoffset: 0, duration: .5, ease: "power2.out" }, .85);
  IN("#o-eye", .9, { y: 10, d: 1.0 }); WORDS("#o-title", 2.3, { s: .08, d: 1.4 });
  tl.from("#o-rule", { scaleX: 0, duration: 1.1, ease: "power3.inOut" }, 3.4);
  IN("#o-sup", 6.0, { y: 14, d: 1.2 });
  OUT("#oa", 10.2, .8);
  SHOW("#ob", 10.6);
  IN("#o-logo", 10.65, { y: 14, d: 1.4 }); IN("#o-neye", 11.0, { y: 10, d: 1.0 }); WORDS("#o-next", 11.2, { s: .09, d: 1.4 });
  ` + ambient(15.0, { end: 0.9, push: 1.02 }),
};

export default scenes;
