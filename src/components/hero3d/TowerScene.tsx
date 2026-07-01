'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, useEffect, useMemo, useRef } from 'react'
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
function Building({ url, onReady }: { url: string; onReady?: () => void }) {
  const { scene } = useGLTF(url)
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
    const glass = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#123f63'), // DEEP blue so sky reflections read as streaks, not wash
      metalness: 0.0,
      roughness: 0.06,
      envMapIntensity: 1.4,
      transparent: true,
      opacity: 0.88, // balance: some see-through (real glass isn't a 100% mirror) but stays blue
      clearcoat: 0.9,
      clearcoatRoughness: 0.06,
      ior: 1.45,
      reflectivity: 1,
      side: THREE.DoubleSide,
      depthWrite: false,
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
        m.material = glass // reflective glass
      } else {
        // concrete / metal frames + railings: let them catch the sky a bit so they
        // read as real surfaces, not matte plastic
        mats.forEach((mat) => {
          const std = mat as THREE.MeshStandardMaterial
          if (std && 'envMapIntensity' in std) std.envMapIntensity = Math.max(std.envMapIntensity ?? 1, 1.15)
        })
      }
    })
    return root
  }, [scene])
  useEffect(() => { onReady?.() }, [onReady])
  return <primitive object={prepared} />
}
useGLTF.preload(MODELS.adriana)

// auto-play DRONE ORBIT around the building once everything is loaded, settling
// into the hero framing. The clock starts on this rig's first frame — and since
// it's inside <Suspense>, that's only after the model + HDRI have loaded.
function CameraRig() {
  const t0 = useRef<number | null>(null)
  const look = useRef(new THREE.Vector3(0, 9, 0))
  const DUR = 10
  // SPIRAL: ONE calm circle around the tower, climbing bottom → top (2 turns made Andy
  // dizzy), then settle with the top third+ framed on the RIGHT so the left hero reads.
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
    const radius = THREE.MathUtils.lerp(25, 22, e)
    const height = THREE.MathUtils.lerp(3, 9.5, e) + bob * 0.4
    _cam.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius)
    state.camera.position.copy(_cam)
    // look climbs from the tower base to the top third (settle ~1 floor lower per Andy)
    const ly = THREE.MathUtils.lerp(7, 10.3, e)
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
  return (
    <Canvas
      shadows
      gl={{
        antialias: true,
        powerPreference: 'high-performance',
        toneMapping: THREE.ACESFilmicToneMapping, // cinematic filmic curve
        toneMappingExposure: 0.92, // pull back the blown-out highlights
      }}
      dpr={[1, 2]}
      camera={{ position: [Math.cos(10.03) * 25, 3, Math.sin(10.03) * 25], fov: 32 }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#aeb9c9', 95, 300]} />
        {/* low ambient — let the sun + HDRI do the work so the building has form, not flat plastic */}
        <ambientLight intensity={0.16} />
        {/* warm key sun, low-ish angle for raking light + long self-shadows (kills the flat look) */}
        <directionalLight
          position={[26, 16, 14]}
          intensity={2.7}
          color="#ffe6c2"
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
        <Building url={modelUrl} onReady={onReady} />

        {/* sharper background so the glass reflects a crisp sky; brighter env for real reflections */}
        <Environment files="/hdri/sky.hdr" background backgroundBlurriness={0.015} environmentIntensity={0.85} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.95} intensity={0.22} mipmapBlur radius={0.7} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
