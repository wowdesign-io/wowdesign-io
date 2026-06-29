'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Suspense, useMemo, useRef } from 'react'
import * as THREE from 'three'

const BLUE = '#2E77FA'

// width scale per floor — gives the tower clean architectural setbacks
function taper(i: number, n: number) {
  if (i < n * 0.34) return 1
  if (i < n * 0.62) return 0.82
  if (i < n * 0.84) return 0.62
  return 0.44
}

const FLOORS = 14
const FH = 0.82
const GAP = 0.1
const BASE_W = 3
const BASE_D = 2.2
const TOP_Y = FLOORS * (FH + GAP)

function Tower() {
  const group = useRef<THREE.Group>(null)
  const strips = useRef<THREE.MeshStandardMaterial[]>([])

  const floors = useMemo(() => {
    const arr: { i: number; y: number; w: number; d: number }[] = []
    for (let i = 0; i < FLOORS; i++) {
      const s = taper(i, FLOORS)
      arr.push({ i, y: i * (FH + GAP) + FH / 2, w: BASE_W * s, d: BASE_D * s })
    }
    return arr
  }, [])

  const glassMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: '#0e1626',
        metalness: 0.55,
        roughness: 0.28,
      }),
    []
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (group.current) group.current.rotation.y = t * 0.12
    strips.current.forEach((m, i) => {
      if (!m) return
      const onset = i * 0.13
      const lit = Math.min(Math.max((t - onset) / 0.7, 0), 1)
      const held = t > onset + 0.7
      const pulse = held ? 0.85 + Math.sin(t * 1.4 + i * 0.4) * 0.12 : 1
      m.emissiveIntensity = lit * 2.1 * pulse
    })
  })

  return (
    <group ref={group} position={[0, -(TOP_Y / 2) - 1.4, 0]}>
      {floors.map((f) => (
        <group key={f.i} position={[0, f.y, 0]}>
          <mesh material={glassMat}>
            <boxGeometry args={[f.w, FH, f.d]} />
          </mesh>
          <mesh position={[0, -FH / 2 + 0.02, 0]}>
            <boxGeometry args={[f.w * 1.015, 0.035, f.d * 1.015]} />
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
        </group>
      ))}
      <mesh position={[0, TOP_Y + 0.5, 0]}>
        <boxGeometry args={[0.18, 1.1, 0.18]} />
        <meshStandardMaterial color={BLUE} emissive={BLUE} emissiveIntensity={3} toneMapped={false} />
      </mesh>
    </group>
  )
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -(TOP_Y / 2) - 0.05, 0]}>
      <planeGeometry args={[80, 80]} />
      <meshStandardMaterial color="#070a12" metalness={0.6} roughness={0.45} />
    </mesh>
  )
}

export default function TowerScene() {
  return (
    <Canvas
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      dpr={[1, 2]}
      camera={{ position: [11, 3, 30], fov: 24 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        {/* warm key + cool fill */}
        <directionalLight position={[6, 14, 6]} intensity={2.4} color="#ffe2b8" />
        <directionalLight position={[-6, 6, -4]} intensity={1.1} color="#3a5ad9" />
        {/* brand ambient glow */}
        <pointLight position={[-9, 5, 4]} intensity={120} color="#2E77FA" distance={40} />
        <pointLight position={[9, 2, 6]} intensity={70} color="#D738FF" distance={40} />

        <Tower />
        <Ground />

        <EffectComposer>
          <Bloom luminanceThreshold={0.3} intensity={0.85} mipmapBlur radius={0.8} />
        </EffectComposer>
      </Suspense>
    </Canvas>
  )
}
