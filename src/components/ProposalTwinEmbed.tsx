'use client'

import { useEffect, useRef } from 'react'

export type ProposalTwinEmbedProps = {
  /** Full Planpoint project URL including `?lang=English`. */
  projectUrl: string
  title: string
  note?: string
  backHref?: string
}

/**
 * Full-viewport twin shell for /proposal/3d-lite and /proposal/immersive.
 * Immersive fixed height (flex fill) — UTM + fullscreen only.
 * Never apply Planpoint get_size / resize to the parent (boot jump on mobile).
 * See references/sops/planpoint-embed.md.
 */
export default function ProposalTwinEmbed({
  projectUrl,
  title,
  note,
  backHref = '/proposal#open-the-demos',
}: ProposalTwinEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const iframe = frameRef.current
    const container = containerRef.current
    if (!iframe || !container) return

    let onFullscreen = false
    let savedScrollY = 0

    const urlParams = new URLSearchParams(window.location.search)
    const p = {
      f: urlParams.get('f'),
      u: urlParams.get('u'),
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      token: urlParams.get('token'),
    }

    const sep = projectUrl.includes('?') ? '&' : '?'
    iframe.src =
      projectUrl +
      (p.f ? `${sep}f=${encodeURIComponent(p.f)}` : '') +
      (p.u ? `&u=${encodeURIComponent(p.u)}` : '') +
      (p.utm_source ? `&utm_source=${encodeURIComponent(p.utm_source)}` : '') +
      (p.utm_medium ? `&utm_medium=${encodeURIComponent(p.utm_medium)}` : '') +
      (p.utm_campaign ? `&utm_campaign=${encodeURIComponent(p.utm_campaign)}` : '') +
      (p.token ? `&token=${encodeURIComponent(p.token)}` : '')

    const utmParams = {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content'),
      token: urlParams.get('token'),
      parentURL: window.location.href || document.referrer,
    }

    /* UTM only — immersive shell stays locked to the flex frame (no get_size poll). */
    const poll = window.setInterval(() => {
      iframe.contentWindow?.postMessage({ type: 'utm', data: utmParams }, '*')
    }, 1000)

    function resetInlineLayout() {
      container!.style.position = ''
      container!.style.top = ''
      container!.style.left = ''
      container!.style.zIndex = ''
      container!.style.height = ''
      container!.style.width = ''
      iframe!.style.height = ''
      iframe!.style.width = ''
    }

    function openFullscreen() {
      const el = container as HTMLElement & {
        mozRequestFullScreen?: () => void
        webkitRequestFullscreen?: () => void
        msRequestFullscreen?: () => void
      }
      if (el.requestFullscreen) el.requestFullscreen()
      else if (el.mozRequestFullScreen) el.mozRequestFullScreen()
      else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen()
      else if (el.msRequestFullscreen) el.msRequestFullscreen()
    }
    function closeFullscreen() {
      const d = document as Document & {
        webkitFullscreenElement?: Element
        mozFullScreenElement?: Element
        msFullscreenElement?: Element
        mozCancelFullScreen?: () => void
        webkitExitFullscreen?: () => void
        msExitFullscreen?: () => void
      }
      if (d.fullscreenElement || d.webkitFullscreenElement || d.mozFullScreenElement || d.msFullscreenElement) {
        if (document.exitFullscreen) document.exitFullscreen()
        else if (d.mozCancelFullScreen) d.mozCancelFullScreen()
        else if (d.webkitExitFullscreen) d.webkitExitFullscreen()
        else if (d.msExitFullscreen) d.msExitFullscreen()
      }
    }
    function fullscreenHandler() {
      onFullscreen = !onFullscreen
      if (!onFullscreen) {
        iframe!.contentWindow?.postMessage({ type: 'close-fs' }, '*')
        setTimeout(() => {
          document.documentElement.style.overflow = ''
          resetInlineLayout()
          window.scrollTo({ top: savedScrollY, behavior: 'instant' as ScrollBehavior })
        }, 500)
      } else {
        document.documentElement.scrollTop = 0
        document.documentElement.style.overflow = 'hidden'
        container!.style.position = 'fixed'
        container!.style.top = '0'
        container!.style.left = '0'
        container!.style.height = '100dvh'
        container!.style.width = '100%'
        container!.style.zIndex = '999999999'
        iframe!.style.height = '100dvh'
        iframe!.style.width = '100%'
      }
    }

    function onMessage(event: MessageEvent) {
      const data = event.data
      if (data && data.type === 'fullscreen') {
        if (data.active) {
          savedScrollY = window.scrollY || document.documentElement.scrollTop
          openFullscreen()
        } else {
          closeFullscreen()
        }
      }
      /* Intentionally ignore resize / "HxW" size strings — immersive fill only. */
    }

    window.addEventListener('message', onMessage)
    document.addEventListener('fullscreenchange', fullscreenHandler)
    document.addEventListener('webkitfullscreenchange', fullscreenHandler)
    document.addEventListener('mozfullscreenchange', fullscreenHandler)
    document.addEventListener('MSFullscreenChange', fullscreenHandler)

    return () => {
      clearInterval(poll)
      window.removeEventListener('message', onMessage)
      document.removeEventListener('fullscreenchange', fullscreenHandler)
      document.removeEventListener('webkitfullscreenchange', fullscreenHandler)
      document.removeEventListener('mozfullscreenchange', fullscreenHandler)
      document.removeEventListener('MSFullscreenChange', fullscreenHandler)
      document.documentElement.style.overflow = ''
      resetInlineLayout()
    }
  }, [projectUrl])

  return (
    <div className="proposal-twin" data-proposal-twin>
      <header className="proposal-twin__bar">
        <a className="proposal-twin__back" href={backHref}>
          ← Back to demos
        </a>
        <div className="proposal-twin__meta">
          <p className="proposal-twin__title">{title}</p>
          {note ? <p className="proposal-twin__note">{note}</p> : null}
        </div>
        <a className="proposal-twin__brand" href={backHref} aria-label="Back to proposal demos">
          <img
            src="/images/wow-design-color-logo-dark.svg"
            alt="wowdesign"
            className="proposal-twin__logo"
            width={132}
            height={28}
          />
        </a>
      </header>
      <div ref={containerRef} className="proposal-twin__frameWrap">
        <iframe
          ref={frameRef}
          className="proposal-twin__frame"
          frameBorder={0}
          allowFullScreen
          allow="fullscreen; xr-spatial-tracking; accelerometer; gyroscope"
          referrerPolicy="strict-origin-when-cross-origin"
          title={title}
        />
      </div>
    </div>
  )
}
