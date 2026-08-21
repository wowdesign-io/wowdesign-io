import type { ReactNode } from 'react'
import InnerButton from '@/components/InnerButton'

type PageHeroProps = {
  tagline: string
  title: ReactNode
  description: ReactNode
  ctaLabel: string
  ctaHref: string
  ctaData?: string
  timeline?: ReactNode
  taglineIcon?: ReactNode
}

const buildingIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
    <g fill="currentColor">
      <path d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32" opacity=".2"></path>
      <path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0"></path>
    </g>
  </svg>
)

export default function PageHero({
  tagline,
  title,
  description,
  ctaLabel,
  ctaHref,
  ctaData,
  timeline = (
    <>
      Built for 10–50 unit developments.
      <br />
      Launched in 6–8 weeks.
    </>
  ),
  taglineIcon = buildingIcon,
}: PageHeroProps) {
  return (
    <section className="section inner-banner">
      <div className="inner-banner-content">
        <div className="inner-banner-wrapper">
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="inner-banner-typography">
              <div className="inner-banner-subtitle-wrap">
                <div className="tagline-container">
                  <div className="icon-embed-xsmall text-color-primary w-embed">
                    {taglineIcon}
                  </div>
                  <div className="text-style-tagline">{tagline}</div>
                </div>
              </div>
              <div className="inner-banner-title-wrapper">
                <h1 className="inner-banner-title contact-us">{title}</h1>
                <p className="inner-banner-description about-us">{description}</p>
              </div>
              <div className="banner-button-wrapper">
                <div className="primary-button-wrapper">
                  <InnerButton href={ctaHref} label={ctaLabel} cta={ctaData} />
                </div>
              </div>
              {timeline ? <div className="subhero-timeline text-size-small">{timeline}</div> : null}
            </div>
          </div>
          <img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="inner-banner-pluse-icon top-left" />
          <img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="inner-banner-pluse-icon top-right" />
          <img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="inner-banner-pluse-icon bottom-left" />
          <img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="inner-banner-pluse-icon bottom-right" />
          <div className="cta-radial-gradient1"></div>
          <div className="cta-radial-gradient2"></div>
        </div>
      </div>
    </section>
  )
}
