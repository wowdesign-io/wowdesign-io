# wowdesign.io — 3D Hero Build Notes (resume point)

_Last updated: 2026-06-30. Live prototype: `/hero-lab` (noindex) on `wowdesign-io.vercel.app`, deployed commit **150ac5f**._

## Status — what's APPROVED vs OPEN

**Andy approved (2026-06-30):**
- The drone **animation** — "awesome and sick".
- The **final landing angle** (close, craned up, top of tower against sky) — "DOPE".
- The **HDRI sky** — "SICK".

**OPEN ISSUE — fix next:** the **surroundings / ground** during the fly-in look empty and odd — the tower floats on a big empty reflective plane with scattered grey box-buildings (see Andy's first screenshot). Need a believable city (streets + neighbours). The final top-third angle hides the ground, so this only matters during the establishing/fly-in part of the flight.

**Decision:** do NOT need a model-with-surroundings (same sourcing pain as the building). Build the city **procedurally** — fully controllable.

## Architecture (files in `wowdesign-io`)

- `src/app/hero-lab/page.tsx` — route (noindex), renders `HeroLabClient`.
- `src/app/hero-lab/HeroLabClient.tsx` — DOM overlay over the canvas:
  - **Loading screen** (logo + spinner) shown until model+sky load, then fades.
  - Fixed **brand nav** (logo / menu / Book A Demo).
  - **Left-offset hero intro** (Presales System pill, H1 "Sell Out Faster.", subhead, two ghost buttons) that **fades in as the drone settles** (`animation: heroIn ... 6.2s` once `ready`).
  - Holds `ready` state, set via `onReady` from `TowerScene`.
- `src/components/hero3d/TowerScene.tsx` — the R3F `<Canvas>` + scene:
  - **`Building`** — `useGLTF` loads the GLB (default `/models/miami_style_condominium.glb`), auto-centers + scales to `TARGET_H=14`, base on ground. Switch model via `?model=pivotal`. Calls `onReady()` (useEffect) when loaded.
  - **`City`** — procedural neighbour buildings. **Currently a scattered ring** (radius 50+, light matte hazed boxes). **← THIS is what to upgrade** into a city grid + streets.
  - **`Ground`** — `MeshReflectorMaterial` plane (the "empty mirror"). **← REPLACE** with textured asphalt + streets.
  - **`CameraRig`** — auto-play drone **orbit**, gated on load (clock starts on its first frame inside `<Suspense>`, so only after model+HDRI are loaded — no more flying through an empty scene). `DUR=8s`, ~245° sweep. Starts high/far (radius 44, height 22, lookAt y9) → ends **close+low** (radius 12, height 5) looking **up** (lookAt y9→12, x0→-3) = top of tower vs sky, no ground. Post-settle: gentle `sin` sway/bob holds the framing (no drift-away).
  - **`Environment`** — HDRI sky `/hdri/sky.hdr` as background + IBL. fog `#c4cedd 55–155`, warm directional key + blue point light, subtle `Bloom`.

## Assets (in `public/`)
- `models/miami_style_condominium.glb` (1.7MB) — **CHOSEN** building (realistic Miami condo: balconies, glass, pool deck).
- `models/pivotal_point.glb` (2.7MB) — alternate, via `?model=pivotal`.
- `hdri/sky.hdr` (5.4MB) — Poly Haven `kloofendal_48d_partly_cloudy_puresky` 2k. Sky background. Andy loves it.
- `textures/ground_diff.jpg`, `ground_nor.jpg`, `ground_rough.jpg` — Poly Haven `asphalt_02` 2k. **DOWNLOADED for the new ground, NOT yet wired in.** (Untracked/uncommitted.)

## NEXT TASK — better surroundings (the plan)
Goal: during fly-in/establishing, the tower sits in a believable city (streets + neighbours), not floating on a mirror. Keep the dope final angle.
1. **Ground:** replace `MeshReflectorMaterial` with a **textured matte ground** using the downloaded asphalt texture (`useTexture` ground_diff/nor/rough, `RepeatWrapping`, repeat ~30–40). Optional *very* subtle reflection for a wet-street premium look (or none). Kills the empty-mirror void.
2. **City grid + streets:** arrange neighbour buildings on a **grid (city blocks)** with street-gaps between rows — denser + closer so the hero tower is *in* a city. e.g. cell ~14u, buildings ~8–10u wide → ~4–6u streets. Skip the centre cell (hero), vary heights, skip some cells for variety, ~40+ buildings. The gaps read as streets. Optionally add darker **road strips / lane markings** on the ground for explicit streets.
3. Keep fog for distance haze; keep the camera.
4. Re-screenshot establishing + fly-in frames — should read as a real city, not floating boxes.
- Stretch: sidewalks (slightly raised block platforms), streetlights/trees for life. Optional **dusk HDRI** swap for Laguna moodiness — but sky is already approved, so confirm with Andy before changing.

## Other refinements Andy flagged
- Polish the **nav + hero section** styling at the final angle ("great start", needs refinement).
- Maybe push framing to **strictly top-third** (currently ~upper half) — tune `CameraRig` end radius/height/lookAt.
- Remove the **faint hazed building** peeking bottom-left behind the text.

## Performance (deferred — do before wiring into the real homepage)
`/hero-lab` is heavy: GLB + 2k textures + 5.4MB HDRI. Before homepage integration: Draco/meshopt the GLB, KTX2/Basis the textures, shrink HDRI to 1k/compressed, lazy-load the canvas. The hero is a drop-in `<Canvas>` component; it replaces just the homepage hero section.

## How to resume / run locally
- `node_modules` is healthy (clean reinstall 2026-06-30 after the VS-Code-file-lock saga).
- **Lessons:** (1) NEVER start a dev server while `npm install` runs — it locks `node_modules` and corrupts the install. (2) VS Code's TS server can lock `node_modules`; do a VS Code "Reload Window" before reinstalling. (3) `turbopack.root` is pinned in `next.config.ts` to stop workspace-root misinference.
- Run: `npx next dev -p 3301` in `wowdesign-io`, open `/hero-lab`. Screenshot headless via the carousel skill's Playwright with `--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader` flags (the convert/shot scripts are in the session scratchpad).
- **Working tree at resume:** deployed = `150ac5f`; uncommitted = `public/textures/ground_*.jpg` (asphalt, ready to wire into the new `Ground`) + this notes file.
- **DO NOT push without Andy** (he said no push while away).
