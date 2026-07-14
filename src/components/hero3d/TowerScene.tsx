'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF, useTexture, Clouds, Cloud } from '@react-three/drei'
import { EffectComposer, Bloom, N8AO } from '@react-three/postprocessing'
import { Suspense, useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'

// accelerate into the move, streak through the middle, decelerate to settle
const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

// reused each frame to pan the look target along the camera's right axis (no per-frame allocs)
const _cam = new THREE.Vector3()
const _dir = new THREE.Vector3()
const _right = new THREE.Vector3()
const _UP = new THREE.Vector3(0, 1, 0)

const MODELS: Record<string, string> = {
  adriana: '/models/adriana.glb', // €3 modern glass tower — teal balconies, podium base
  residential: '/models/residential.glb', // simple residential building
  sanzio: '/models/sanzio.glb', // boutique mid-rise w/ parking + street + entrance (incl. site)
  woolderpark: '/models/woolderpark.glb', // boutique waterfront mid-rise (incl. site)
  miami: '/models/miami_style_condominium.glb',
  pivotal: '/models/pivotal_point.glb',
}
const TARGET_H = 14

// real building GLB — auto-centered on origin, base on the ground, scaled to TARGET_H
function Building({ url, onReady, onPoolAnchor }: { url: string; onReady?: () => void; onPoolAnchor?: (v: THREE.Vector3) => void }) {
  const { scene } = useGLTF(url)
  const anchorRef = useRef<THREE.Vector3 | null>(null)
  const prepared = useMemo(() => {
    const root = scene.clone(true)
    const box = new THREE.Box3().setFromObject(root)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)
    const s = TARGET_H / size.y
    root.scale.setScalar(s)
    root.position.set(-center.x * s, -box.min.y * s, -center.z * s)

    // REAL glass: a reflective physical material that mirrors the HDRI sky + clouds,
    // tinted blue-grey and slightly see-through. Replaces the flat OPAQUE model glass.
    // window glass — blue-teal reflective (matches the model's original preview render)
    const glass = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#2f7d94'), // brighter blue-teal to match the Fab preview glass
      metalness: 0.78, // reflective curtain wall — tinted reflection, interior hidden
      roughness: 0.05, // sharp, glassy reflections (was 0.12 = soft/CG)
      envMapIntensity: 1.75,
      transparent: true,
      opacity: 0.95, // near-opaque — kills the "see the messy interior slabs through it" game look
      clearcoat: 1,
      clearcoatRoughness: 0.04,
      ior: 1.5,
      reflectivity: 1,
      side: THREE.FrontSide, // front faces only — no backface interior bleeding through
      // push glass depth back slightly so coincident door/panel faces stop z-fighting (flicker)
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
      depthWrite: true, // near-opaque (0.95) → write depth so transparent sort doesn't flip per-frame
    })
    // balcony balustrades ("_Burnt_Umber_1") — darker reflective glass, NOT dead black
    const railGlass = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#22443d'),
      metalness: 0.4,
      roughness: 0.14,
      envMapIntensity: 1.2,
      transparent: true,
      opacity: 0.72, // balustrade — more see-through than the windows
      clearcoat: 0.5,
      clearcoatRoughness: 0.12,
      ior: 1.45,
      side: THREE.DoubleSide,
      // same anti-flicker treatment as the windows (offset + depth write) so the balustrade
      // and the sliding door behind it stop z-fighting as the camera moves
      polygonOffset: true,
      polygonOffsetFactor: 2,
      polygonOffsetUnits: 2,
      depthWrite: true,
    })
    root.traverse((o) => {
      const m = o as THREE.Mesh
      if (!m.isMesh) return
      m.castShadow = true
      m.receiveShadow = true
      const mats = Array.isArray(m.material) ? m.material : [m.material]
      const tag = (mats.map((x) => x?.name || '').join(' ') + ' ' + m.name).toLowerCase()
      // the tower's window glass is the "Condominio_Aragon" material (363 instances);
      // "_Gray_Glass_2" is small glass bits. Both become real reflective glass.
      if (tag.includes('condominio') || tag.includes('glass')) {
        m.material = glass // window glass
      } else if (tag.includes('umber')) {
        m.material = railGlass // balcony balustrade glass (was flat black)
      } else {
        // concrete / white cladding / metal frames: catch a little sky, but pull bright-white
        // materials DOWN off pure white so they don't clip/blow out under the sunny sky
        mats.forEach((mat) => {
          const std = mat as THREE.MeshStandardMaterial
          if (std && 'envMapIntensity' in std) std.envMapIntensity = 0.6
          const c = std?.color
          if (c) {
            const lum = 0.299 * c.r + 0.587 * c.g + 0.114 * c.b
            // the white cladding sits at ~0.81 → drop it to a soft architectural white (~0.66)
            if (lum > 0.7) c.multiplyScalar(0.8)
          }
        })
      }
    })
    root.updateMatrixWorld(true)
    const poolBox = new THREE.Box3()
    root.traverse((o) => {
      const m = o as THREE.Mesh
      if (!m.isMesh) return
      const t = ((Array.isArray(m.material) ? m.material : [m.material]).map((x) => x?.name || '').join(' ') + ' ' + m.name).toLowerCase()
      if (t.includes('pool') || t.includes('water')) poolBox.expandByObject(m)
    })
    if (!poolBox.isEmpty()) {
      const c = poolBox.getCenter(new THREE.Vector3())
      anchorRef.current = new THREE.Vector3(c.x, poolBox.max.y, c.z) // deck top, pool centre
    }
    return root
  }, [scene])
  useEffect(() => { onReady?.() }, [onReady])
  useEffect(() => { if (anchorRef.current) onPoolAnchor?.(anchorRef.current) }, [onPoolAnchor])
  return <primitive object={prepared} />
}
useGLTF.preload(MODELS.adriana)

