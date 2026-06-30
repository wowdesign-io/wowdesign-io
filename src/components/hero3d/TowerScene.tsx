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
const WARM = '#ffb070'

// deterministic pseudo-random (SSR/CSR-safe)
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

const FLOORS = 16
const FH = 0.82
const GAP = 0.1
const STEP = FH + GAP
const BASE_W = 3
const BASE_D = 2.2
const TOP_Y = FLOORS * STEP

// ---- the hero tower ----
function HeroTower() {
  const strips = useRef<THREE.MeshStandardMaterial[]>([])
  const windows = useRef<{ m: THREE.MeshStandardMaterial; onset: number }[]>([])

  const glassMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({ color: '#0c1320', metalness: 0.9, roughness: 0.12, envMapIntensity: 1.4 }),
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
      m.emissiveIntensity = Math.min(Math.max((t - i * 0.11) / 0.7, 0), 1) * 1.3
    })
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
          const onset = 0.6 + (FLOORS - f.i) * 0.08 + rand(f.i + j) * 0.4
          const x = -f.w / 2 + (f.w / cols) * (j + 0.5)
          panels.push(
            <mesh key={`z${j}`} position={[x, 0, f.d / 2 + 0.006]}>
              <planeGeometry args={[(f.w / cols) * 0.5, FH * 0.42]} />
              <meshStandardMaterial
                ref={(m) => { if (m && isLit) windows.current.push({ m: m as THREE.MeshStandardMaterial, onset }) }}
                color={WARM} emissive={WARM} emissiveIntensity={0}
                opacity={isLit ? 1 : 0.06} transparent toneMapped={false}
              />
            </mesh>
          )
        }
        const colsX = Math.max(4, Math.round(f.d / 0.32))
        for (let j = 0; j < colsX; j++) {
          const isLit = rand(f.i * 13 + j + 99) > 0.5
          const onset = 0.6 + (FLOORS - f.i) * 0.08 + rand(f.i + j + 7) * 0.4
          const z = -f.d / 2 + (f.d / colsX) * (j + 0.5)
          panels.push(
            <mesh key={`x${j}`} position={[f.w / 2 + 0.006, 0, z]} rotation={[0, Math.PI / 2, 0]}>
              <planeGeometry args={[(f.d / colsX) * 0.5, FH * 0.42]} />
              <meshStandardMaterial
                ref={(m) => { if (m && isLit) windows.current.push({ m: m as THREE.MeshStandardMaterial, onset }) }}
                color={WARM} emissive={WARM} emissiveIntensity={0}
                opacity={isLit ? 1 : 0.06} transparent toneMapped={false}
              />
            </mesh>
          )
        }
        return (
          <group key={f.i} position={[0, f.y, 0]}>
            <mesh material={glassMat}><boxGeometry args={[f.w, FH, f.d]} /></mesh>
            <mesh position={[0, -FH / 2 + 0.015, 0]}>
              <boxGeometry args={[f.w * 1.01, 0.03, f.d * 1.01]} />
              <meshStandardMaterial
                ref={(m) => { if (m) strips.current[f.i] = m as THREE.MeshStandardMaterial }}
                color={BLUE} emissive={BLUE} emissiveIntensity={0} toneMapped={false}
              />
            </mesh>
            {panels}
          </group>
        )
      })}
      <mesh position={[0, TOP_Y + 0.4, 0]}>
        <boxGeometry args={[0.14, 0.9, 0.14]} />
        <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
    </group>
  )
}

// ---- surrounding skyline: distant dark silhouettes that fade into the fog ----
function City() {
  const buildings = useMemo(() => {
    const arr: { x: number; z: number; w: number; d: number; h: number }[] = []
    let s = 1
    for (let ring = 0; ring < 3; ring++) {
      const count = 14 + ring * 8
      const radius = 24 + ring * 13
      for (let k = 0; k < count; k++) {
        const ang = (k / count) * Math.PI * 2 + rand(s++) * 0.5
        const rr = radius + rand(s++) * 8
        const x = Math.cos(ang) * rr
        const z = Math.sin(ang) * rr
        const w = 2 + rand(s++) * 3.5
        const d = 2 + rand(s++) * 3.5
        const h = 4 + rand(s++) * (14 + ring * 6)
        arr.push({ x, z, w, d, h })
      }
    }
    return arr
  }, [])

  const mat = useMemo(
    () => new THREE.MeshStandardMaterial({ color: '#080c16', metalness: 0.6, roughness: 0.55, envMapIntensity: 0.5 }),
    []
  )

  return (
    <group>
      {buildings.map((b, i) => (
        <mesh key={i} position={[b.x, b.h / 2, b.z]} material={mat}>
          <boxGeometry args={[b.w, b.h, b.d]} />
        </mesh>
      ))}
    </group>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[200, 200]} />
      <MeshReflectorMaterial
        resolution={512} mixBlur={1} mixStrength={2.5} roughness={0.75}
        depthScale={1} minDepthThreshold={0.4} maxDepthThreshold={1.2}
        color="#05070d" metalness={0.6}
      />
    </mesh>
  )
}

