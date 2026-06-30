'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial, useGLTF } from '@react-three/drei'
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

// distant skyline — light/matte so it hazes into the fog instead of reading as boxes
function City() {
  const buildings = useMemo(() => {
    const arr: { x: number; z: number; w: number; d: number; h: number }[] = []
    let s = 1
    for (let ring = 0; ring < 3; ring++) {
      const count = 16 + ring * 9
      const radius = 50 + ring * 22
      for (let k = 0; k < count; k++) {
        const ang = (k / count) * Math.PI * 2 + rand(s++) * 0.5
        const rr = radius + rand(s++) * 16
        arr.push({ x: Math.cos(ang) * rr, z: Math.sin(ang) * rr, w: 3 + rand(s++) * 6, d: 3 + rand(s++) * 6, h: 8 + rand(s++) * (22 + ring * 10) })
      }
    }
    return arr
  }, [])
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#36465c', metalness: 0.05, roughness: 0.95, envMapIntensity: 1 }), [])
  return <group>{buildings.map((b, i) => (<mesh key={i} position={[b.x, b.h / 2, b.z]} material={mat}><boxGeometry args={[b.w, b.h, b.d]} /></mesh>))}</group>
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[400, 400]} />
      <MeshReflectorMaterial
        resolution={1024}
        mixBlur={2.4}
        mixStrength={1.3}
        blur={[400, 100]}
        roughness={0.9}
        depthScale={1.2}
        minDepthThreshold={0.3}
        maxDepthThreshold={1.4}
        color="#0f141d"
        metalness={0.35}
      />
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
  useFrame((state) => {
    if (t0.current === null) t0.current = state.clock.elapsedTime
    const t = state.clock.elapsedTime - t0.current
    const e = easeInOut(THREE.MathUtils.clamp(t / DUR, 0, 1))
    // after the settle, gently sway/bob AROUND the hero framing (never drift away)
    const post = Math.max(t - DUR, 0)
    const sway = Math.sin(post * 0.16) * 0.03
    const bob = Math.sin(post * 0.12) * 0.25
    const angle = THREE.MathUtils.lerp(startAngle, endAngle, e) + sway
    // start high+far (whole building + city), end CLOSE + LOW looking UP at the
    // top third against the sky — no ground, no surroundings in frame
    const radius = THREE.MathUtils.lerp(44, 12, e)
    const height = THREE.MathUtils.lerp(22, 5, e) + bob
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
