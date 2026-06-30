'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF, useTexture } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

function rand(seed: number) {
  const v = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return v - Math.floor(v)
}
const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

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

// neighbouring buildings laid out on a CITY GRID with street-gaps between them,
// denser/closer so the hero tower sits inside a real city. Taller further out.
function City() {
  const buildings = useMemo(() => {
    const arr: { x: number; z: number; w: number; d: number; h: number }[] = []
    let s = 1
    const CELL = 16 // block pitch (building footprint + street)
    const N = 4
    for (let gx = -N; gx <= N; gx++) {
      for (let gz = -N; gz <= N; gz++) {
        if (gx === 0 && gz === 0) continue // hero block stays clear
        if (rand(s++) < 0.16) continue // some open lots / variety
        const x = gx * CELL + (rand(s++) - 0.5) * 3
        const z = gz * CELL + (rand(s++) - 0.5) * 3
        const dist = Math.hypot(gx, gz)
        const w = 6 + rand(s++) * 3 // wider streets (CELL 16, footprint 6-9)
        const d = 6 + rand(s++) * 3
        // near neighbours stay below the hero (14); skyline grows tall further out
        const h = 4 + dist * 2.5 + rand(s++) * 8
        arr.push({ x, z, w, d, h })
      }
    }
    return arr
  }, [])
  // glassy blue-grey so neighbours reflect the sky like real towers (not flat boxes)
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#3a4756', metalness: 0.45, roughness: 0.35, envMapIntensity: 1 }), [])
  return <group>{buildings.map((b, i) => (<mesh key={i} position={[b.x, b.h / 2, b.z]} material={mat} castShadow><boxGeometry args={[b.w, b.h, b.d]} /></mesh>))}</group>
}

// real textured asphalt ground (replaces the empty reflective plane)
function Ground() {
  const [diff, nor, rough] = useTexture([
    '/textures/ground_diff.jpg',
    '/textures/ground_nor.jpg',
    '/textures/ground_rough.jpg',
  ])
  useMemo(() => {
    ;[diff, nor, rough].forEach((t) => {
      t.wrapS = t.wrapT = THREE.RepeatWrapping
      t.repeat.set(45, 45)
      t.anisotropy = 8
    })
    diff.colorSpace = THREE.SRGBColorSpace
  }, [diff, nor, rough])
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
      <planeGeometry args={[500, 500]} />
      <meshStandardMaterial map={diff} normalMap={nor} roughnessMap={rough} color="#7a7d82" metalness={0} roughness={1} envMapIntensity={0.6} />
    </mesh>
  )
}

// auto-play DRONE ORBIT around the building once everything is loaded, settling
// into the hero framing. The clock starts on this rig's first frame — and since
// it's inside <Suspense>, that's only after the model + HDRI have loaded.
function CameraRig() {
  const t0 = useRef<number | null>(null)
  const look = useRef(new THREE.Vector3(0, 9, 0))
  const DUR = 8
  const endAngle = 0.9
  const startAngle = endAngle + 4.3 // ~245° sweep around the building
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
    const e = easeInOut(THREE.MathUtils.clamp(t / DUR, 0, 1))
    // after the settle, gently sway/bob AROUND the hero framing (never drift away)
    const post = Math.max(t - DUR, 0)
    const sway = Math.sin(post * 0.16) * 0.03
    const bob = Math.sin(post * 0.12) * 0.25
    const angle = THREE.MathUtils.lerp(startAngle, endAngle, e) + sway
    // start high+far (whole building + city), end CLOSE + LOW looking UP at the
    // top third against the sky — no ground, no surroundings in frame
    const radius = THREE.MathUtils.lerp(40, 12, e)
    const height = THREE.MathUtils.lerp(18, 5, e) + bob
    state.camera.position.set(Math.cos(angle) * radius, height, Math.sin(angle) * radius)
    look.current.set(THREE.MathUtils.lerp(0, -3, e), THREE.MathUtils.lerp(9, 12, e), 0)
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
      camera={{ position: [Math.cos(5.2) * 46, 30, Math.sin(5.2) * 46], fov: 32 }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#c4cedd', 55, 155]} />
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
