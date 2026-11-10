import type { ReactNode } from 'react'
import InnerButton from '@/components/InnerButton'
import './twin-option-cards.css'

type TwinOptionCardsProps = {
  id?: string
  tagline?: string
  title?: string
  description?: ReactNode
  /** Open live twin demos (home + proposal). How it works: usually omit. */
  showLiveButtons?: boolean
  /** How it works + proposal: show $45k / $55k / $65k. Home: names only. */
  showPrices?: boolean
  ctaHref?: string
  ctaLabel?: string
  cta?: string
  ctaTarget?: string
  ctaRel?: string
  /** Pass empty string to hide the timeline line. */
  timeline?: string
  showBottomCta?: boolean
}

const DEMO_A = 'https://demo.wowdesign.io/residences#digital-twin'
const DEMO_B = '/proposal/3d-lite'
const DEMO_C = '/proposal/immersive'

/** Phosphor currency-circle — Relume. Only when prices are on the cards. */
const dollarIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" viewBox="0 0 256 256">
    <g fill="currentColor">
      <path d="M224 128a96 96 0 1 1-96-96a96 96 0 0 1 96 96" opacity=".2"></path>
      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m40-68a28 28 0 0 1-28 28h-4v8a8 8 0 0 1-16 0v-8h-16a8 8 0 0 1 0-16h36a12 12 0 0 0 0-24h-24a28 28 0 0 1 0-56h4v-8a8 8 0 0 1 16 0v8h16a8 8 0 0 1 0 16h-36a12 12 0 0 0 0 24h24a28 28 0 0 1 28 28"></path>
    </g>
  </svg>
)

/** Phosphor buildings — Relume. Home twin row (no prices). */
const buildingsIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
    <g fill="currentColor">
      <path d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32" opacity=".2"></path>
      <path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0"></path>
    </g>
  </svg>
)

const OPTIONS = [
  {
    key: '360',
    label: '360',
    price: '$45k',
    shot: '/images/proposal/twin-360.png',
    alt: 'Digital twin — floors and units from a phone',
    body: 'Every floor and unit from a phone — live price and availability.',
    demo: DEMO_A,
    ctaOpen: 'Twins - Open 360',
    itemClass: 'layout237_item',
  },
  {
    key: 'lite',
    label: '3D Lite',
    price: '$55k',
    shot: '/images/proposal/twin-3d-lite.png',
    alt: '3D Lite digital twin',
    body: 'More depth than 360. Buyers walk the massing and units without the full Immersive build.',
    demo: DEMO_B,
    ctaOpen: 'Twins - Open 3D Lite',
    itemClass: 'layout237_item is-2',
  },
  {
    key: 'immersive',
    label: 'Immersive 3D',
    price: '$65k',
    shot: '/images/proposal/twin-immersive.png',
    alt: 'Immersive 3D digital twin',
    body: 'Full 3D presence. For projects where buyers need to feel the space before they commit.',
    demo: DEMO_C,
    ctaOpen: 'Twins - Open Immersive',
    itemClass: 'layout237_item is-3',
  },
] as const

/** Three twin-depth options — layout237 cards. Shared by home / proposal / how-it-works. */
export default function TwinOptionCards({
  id = 'your-options',
  tagline = 'Your options',
  title = 'Open each building. Live.',
  description =
    'Website, follow-up, and the full sales system on every option. Choose 360, 3D Lite, or Immersive 3D.',
  showLiveButtons = false,
  showPrices = true,
  ctaHref = '/carry-cost-calculator',
  ctaLabel = 'Carry Cost Calc',
  cta = 'Options - Calc',
  ctaTarget,
  ctaRel,
  timeline = 'Full system included. Plus $2,500/mo. We keep it running. Your sales team sells. Live in 6–8 weeks.',
  showBottomCta = true,
}: TwinOptionCardsProps) {
  const taglineIcon = showPrices ? dollarIcon : buildingsIcon

  return (
    <section id={id} className="section_layout237 twin-option-cards">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="layout237_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="max-width-large align-center">
                    <div className="display-flex-vertical flex-align-center">
                      <div className="margin-bottom margin-xsmall">
                        <div className="tagline-container">
                          <div className="icon-embed-xsmall text-color-primary w-embed">{taglineIcon}</div>
                          <div className="text-style-tagline">{tagline}</div>
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="section-title">{title}</h2>
                    </div>
                    <p className="text-size-medium">{description}</p>
                  </div>
                </div>
              </div>

              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid layout237_list">
                {OPTIONS.map((opt) => (
                  <div key={opt.key} className={opt.itemClass}>
                    <img src={opt.shot} alt={opt.alt} className="twin-option-shot" loading="lazy" />
                    <div className="margin-bottom margin-xsmall">
                      {showPrices ? (
                        <>
                          <div className="text-style-tagline">{opt.label}</div>
                          <h3 className="heading-style-h6">{opt.price}</h3>
                        </>
                      ) : (
                        <h3 className="heading-style-h6">{opt.label}</h3>
                      )}
                    </div>
                    <p>{opt.body}</p>
                    {showLiveButtons ? (
                      <div className="margin-top margin-small">
                        <div className="primary-button-wrapper">
                          <InnerButton
                            href={opt.demo}
                            label="Open live"
                            cta={opt.ctaOpen}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        </div>
                      </div>
                    ) : null}
                    <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                    <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                  </div>
                ))}
              </div>

              {timeline ? <div className="process-timeline text-size-small">{timeline}</div> : null}
              {showBottomCta ? (
                <div className="process-button-wrapper">
                  <div className="primary-button-wrapper">
                    <InnerButton href={ctaHref} label={ctaLabel} cta={cta} target={ctaTarget} rel={ctaRel} />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="sky-container">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
  )
}
