'use client'

import { useEffect, useRef, useState } from 'react'

export type ProposalTwinEmbedProps = {
  /** Full Planpoint project URL including `?lang=English`. */
  projectUrl: string
  title: string
  note?: string
  backHref?: string
}

/**
 * Twin shell for /proposal/3d-lite and /proposal/immersive.
 * Planpoint's document is overflow:hidden and taller than a phone, so the
 * host page has to grow. get_size is applied only when it is at least as
 * tall as the visible frame — a smaller boot measurement used to collapse
 * the embed into a thin strip.
 */
export default function ProposalTwinEmbed({
  projectUrl,
  title,
  note,
  backHref = '/proposal#open-the-demos',
}: ProposalTwinEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef<HTMLIFrameElement>(null)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const iframeEl = frameRef.current
    const containerEl = containerRef.current
    if (!iframeEl || !containerEl) return
    const iframe: HTMLIFrameElement = iframeEl
    const container: HTMLDivElement = containerEl

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

    function requestSize() {
      iframe.contentWindow?.postMessage('get_size', '*')
    }

    requestSize()
    const poll = window.setInterval(() => {
      requestSize()
      iframe.contentWindow?.postMessage({ type: 'utm', data: utmParams }, '*')
    }, 1000)

    let lockedHeight = 0
    let resizePending = false

    function visibleFrameHeight() {
      const bar = container.parentElement?.querySelector('.proposal-twin__bar')
      const barH = bar instanceof HTMLElement ? bar.offsetHeight : 0
      return Math.max(240, Math.round(window.innerHeight - barH))
    }

    function applyContentHeight(rawH: number) {
      if (onFullscreen) return
      if (!Number.isFinite(rawH) || rawH < 1 || rawH > 20000) return
      const floor = visibleFrameHeight()
      const next = Math.max(floor, Math.round(rawH))
      const shell = container.parentElement
      if (shell instanceof HTMLElement) {
        shell.dataset.scrollPage = rawH > floor + 32 ? 'true' : 'false'
      }
      if (!resizePending && next < lockedHeight - 2) return
      resizePending = false
      lockedHeight = next
      if (Math.abs(next - container.clientHeight) < 2) return
      container.style.flex = '0 0 auto'
      container.style.height = `${next}px`
      iframe.style.height = `${next}px`
    }

    function resetInlineLayout() {
      container.style.position = ''
      container.style.top = ''
      container.style.left = ''
      container.style.zIndex = ''
      container.style.flex = ''
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
        return
      }
      if (data && data.type === 'resize') {
        applyContentHeight(Number(data.h))
        return
      }
      if (typeof data === 'string') {
        const h = parseInt(data.split('x')[0], 10)
        applyContentHeight(h)
      }
    }

    function onResize() {
      resizePending = true
      requestSize()
    }

    window.addEventListener('message', onMessage)
    window.addEventListener('resize', onResize)
    document.addEventListener('fullscreenchange', fullscreenHandler)
    document.addEventListener('webkitfullscreenchange', fullscreenHandler)
    document.addEventListener('mozfullscreenchange', fullscreenHandler)
    document.addEventListener('MSFullscreenChange', fullscreenHandler)

    return () => {
      clearInterval(poll)
      window.removeEventListener('message', onMessage)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('fullscreenchange', fullscreenHandler)
      document.removeEventListener('webkitfullscreenchange', fullscreenHandler)
      document.removeEventListener('mozfullscreenchange', fullscreenHandler)
      document.removeEventListener('MSFullscreenChange', fullscreenHandler)
      document.documentElement.style.overflow = ''
      resetInlineLayout()
    }
  }, [projectUrl])

  return (
    <div className={live ? 'proposal-twin is-live' : 'proposal-twin'} data-proposal-twin>
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
      <button
        type="button"
        className="proposal-twin__interact"
        onClick={() => setLive((on) => !on)}
      >
        {live ? 'Scroll' : 'Drag to rotate'}
      </button>
    </div>
  )
}
