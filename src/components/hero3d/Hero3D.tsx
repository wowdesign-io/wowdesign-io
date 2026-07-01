'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const TowerScene = dynamic(() => import('./TowerScene'), { ssr: false })

const FLIGHT_MS = 7200 // matches the drone flight duration in TowerScene (DUR 7.5s)

// Drop-in replacement for the homepage's isometric building image. Fills the hero as a background,
// shows a page loader until the model+sky are ready (no flash of the old background), then signals
// `flight-done` on <body> once the drone flight settles so the hero card can animate in after it.
export default function Hero3D() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!ready) return
    const t = setTimeout(() => document.body.classList.add('flight-done'), FLIGHT_MS)
    return () => {
      clearTimeout(t)
      document.body.classList.remove('flight-done')
    }
  }, [ready])

  return (
    <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      <TowerScene onReady={() => setReady(true)} />
      {/* loader — covers the hero until the 3D is ready so the old page background never flashes */}
      <div
        style={{
          position: 'absolute', inset: 0, zIndex: 5, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 22, background: '#0a1020',
          opacity: ready ? 0 : 1, pointerEvents: ready ? 'none' : 'auto', transition: 'opacity .8s ease',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/wow-design-color-logo-dark.svg" alt="wowdesign" style={{ height: 38 }} />
        <div style={{ width: 34, height: 34, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)', borderTopColor: '#2E77FA', animation: 'hlspin .9s linear infinite' }} />
      </div>
      <style>{`@keyframes hlspin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
