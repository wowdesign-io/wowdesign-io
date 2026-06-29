'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import {
  ScrollControls,
  Scroll,
  useScroll,
  Environment,
  Lightformer,
  MeshReflectorMaterial,
} from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

const BLUE = '#2E77FA'
const WARM = '#ffc98a'

function taper(i: number, n: number) {
  if (i < n * 0.34) return 1
  if (i < n * 0.62) return 0.84
  if (i < n * 0.84) return 0.66
  return 0.48
}

const FLOORS = 16
const FH = 0.82
const GAP = 0.1
const STEP = FH + GAP
const BASE_W = 3
const BASE_D = 2.2
const TOP_Y = FLOORS * STEP

// deterministic pseudo-random so SSR/CSR match and the facade looks organic
function lit(i: number, j: number) {
  const v = Math.sin(i * 12.9898 + j * 78.233) * 43758.5453
  return v - Math.floor(v) // 0..1
}

function Tower() {
  const strips = useRef<THREE.MeshStandardMaterial[]>([])
  const windows = useRef<{ m: THREE.MeshStandardMaterial; onset: number }[]>([])

  const glassMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0c1320',
        metalness: 0.9,
        roughness: 0.12,
        envMapIntensity: 1.3,
      }),
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
    strips.current.forEach((m, i) => {
      if (!m) return
      const onset = i * 0.11
      const v = Math.min(Math.max((t - onset) / 0.7, 0), 1)
      m.emissiveIntensity = v * 1.4
    })
    // warm windows light up over the first few seconds (the "selling out" fill)
    windows.current.forEach((w) => {
      if (!w?.m) return
      const v = Math.min(Math.max((t - w.onset) / 0.6, 0), 1)
      const pulse = 0.9 + Math.sin(t * 1.1 + w.onset) * 0.1
      w.m.emissiveIntensity = v * 2.4 * pulse
    })
  })

  windows.current = []

  return (
    <group position={[0, 0, 0]}>
      {floors.map((f) => {
        // window panels on the two camera-facing sides (+Z, +X)
        const cols = Math.max(3, Math.round(f.w / 0.5))
        const panels: React.ReactNode[] = []
        for (let j = 0; j < cols; j++) {
          const isLit = lit(f.i, j) > 0.45
          const onset = 0.6 + (FLOORS - f.i) * 0.08 + lit(f.i, j) * 0.4
          const x = -f.w / 2 + (f.w / cols) * (j + 0.5)
          panels.push(
            <mesh key={`z${j}`} position={[x, 0, f.d / 2 + 0.005]}>
              <planeGeometry args={[(f.w / cols) * 0.7, FH * 0.6]} />
              <meshStandardMaterial
                ref={(m) => {
                  if (m && isLit) windows.current.push({ m: m as THREE.MeshStandardMaterial, onset })
                }}
                color={WARM}
                emissive={WARM}
                emissiveIntensity={isLit ? 0.0 : 0}
                opacity={isLit ? 1 : 0.06}
                transparent
                toneMapped={false}
              />
            </mesh>
          )
        }
        const colsX = Math.max(3, Math.round(f.d / 0.5))
        for (let j = 0; j < colsX; j++) {
          const isLit = lit(f.i + 99, j) > 0.45
          const onset = 0.6 + (FLOORS - f.i) * 0.08 + lit(f.i + 99, j) * 0.4
          const z = -f.d / 2 + (f.d / colsX) * (j + 0.5)
          panels.push(
            <mesh key={`x${j}`} position={[f.w / 2 + 0.005, 0, z]} rotation={[0, Math.PI / 2, 0]}>
              <planeGeometry args={[(f.d / colsX) * 0.7, FH * 0.6]} />
              <meshStandardMaterial
                ref={(m) => {
                  if (m && isLit) windows.current.push({ m: m as THREE.MeshStandardMaterial, onset })
                }}
                color={WARM}
                emissive={WARM}
                emissiveIntensity={0}
                opacity={isLit ? 1 : 0.06}
                transparent
                toneMapped={false}
              />
            </mesh>
          )
        }

        return (
          <group key={f.i} position={[0, f.y, 0]}>
            <mesh material={glassMat}>
              <boxGeometry args={[f.w, FH, f.d]} />
            </mesh>
            {/* slim blue floor accent */}
            <mesh position={[0, -FH / 2 + 0.015, 0]}>
              <boxGeometry args={[f.w * 1.01, 0.03, f.d * 1.01]} />
              <meshStandardMaterial
                ref={(m) => {
                  if (m) strips.current[f.i] = m as THREE.MeshStandardMaterial
                }}
                color={BLUE}
                emissive={BLUE}
                emissiveIntensity={0}
                toneMapped={false}
              />
            </mesh>
            {panels}
          </group>
        )
      })}
      {/* slim crown */}
      <mesh position={[0, TOP_Y + 0.4, 0]}>
        <boxGeometry args={[0.14, 0.9, 0.14]} />
        <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
    </group>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[120, 120]} />
      <MeshReflectorMaterial
        resolution={512}
        mixBlur={1}
        mixStrength={3}
        roughness={0.7}
        depthScale={1}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.2}
        color="#05070d"
        metalness={0.6}
      />
    </mesh>
  )
}

