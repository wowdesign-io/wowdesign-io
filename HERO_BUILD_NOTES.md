# wowdesign.io — 3D Hero Build Notes (resume point)

_Last updated: 2026-06-30. Live prototype: `/hero-lab` (noindex) on `wowdesign-io.vercel.app`._

## Status — what's done vs open

**Done (2026-06-30):**
- Real building + site model in a load-gated cinematic drone flight, mobile-safe size.
- **CHOSEN model = woolderpark** — a boutique **lakefront** mid-rise (4 storeys) with a **warm detailed brick façade + glass balconies**, sitting on grass with a **lake** wrapping the site. Andy switched from sanzio → woolderpark because the brick (vs sanzio's grey concrete) is more detailed and the waterfront makes a far better drone shot.
- **Lakefront flight:** low + far out **over the water** (establish) → rising 3/4 arc → settle on an **elevated 3/4 "glory shot"** framing the whole building + glass balconies + the lake, text on the left.
- **Final frame is NOT "top-third + sky."** That landing was right for the tall tower; a low/wide lakefront building's hero is the full-building 3/4 with water. (The top-third+sky landing lives in git history if we ever go back to a tower.)
- Procedural City + Ground **removed** — the GLB models carry their own surroundings. The old "build a procedural city/streets" task is **obsolete**.

**Open / optional:**
- **SwiftShader caveat:** headless screenshots render the glass balconies as see-through wireframe and wash out materials. On real GPU hardware (Andy's browser / Vercel) the glass is solid + reflective and the brick reads warmer. Judge the live deploy, not the stills.
- **HDRI still 5.4MB** (`/hdri/sky.hdr`). Shrink to 1k + compress before homepage integration.
- Optional: warmer/golden key light for more mood; nav/hero-text polish; lazy-load the `<Canvas>` for the homepage.

## THE size win — glTF optimization (reusable for any model)

Raw exports were huge (woolderpark 14.4MB, sanzio 11.7MB — "HUGE for mobile"). One command fixes it:

```
npx gltf-transform optimize <in>.glb <out>.glb --compress draco --texture-compress webp --texture-size 1024
```
- **Draco** geometry compression (the bulk of the savings) + **WebP** textures resized to 1024.
- Result: **woolderpark 14.4MB → 766KB**, **sanzio 11.7MB → 1.08MB** (~90–95% smaller).
- Loads everywhere: drei's `useGLTF` applies the **Draco decoder by default** (gstatic CDN); three.js GLTFLoader handles WebP via `EXT_texture_webp`. No extra loader setup.
- `@gltf-transform/cli` is NOT a project dependency — run via `npx` as one-off asset prep (keeps Vercel installs lean). Keep only the optimized `.glb`; delete the raw 10MB+ source.

## Architecture (files in `wowdesign-io`)

- `src/app/hero-lab/page.tsx` — route (noindex), renders `HeroLabClient`.
- `src/app/hero-lab/HeroLabClient.tsx` — DOM overlay: loading screen (gates the flight until model+sky load via `onReady`), fixed brand nav, left-offset hero intro (H1 "Sell Out Faster.") that fades in at `6.2s` once `ready`.
- `src/components/hero3d/TowerScene.tsx` — the R3F `<Canvas>` + scene:
  - **`MODELS`** map + `?model=` switch: `woolderpark` (default), `sanzio`, `miami`, `pivotal`.
  - **`Building`** — `useGLTF`, clones, auto-centers + scales to `TARGET_H=14`, base on ground, shadows, `onReady()` on load. Preloads woolderpark.
  - **`CameraRig`** — auto-play drone flight; clock starts on its first frame **inside `<Suspense>`** (only after model+HDRI load). `DUR=6`, `easeOut`. **woolderpark values:** `endAngle=3.3` (3/4 on the balcony/lake façade), `startAngle=endAngle+2.2` (~126° glide). `radius 58→40`, `height 3→9` (low over water → elevated), `lookAt (0→-3, 6→6.2, 0)`. Post-settle `sin` sway/bob.
  - **Debug camera (for tuning):** `?t=<sec>` freezes the flight at a time; `?ang=<rad>&rad=<n>&h=<n>&ly=<n>` sets a **static free-orbit pose** to inspect the model / find the best angle.
  - **`Environment`** HDRI sky `/hdri/sky.hdr` (bg + IBL), `fog #c4cedd 70–240`, subtle `Bloom`. Canvas camera matches flight start (`ang 5.5, rad 58, h 3`, `fov 32`).

## Assets (in `public/`)
- `models/woolderpark.glb` (766KB) — **CHOSEN** lakefront brick mid-rise + glass balconies + lake/grass site.
- `models/sanzio.glb` (1.08MB) — grey-concrete mid-rise w/ parking/street alt (`?model=sanzio`).
- `models/miami_style_condominium.glb` / `pivotal_point.glb` — older tower alts.
- `hdri/sky.hdr` (5.4MB) — Poly Haven `kloofendal_48d_partly_cloudy_puresky` 2k. Approved. **Shrink before homepage.**

## How to resume / run locally
- `npx next dev -p 3301` in `wowdesign-io`, open `/hero-lab`.
- **Screenshot headless** via the carousel skill's Playwright with GL flags
  (`--use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader --ignore-gpu-blocklist`).
  `shot.js` (session scratchpad): `VW=860 VH=540 node shot.js "?t=6" out 6000`.
  **Gotchas:** (a) `page.screenshot` needs `timeout: 60000` + `animations:'disabled'`, `goto` `waitUntil:'load'` (the live canvas never goes idle). (b) **woolderpark hangs the capture at 1440px** under SwiftShader — drop the viewport (`VW=860 VH=540` or smaller) and it captures; sanzio is fine at full size.
- **Lessons:** never start a dev server while `npm install`/`gltf-transform` runs (locks `node_modules`); `turbopack.root` pinned in `next.config.ts`; git account is always `wowdesign-andy` / `andy@wowdesign.io`.

## Next steps (in order)
1. Andy watches the live woolderpark flight → decide lighting warmth / final-frame tweaks.
2. Shrink HDRI to 1k + compress; lazy-load the canvas.
3. Nav/hero-text polish at the final angle.
4. Wire `<TowerScene>` into the real homepage (drop-in replacement for the hero section).

## Candidate PAID models (Fab) — fallback if no good free model
Andy's picks (2026-07-01) if free models keep missing the warm/luxury+balconies bar:
- https://www.fab.com/listings/4e2fc147-bbb5-4a48-a8f7-3894b323b1ba
- https://www.fab.com/listings/687e786f-2fdf-42bf-b6fd-9addba48f7af  (~€25)

**BUYING RULE:** Fab is Epic's marketplace — MANY assets are Unreal-Engine-only (`.uasset`),
which three.js CANNOT load. Before buying, confirm the listing ships **FBX / OBJ / glTF / GLB**
(check "Supported Formats / Technical Details"). If UE-only, skip it. (Fab listings 403 to
automated fetch, so the format must be eyeballed on the page.)

## Free model verdict log
- `residential.glb` (simple_residential_building, 4.9MB→290KB): cold grey concrete block,
  one wing has glass balconies but overall plain/generic + visible floor (grass/road/parking).
  Does NOT clear the warm/luxury bar. Available via `?model=residential` but NOT shipped.

## TOP candidate (Andy, 2026-07-01) — €3 glass tower — BUY
- https://www.fab.com/listings/dcadeef6-260c-468f-bd2c-c05583d33319  (~€3)
- Modern residential glass tower: teal glass balconies, white frames, podium base
  w/ palm trees + pool deck. Premium/warm look + balconies = exactly the brief.
  Tall-tower shape → ideal for the top-third+sky (floor-hidden) landing.
- BEFORE BUY: confirm Supported Formats includes FBX / OBJ / glTF / GLB (not UE-only).
  At €3 it's low-risk even if conversion is fiddly. Drop the download in public/models/.

## HARD LESSONS (2026-07-01)
- **NEVER run `gltf-transform optimize` blindly.** Its `simplify` (geometry decimation)
  + `palette` (material merge) DESTROYED the adriana windows/balconies and flattened the
  glass. For these archviz models use Draco-only (lossless) when compacting:
  `gltf-transform draco in.glb out.glb`. Compact ONLY after the look is approved.
- **NEVER delete the source model.** Keep `*_original.glb` untouched; only ever process a copy.
- **Model glass is usually flat OPAQUE** (adriana glass = material color, no textures). To look
  real it must be REPLACED with a reflective MeshPhysicalMaterial (low roughness + clearcoat +
  envMapIntensity) that mirrors the HDRI. The offline Fab render ≠ what the raw GLB looks like.
- **SwiftShader screenshots cannot show glass reflections** — glass realism is a live-GPU
  judgment only. Tune glass via deploy + Andy's eyes, not screenshots.

## UNLOCK (2026-07-01) — I can now SEE the real render
- **Headless real-GPU screenshots:** launch Chrome with `--use-angle=d3d11` (NOT
  `--use-gl=swiftshader`). On this machine WebGL then runs on the Intel Arc GPU and
  renders reflections/glass for real. Script: `scratchpad/shot-gpu.js`. SwiftShader
  draws glass FLAT (no env reflections) — that's why glass tuning was impossible before.
  Verify renderer via `WEBGL_debug_renderer_info` (logs "ANGLE (Intel ... D3D11)").
- **adriana glass = the `Condominio_Aragon` material** (363 instances), NOT "glass" or
  "FrontColor". Replaced with a reflective MeshPhysicalMaterial (color #6f8a9b, rough
  0.04, clearcoat 1, opacity 0.88, envMapIntensity 1.6) → windows mirror the sky.
  Detect glass by tag.includes('condominio') || 'glass'. Frames/slabs stay solid.
- **Debugging materials:** force ALL meshes to chrome (`if (true) m.material = glass`)
  to confirm env reflections work, then bisect by material name to find the glass.
