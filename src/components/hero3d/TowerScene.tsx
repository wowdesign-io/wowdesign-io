'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

function rand(seed: number) {
  const v = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return v - Math.floor(v)
}
const easeOut = (x: number) => 1 - Math.pow(1 - x, 3) // fast swoop in, smooth settle

const MODELS: Record<string, string> = {
  pivotal: '/models/pivotal_point.glb',
  miami: '/models/miami_style_condominium.glb',
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
useGLTF.preload(MODELS.pivotal)
useGLTF.preload(MODELS.miami)

// DISTANT skyline only — far, tall, hazed towers near the horizon for context.
// Kept way out so they never cross the drone's path or block the hero shot.
function City() {
  const buildings = useMemo(() => {
    const arr: { x: number; z: number; w: number; d: number; h: number }[] = []
    let s = 1
    for (let ring = 0; ring < 2; ring++) {
      const count = 22 + ring * 14
      const radius = 78 + ring * 42
      for (let k = 0; k < count; k++) {
        const ang = (k / count) * Math.PI * 2 + rand(s++) * 0.4
        const rr = radius + rand(s++) * 26
        arr.push({ x: Math.cos(ang) * rr, z: Math.sin(ang) * rr, w: 6 + rand(s++) * 10, d: 6 + rand(s++) * 10, h: 22 + rand(s++) * (32 + ring * 18) })
      }
    }
    return arr
  }, [])
  // light matte so the distant towers haze into the fog/sky
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#67768c', metalness: 0.08, roughness: 0.95, envMapIntensity: 1 }), [])
  return <group>{buildings.map((b, i) => (<mesh key={i} position={[b.x, b.h / 2, b.z]} material={mat}><boxGeometry args={[b.w, b.h, b.d]} /></mesh>))}</group>
}

// simple ground, far below — the camera stays angled up so it's effectively never in frame
function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
      <planeGeometry args={[700, 700]} />
      <meshStandardMaterial color="#10161f" metalness={0.2} roughness={0.9} envMapIntensity={0.4} />
    </mesh>
  )
}

// auto-play DRONE ORBIT around the building once everything is loaded, settling
// into the hero framing. The clock starts on this rig's first frame — and since
// it's inside <Suspense>, that's only after the model + HDRI have loaded.
function CameraRig() {
  const t0 = useRef<number | null>(null)
  const look = useRef(new THREE.Vector3(0, 9, 0))
  const DUR = 6
  const endAngle = 0.9
  const startAngle = endAngle + 3.4 // ~195° arc while swooping in
  // debug: ?t=<seconds> freezes the camera at that point in the flight
  const override = useMemo(() => {
    if (typeof window !== 'undefined') {
      const v = new URLSearchParams(window.location.search).get('t')
      if (v !== null) return parseFloat(v)
    }
    return null
  }, [])
  useFrame((state) => {
    if (t0.current === null) t0.current = state.clock.elapsedTime
    const t = override !== null ? override : state.clock.elapsedTime - t0.current
    const e = easeOut(THREE.MathUtils.clamp(t / DUR, 0, 1))
    // after the settle, gently sway/bob AROUND the hero framing (never drift away)
    const post = Math.max(t - DUR, 0)
    const sway = Math.sin(post * 0.16) * 0.03
    const bob = Math.sin(post * 0.12) * 0.25
    const angle = THREE.MathUtils.lerp(startAngle, endAngle, e) + sway
    // start FAR (tower against sky), swoop in while circling, settle on the
    // top-third + sky. Low camera + looking up keeps the floor out of frame.
    const radius = THREE.MathUtils.lerp(32, 13, e)
    const height = THREE.MathUtils.lerp(4, 5, e) + bob * 0.4
    state.camera.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius)
    look.current.set(THREE.MathUtils.lerp(-3, -3.5, e), THREE.MathUtils.lerp(10, 12.5, e), 0)
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
    return MODELS.miami
  }, [])
  return (
    <Canvas
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      camera={{ position: [Math.cos(4.3) * 32, 4, Math.sin(4.3) * 32], fov: 32 }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#c4cedd', 70, 240]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[14, 22, 8]} intensity={2.3} color="#fff1dc" castShadow />
        <pointLight position={[-12, 7, 6]} intensity={70} color="#2E77FA" distance={55} />

        <CameraRig />
        <Building url={modelUrl} onReady={onReady} />
        <City />
        <Ground />

        <Environment files="/hdri/sky.hdr" background backgroundBlurriness={0.02} environmentIntensity={1} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.75} intensity={0.45} mipmapBlur radius={0.8} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
