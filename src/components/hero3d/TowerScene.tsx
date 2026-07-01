'use client'

import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, useGLTF, useTexture, Clouds, Cloud } from '@react-three/drei'
import { EffectComposer, Bloom, N8AO } from '@react-three/postprocessing'
import { Suspense, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'

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

// Cheap hazy skyline: ONE instanced draw call of low-poly boxes ringed FAR outside the
// drone-flight radius (~24), so it frames the tower on the horizon and fades into the fog
// (near 95) without ever crossing the camera path or costing meaningful perf. Short near,
// taller far → skyline depth. No shadows (they sit beyond the ±28 shadow frustum anyway).
function CityBackdrop() {
  const ref = useRef<THREE.InstancedMesh>(null)
  const COUNT = 110
  const { geo, mat } = useMemo(
    () => ({
      geo: new THREE.BoxGeometry(1, 1, 1),
      mat: new THREE.MeshStandardMaterial({ color: '#6f7c92', roughness: 0.9, metalness: 0, envMapIntensity: 0.45 }),
    }),
    [],
  )
  useLayoutEffect(() => {
    const mesh = ref.current
    if (!mesh) return
    const rand = mulberry32(20260702)
    const m = new THREE.Matrix4()
    const pos = new THREE.Vector3()
    const quat = new THREE.Quaternion()
    const scl = new THREE.Vector3()
    const col = new THREE.Color()
    const base = new THREE.Color('#6f7c92')
    for (let i = 0; i < COUNT; i++) {
      const ang = rand() * Math.PI * 2
      const rad = 50 + rand() * 150 // 50..200 — well beyond the ~24 flight radius
      const distF = (rad - 50) / 150
      const h = 4 + rand() * (5 + distF * 18) // short near, up to ~27 tall far
      pos.set(Math.cos(ang) * rad, h / 2, Math.sin(ang) * rad)
      quat.setFromAxisAngle(_UP, rand() * Math.PI)
      scl.set(4 + rand() * 6, h, 4 + rand() * 6)
      m.compose(pos, quat, scl)
      mesh.setMatrixAt(i, m)
      col.copy(base).multiplyScalar(0.82 + rand() * 0.34) // subtle brightness variation
      mesh.setColorAt(i, col)
    }
    mesh.instanceMatrix.needsUpdate = true
    if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true
  }, [])
  return <instancedMesh ref={ref} args={[geo, mat, COUNT]} frustumCulled={false} />
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
