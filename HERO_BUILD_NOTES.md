# wowdesign.io — 3D Hero Build Notes (resume point)

_Last updated: 2026-07-14. Live prototype: `/hero-lab` (noindex) on `wowdesign-io.vercel.app`._

## Where things stand (2026-07-02)

The 3D hero is a **full homepage integration**, not a standalone. Going live = a **1-line swap**.

- **Model = `adriana.glb`** (€3 Fab modern glass tower — teal balconies, podium + pool, palm). Scaled to `TARGET_H=14`, centered on origin. (`woolderpark`/`sanzio`/others still selectable via `?model=` but adriana is the chosen one.)
- **Integration:** `src/app/page.tsx` `HomePage` takes a `heroVisual` prop. Live `/` renders the old isometric hero (prop undefined). `/hero-lab` renders `<HomePage heroVisual={<Hero3D />} />` — the whole homepage with the 3D swapped into the hero. **Every hero/nav change is gated behind `heroVisual`, so the live site is untouched.**
- **Migration stays PRISTINE.** `src/app/wowdesign-miami.css` (the Webflow export) is NOT edited. **ALL new-hero CSS lives in `src/app/globals.css`** (after the `@import`s), overriding by cascade/specificity. Keep it this way.

## File map

- `src/app/page.tsx` — homepage. Nav (~L21, `.navbar--hero-glass` when heroVisual), hero `<section>` (~L68), 3D wrapper + brand-glow overlay (~L72–76), hero card (`banner-typography solving-card hero-card`), proof strip, solving section marker class (`hero3d-topgap`).
- `src/app/globals.css` — **all new-hero CSS**: tokens (`--surface-90`), `.navbar--hero-glass`, `.section_comparison13` fix, `.hero-card` + gradient headline + subhead + `.hero-proof`, responsive size tiers, solving top-pad.
- `src/components/hero3d/Hero3D.tsx` — full-page loader **portaled to `<body>`** (brand glow + REAL progress bar via drei `useProgress`, solid-blue bar) + mounts `TowerScene`. `flight-done` body class set after `FLIGHT_MS` (7200) reveals the hero card.
- `src/components/hero3d/TowerScene.tsx` — the R3F `<Canvas>`: `Building` (adriana, glass material swap), `Ground` (grass 600×600), `CityBackdrop` (windowed skyline, merged geo), `CityGround` (street-grid plane), `Palms` (raycast-grounded), `Clouds`, `Environment` (HDRI), `CameraRig`, lights, `EffectComposer` (N8AO + Bloom).

## Camera flight (adriana) — DON'T let anything cross it

`CameraRig`: ONE turn, `DUR=7.5`. **radius 22→24, height 5→9.5**, `endAngle=3.75`. Looks at tower, pans it to screen-RIGHT at the settle (left clear for hero copy). So **anything past ~r30 is safely clear of the camera**. Debug: `?t=<sec>` freeze, `?ang=&rad=&h=&ly=` static pose, `?hdri=partly|clear|autumn|noon`.

## Done today (2026-07-02) — hero polish