// grass ground so the tower is GROUNDED, not flying in a void at the flight start.
// large tiled plane at the building base, catches the tower's shadow (the real "it's
// sitting there" signal), fades into the fog/horizon.
function Ground() {
  const grass = useTexture('/textures/grass_diff.jpg')
  useMemo(() => {
    grass.wrapS = grass.wrapT = THREE.RepeatWrapping
    grass.repeat.set(90, 90)
    grass.colorSpace = THREE.SRGBColorSpace
    grass.anisotropy = 8
  }, [grass])
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.03, 0]} receiveShadow>
      <planeGeometry args={[600, 600]} />
      <meshStandardMaterial map={grass} roughness={1} metalness={0} />
    </mesh>
  )
}
useTexture.preload('/textures/grass_diff.jpg')

// real palm props around the pool (the model's own palm shipped without its texture).
// Loads the 340KB optimised pack, keeps ONE variant, normalises it to ~3.6 units tall,
// and drops 4 around the pool deck. Frond material set to alpha-cutout so it reads as fronds.
const PALM_URL = '/models/palm_trees.glb'
function Palms({ anchor }: { anchor: THREE.Vector3 }) {
  const { scene } = useGLTF(PALM_URL)
  const palm = useMemo(() => {
    const src = scene.clone(true)
    const remove: THREE.Object3D[] = []
    src.traverse((o) => {
      const m = o as THREE.Mesh
      if (m.isMesh && !/^PALMLOW_/.test(m.name)) remove.push(m) // keep only the PALMLOW variant
    })
    remove.forEach((o) => o.parent?.remove(o))
    src.updateMatrixWorld(true)
    // normalise to ~4 units tall, base at y=0, centred on x/z
    let box = new THREE.Box3().setFromObject(src)
    src.scale.multiplyScalar(4.0 / (box.max.y - box.min.y))
    src.updateMatrixWorld(true)
    box = new THREE.Box3().setFromObject(src)
    const c = box.getCenter(new THREE.Vector3())
    src.position.set(-c.x, -box.min.y, -c.z)
    src.traverse((o) => {
      const m = o as THREE.Mesh
      if (!m.isMesh) return
      m.castShadow = true
      m.receiveShadow = true
      m.userData.isPalm = true // so the grounding raycast ignores the palms themselves
      const mm = m.material as THREE.MeshStandardMaterial
      if (mm && /frond/i.test(mm.name || '')) {
        mm.alphaTest = 0.5 // cutout fronds instead of blended quads
        mm.transparent = false
        mm.depthWrite = true
        mm.side = THREE.DoubleSide
      }
    })
    const g = new THREE.Group()
    g.add(src)
    return g
  }, [scene])
  // Ground each palm by RAYCASTING straight down onto whatever surface is actually below it
  // (the podium deck) — no more guessing the deck height. Runs once the tower is in the scene.
  const rootScene = useThree((s) => s.scene)
  const [placed, setPlaced] = useState<{ x: number; y: number; z: number; r: number; s: number }[]>([])
  useEffect(() => {
    void anchor
    const ray = new THREE.Raycaster()
    const down = new THREE.Vector3(0, -1, 0)
    const isPalm = (o: THREE.Object3D | null) => {
      while (o) { if (o.userData?.isPalm) return true; o = o.parent }
      return false
    }
    const up = new THREE.Vector3(0, 1, 0)
    const groundAt = (x: number, z: number) => {
      ray.set(new THREE.Vector3(x, 60, z), down)
      const hits = ray.intersectObjects(rootScene.children, true).filter((h) => !isPalm(h.object))
      return hits.length ? hits[0].point.y : 0
    }
    const ceilingAt = (x: number, z: number, from: number) => {
      ray.set(new THREE.Vector3(x, from + 0.15, z), up)
      const hits = ray.intersectObjects(rootScene.children, true).filter((h) => !isPalm(h.object))
      return hits.length ? hits[0].point.y : Infinity
    }
    // diagnostic: at each candidate, deck height + overhead clearance to the balcony above
    const cand = [
      { x: -4.3, z: -2.2, r: 0.5 },
      { x: -4.2, z: -0.7, r: -0.5 },
      { x: -4.3, z: 1.1, r: 1.2 },
      { x: -4.2, z: 2.4, r: 2.3 },
    ]
    const PALM_H = 4.0 // the normalised palm height
    const res = cand.map((c) => {
      const y = groundAt(c.x, c.z)
      const ceil = ceilingAt(c.x, c.z, y)
      const clear = ceil === Infinity ? 8 : ceil - y
      const scl = Math.min(1.1, Math.max(0.5, (clear - 0.3) / PALM_H)) // fit under any overhang
      return { x: c.x, y, z: c.z, r: c.r, s: scl }
    })
    setPlaced(res)
  }, [rootScene, palm, anchor])
  const instances = useMemo(
    () => placed.map((sp) => ({ obj: palm.clone(true), pos: [sp.x, sp.y, sp.z] as [number, number, number], rot: sp.r, scl: sp.s })),
    [palm, placed],
  )
  return (
    <group>
      {instances.map((it, i) => (
        <primitive key={i} object={it.obj} position={it.pos} rotation={[0, it.rot, 0]} scale={it.scl} />
      ))}
    </group>
  )
}
useGLTF.preload(PALM_URL)

