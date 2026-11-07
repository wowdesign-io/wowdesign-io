'use client'

import { useEffect, useMemo } from 'react'

export type ProposalTwinLaunchProps = {
  /** Twin subdomain root, e.g. https://3dlite.wowdesign.io/ */
  demoUrl: string
  title: string
  note?: string
  backHref?: string
}

/**
 * Proposal entry for Lite / Immersive: assign to our Planpoint-proxy subdomain
 * (top-level UX). Keeps history so Back returns to /proposal.
 * See references/sops/planpoint-embed.md.
 */
export default function ProposalTwinLaunch({
  demoUrl,
  title,
  note,
  backHref = '/proposal#open-the-demos',
}: ProposalTwinLaunchProps) {
  const target = useMemo(() => {
    if (typeof window === 'undefined') return demoUrl
    const dest = new URL(demoUrl)
    if (!dest.searchParams.has('lang')) dest.searchParams.set('lang', 'English')
    const src = new URLSearchParams(window.location.search)
    for (const key of ['f', 'u', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'token']) {
      const v = src.get(key)
      if (v) dest.searchParams.set(key, v)
    }
    return dest.toString()
  }, [demoUrl])

  useEffect(() => {
    window.location.assign(target)
  }, [target])

  return (
    <div className="proposal-twin proposal-twin--launch" data-proposal-twin>
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
          <p className="proposal-twin__note">{note ?? 'Opening the live twin…'}</p>
        </div>
      </header>
      <div className="proposal-twin__launchBody">
        <a className="proposal-twin__launchLink" href={target}>
          Tap here if the demo does not open
        </a>
      </div>
    </div>
  )
}
