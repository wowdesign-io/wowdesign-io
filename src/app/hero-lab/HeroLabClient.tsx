'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'

const TowerScene = dynamic(() => import('@/components/hero3d/TowerScene'), { ssr: false })

const NAV = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'About', href: '/#about' },
  { label: 'Carry Cost Calc', href: '/carry-cost-calculator' },
]

// brand tagline icon (building) — same glyph as the live homepage, tinted brand blue
function BuildingIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 256 256" aria-hidden="true" style={{ display: 'block' }}>
      <g fill="currentColor">
        <path d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32" opacity=".25" />
        <path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0" />
      </g>
    </svg>
  )
}

export default function HeroLabClient() {
  const [ready, setReady] = useState(false)

  return (
    <div className="hl-root">
      <TowerScene onReady={() => setReady(true)} />

      {/* legibility scrims — top band for the nav, left+bottom for the copy */}
      <div className="hl-navscrim" />
      <div className="hl-scrim" />

      {/* loading screen — holds until the model + sky load, then fades out */}
      <div className={`hl-loader${ready ? ' hl-hide' : ''}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/wow-design-color-logo-dark.svg" alt="wowdesign" style={{ height: 38 }} />
        <div className="hl-spin" />
      </div>

      {/* nav */}
      <header className={`hl-nav${ready ? ' hl-navin' : ''}`}>
        <a href="/" aria-label="wowdesign home" className="hl-logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wow-design-color-logo-dark.svg" alt="wowdesign" />
        </a>
        <nav className="hl-links">
          {NAV.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <a href="/book-a-demo" className="hl-cta">Book a Demo</a>
      </header>

      {/* hero copy — fades up as the drone settles */}
      <div className={`hl-hero${ready ? ' hl-heroin' : ''}`}>
        <span className="hl-tag"><BuildingIcon />Presales System</span>
        <h1 className="hl-title">Sell Out<br />Faster.</h1>
        <p className="hl-desc">
          Boutique developers close 31% faster with wowdesign — the website, the digital twin, and the
          automated follow-up system, so your team always knows who&rsquo;s ready to buy.
        </p>
        <div className="hl-btns">
          <a href="/carry-cost-calculator" className="hl-btn hl-primary">Carry Cost Calc <span className="hl-star">✦</span></a>
          <a href="#features" className="hl-btn hl-ghost">Features <span className="hl-star">✦</span></a>
        </div>
      </div>

      <style>{`
        .hl-root { position: fixed; inset: 0; background: #0a1020; overflow: hidden; }

        .hl-navscrim { position: absolute; inset: 0 0 auto 0; height: 140px; z-index: 2; pointer-events: none;
          background: linear-gradient(180deg, rgba(7,11,22,0.55) 0%, rgba(7,11,22,0) 100%); }
        .hl-scrim { position: absolute; inset: 0; z-index: 2; pointer-events: none;
          background:
            linear-gradient(90deg, rgba(7,11,22,0.82) 0%, rgba(7,11,22,0.5) 26%, rgba(7,11,22,0.12) 48%, rgba(7,11,22,0) 62%),
            linear-gradient(0deg, rgba(7,11,22,0.5) 0%, rgba(7,11,22,0) 30%); }

        .hl-loader { position: fixed; inset: 0; z-index: 50; display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 22px; background: #0a1020;
          transition: opacity .9s ease; }
        .hl-loader.hl-hide { opacity: 0; pointer-events: none; }
        .hl-spin { width: 34px; height: 34px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.15);
          border-top-color: #2E77FA; animation: hlspin .9s linear infinite; }

        .hl-nav { position: fixed; inset: 0 0 auto 0; z-index: 10; display: flex; align-items: center;
          justify-content: space-between; gap: 2rem; padding: 20px max(28px, 4vw);
          opacity: 0; transform: translateY(-10px); transition: opacity .7s ease .3s, transform .7s ease .3s; }
        .hl-nav.hl-navin { opacity: 1; transform: none; }
        .hl-logo img { height: 30px; display: block; filter: drop-shadow(0 1px 6px rgba(0,0,0,0.45)); }
        .hl-links { display: flex; gap: 2.2rem; align-items: center; }
        .hl-links a { color: rgba(255,255,255,0.82); font-family: "Inter", sans-serif; font-size: 0.98rem;
          text-decoration: none; text-shadow: 0 1px 6px rgba(0,0,0,0.45); transition: color .2s ease; }
        .hl-links a:hover { color: #fff; }
        .hl-cta { background: #2E77FA; color: #fff; font-family: "Outfit", sans-serif; font-weight: 500;
          font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.04em; padding: 12px 24px;
          border-radius: 4px; text-decoration: none; white-space: nowrap;
          box-shadow: 0 8px 26px rgba(46,119,250,0.4); transition: background .2s ease, transform .2s ease; }
        .hl-cta:hover { background: #1f63e0; transform: translateY(-1px); }

        .hl-hero { position: absolute; left: max(28px, 5vw); top: 50%; transform: translateY(calc(-50% + 16px));
          max-width: 620px; z-index: 5; pointer-events: none; opacity: 0;
          transition: opacity 1.1s ease, transform 1.1s ease; }
        .hl-hero.hl-heroin { opacity: 1; transform: translateY(-50%); transition-delay: 6s; }
        .hl-tag { display: inline-flex; align-items: center; gap: 8px; padding: 7px 15px;
          border: 1px solid rgba(255,255,255,0.28); border-radius: 100px; background: rgba(255,255,255,0.07);
          backdrop-filter: blur(8px); color: #fff; font-family: "Outfit", sans-serif; font-weight: 500;
          font-size: 0.85rem; letter-spacing: 0.02em; text-shadow: 0 1px 6px rgba(0,0,0,0.4); }
        .hl-tag svg { color: #2E77FA; }
        .hl-title { margin: 24px 0 0; color: #fff; font-family: "Outfit", sans-serif; font-weight: 500;
          font-size: clamp(3.2rem, 6.4vw, 6rem); line-height: 0.98; letter-spacing: -0.02em;
          text-shadow: 0 2px 30px rgba(0,0,0,0.45); }
        .hl-desc { margin: 24px 0 0; max-width: 480px; color: rgba(255,255,255,0.88);
          font-family: "Inter", sans-serif; font-size: 1.15rem; line-height: 1.6;
          text-shadow: 0 1px 12px rgba(0,0,0,0.5); }
        .hl-btns { display: flex; flex-wrap: wrap; gap: 16px; margin-top: 36px; pointer-events: auto; }
        .hl-btn { display: inline-flex; align-items: center; gap: 10px; padding: 14px 28px; border-radius: 4px;
          font-family: "Outfit", sans-serif; font-weight: 500; font-size: 0.92rem; text-transform: uppercase;
          letter-spacing: 0.03em; text-decoration: none; transition: background .2s ease, transform .2s ease, border-color .2s ease; }
        .hl-primary { background: #2E77FA; color: #fff; box-shadow: 0 10px 30px rgba(46,119,250,0.38); }
        .hl-primary:hover { background: #1f63e0; transform: translateY(-1px); }
        .hl-ghost { background: rgba(11,15,25,0.4); color: #fff; border: 1px solid rgba(255,255,255,0.28);
          backdrop-filter: blur(8px); }
        .hl-ghost:hover { background: rgba(11,15,25,0.62); border-color: rgba(255,255,255,0.5); }
        .hl-star { color: #FF2C55; font-size: 0.9em; }

        @keyframes hlspin { to { transform: rotate(360deg); } }

        @media (max-width: 720px) {
          .hl-links { display: none; }
          .hl-hero { top: auto; bottom: 8vh; transform: none; }
          .hl-hero.hl-heroin { transform: none; }
        }
      `}</style>
    </div>
  )
}
