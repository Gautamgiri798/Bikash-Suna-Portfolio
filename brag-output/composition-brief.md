# Hyperframes Composition Brief: Bikash Suna Portfolio & Media Kit

## Objective
Create a premium 30-second promotional showcase video for the Bikash Suna portfolio website, highlighting the actual website UI, the live multi-track NLE timeline, the dual service pillars, the creator media kit metrics, and the interactive project pricing calculator.

## Output
- Composition directory: `brag-output/composition/`
- Rendered video: `brag-output/brag.mp4`
- Format: landscape — 1920x1080 @ 30fps
- Duration: 30.0 seconds

## Source Material
- Project root: `e:/New Projects/Portfolio/Bikash Suna`
- Primary files read: `index.html`, `src/App.jsx`, `src/index.css`, `src/components/Hero.jsx`, `src/components/DualPillars.jsx`, `src/components/CreatorMediaKit.jsx`, `src/components/Calculator.jsx`, `src/data/projects.js`
- Product name: Bikash Suna Portfolio & Creator Platform
- Tagline / strongest claim: "Two Passions. One Powerful Creator. | Scripted, 4K Mastered & Published by the Same Creator"
- Key UI moments to recreate:
  - Studio NLE master timeline deck (`BIKASH_MASTER_CUT_4K.prproj`, V1/V2/A1 tracks, speed ramps, 3D LUT, audio waveforms)
  - Dual superpower pillars (Video Editor vs Content Creator)
  - Verified creator media kit analytics (50K+ Reach, 15K–45K Views, 8.4% Engagement, Gen-Z demographics)
  - Interactive project estimate calculator with format select, express delivery toggle, SFX addon, and live price recalculation
- Copy that must appear verbatim:
  - "I am a Cinematic Video Editor & Content Creator"
  - "Two Passions. One Powerful Creator."
  - "50K+ Monthly Impressions | +32% MoM"
  - "8.4% Engagement Rate | 3.2x Average"
  - "Project Estimate Calculator | Short Reel Edit | Long Video Album | Brand Collab"

## Creative Direction
- Tone preset: cinematic
- Creative direction: High-tech Apple-meets-Hollywood production trailer — sleek dark theme, glowing cyan/purple lasers, glassmorphism UI, responsive 3D camera pan & zoom, ultra-crisp motion.
- Interpretation: Fast, precise, and visually breathtaking; camera movements feel intentional and dynamic; every scene showcases actual site assets and functionality.
- Angle: Showcase the complete portfolio ecosystem — from high-end post-production craftsmanship to verified influencer marketing power.
- Hook: A dramatic 3D HUD aperture reveal with camera viewfinder framing and glowing neon status pill.
- Outro / punchline: Premium branded signoff with 4K badge, 48h turnaround guarantee, and direct WhatsApp concierge booking.
- Avoid:
  - Generic SaaS language
  - Abstract 3D filler shapes unrelated to the website
  - Off-brand colors or ungrounded claims

## Visual Identity
- Background: `#08090d` with `#0b0d14` and `#0e111a` dark glassmorphic surfaces
- Neon Accents: Cyan (`#06b6d4`, `#38bdf8`), Purple (`#a855f7`, `#c084fc`), Emerald (`#10b981`), Gold (`#f59e0b`)
- Text: `#f8fafc` (primary heading), `#94a3b8` (body/details)
- Display font: Plus Jakarta Sans / Outfit
- Body font: Inter / Plus Jakarta Sans
- Visual references from the project:
  - `assets/images/hero.jpg` (Studio workstation)
  - `assets/images/profile.jpg` (Profile portrait)
  - `assets/images/reel.jpg`, `assets/images/album.jpg`, `assets/images/babu-zaraa-bachke.jpg`
  - NLE timeline track lanes, waveform SVGs, razor cut icons, glowing playhead

## Storyboard Summary
1. **Scene 1: Introduction & Brand Hook (0.0s – 4.5s)** — 3D HUD particle backdrop, viewfinder corners, status badge, bold title reveal.
2. **Scene 2: Homepage & Studio NLE Timeline (4.5s – 9.5s)** — Studio imagery alongside multi-track NLE editor deck with live playhead sweep.
3. **Scene 3: Dual Superpowers (9.5s – 14.5s)** — Split-card showdown: The Video Editor (purple) vs The Content Creator (cyan).
4. **Scene 4: Creator Media Kit Metrics (14.5s – 19.5s)** — 4 verified metric cards with live count-ups and animated sparklines.
5. **Scene 5: Interactive Pricing Calculator (19.5s – 25.0s)** — Simulated UI interaction toggling format and add-ons with dynamic price calculation.
6. **Scene 6: Final Brand Reveal & Booking CTA (25.0s – 30.0s)** — High-impact closing lockup with contact info and smooth music fade.

## Audio
- Audio role: Driving cinematic electronic bed with crisp, motion-matched UI accents.
- Audio arc: Energetic buildup, rhythmic groove through the core features, punchy accents on calculator toggles, triumphant final chord with gentle fade.
- Music: `assets/music/track.mp3` (109.96 BPM, start 0.0s, fade out from 28.0s to 30.0s).
- SFX:
  - `assets/sfx/impact1.ogg` at 1.2s (Hook lockup)
  - `assets/sfx/impact2.ogg` at 4.5s (Timeline arrival)
  - `assets/sfx/slide.ogg` at 10.0s (Pillars entrance)
  - `assets/sfx/bell.ogg` at 15.2s (Media kit metrics)
  - `assets/sfx/click.ogg` at 20.5s, 21.3s, 22.2s (Calculator interactions)
  - `assets/sfx/bell.ogg` at 25.4s (Final brand resolve)

## Hyperframes Instructions
- Composition root must have `data-composition-id="main"`, `data-width="1920"`, `data-height="1080"`, `data-start="0"`, `data-duration="30"`.
- Each scene is a `<section class="clip" data-start="..." data-duration="...">`.
- Timeline registered cleanly on `window.__timelines["main"] = gsap.timeline({ paused: true });`.
- All CSS self-contained in `index.html` and Google Fonts linked in `<head>`.
- Audio elements properly configured with `data-start`, `data-duration`, `data-volume`.
- Text is crisp, readable, WCAG compliant, with no overflow.
- Pass `npx hyperframes check` before rendering.
