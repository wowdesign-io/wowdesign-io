'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const TowerScene = dynamic(() => import('@/components/hero3d/TowerScene'), { ssr: false })

const ghost: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: 10, padding: '14px 26px',
  background: 'rgba(11,15,25,0.55)', border: '1px solid rgba(255,255,255,0.18)', color: '#fff',
  fontFamily: '"Outfit", sans-serif', fontSize: '1rem', fontWeight: 500, textTransform: 'uppercase',
  letterSpacing: '0.02em', textDecoration: 'none', borderRadius: 2, backdropFilter: 'blur(6px)',
}

export default function HeroLabClient() {
  const [ready, setReady] = useState(false)

  return (
    <div style={{ position: 'fixed', inset: 0, background: '#0a1020', overflow: 'hidden' }}>
      <TowerScene onReady={() => setReady(true)} />

      {/* loading screen — covers until the model + sky are loaded, then fades out
          (so the drone flight never plays before the building is there) */}
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 50, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 22, background: '#0a1020',
          opacity: ready ? 0 : 1, pointerEvents: ready ? 'none' : 'auto',
          transition: 'opacity 0.9s ease',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/wow-design-color-logo-dark.svg" alt="wowdesign" style={{ height: 38 }} />
        <div style={{ width: 34, height: 34, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.15)', borderTopColor: '#2E77FA', animation: 'spin 0.9s linear infinite' }} />
      </div>

      {/* fixed brand nav */}
      <header style={{ position: 'fixed', insetInline: 0, top: 0, zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', padding: '16px max(28px, 4vw)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/" aria-label="wowdesign home"><img src="/images/wow-design-color-logo-dark.svg" alt="wowdesign" style={{ height: 30, display: 'block', filter: 'drop-shadow(0 1px 4px rgba(0,0,0,0.4))' }} /></a>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Features', 'How it works', 'About', 'Carry Cost Calc'].map((l) => (
            <a key={l} href="#" style={{ color: '#fff', opacity: 0.85, fontFamily: '"Inter", sans-serif', fontSize: '1rem', textDecoration: 'none', textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>{l}</a>
          ))}
        </nav>
        <a href="/book-a-demo" style={{ background: '#2E77FA', color: '#fff', fontFamily: '"Outfit", sans-serif', fontWeight: 500, fontSize: '0.95rem', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '11px 22px', borderRadius: 2, textDecoration: 'none', whiteSpace: 'nowrap' }}>Book A Demo</a>
      </header>

      {/* hero intro — left-offset; fades in as the drone settles (after load) */}
      <div
        style={{
          position: 'absolute', left: 'max(28px, 5vw)', top: '50%', transform: 'translateY(-50%)',
          maxWidth: 600, zIndex: 5, pointerEvents: 'none',
          opacity: 0, animation: ready ? 'heroIn 1.2s ease 6.2s forwards' : 'none',
        }}
      >
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '0.5rem 1rem', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 4, color: '#fff', fontFamily: '"Outfit", sans-serif', fontSize: '0.9rem', textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>Presales System</span>
        <h1 style={{ margin: '22px 0 0', color: '#fff', fontFamily: '"Outfit", sans-serif', fontWeight: 500, fontSize: '5.5rem', lineHeight: 1, letterSpacing: '-0.01em', textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}>Sell Out<br />Faster.</h1>
        <p style={{ margin: '24px 0 0', maxWidth: 520, color: '#fff', opacity: 0.9, fontFamily: '"Inter", sans-serif', fontSize: '1.2rem', lineHeight: 1.6, textShadow: '0 1px 12px rgba(0,0,0,0.5)' }}>
          Boutique developers close 31% faster with wowdesign — the website, the digital twin, and the
          automated follow-up system, so your team always knows who&rsquo;s ready to buy.
        </p>
        <div style={{ display: 'flex', gap: 20, marginTop: 34, pointerEvents: 'auto' }}>
          <a href="/carry-cost-calculator" style={ghost}>Carry Cost Calc ✦</a>
          <a href="#features" style={ghost}>Features ✦</a>
        </div>
      </div>

      <style>{`@keyframes heroIn { to { opacity: 1 } } @keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