// small deterministic PRNG so the skyline layout is stable across reloads (and tunable)
function mulberry32(a: number) {
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ── City geometry constants (shared by CityBackdrop + CityGround so blocks and streets line up) ──
const CITY_PITCH = 40 // block-centre spacing (block + street)
const CITY_BLOCK = 26 // building-footprint span inside each block (street gap = PITCH - BLOCK = 14)
const CITY_HALF = 5 // grid runs gx,gz ∈ [-5..5] → city reaches ~r200
const CITY_MAX_R = 210 // drop blocks past this (they'd be pure fog anyway)
const CITY_CLEAR_R = 36 // NOTHING inside this radius — the tower's landscaped block (drone flies r22-24)
const CITY_GROUND = 440 // street-plane size (covers the whole grid)
const CITY_HOLE_R = 46 // radius of the grass clearing punched out of the street plane (> CLEAR_R)
// window "tile" = one 4×4-window texture repeat; TILE_M world units per repeat → consistent window scale
const TILE_M = 6.8

// Procedural facade texture: neutral-grey concrete + a 4×4 grid of dark reflective-glass windows
// (slight per-window tone + a faint sky-reflection gradient). Greyscale on purpose — the blue-grey
// hazy-skyline tint + per-building brightness come from VERTEX COLORS, so one texture serves all.
// Seamlessly repeatable; the corner texel (0,0) is guaranteed plain concrete so ROOF faces (which
// pin their UVs there) read as flat concrete, never windows. Daytime → no emissive glow.
function makeFacadeTexture() {
  const S = 512
  const c = document.createElement('canvas')
  c.width = c.height = S
  const ctx = c.getContext('2d')!
  const rnd = mulberry32(0x1a2b3c)
  ctx.fillStyle = '#8d8f92' // mid concrete grey (tinted later by vertex colour)
  ctx.fillRect(0, 0, S, S)
  for (let i = 0; i < 2200; i++) {
    const g = 110 + Math.floor(rnd() * 60)
    ctx.fillStyle = `rgba(${g},${g},${g + 4},0.05)` // concrete grain
    ctx.fillRect(rnd() * S, rnd() * S, 1 + rnd() * 2, 1 + rnd() * 2)
  }
  const N = 4
  const cell = S / N
  const margin = cell * 0.2 // mullion half-gap → seamless when tiled
  for (let gy = 0; gy < N; gy++) {
    for (let gx = 0; gx < N; gx++) {
      const x0 = gx * cell + margin
      const y0 = gy * cell + margin
      const w = cell - margin * 2
      const h = cell - margin * 2
      const base = 24 + Math.floor(rnd() * 26) // 24..50 → dark glass, per-window jitter
      const grad = ctx.createLinearGradient(0, y0, 0, y0 + h)
      grad.addColorStop(0, `rgb(${base + 20},${base + 26},${base + 38})`) // bluish sky reflection at top
      grad.addColorStop(0.55, `rgb(${base},${base + 4},${base + 12})`)
      grad.addColorStop(1, `rgb(${Math.max(8, base - 10)},${Math.max(10, base - 4)},${base + 4})`)
      ctx.fillStyle = grad
      ctx.fillRect(x0, y0, w, h)
      ctx.strokeStyle = 'rgba(28,28,32,0.55)' // thin window frame
      ctx.lineWidth = 1
      ctx.strokeRect(x0 + 0.5, y0 + 0.5, w - 1, h - 1)
    }
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return tex
}

// Rewrite a BoxGeometry's per-face UVs so the facade texture tiles at a CONSISTENT real-world
// window scale on the 4 SIDE faces (repeat = worldSpan / TILE_M, rounded so windows meet cleanly
// at edges), and the TOP+BOTTOM faces collapse to the concrete corner texel (flat concrete roofs).
// BoxGeometry face order = +X,-X,+Y,-Y,+Z,-Z, 4 verts each; default uvs are {(0,1),(1,1),(0,0),(1,0)}.
function setFacadeUVs(geo: THREE.BoxGeometry, w: number, h: number, d: number) {
  const uv = geo.attributes.uv as THREE.BufferAttribute
  const rep = (span: number) => Math.max(1, Math.round(span / TILE_M))
  const rv = rep(h)
  const side = (f: number, ru: number) => {
    for (let i = 0; i < 4; i++) {
      const idx = f * 4 + i
      uv.setXY(idx, uv.getX(idx) * ru, uv.getY(idx) * rv)
    }
  }
  side(0, rep(d)) // +X (horizontal span = depth)
  side(1, rep(d)) // -X
  side(4, rep(w)) // +Z (horizontal span = width)
  side(5, rep(w)) // -Z
  for (const f of [2, 3]) for (let i = 0; i < 4; i++) uv.setXY(f * 4 + i, 0.004, 0.004) // roof/floor → concrete
  uv.needsUpdate = true
}

// Cheap believable skyline: ONE merged draw call. Buildings sit on a CITY-BLOCK GRID (axis-aligned,
// streets between blocks) that leaves the centre block (the tower's site) empty grass — nothing ever
// enters r36 (drone flies r22-24). Each building = 1-3 stacked SETBACK boxes (base widest) with a
// procedural window facade; per-building brightness/tint is baked into vertex colours in the hazy
// blue-grey family so the city frames the tower and fades into the fog (95→300) without competing.
// No shadows (all beyond the ±28 shadow frustum). Deterministic (mulberry32 seed).
function CityBackdrop() {
  const { geometry, material } = useMemo(() => {
    const rand = mulberry32(20260703)
    const geos: THREE.BufferGeometry[] = []
    const tint = new THREE.Color()
    const baseTint = new THREE.Color('#8ea1bd') // hazy blue-grey; texture is neutral so this drives colour
    // nearest distance from origin to an axis-aligned footprint (so we can guarantee the clearing)
    const nearDist = (cx: number, cz: number, hw: number, hd: number) => {
      const dx = Math.max(0, Math.abs(cx) - hw)
      const dz = Math.max(0, Math.abs(cz) - hd)
      return Math.hypot(dx, dz)
    }
    for (let gx = -CITY_HALF; gx <= CITY_HALF; gx++) {
      for (let gz = -CITY_HALF; gz <= CITY_HALF; gz++) {
        if (gx === 0 && gz === 0) continue // tower's block — stays grass
        const bx = gx * CITY_PITCH
        const bz = gz * CITY_PITCH
        const blockDist = Math.hypot(bx, bz)
        if (blockDist > CITY_MAX_R) continue
        const distF = THREE.MathUtils.clamp((blockDist - CITY_PITCH) / (CITY_MAX_R - CITY_PITCH), 0, 1)
        // subdivide the block into a 1-or-2 × 1-or-2 lattice of building plots (irregular clusters)
        const nx = 1 + (rand() < 0.7 ? 1 : 0)
        const nz = 1 + (rand() < 0.7 ? 1 : 0)
        const plotW = CITY_BLOCK / nx
        const plotD = CITY_BLOCK / nz
        for (let px = 0; px < nx; px++) {
          for (let pz = 0; pz < nz; pz++) {
            if (rand() < 0.16) continue // occasional gap (parking lot / low structure)
            const pcx = bx - CITY_BLOCK / 2 + plotW * (px + 0.5)
            const pcz = bz - CITY_BLOCK / 2 + plotD * (pz + 0.5)
            // footprint fills most of the plot, small alley gap, slight jitter
            let w = plotW * (0.62 + rand() * 0.22)
            let d = plotD * (0.62 + rand() * 0.22)
            const jx = (rand() - 0.5) * (plotW - w) * 0.6
            const jz = (rand() - 0.5) * (plotD - d) * 0.6
            const cx = pcx + jx
            const cz = pcz + jz
            if (nearDist(cx, cz, w / 2, d / 2) < CITY_CLEAR_R) continue // keep the drone-flight clearing sacred
            const totalH = 5 + rand() * (6 + distF * 20) // short near → tall far (skyline depth)
            const tiers = 1 + Math.floor(rand() * 3) // 1..3 setback tiers
            const weights: number[] = []
            for (let t = 0; t < tiers; t++) weights.push(tiers - t) // base tallest
            const wsum = weights.reduce((a, cc) => a + cc, 0)
            const shade = 0.8 + rand() * 0.36
            tint.copy(baseTint).multiplyScalar(shade)
            tint.r *= 0.94 + rand() * 0.12 // tiny per-building hue jitter
            tint.b *= 0.94 + rand() * 0.12
            let y = 0
            for (let t = 0; t < tiers; t++) {
              const th = totalH * (weights[t] / wsum)
              const g = new THREE.BoxGeometry(w, th, d)
              setFacadeUVs(g, w, th, d)
              g.translate(cx, y + th / 2, cz)
              const n = g.attributes.position.count
              const col = new Float32Array(n * 3)
              for (let k = 0; k < n; k++) {
                col[k * 3] = tint.r
                col[k * 3 + 1] = tint.g
                col[k * 3 + 2] = tint.b
              }
              g.setAttribute('color', new THREE.BufferAttribute(col, 3))
              geos.push(g)
              y += th
              w *= 0.7 // setback
              d *= 0.7
            }
          }
        }
      }
    }
    const merged = mergeGeometries(geos, false)
    geos.forEach((g) => g.dispose())
    const material = new THREE.MeshStandardMaterial({
      map: makeFacadeTexture(),
      vertexColors: true,
      roughness: 0.72,
      metalness: 0,
      envMapIntensity: 0.35,
    })
    return { geometry: merged, material }
  }, [])
  return <mesh geometry={geometry} material={material} frustumCulled={false} castShadow={false} receiveShadow={false} />
}

// Procedural street texture for the city ground: asphalt grid with darker "city block" tone under
// each block, faint dashed lane centre-lines down every street, a transparent grass HOLE punched at
// the centre (so the tower's grass block + landscaping show through), and a soft transparent fade at
// the outer edge so the plane melts into the distant grass/fog instead of ending in a hard square.
function makeStreetTexture() {
  const S = 1024
  const c = document.createElement('canvas')
  c.width = c.height = S
  const ctx = c.getContext('2d')!
  const rnd = mulberry32(0x5711aa)
  const w2c = (v: number) => (v / CITY_GROUND + 0.5) * S // world → canvas px
  const span = (CITY_BLOCK / CITY_GROUND) * S
  const pitch = (CITY_PITCH / CITY_GROUND) * S
  ctx.fillStyle = '#5b616b' // asphalt (blue-grey neutral, sits in the hazy family)
  ctx.fillRect(0, 0, S, S)
  for (let i = 0; i < 5000; i++) {
    const g = 70 + Math.floor(rnd() * 34)
    ctx.fillStyle = `rgba(${g},${g},${g + 6},0.06)` // asphalt grain
    ctx.fillRect(rnd() * S, rnd() * S, 1 + rnd() * 2, 1 + rnd() * 2)
  }
  // block interiors (darker neutral tone) at each grid centre — clear contrast vs the streets
  ctx.fillStyle = '#2c313a'
  for (let gx = -CITY_HALF; gx <= CITY_HALF; gx++) {
    for (let gz = -CITY_HALF; gz <= CITY_HALF; gz++) {
      if (gx === 0 && gz === 0) continue
      if (Math.hypot(gx * CITY_PITCH, gz * CITY_PITCH) > CITY_MAX_R) continue
      const cxp = w2c(gx * CITY_PITCH)
      const czp = w2c(gz * CITY_PITCH)
      ctx.fillRect(cxp - span / 2, czp - span / 2, span, span)
    }
  }
  // dashed lane centre-lines down each street corridor (between blocks)
  ctx.strokeStyle = 'rgba(224,218,188,0.5)'
  ctx.lineWidth = Math.max(2, S / 640)
  ctx.setLineDash([S * 0.014, S * 0.018])
  for (let g = -CITY_HALF; g < CITY_HALF; g++) {
    const p = w2c((g + 0.5) * CITY_PITCH)
    ctx.beginPath(); ctx.moveTo(p, 0); ctx.lineTo(p, S); ctx.stroke() // vertical streets
    ctx.beginPath(); ctx.moveTo(0, p); ctx.lineTo(S, p); ctx.stroke() // horizontal streets
  }
  ctx.setLineDash([])
  // punch the centre grass hole + fade the outer edge (both via destination-out alpha erase)
  const holeR = (CITY_HOLE_R / (CITY_GROUND / 2)) * (S / 2)
  const g2 = ctx.createRadialGradient(S / 2, S / 2, 0, S / 2, S / 2, S / 2)
  g2.addColorStop(0, 'rgba(0,0,0,1)') // erase centre → grass shows
  g2.addColorStop(holeR / (S / 2), 'rgba(0,0,0,1)')
  g2.addColorStop(holeR / (S / 2) + 0.02, 'rgba(0,0,0,0)') // keep the city ring
  g2.addColorStop(0.82, 'rgba(0,0,0,0)')
  g2.addColorStop(1, 'rgba(0,0,0,1)') // fade the far edge into grass/fog
  ctx.globalCompositeOperation = 'destination-out'
  ctx.fillStyle = g2
  ctx.fillRect(0, 0, S, S)
  ctx.globalCompositeOperation = 'source-over'
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 8
  return tex
}

// The urban ground: one transparent street-grid plane laid just above the grass in the city zone.
// Second added draw call. No shadows (outside the frustum). Grass shows through the centre hole so
// the tower keeps its landscaped block.
function CityGround() {
  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        map: makeStreetTexture(),
        transparent: true,
        depthWrite: false,
        roughness: 0.95,
        metalness: 0,
        envMapIntensity: 0.2,
        polygonOffset: true,
        polygonOffsetFactor: -2,
        polygonOffsetUnits: -2,
      }),
    [],
  )
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 0]} material={material} castShadow={false} receiveShadow={false}>
      <planeGeometry args={[CITY_GROUND, CITY_GROUND]} />
    </mesh>
  )
}

