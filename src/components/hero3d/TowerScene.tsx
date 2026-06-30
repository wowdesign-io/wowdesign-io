'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, MeshReflectorMaterial } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

const BLUE = '#2E77FA'
const WARM = '#ffb070'

function rand(seed: number) {
  const v = Math.sin(seed * 127.1 + 311.7) * 43758.5453
  return v - Math.floor(v)
}
function taper(i: number, n: number) {
  if (i < n * 0.34) return 1
  if (i < n * 0.62) return 0.84
  if (i < n * 0.84) return 0.66
  return 0.48
}
const easeInOut = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)

const FLOORS = 16
const FH = 0.82
const GAP = 0.1
const STEP = FH + GAP
const BASE_W = 3
const BASE_D = 2.2
const TOP_Y = FLOORS * STEP

// NOTE: placeholder procedural tower. Swap this whole component for a GLB via
//   const { scene } = useGLTF('/models/building.glb')  ->  <primitive object={scene} />
// once the real model lands; the camera/sky/composition below stay the same.
function HeroTower() {
  const strips = useRef<THREE.MeshStandardMaterial[]>([])
  const windows = useRef<{ m: THREE.MeshStandardMaterial; onset: number }[]>([])
  const glassMat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#0c1320', metalness: 0.9, roughness: 0.12, envMapIntensity: 1.5 }),
    []
  )
  const floors = useMemo(() => {
    const arr: { i: number; y: number; w: number; d: number }[] = []
    for (let i = 0; i < FLOORS; i++) {
      const s = taper(i, FLOORS)
      arr.push({ i, y: i * STEP + FH / 2, w: BASE_W * s, d: BASE_D * s })
    }
    return arr
  }, [])
  useFrame((state) => {
    const t = state.clock.elapsedTime
    strips.current.forEach((m, i) => { if (m) m.emissiveIntensity = Math.min(Math.max((t - i * 0.1) / 0.7, 0), 1) * 1.3 })
    windows.current.forEach((w) => {
      if (!w?.m) return
      const v = Math.min(Math.max((t - w.onset) / 0.6, 0), 1)
      w.m.emissiveIntensity = v * 1.05 * (0.9 + Math.sin(t * 1.1 + w.onset) * 0.1)
    })
  })
  windows.current = []
  return (
    <group position={[0, 0, 0]}>
      {floors.map((f) => {
        const cols = Math.max(4, Math.round(f.w / 0.32))
        const panels: React.ReactNode[] = []
        for (let j = 0; j < cols; j++) {
          const isLit = rand(f.i * 10 + j) > 0.5
          const onset = 0.4 + (FLOORS - f.i) * 0.06 + rand(f.i + j) * 0.4
          const x = -f.w / 2 + (f.w / cols) * (j + 0.5)
          panels.push(
            <mesh key={`z${j}`} position={[x, 0, f.d / 2 + 0.006]}>
              <planeGeometry args={[(f.w / cols) * 0.5, FH * 0.42]} />
              <meshStandardMaterial ref={(m) => { if (m && isLit) windows.current.push({ m: m as THREE.MeshStandardMaterial, onset }) }} color={WARM} emissive={WARM} emissiveIntensity={0} opacity={isLit ? 1 : 0.06} transparent toneMapped={false} />
            </mesh>
          )
        }
        const colsX = Math.max(4, Math.round(f.d / 0.32))
        for (let j = 0; j < colsX; j++) {
          const isLit = rand(f.i * 13 + j + 99) > 0.5
          const onset = 0.4 + (FLOORS - f.i) * 0.06 + rand(f.i + j + 7) * 0.4
          const z = -f.d / 2 + (f.d / colsX) * (j + 0.5)
          panels.push(
            <mesh key={`x${j}`} position={[f.w / 2 + 0.006, 0, z]} rotation={[0, Math.PI / 2, 0]}>
              <planeGeometry args={[(f.d / colsX) * 0.5, FH * 0.42]} />
              <meshStandardMaterial ref={(m) => { if (m && isLit) windows.current.push({ m: m as THREE.MeshStandardMaterial, onset }) }} color={WARM} emissive={WARM} emissiveIntensity={0} opacity={isLit ? 1 : 0.06} transparent toneMapped={false} />
            </mesh>
          )
        }
        return (
          <group key={f.i} position={[0, f.y, 0]}>
            <mesh material={glassMat}><boxGeometry args={[f.w, FH, f.d]} /></mesh>
            <mesh position={[0, -FH / 2 + 0.015, 0]}>
              <boxGeometry args={[f.w * 1.01, 0.03, f.d * 1.01]} />
              <meshStandardMaterial ref={(m) => { if (m) strips.current[f.i] = m as THREE.MeshStandardMaterial }} color={BLUE} emissive={BLUE} emissiveIntensity={0} toneMapped={false} />
            </mesh>
            {panels}
          </group>
        )
      })}
      <mesh position={[0, TOP_Y + 0.4, 0]}><boxGeometry args={[0.14, 0.9, 0.14]} /><meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={2.2} toneMapped={false} /></mesh>
    </group>
  )
}

