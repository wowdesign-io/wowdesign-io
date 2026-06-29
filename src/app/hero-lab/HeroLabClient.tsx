'use client'

import dynamic from 'next/dynamic'

const TowerScene = dynamic(() => import('@/components/hero3d/TowerScene'), { ssr: false })

export default function HeroLabClient() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background:
          'radial-gradient(70% 60% at 50% 100%, rgba(60,112,255,0.30), transparent 70%), radial-gradient(90% 70% at 50% 115%, rgba(160,68,255,0.22), transparent 72%), #070912',
        overflow: 'hidden',
      }}
    >
      <TowerScene />
    </div>
  )
}