// scroll drives a cinematic camera path: wide → drone orbit → toward a lit unit
function CameraRig() {
  const scroll = useScroll()
  const look = useRef(new THREE.Vector3(0, 7, 0))

  const path = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(15, 7, 30),
        new THREE.Vector3(24, 10, 9),
        new THREE.Vector3(12, 11, 11),
        new THREE.Vector3(5.5, 10.5, 6.5),
        new THREE.Vector3(3.2, 10.2, 4.4),
      ]),
    []
  )
  const targets = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0, 7, 0),
        new THREE.Vector3(0, 8, 0),
        new THREE.Vector3(1.2, 9.5, 0.6),
        new THREE.Vector3(1.6, 10.1, 0.9),
        new THREE.Vector3(1.5, 10.2, 0.6),
      ]),
    []
  )

  useFrame((state) => {
    const p = THREE.MathUtils.clamp(scroll.offset, 0, 1)
    const pos = path.getPoint(p)
    const tgt = targets.getPoint(p)
    state.camera.position.lerp(pos, 0.08)
    look.current.lerp(tgt, 0.08)
    state.camera.lookAt(look.current)
  })
  return null
}

export default function TowerScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      camera={{ position: [15, 7, 30], fov: 30 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <directionalLight position={[8, 18, 8]} intensity={1.6} color="#ffe2b8" />
        <pointLight position={[-10, 6, 5]} intensity={140} color="#2E77FA" distance={45} />
        <pointLight position={[10, 3, 7]} intensity={80} color="#D738FF" distance={45} />

        <ScrollControls pages={3} damping={0.3}>
          <CameraRig />
          <Tower />
          <Ground />
          <Scroll html style={{ width: '100%' }}>
            <div
              style={{
                position: 'absolute',
                top: '11vh',
                width: '100%',
                textAlign: 'center',
                pointerEvents: 'none',
              }}
            >
              <h1
                style={{
                  margin: 0,
                  color: '#fff',
                  fontFamily: '"Outfit", sans-serif',
                  fontWeight: 500,
                  fontSize: '6rem',
                  lineHeight: 1,
                  letterSpacing: '-0.01em',
                }}
              >
                Sell Out Faster.
              </h1>
            </div>
          </Scroll>
        </ScrollControls>

        {/* env reflections without a remote HDRI — keeps the glass real + reliable */}
        <Environment resolution={256}>
          <Lightformer intensity={2.4} color="#ffe6c4" position={[6, 12, 6]} scale={[14, 14, 1]} />
          <Lightformer intensity={1.2} color="#2E77FA" position={[-10, 5, -5]} scale={[14, 14, 1]} />
          <Lightformer intensity={0.7} color="#ffffff" position={[0, 18, 0]} scale={[26, 26, 1]} />
        </Environment>

        <EffectComposer>
          <Bloom luminanceThreshold={0.4} intensity={0.8} mipmapBlur radius={0.85} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