// auto-play DRONE ORBIT around the building once everything is loaded, settling
// into the hero framing. The clock starts on this rig's first frame — and since
// it's inside <Suspense>, that's only after the model + HDRI have loaded.
function CameraRig() {
  const t0 = useRef<number | null>(null)
  const look = useRef(new THREE.Vector3(0, 9, 0))
  const DUR = 7.5
  // SPIRAL: ONE calm circle, starting framed on the ~3-5th floor (podium/foundation
  // cropped out) and climbing to settle with the top third+ on the RIGHT.
  const TURNS = 1
  const endAngle = 3.75 // 3/4 corner of the balcony face at the settle
  const startAngle = endAngle + TURNS * Math.PI * 2
  // debug: ?t=<seconds> freezes the camera at that point in the flight.
  // free-orbit inspect: ?ang=<rad>&rad=<n>&h=<n>&ly=<n> sets a static pose.
  const dbg = useMemo(() => {
    if (typeof window === 'undefined') return null
    const q = new URLSearchParams(window.location.search)
    const t = q.get('t')
    const ang = q.get('ang')
    if (ang !== null) {
      return { static: true as const,
        ang: parseFloat(ang), rad: parseFloat(q.get('rad') || '30'),
        h: parseFloat(q.get('h') || '6'), ly: parseFloat(q.get('ly') || '7') }
    }
    return { static: false as const, t: t !== null ? parseFloat(t) : null }
  }, [])
  useFrame((state) => {
    if (dbg && dbg.static) {
      state.camera.position.set(Math.cos(dbg.ang) * dbg.rad, dbg.h, Math.sin(dbg.ang) * dbg.rad)
      state.camera.lookAt(0, dbg.ly, 0)
      return
    }
    const override = dbg && !dbg.static ? dbg.t : null
    if (t0.current === null) t0.current = state.clock.elapsedTime
    const t = override !== null ? override : state.clock.elapsedTime - t0.current
    const e = easeInOut(THREE.MathUtils.clamp(t / DUR, 0, 1))
    // after the settle, gently sway/bob AROUND the hero framing (never drift away)
    const post = Math.max(t - DUR, 0)
    const sway = Math.sin(post * 0.16) * 0.03
    const bob = Math.sin(post * 0.12) * 0.25
    const angle = THREE.MathUtils.lerp(startAngle, endAngle, e) + sway
    // climb the tower as we spiral; stay fairly close so the floor stays below frame
    const radius = THREE.MathUtils.lerp(24, 22, e)
    // start low enough to show the pool-deck + palms at the bottom, but crop the stone
    // podium/foundation + empty ground below it (Andy: pool & palms yes, foundation no).
    const height = THREE.MathUtils.lerp(5, 9.5, e) + bob * 0.4
    _cam.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius)
    state.camera.position.copy(_cam)
    const ly = THREE.MathUtils.lerp(8, 10.3, e)
    look.current.set(0, ly, 0)
    // pan the look along camera-right so the tower drifts to screen-RIGHT at the settle
    // (leaves the left clear for the hero copy)
    _dir.copy(look.current).sub(_cam).normalize()
    _right.copy(_dir).cross(_UP).normalize()
    look.current.addScaledVector(_right, -THREE.MathUtils.lerp(0, 5, e))
    state.camera.lookAt(look.current)
  })
  return null
}

