'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useProgress } from '@react-three/drei'

const TowerScene = dynamic(() => import('./TowerScene'), { ssr: false })

const FLIGHT_MS = 7200 // matches the drone flight duration in TowerScene (DUR 7.5s)

// Drop-in replacement for the homepage's isometric building image. Fills the hero as a background,
// shows a premium full-page loader (portaled to <body>, so it covers the whole page incl. nav):
// brand glow + a real load-progress bar (drei useProgress) over the ~10-15s model+HDRI load, then
// fades out and signals `flight-done` on <body> once the drone flight settles.
export default function Hero3D() {
  const [ready, setReady] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { progress } = useProgress()

  useEffect(() => setMounted(true), [])

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
      {mounted && createPortal(
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', gap: 30, background: '#0a1020',
            opacity: ready ? 0 : 1, pointerEvents: ready ? 'none' : 'auto', transition: 'opacity .8s ease',
          }}
        >
          {/* brand glow — signature blue->purple->pink light behind the mark (background lighting, per brand) */}
          <div
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', animation: 'hlglow 3.4s ease-in-out infinite',
              background: 'radial-gradient(42% 42% at 50% 45%, rgba(46,119,250,0.30) 0%, rgba(215,56,255,0.15) 46%, rgba(255,44,85,0.06) 64%, rgba(10,16,32,0) 78%)',
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wow-design-color-logo-dark.svg" alt="wowdesign" style={{ height: 42, position: 'relative' }} />
          {/* real load-progress bar — solid brand blue (the gradient stays background-only, per brand) */}
          <div style={{ position: 'relative', width: 260, height: 2, background: 'rgba(255,255,255,0.1)', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: '#2E77FA', transition: 'width .35s ease' }} />
          </div>
          <div style={{ position: 'relative', fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 500, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
            {Math.round(progress)}%
          </div>
          <style>{`@keyframes hlglow { 0%, 100% { opacity: .6 } 50% { opacity: 1 } }`}</style>
        </div>,
        document.body,
      )}
    </div>
  )
}
