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
          'radial-gradient(70% 60% at 50% 100%, rgba(60,112,255,0.22), transparent 70%), radial-gradient(90% 70% at 50% 115%, rgba(160,68,255,0.16), transparent 72%), #0a1020',
        overflow: 'hidden',
      }}
    >
      <TowerScene />

      {/* fixed brand nav over the scene */}
      <header
        style={{
          position: 'fixed',
          insetInline: 0,
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          padding: '14px max(24px, 4vw)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          background: 'linear-gradient(to bottom, rgba(10,16,32,0.7), rgba(10,16,32,0))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          pointerEvents: 'auto',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href="/" aria-label="wowdesign home">
          <img src="/images/wow-design-color-logo-dark.svg" alt="wowdesign" style={{ height: 30, display: 'block' }} />
        </a>
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="hero-nav">
          {['Features', 'How it works', 'About', 'Carry Cost Calc'].map((l) => (
            <a
              key={l}
              href="#"
              style={{ color: '#94a3b8', fontFamily: '"Inter", sans-serif', fontSize: '1rem', textDecoration: 'none' }}
            >
              {l}
            </a>
          ))}
        </nav>
        <a
          href="/book-a-demo"
          style={{
            background: '#2E77FA',
            color: '#fff',
            fontFamily: '"Outfit", sans-serif',
            fontWeight: 500,
            fontSize: '0.95rem',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            padding: '11px 22px',
            borderRadius: 2,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Book A Demo
        </a>
      </header>
    </div>
  )
}
