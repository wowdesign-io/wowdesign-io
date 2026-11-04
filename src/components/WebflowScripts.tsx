'use client'

import Script from 'next/script'
import { useState } from 'react'

const GSAP = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js'
const SCROLL_TRIGGER = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
const GOO = 'https://cdn.jsdelivr.net/npm/goo-motion-library@1.0.1/dist/goo.bundle.js'

type Props = {
  /** gsap + ScrollTrigger + goo. Off for Insights posts (IX2 only). */
  motion?: boolean
  /** Scripts that need $ / the motion stack first (e.g. carry-cost calc). */
  extras?: string[]
}

/**
 * jQuery ships beforeInteractive from root layout (self-hosted).
 * webflow / gsap / goo are afterInteractive and chained so goo never races $.
 */
export default function WebflowScripts({ motion = true, extras = [] }: Props) {
  const [gsapReady, setGsapReady] = useState(false)
  const [stReady, setStReady] = useState(false)
  const [stackReady, setStackReady] = useState(!motion)

  return (
    <>
      <Script src="/webflow.js" strategy="afterInteractive" />
      {motion ? (
        <>
          <Script src={GSAP} strategy="afterInteractive" onLoad={() => setGsapReady(true)} />
          {gsapReady ? (
            <Script
              src={SCROLL_TRIGGER}
              strategy="afterInteractive"
              onLoad={() => setStReady(true)}
            />
          ) : null}
          {stReady ? (
            <Script
              src={GOO}
              strategy="afterInteractive"
              onLoad={() => setStackReady(true)}
            />
          ) : null}
        </>
      ) : null}
      {stackReady
        ? extras.map((src) => (
            <Script key={src} src={src} strategy="afterInteractive" />
          ))
        : null}
    </>
  )
}