- Fixed `section_comparison13` sky-container glow escaping onto the hero (missing `position:relative`).
- Hero got its own `sky-container` glow.
- **Nav** = dark glassmorphism (`--surface-90`, `!important` beats the Webflow IX2 scroll interaction that clobbers nav bg).
- **Hero card** = `.solving-card` look on dark `--surface-90` (matches nav). **Gradient-clipped headline** (white→grey, like every `.section-title`), **one line** (`nowrap`, 4.4rem) — the two-line wrap read squeezed. Corner brackets + the `banner-content` side border-lines + its 195px top-pad removed.
- **Loader** → portaled to `<body>` (real full-page), brand glow + real progress bar.
- **Proof strip** (`31% faster · 49% more leads · 3× engagement`, numbers in brand blue) — "epic" per Andy.
- **Brand glow** amplified (blue→purple→pink radial behind the panel).
- **Hero card size tiers:** ≥2560px (27") bigger, 1440/1920 = base ("perfect"), ≤1366 a touch smaller. **Full mobile responsiveness still TODO.**
- Features (solving) section: top-pad matching bottom, scoped to the 3D hero (`.hero3d-topgap`).
- **CityBackdrop:** ONE instanced draw call, ~92 buildings × 1–3 **tiered setback** boxes, ringed r50–200 (beyond flight), fades into fog. Deterministic (mulberry32 seed).

## Done (2026-07-14) — full city with streets ✅

Goal met: buildings read as **windowed towers on a city-block grid with streets**, not cubes on a random ring. All in `TowerScene.tsx`.

- **`CityBackdrop` — merged-geometry windowed city (1 draw call).** Import verified: `mergeGeometries` from `three/examples/jsm/utils/BufferGeometryUtils.js` (three 0.185). Each building tier = a `BoxGeometry` at true world size; `setFacadeUVs()` rewrites per-face UVs so the facade texture tiles at a **consistent real-world window scale** on the 4 SIDE faces (repeat = worldSpan / `TILE_M`, rounded for clean edges) and pins TOP+BOTTOM faces to the concrete corner texel → **flat concrete roofs, never windows.** All tiers `mergeGeometries`-merged into ONE `THREE.Mesh`.
  - **`makeFacadeTexture()`** — 512² `CanvasTexture`: neutral-grey concrete + a 4×4 grid of dark reflective-glass windows (per-window tone jitter + faint bluish sky-reflection gradient). **Greyscale on purpose** — the hazy blue-grey tint + per-building brightness come from **vertex colours** (`baseTint #8ea1bd × shade × hue-jitter`), so one texture serves every building. Daytime → **no emissive glow** (dark glass).
- **`CityGround` — procedural street plane (1 draw call).** `makeStreetTexture()` = 1024² transparent `CanvasTexture`: asphalt grid + darker "city block" tone under each block + dashed lane centre-lines down every street. A **transparent grass HOLE** (radius `CITY_HOLE_R`) is punched at the centre and the outer edge fades to transparent, so the tower keeps its landscaped grass block and the plane melts into the distant grass/fog. Sits at `y=+0.04` with `polygonOffset` above the grass; no shadows.
- **Grid layout.** Shared constants (`CITY_PITCH 40`, `CITY_BLOCK 26`, `CITY_HALF 5`, `CITY_MAX_R 210`, `CITY_CLEAR_R 36`, `CITY_HOLE_R 46`, `CITY_GROUND 440`, `TILE_M 6.8`) drive both components so blocks and streets line up. Grid `gx,gz ∈ [-5..5]`; centre block skipped; each block subdivides into a 1-2 × 1-2 lattice of building plots (irregular clusters, occasional gaps). **Hard clearance enforced per building** via `nearDist()` — any footprint whose nearest point is < `CITY_CLEAR_R` (36) is dropped, so nothing ever enters the drone flight (r22-24). Setback tiers kept (base widest). Deterministic (`mulberry32(20260703)`).
- **Perf:** net **+1 draw call** (removed the old InstancedMesh = 1; added merged city + street plane = 2). No shadow casting/receiving on either (all beyond the ±28 shadow frustum). No asset loads — procedural canvases + generated geometry only.
- **To tune:** density → `nx/nz` plot logic + the `rand()<0.16` gap skip; extent → `CITY_HALF` / `CITY_MAX_R`; window scale → `TILE_M` (smaller = more/smaller windows) and the `N=4` grid in `makeFacadeTexture`; clearing size → `CITY_CLEAR_R` (buildings) + `CITY_HOLE_R` (grass hole, keep > CLEAR_R); street contrast/lane lines → colours in `makeStreetTexture`.
- **Verified** on real-GPU ANGLE (`--use-angle=d3d11`) Playwright shots at `?t=7.5`, `?t=2`, and high static poses: windowed towers, visible street grid + lane lines, clean central grass clearing, fade into fog.

## TOMORROW — full mobile responsiveness

**Full mobile responsiveness** of the hero (hero card size tiers exist for ≥2560 / 1440-1920 / ≤1366 desktop; mobile still TODO). Deferred perf: shrink HDRI (`/hdri/sky-autumn.hdr` is the default, still large), lazy-load canvas.

## Assets (`public/`)
- `models/adriana.glb` (3.1MB) — CHOSEN. `adriana_residences_ORIGINAL_DONT_DELETE_OR_EDIT.glb` kept untouched (gitignored). Others (`sanzio`, `woolderpark`, `miami`, `pivotal`, `residential`) still `?model=`-selectable.
- `hdri/sky-autumn.hdr` (default), `sky.hdr`, `sky-clear.hdr` — A/B via `?hdri=`.
- `models/palm_trees.glb` (340KB) — pool palms. `palm_tree_pack_lowpoly.glb` (34MB) is gitignored source.

## Hard rules (keep)
- Git account: **`wowdesign-andy` / andy@wowdesign.io** — verify before every push.
- Migration CSS pristine — new CSS in `globals.css` only.
- Brand: **gradient = background lighting ONLY**, never on UI (bars/buttons/text use solid `#2E77FA`). Outfit 500 headings, hard edges (radius 0).
- Judge glass/lighting on the **live Vercel deploy** (SwiftShader/local can't show reflections). Workflow: edit → `npx tsc --noEmit` → commit → push → check `wowdesign-io.vercel.app/hero-lab`.
- Buildings/props must stay **beyond ~r30** (never cross the drone flight) and cheap (instancing / merged geo / procedural textures — no heavy asset loads).