function CameraRig() {
  const scroll = useScroll()
  const look = useRef(new THREE.Vector3(0, 7, 0))
  const path = useMemo(
    () => new THREE.CatmullRomCurve3([
      new THREE.Vector3(14, 6.5, 27),
      new THREE.Vector3(26, 11, 10),
      new THREE.Vector3(13, 11, 12),
      new THREE.Vector3(5.5, 10.5, 6.5),
      new THREE.Vector3(3.2, 10.2, 4.4),
    ]),
    []
  )
  const targets = useMemo(
    () => new THREE.CatmullRomCurve3([
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
    state.camera.position.lerp(path.getPoint(p), 0.08)
    look.current.lerp(targets.getPoint(p), 0.08)
    state.camera.lookAt(look.current)
  })
  return null
}

// ---- hero intro text inside the scroll layer (fades as you fly in) ----
function HeroIntro() {
  const scroll = useScroll()
  const intro = useRef<HTMLDivElement>(null)
  useFrame(() => {
    if (intro.current) {
      const o = 1 - THREE.MathUtils.clamp(scroll.offset / 0.16, 0, 1)
      intro.current.style.opacity = String(o)
      intro.current.style.transform = `translateY(${scroll.offset * -40}px)`
    }
  })
  const ghost: React.CSSProperties = {
    display: 'inline-flex', alignItems: 'center', gap: 10, padding: '13px 25px',
    background: '#0b0f19', border: '1px solid rgba(255,255,255,0.12)', color: '#fff',
    fontFamily: '"Outfit", sans-serif', fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase',
    letterSpacing: '0.02em', textDecoration: 'none', borderRadius: 2,
  }
  return (
    <div
      ref={intro}
      style={{ position: 'absolute', top: '15vh', width: '100%', textAlign: 'center', padding: '0 24px', pointerEvents: 'none' }}
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 4, color: '#94a3b8', fontFamily: '"Outfit", sans-serif', fontSize: '0.9rem' }}>
        Presales System
      </span>
      <h1 style={{ margin: '20px 0 0', color: '#fff', fontFamily: '"Outfit", sans-serif', fontWeight: 500, fontSize: '6rem', lineHeight: 1, letterSpacing: '-0.01em' }}>
        Sell Out Faster.
      </h1>
      <p style={{ margin: '22px auto 0', maxWidth: 720, color: 'rgba(255,255,255,0.74)', fontFamily: '"Inter", sans-serif', fontSize: '1.25rem', lineHeight: 1.6 }}>
        Boutique developers close 31% faster with wowdesign — the website, the digital twin, and the
        automated follow-up system, so your team always knows who&rsquo;s ready to buy.
      </p>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 34, pointerEvents: 'auto' }}>
        <a href="/carry-cost-calculator" style={ghost}>Carry Cost Calc ✦</a>
        <a href="#features" style={ghost}>Features ✦</a>
      </div>
    </div>
  )
}

export default function TowerScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      camera={{ position: [14, 6.5, 27], fov: 30 }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#0a1020', 24, 80]} />
        <ambientLight intensity={0.22} />
        <directionalLight position={[10, 20, 10]} intensity={1.5} color="#ffe2b8" />
        <pointLight position={[-12, 7, 6]} intensity={160} color="#2E77FA" distance={55} />
        <pointLight position={[12, 4, 8]} intensity={90} color="#D738FF" distance={55} />

        <ScrollControls pages={3} damping={0.3}>
          <CameraRig />
          <HeroTower />
          <City />
          <Ground />
          <Scroll html style={{ width: '100%' }}>
            <HeroIntro />
          </Scroll>
        </ScrollControls>

        <Environment resolution={256}>
          <Lightformer intensity={2.4} color="#ffe6c4" position={[8, 14, 8]} scale={[16, 16, 1]} />
          <Lightformer intensity={1.2} color="#2E77FA" position={[-12, 6, -6]} scale={[16, 16, 1]} />
          <Lightformer intensity={0.7} color="#ffffff" position={[0, 20, 0]} scale={[30, 30, 1]} />
        </Environment>

        <EffectComposer>
          <Bloom luminanceThreshold={0.6} intensity={0.55} mipmapBlur radius={0.8} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
