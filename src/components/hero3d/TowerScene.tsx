'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

// accelerate into the move, streak through the middle, decelerate to settle
const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

const MODELS: Record<string, string> = {
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
    root.traverse((o) => {
      const m = o as THREE.Mesh
      if (m.isMesh) { m.castShadow = true; m.receiveShadow = true }
    })
    return root
  }, [scene])
  useEffect(() => { onReady?.() }, [onReady])
  return <primitive object={prepared} />
}
useGLTF.preload(MODELS.residential)

// auto-play DRONE ORBIT around the building once everything is loaded, settling
// into the hero framing. The clock starts on this rig's first frame — and since
// it's inside <Suspense>, that's only after the model + HDRI have loaded.
function CameraRig() {
  const t0 = useRef<number | null>(null)
  const look = useRef(new THREE.Vector3(0, 9, 0))
  const DUR = 9.5
  // residential: a ~320° sweeping push-in that ends craned-up on the BALCONY wing.
  // AVOID THE FLOOR — camera stays low + always looks up, so the ground never shows.
  const endAngle = 4.7
  const startAngle = endAngle + 5.6 // ~320° orbit — a real journey, not a clip
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
    // start FAR (tower against sky), swoop in while circling, settle on the
    // top-third + sky. Low camera + looking up keeps the floor out of frame.
    // start FAR (building small against big sky) → rush in while orbiting ~320° →
    // ease onto a craned-up 3/4 hero of the balcony wing. Always looking up = no floor.
    const radius = THREE.MathUtils.lerp(46, 20, e)
    const height = THREE.MathUtils.lerp(3, 5, e) + bob * 0.4
    state.camera.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius)
    look.current.set(THREE.MathUtils.lerp(-1, -3.2, e), THREE.MathUtils.lerp(13.5, 10.5, e), 0)
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
    return MODELS.residential
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
      camera={{ position: [Math.cos(10.3) * 46, 3, Math.sin(10.3) * 46], fov: 32 }}
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

        <Environment files="/hdri/sky.hdr" background backgroundBlurriness={0.04} environmentIntensity={0.6} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.95} intensity={0.22} mipmapBlur radius={0.7} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
