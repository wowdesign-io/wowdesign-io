'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

export type ProposalTwinEmbedProps = {
  /** Full Planpoint project URL including `?lang=English`. */
  projectUrl: string
  title: string
  note?: string
  backHref?: string
  /**
   * lite — 360 massing. On mobile, top-level Planpoint (only way to get
   * phone-sized 3D AND scrollable units). Desktop keeps this iframe shell.
   * immersive — always fixed phone-height iframe (overlays, no unit stack).
   */
  experience?: 'lite' | 'immersive'
}

const MOBILE_MQ = '(max-width: 767px)'

/**
 * Twin shell for /proposal/3d-lite and /proposal/immersive.
 *
 * Lite mobile cannot be a short iframe (no internal scroll in embed mode) or a
 * tall get_size iframe (3D uses iframe 100vh → stretched). That circle is a
 * Planpoint embed constraint — SELVA floorplan is a different layout. Lite
 * mobile therefore opens the Planpoint URL top-level; browser Back returns here.
 */
export default function ProposalTwinEmbed({
  projectUrl,
  title,
  note,
  backHref = '/proposal#open-the-demos',
  experience = 'immersive',
}: ProposalTwinEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [mobileLite, setMobileLite] = useState(false)

  const embedUrl = useMemo(() => {
    if (typeof window === 'undefined') return projectUrl
    const urlParams = new URLSearchParams(window.location.search)
    const sep = projectUrl.includes('?') ? '&' : '?'
    const p = {
      f: urlParams.get('f'),
      u: urlParams.get('u'),
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      token: urlParams.get('token'),
    }
    return (
      projectUrl +
      (p.f ? `${sep}f=${encodeURIComponent(p.f)}` : '') +
      (p.u ? `&u=${encodeURIComponent(p.u)}` : '') +
      (p.utm_source ? `&utm_source=${encodeURIComponent(p.utm_source)}` : '') +
      (p.utm_medium ? `&utm_medium=${encodeURIComponent(p.utm_medium)}` : '') +
      (p.utm_campaign ? `&utm_campaign=${encodeURIComponent(p.utm_campaign)}` : '') +
      (p.token ? `&token=${encodeURIComponent(p.token)}` : '')
    )
  }, [projectUrl])

  /* Lite + phone: leave the iframe circle — open Planpoint as the page. */
  useEffect(() => {
    if (experience !== 'lite') return
    const mq = window.matchMedia(MOBILE_MQ)
    const launch = () => {
      if (!mq.matches) {
        setMobileLite(false)
        return
      }
      setMobileLite(true)
      const urlParams = new URLSearchParams(window.location.search)
      const sep = projectUrl.includes('?') ? '&' : '?'
      const next =
        projectUrl +
        (urlParams.get('f') ? `${sep}f=${encodeURIComponent(urlParams.get('f')!)}` : '') +
        (urlParams.get('u') ? `&u=${encodeURIComponent(urlParams.get('u')!)}` : '') +
        (urlParams.get('utm_source') ? `&utm_source=${encodeURIComponent(urlParams.get('utm_source')!)}` : '') +
        (urlParams.get('utm_medium') ? `&utm_medium=${encodeURIComponent(urlParams.get('utm_medium')!)}` : '') +
        (urlParams.get('utm_campaign')
          ? `&utm_campaign=${encodeURIComponent(urlParams.get('utm_campaign')!)}`
          : '') +
        (urlParams.get('token') ? `&token=${encodeURIComponent(urlParams.get('token')!)}` : '')
      window.location.replace(next)
    }
    launch()
    mq.addEventListener('change', launch)
    return () => mq.removeEventListener('change', launch)
  }, [experience, projectUrl])

  useEffect(() => {
    if (mobileLite) return
    const iframeEl = frameRef.current
    const containerEl = containerRef.current
    if (!iframeEl || !containerEl) return
    const iframe: HTMLIFrameElement = iframeEl
    const container: HTMLDivElement = containerEl

    let onFullscreen = false
    let savedScrollY = 0

    iframe.src = embedUrl

    const urlParams = new URLSearchParams(window.location.search)
    const utmParams = {
      utm_source: urlParams.get('utm_source'),
      utm_medium: urlParams.get('utm_medium'),
      utm_campaign: urlParams.get('utm_campaign'),
      utm_term: urlParams.get('utm_term'),
      utm_content: urlParams.get('utm_content'),
      token: urlParams.get('token'),
      parentURL: window.location.href || document.referrer,
    }

    /* UTM only — never get_size on these shells. */
    const poll = window.setInterval(() => {
      iframe.contentWindow?.postMessage({ type: 'utm', data: utmParams }, '*')
    }, 1000)

    function resetInlineLayout() {
      container.style.position = ''
      container.style.top = ''
      container.style.left = ''
      container.style.zIndex = ''
      container.style.height = ''
      container.style.width = ''
      iframe.style.height = ''
      iframe.style.width = ''
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
        iframe.contentWindow?.postMessage({ type: 'close-fs' }, '*')
        setTimeout(() => {
          document.documentElement.style.overflow = ''
          resetInlineLayout()
          window.scrollTo({ top: savedScrollY, behavior: 'instant' as ScrollBehavior })
        }, 500)
      } else {
        document.documentElement.scrollTop = 0
        document.documentElement.style.overflow = 'hidden'
        container.style.position = 'fixed'
        container.style.top = '0'
        container.style.left = '0'
        container.style.height = '100dvh'
        container.style.width = '100%'
        container.style.zIndex = '999999999'
        iframe.style.height = '100dvh'
        iframe.style.width = '100%'
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
  }, [embedUrl, mobileLite])

  if (mobileLite) {
    return (
      <div className="proposal-twin proposal-twin--launch" data-proposal-twin>
        <header className="proposal-twin__bar">
          <div className="proposal-twin__top">
            <a className="proposal-twin__back" href={backHref} aria-label="Back to demos">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 256 256" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
                />
              </svg>
            </a>
            <a className="proposal-twin__brand" href={backHref} aria-label="wowdesign — back to demos">
              <img
                src="/images/wow-design-color-logo-dark.svg"
                alt="wowdesign"
                className="proposal-twin__logo"
                width={132}
                height={28}
              />
            </a>
            <span className="proposal-twin__top-spacer" aria-hidden="true" />
          </div>
          <div className="proposal-twin__meta">
            <p className="proposal-twin__title">{title}</p>
            <p className="proposal-twin__note">Opening the live twin…</p>
          </div>
        </header>
        <div className="proposal-twin__launchBody">
          <a className="proposal-twin__launchLink" href={embedUrl}>
            Tap here if the demo does not open
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="proposal-twin" data-proposal-twin>
      <header className="proposal-twin__bar">
        <div className="proposal-twin__top">
          <a className="proposal-twin__back" href={backHref} aria-label="Back to demos">
            {/* Phosphor ArrowLeft — Relume */}
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 256 256" width="20" height="20">
              <path
                fill="currentColor"
                d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
              />
            </svg>
          </a>
          <a className="proposal-twin__brand" href={backHref} aria-label="wowdesign — back to demos">
            <img
              src="/images/wow-design-color-logo-dark.svg"
              alt="wowdesign"
              className="proposal-twin__logo"
              width={132}
              height={28}
            />
          </a>
          <span className="proposal-twin__top-spacer" aria-hidden="true" />
        </div>
        <div className="proposal-twin__meta">
          <p className="proposal-twin__title">{title}</p>
          {note ? <p className="proposal-twin__note">{note}</p> : null}
        </div>
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