export default function TowerScene({ onReady }: { onReady?: () => void }) {
  const modelUrl = useMemo(() => {
    if (typeof window !== 'undefined') {
      const m = new URLSearchParams(window.location.search).get('model')
      if (m && MODELS[m]) return MODELS[m]
    }
    return MODELS.adriana
  }, [])
  // ?hdri=<name> to A/B test sky HDRIs during tuning (default = partly-cloudy puresky)
  const hdriFile = useMemo(() => {
    const map: Record<string, string> = {
      partly: '/hdri/sky.hdr',
      clear: '/hdri/sky-clear.hdr',
      autumn: '/hdri/sky-autumn.hdr',
      noon: '/hdri/sky-noon.hdr',
    }
    if (typeof window !== 'undefined') {
      const h = new URLSearchParams(window.location.search).get('hdri')
      if (h && map[h]) return map[h]
    }
    return '/hdri/sky-autumn.hdr' // bright clear Florida blue (partly-cloudy read too dark/moody)
  }, [])
  const [poolAnchor, setPoolAnchor] = useState<THREE.Vector3 | null>(null)
  return (
    <Canvas
      shadows
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.NeutralToneMapping, // Khronos PBR-Neutral: bright + saturated (AgX was muting/darkening the whole scene)
        toneMappingExposure: 1.15, // bright sunny day
      }}
      dpr={[1, 1.5]} // cap at 1.5x (was 2x = 4x pixels on retina — main lag source)
      // near:1 / far:350 (not the default 0.1/1000) → far more depth-buffer precision, kills the
      // balcony-panel/door z-fighting flicker. Scene is ~14 units tall, camera ~22 units out.
      camera={{ position: [Math.cos(10.03) * 24, 5, Math.sin(10.03) * 24], fov: 32, near: 1, far: 350 }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#aeb9c9', 95, 300]} />
        {/* ambient fill — lifted so the facade isn't muddy/dark */}
        <ambientLight intensity={0.34} />
        {/* warm key sun — moved to the CAMERA side (settle cam sits at ~-x,-z) so it FRONT-lights
            the visible facade instead of backlighting it into shade. Offset for 3/4 shadows. */}
        <directionalLight
          position={[-10, 22, -22]}
          intensity={2.6}
          color="#fff2df"
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-bias={-0.0004}
          shadow-camera-near={1}
          shadow-camera-far={95}
          shadow-camera-left={-28}
          shadow-camera-right={28}
          shadow-camera-top={28}
          shadow-camera-bottom={-28}
        />
        {/* cool sky fill from the opposite side so shadows read blue, not black */}
        <directionalLight position={[-18, 11, -12]} intensity={0.55} color="#9db4d6" />

        <CameraRig />
        <Building url={modelUrl} onReady={onReady} onPoolAnchor={setPoolAnchor} />
        <Ground />
        <CityGround />
        <CityBackdrop />
        {poolAnchor && <Palms anchor={poolAnchor} />}

        {/* a couple of bright white puffy clouds in the upper sky (both sides so at least one is
            in frame through the flight). Kept to 2 + modest volume for performance. */}
        <Clouds material={THREE.MeshBasicMaterial} limit={400}>
          <Cloud seed={2} position={[44, 28, 2]} bounds={[22, 7, 8]} volume={22} color="#ffffff" opacity={1} speed={0.03} />
          <Cloud seed={7} position={[10, 40, 40]} bounds={[18, 6, 7]} volume={16} color="#ffffff" opacity={0.95} speed={0.03} />
        </Clouds>

        {/* sharper background so the glass reflects a crisp sky; brighter env for real reflections */}
        {/* SUNNY blue sky with puffy white cumulus → glass reflects real CLOUDS, not flat colour.
            backgroundBlurriness softens ONLY the drawn backdrop (keeps it clean/premium + hides the
            HDRI's ground haze) — it does NOT blur the glass reflections, which sample the crisp env
            map. Rotated so the sun sits behind the tower, left sky stays clean for the hero copy. */}
        <Environment
          files={hdriFile}
          background
          backgroundBlurriness={0.04}
          backgroundIntensity={1.15}
          backgroundRotation={[0, 3.2, 0]}
          environmentIntensity={1.15}
          environmentRotation={[0, 3.2, 0]}
        />

        <EffectComposer multisampling={4}>
          {/* ambient occlusion — the dark contact shadows in corners/recesses that make
              CG read as real & grounded instead of flat. Biggest single realism lever. */}
          <N8AO aoRadius={2.5} distanceFalloff={1} intensity={3.2} halfRes quality="performance" />
          <Bloom luminanceThreshold={0.95} intensity={0.22} mipmapBlur radius={0.7} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