function City() {
  const buildings = useMemo(() => {
    const arr: { x: number; z: number; w: number; d: number; h: number }[] = []
    let s = 1
    for (let ring = 0; ring < 3; ring++) {
      const count = 14 + ring * 8
      const radius = 26 + ring * 13
      for (let k = 0; k < count; k++) {
        const ang = (k / count) * Math.PI * 2 + rand(s++) * 0.5
        const rr = radius + rand(s++) * 8
        arr.push({ x: Math.cos(ang) * rr, z: Math.sin(ang) * rr, w: 2 + rand(s++) * 3.5, d: 2 + rand(s++) * 3.5, h: 4 + rand(s++) * (14 + ring * 6) })
      }
    }
    return arr
  }, [])
  const mat = useMemo(() => new THREE.MeshStandardMaterial({ color: '#0a0e18', metalness: 0.85, roughness: 0.28, envMapIntensity: 0.45 }), [])
  return <group>{buildings.map((b, i) => (<mesh key={i} position={[b.x, b.h / 2, b.z]} material={mat}><boxGeometry args={[b.w, b.h, b.d]} /></mesh>))}</group>
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[300, 300]} />
      <MeshReflectorMaterial resolution={512} mixBlur={1.2} mixStrength={2.2} roughness={0.7} depthScale={1} minDepthThreshold={0.4} maxDepthThreshold={1.2} color="#0a0f1a" metalness={0.55} />
    </mesh>
  )
}

// auto-play drone intro on load -> settles into the hero framing (building on the right)
function CameraRig() {
  const look = useRef(new THREE.Vector3(-3, 9, 0))
  const start = useMemo(() => new THREE.Vector3(8, 22, 30), [])
  const end = useMemo(() => new THREE.Vector3(19, 7.5, 22), [])
  const lookStart = useMemo(() => new THREE.Vector3(-3, 9, 0), [])
  const lookEnd = useMemo(() => new THREE.Vector3(-5, 6.5, 0), [])
  useFrame((state) => {
    const t = state.clock.elapsedTime
    const p = THREE.MathUtils.clamp(t / 5, 0, 1)
    const e = easeInOut(p)
    state.camera.position.lerpVectors(start, end, e)
    // gentle continuous drift once settled
    const drift = Math.min(Math.max((t - 5) / 2, 0), 1)
    state.camera.position.x += Math.sin(t * 0.18) * 0.5 * drift
    state.camera.position.y += Math.sin(t * 0.13) * 0.25 * drift
    look.current.lerpVectors(lookStart, lookEnd, e)
    state.camera.lookAt(look.current)
  })
  return null
}

export default function TowerScene() {
  return (
    <Canvas
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      camera={{ position: [8, 22, 30], fov: 32 }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#cdd3dd', 55, 130]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[12, 20, 8]} intensity={2.2} color="#fff1dc" castShadow />
        <pointLight position={[-10, 6, 6]} intensity={60} color="#2E77FA" distance={50} />

        <CameraRig />
        <HeroTower />
        <City />
        <Ground />

        {/* real sky + image-based lighting */}
        <Environment files="/hdri/sky.hdr" background backgroundBlurriness={0.02} environmentIntensity={1} />

        <EffectComposer>
          <Bloom luminanceThreshold={0.75} intensity={0.45} mipmapBlur radius={0.8} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
