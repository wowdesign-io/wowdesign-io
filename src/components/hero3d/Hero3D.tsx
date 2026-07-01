'use client'

import dynamic from 'next/dynamic'

const TowerScene = dynamic(() => import('./TowerScene'), { ssr: false })

// Drop-in replacement for the homepage's isometric building image (banner-world-element).
// Sizing/placement is intentionally rough for now — Andy will refine background/overlay/placement
// once the whole page is assembled on /hero-lab.
export default function Hero3D() {
  return (
    <div style={{ position: 'relative', width: '100%', height: 'min(80vh, 820px)', minHeight: 460 }}>
      <TowerScene />
    </div>
  )
}
