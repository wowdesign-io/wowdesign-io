import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import Script from 'next/script'
import './how-it-works-headings.css'
import PageCta from '@/components/PageCta'
import HowItWorksSection from '@/components/HowItWorksSection'
import SelvaShowcase from '@/components/SelvaShowcase'
import TeamMembers from '@/components/TeamMembers'
import InnerButton from '@/components/InnerButton'

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.wowdesign.io' },
}

// `heroVisual` swaps the hero's building image for an alternate (the 3D scene on /hero-lab).
// Defaults to the original isometric image so the live homepage is unchanged.
export default function HomePage({ heroVisual }: { heroVisual?: ReactNode }) {
  return (
    <>
<div className="page-wrapper">
    <div className="global-styles">
      <div className="style-overrides w-embed">
        <style dangerouslySetInnerHTML={{ __html: `
#how-it-works .layout237_item h3.heading-style-h6 {
  font-size: 26px !important;
  font-weight: 500 !important;
  letter-spacing: -0.02em !important;
  line-height: 1.25 !important;
  white-space: normal;
  background-image: none !important;
  -webkit-text-fill-color: #fff !important;
  color: #fff !important;
}
@media (max-width: 479px) {
  #how-it-works .layout237_item h3.heading-style-h6 { font-size: 22px !important; }
}
.section.solving { padding-top: 7rem !important; }
@media screen and (max-width: 991px) { .section.solving { padding-top: 100px !important; } }
@media screen and (max-width: 767px) { .section.solving { padding-top: 80px !important; } }
@media screen and (max-width: 479px) { .section.solving { padding-top: 60px !important; } }
.community-spotlight-content { padding-top: 7rem !important; }
@media screen and (max-width: 991px) { .community-spotlight-content { padding-top: 100px !important; } }
@media screen and (max-width: 767px) { .community-spotlight-content { padding-top: 80px !important; } }
@media screen and (max-width: 479px) { .community-spotlight-content { padding-top: 60px !important; } }
.section.team-member .team-member-single {
  flex-direction: column !important;
  align-items: center !important;
  padding-bottom: 20px;
}
.section.team-member .team-member-typography-wrap,
.section.team-member .team-member-typography-wrap.left-0 {
  opacity: 1 !important;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  transform: none !important;
  position: relative !important;
  inset: auto !important;
  left: auto !important;
  right: auto !important;
  bottom: auto !important;
  top: auto !important;
  margin-top: 14px;
  width: 100%;
  max-width: 280px;
  text-align: center;
}
.section.team-member .team-member-typography-mouse { display: none !important; }
.section.team-member .team-member-typography {
  background: transparent;
  padding: 0;
  text-align: center;
}
.section.team-member .team-member-name {
  font-style: normal;
  font-size: 1.125rem;
  margin-bottom: 4px;
  white-space: nowrap;
}
.footer-information-details-text a { color: inherit; text-decoration: underline; }
.inner-button-star-wrap {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}
.inner-button-star {
  width: 14px;
  height: 14px;
  display: block;
  position: static;
}
        ` }} />
      </div>
      <div className="color-schemes w-embed">
        
      </div>
      <div className="custom-code w-embed w-script">

      </div>
    </div>
    <div data-w-id="3af1c84f-ff74-c014-cb3b-40446b73b1e3" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className={heroVisual ? 'navbar w-nav navbar--hero-glass' : 'navbar w-nav'}>
      <div className="nav-container _1430">
        <div className="navbar-container">
          <a href="/" aria-current="page" className="navbar-logo w-nav-brand w--current"><img src="/images/wow-design-color-logo-dark.svg" loading="lazy" alt="" className="navbar-logo-image" /></a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="/features" className="nav-menu-link w-nav-link">Features</a>
            <a href="/how-it-works" className="nav-menu-link w-nav-link">How it works</a>
            <a href="/about" className="nav-menu-link w-nav-link">about</a>
            <a data-cta="Nav - Calc" href="/carry-cost-calculator" className="nav-menu-link w-nav-link">Carry Cost Calc</a>
          </nav>
          <div className="navbar-button-wrapper">
            <div className="primary-button-wrapper desktop">
              <a href="/book-a-demo" data-cta="Nav - Demo" data-w-id="3af1c84f-ff74-c014-cb3b-40446b73b1f6" className="primary-button w-inline-block">
                <div className="primary-button-border-wrap">
                  <div className="primary-button-wrap">
                    <div className="primary-button-text">Book A Demo</div>
                    <div className="primary-button-hover-text">Book A Demo</div>
                    <div className="primary-button-hover-bg"></div>
                  </div>
                </div>
                <div className="line-wrap">
                  <div className="primary-line-wrap _1">
                    <div className="line _1"></div>
                    <div className="line _2"></div>
                  </div>
                  <div className="primary-line-wrap _2">
                    <div className="line _3"></div>
                    <div className="line _4"></div>
                  </div>
                  <div className="primary-line-wrap _3">
                    <div className="line _5"></div>
                    <div className="line _6"></div>
                  </div>
                  <div className="primary-line-wrap _4">
                    <div className="line _7"></div>
                    <div className="line _8"></div>
                  </div>
                </div>
              </a>
            </div>
            <div className="menu-button w-nav-button">
              <div data-is-ix2-target="1" className="hamburger-menu-icon" data-w-id="b58e0106-6be1-80f9-2e9e-29cc3a30b8aa" data-animation-type="lottie" data-src="https://uploads-ssl.webflow.com/64d728cd40ba078bc56626e6/64d728cd40ba078bc566288f_Hamburger%20menu.lottie" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="0" data-loading="eager" data-ix2-initial-state="0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section data-w-id="ff16e7a9-f7e3-77c2-015f-a1152daaa887" className="section relative" style={heroVisual ? { minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden' } : undefined}>
      {heroVisual && (
        <>
          {/* live 3D scene as the hero background */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>{heroVisual}</div>
          {/* brand radial light on the copy side (glows through the glass card) + a soft bottom
              fade into the dark page. Light touch of darkening on the far left for legibility. */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'radial-gradient(72% 92% at 26% 46%, rgba(46,119,250,0.5) 0%, rgba(215,56,255,0.26) 40%, rgba(255,44,85,0.12) 60%, rgba(7,11,22,0) 78%), linear-gradient(90deg, rgba(7,11,22,0.42) 0%, rgba(7,11,22,0.16) 38%, rgba(7,11,22,0) 60%), linear-gradient(0deg, rgba(9,12,22,1) 0%, rgba(9,12,22,0) 26%)' }} />
          {/* hero's own brand glow — the site's sky-container system, contained by the relative hero (sits behind the copy via DOM order) */}
          <div className="sky-container">
            <div className="primary-sky-circle"></div>
            <div className="secondary-sky-circle"></div>
          </div>
        </>
      )}
      <div className={heroVisual ? 'banner-container hero-banner-container' : 'banner-container'}>
        <div className={heroVisual ? 'banner-content hero-banner-content' : 'banner-content'}>
          <div
            {...(heroVisual
              ? { className: 'banner-typography solving-card hero-card' }
              : { className: 'banner-typography', 'goo-stagger': '0.3', goo: 'fade-up', 'goo-type': 'stagger', 'data-w-id': '6e58a63e-55a6-96bc-8457-502e6779cd81' })}
          >
            <div className="hero-banner-subtitle-wrapper">
              <div className="tagline-container">
                <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                    <g fill="currentColor">
                      <path d="M136 32v184H40V85.35a8 8 0 0 1 3.56-6.66l80-53.33A8 8 0 0 1 136 32" opacity=".2"></path>
                      <path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0"></path>
                    </g>
                  </svg></div>
                <div className="text-style-tagline">Presales System</div>
              </div>
            </div>
            <div className="banner-title-description">
              <h1 className="banner-title">Sell Out Faster.</h1>
              <p className="banner-description-text">We help boutique real estate developers with 10–50 unit projects sell out faster, so they keep $400k+ that would otherwise go to the bank. Buyers explore every unit from their phone. Your sales team knows who's ready.</p>
            </div>
            <div className="banner-button-wrapper">
              <div className="primary-button-wrapper">
                <InnerButton href="/how-it-works" label="How it works" cta="Hero - How it works" />
              </div>
              <div className="primary-button-wrapper">
                <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta="Hero - Calc" variant="secondary" />
              </div>
            </div>
            {heroVisual && (
              <div className="hero-proof">
                <div className="hero-proof-item"><span className="hero-proof-num">$400k+</span> kept on sell-out</div>
                <div className="hero-proof-item"><span className="hero-proof-num">49%</span> more qualified leads</div>
                <div className="hero-proof-item"><span className="hero-proof-num">3&times;</span> buyer engagement</div>
              </div>
            )}
          </div>
          {!heroVisual && (<div data-w-id="e8a9f885-801b-a42c-0374-9df70f06c829" className="banner-world-element-wrapper"><img src="/images/psd-3d-isometric-tall-building-surrounded-by-trees-transparent-background-with-white-sky.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(0.5, 0.5, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="banner-world-element-image" />
            <div style={{ opacity: "0" }} className="banner-world-element-tag-content">
              <div className="banner-world-element-tag-wrapper">
                <div className="banner-world-element-tag-single one">
                  <div className="banner-world-element-tag-line-name">
                    <div className="banner-world-element-tag-line"></div>
                    <div className="banner-world-element-tag-name">Live CRM Sync</div>
                  </div><img src="/images/sync.svg" loading="lazy" alt="" className="banner-world-element-tag-flag" />
                </div>
                <div className="banner-world-element-tag-single two">
                  <div className="banner-world-element-tag-line-name">
                    <div className="banner-world-element-tag-line two"></div>
                    <div className="banner-world-element-tag-name">No App Required</div>
                  </div><img src="/images/browsing.svg" loading="lazy" alt="" className="banner-world-element-tag-flag" />
                </div>
                <div className="banner-world-element-tag-single three">
                  <div className="banner-world-element-tag-line-name">
                    <div className="banner-world-element-tag-line three"></div>
                    <div className="banner-world-element-tag-name">ADA Compliant</div>
                  </div><img src="/images/security.svg" loading="lazy" alt="" className="banner-world-element-tag-flag" />
                </div>
              </div>
            </div>
          </div>)}{!heroVisual && (<><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="banner-pluse-icon top-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="banner-pluse-icon top-right" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="banner-pluse-icon bottom-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="banner-pluse-icon bottom-right" /></>)}
        </div>
      </div>
      {!heroVisual && <div className="cta-radial-gradient1"></div>}
      {!heroVisual && <div className="cta-radial-gradient2"></div>}
    </section>
    {!heroVisual && (<section className="section headline-section">
      <div className="headline-content">
        <div className="headline-ticker">
          <div className="headline-ticker-single">
            <div className="headline-ticker-inner-ticker">
              <h2 className="footer-ticker-name">Velocity Absorption Inventory Logic Control IRR Precision</h2>
              <h2 className="footer-ticker-name">Velocity Absorption Inventory Logic Control IRR Precision</h2>
            </div>
            <div className="headline-ticker-inner-ticker">
              <h2 className="footer-ticker-name">Velocity Absorption Inventory Logic Control IRR Precision</h2>
              <h2 className="footer-ticker-name">Velocity Absorption Inventory Logic Control IRR Precision</h2>
            </div>
            <div className="headline-ticker-inner-ticker">
              <h2 className="footer-ticker-name">Velocity Absorption Inventory Logic Control IRR Precision</h2>
              <h2 className="footer-ticker-name">Velocity Absorption Inventory Logic Control IRR Precision</h2>
            </div>
          </div>
        </div>
      </div>
    </section>)}
    <HowItWorksSection />
    <SelvaShowcase />
    <section className={heroVisual ? 'section solving hero3d-topgap' : 'section solving'}>
      <div className="container">
        <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="solving-section-title-wrapper">
          <div className="section-subtitle-wrapper">
            <div className="tagline-container">
              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M6.26 9L12 13.47L17.74 9L12 4.53z" opacity=".3"></path>
                  <path fill="currentColor" d="m19.37 12.8l-7.38 5.74l-7.37-5.73L3 14.07l9 7l9-7zM12 2L3 9l1.63 1.27L12 16l7.36-5.73L21 9zm0 11.47L6.26 9L12 4.53L17.74 9z"></path>
                </svg></div>
              <div className="text-style-tagline">Features</div>
            </div>
          </div>
          <div className="margin-bottom margin-small">
            <h2 className="solving-section-title">Your Presales System. <br />Built to Close.</h2>
          </div>
          <p className="text-size-medium">The website. The digital twin. The automated follow-up. One presales system built for boutique developers.</p>
        </div>
        <div className="solving-content">
          <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid solving-grid">
            <div className="solving-grid-single _1st">
              <div className="solving-card one">
                <div className="solving-card-icon-wrapper"><img src="/images/digital-twin.svg" loading="lazy" alt="" className="solving-card-icon" /></div>
                <div className="solving-card-title-description">
                  <h4 className="solving-card-title">Interactive Digital Twin</h4>
                  <p className="solving-card-description-text">Buyers explore your development from any device — rotating the building, clicking into units, and seeing live availability — before they ever call your sales team.</p>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="solving-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="solving-card-bottom-element" />
              </div>
              <div className="solving-card four">
                <div className="solving-card-icon-wrapper"><img src="/images/instant-mobile-access.svg" loading="lazy" alt="" className="solving-card-icon" /></div>
                <div className="solving-card-title-description">
                  <h4 className="solving-card-title">Instant Mobile Performance</h4>
                  <p className="solving-card-description-text">Runs instantly on any smartphone. No apps. No pixel streaming. Just smooth performance.</p>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="solving-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="solving-card-bottom-element" />
              </div>
            </div>
            <div id="w-node-baf75690-0ea3-b0ee-d453-3abf3d4b5846-9046bfc6" className="solving-grid-single _2nd">
              <div className="solving-card two">
                <div className="solving-card-icon-wrapper"><img src="/images/live-inventory-sync.svg" loading="lazy" alt="" className="solving-card-icon" /></div>
                <div className="solving-card-title-description">
                  <h4 className="solving-card-title">Two-Way CRM Sync</h4>
                  <p className="solving-card-description-text">Live unit data syncs out to buyers in real time. Every buyer interaction syncs back to your sales team automatically. No manual updates. No duplicate entry.</p>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="solving-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="solving-card-bottom-element" />
              </div>
              <div className="solving-card five">
                <div className="solving-card-icon-wrapper"><img src="/images/unit-specific-leads.svg" loading="lazy" alt="" className="solving-card-icon" /></div>
                <div className="solving-card-title-description">
                  <h4 className="solving-card-title">Unit-Level Buyer Intent</h4>
                  <p className="solving-card-description-text">Know exactly which unit a buyer explored before your sales team ever calls. No generic leads. No guesswork.</p>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="solving-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="solving-card-bottom-element" />
              </div>
            </div>
            <div className="solving-grid-single _3rd">
              <div className="solving-card three">
                <div className="solving-card-icon-wrapper"><img src="/images/dashboard.svg" loading="lazy" alt="" className="solving-card-icon" /></div>
                <div className="solving-card-title-description">
                  <h4 className="solving-card-title">Buyer Intelligence & Heatmaps</h4>
                  <p className="solving-card-description-text">See which units are generating the most interest, which floors are hottest, and where demand is concentrated.</p>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="solving-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="solving-card-bottom-element" />
              </div>
              <div className="solving-card six">
                <div className="solving-card-icon-wrapper"><img src="/images/ada-compliance.svg" loading="lazy" alt="" className="solving-card-icon" /></div>
                <div className="solving-card-title-description">
                  <h4 className="solving-card-title">Built-In ADA Protection</h4>
                  <p className="solving-card-description-text">An accessibility mode instantly converts the experience into a compliant, screen-reader-friendly format.</p>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="solving-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="solving-card-bottom-element" />
              </div>
            </div>
          </div>
          <div className="process-button-wrapper">
            <div className="primary-button-wrapper">
              <InnerButton href="/features" label="Explore features" cta="Home Features - Explore" />
            </div>
          </div>
        </div>
      </div>
      <div className="sky-container">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
    <section className="section historical-numbers">
      <div className="historical-numbers-content">
        <div className="historical-ticker top">
          <div className="historical-ticker-single left">
            <div className="headline-ticker-inner-ticker left">
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">31%</div>
                </div>
                <div className="historical-ticker-title">Faster Unit Absorption</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">49%</div>
                </div>
                <div className="historical-ticker-title">More Qualified Leads</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">3x</div>
                </div>
                <div className="historical-ticker-title">Buyer Engagement</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">$400k+</div>
                </div>
                <div className="historical-ticker-title">Kept vs the Bank</div>
              </div>
            </div>
            <div className="headline-ticker-inner-ticker left">
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">31%</div>
                </div>
                <div className="historical-ticker-title">Faster Unit Absorption</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">49%</div>
                </div>
                <div className="historical-ticker-title">More Qualified Leads</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">3x</div>
                </div>
                <div className="historical-ticker-title">Buyer Engagement</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">$400k+</div>
                </div>
                <div className="historical-ticker-title">Kept vs the Bank</div>
              </div>
            </div>
            <div className="headline-ticker-inner-ticker left">
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">31%</div>
                </div>
                <div className="historical-ticker-title">Faster Unit Absorption</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">49%</div>
                </div>
                <div className="historical-ticker-title">More Qualified Leads</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">3x</div>
                </div>
                <div className="historical-ticker-title">Buyer Engagement</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">$400k+</div>
                </div>
                <div className="historical-ticker-title">Kept vs the Bank</div>
              </div>
            </div>
          </div>
        </div>
        <div className="historical-ticker bottom">
          <div className="historical-ticker-single right">
            <div className="headline-ticker-inner-ticker right">
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">31%</div>
                </div>
                <div className="historical-ticker-title">Faster Unit Absorption</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">49%</div>
                </div>
                <div className="historical-ticker-title">More Qualified Leads</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">3x</div>
                </div>
                <div className="historical-ticker-title">Buyer Engagement</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">$400k+</div>
                </div>
                <div className="historical-ticker-title">Kept vs the Bank</div>
              </div>
            </div>
            <div className="headline-ticker-inner-ticker right">
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">31%</div>
                </div>
                <div className="historical-ticker-title">Faster Unit Absorption</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">49%</div>
                </div>
                <div className="historical-ticker-title">More Qualified Leads</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">3x</div>
                </div>
                <div className="historical-ticker-title">Buyer Engagement</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">$400k+</div>
                </div>
                <div className="historical-ticker-title">Kept vs the Bank</div>
              </div>
            </div>
            <div className="headline-ticker-inner-ticker right">
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">31%</div>
                </div>
                <div className="historical-ticker-title">Faster Unit Absorption</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">49%</div>
                </div>
                <div className="historical-ticker-title">More Qualified Leads</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">3x</div>
                </div>
                <div className="historical-ticker-title">Buyer Engagement</div>
              </div>
              <div className="historical-ticker-card">
                <div className="historical-ticker-number-wrap">
                  <div className="historical-ticker-number">$400k+</div>
                </div>
                <div className="historical-ticker-title">Kept vs the Bank</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stats-subline text-size-small">31%, 49%, and 3x: Planpoint platform data on comparable pre-construction developments. $400k+ is typical carry kept by selling out faster.</div>
    </section>
    <section className="section_comparison13">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="comparison13_component">
              <div className="margin-bottom margin-xxlarge">
                <div className="text-align-center">
                  <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="max-width-large align-center">
                    <div className="display-flex-vertical flex-align-center">
                      <div className="margin-bottom margin-xsmall">
                        <div className="tagline-container">
                          <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M15.5 15.38V8.62L18.88 12z" opacity=".3"></path>
                              <path fill="currentColor" d="M15.5 15.38V8.62L18.88 12zM14 19l7-7l-7-7zm-4 0V5l-7 7z"></path>
                            </svg></div>
                          <div className="text-style-tagline">Comparison</div>
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="section-title">More Than a Website. <br />A Complete Presales System.</h2>
                    </div>
                    <p className="text-size-medium">Traditional agencies deliver renderings.<br />We deliver a live presales system connected directly to your CRM.</p>
                  </div>
                </div>
              </div>
              <div className="max-width-xlarge align-center">
                <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid pricing-grid">
                  <div className="pricing-card-wrap">
                    <div className="pricing-single">
                      <div className="pricing-top-content">
                        <div className="pricing-image-name-wrap">
                          <div className="pricing-name-short-text">
                            <h5 className="pricing-name">Other Agencies</h5>
                          </div>
                        </div>
                        <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="pricing-features-wrapper">
                          <ul role="list" className="pricing-features-list">
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-tertiary2 w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-42.34-106.34L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Static brochure websites</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-tertiary2 w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-42.34-106.34L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Manual inventory management</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-tertiary2 w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-42.34-106.34L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Disconnected CRM workflows</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-tertiary2 w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-42.34-106.34L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Generic contact forms</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-tertiary2 w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-42.34-106.34L139.31 128l26.35 26.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Slow, unqualified inquiries</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pricing-card-wrap">
                    <div className="pricing-single is-wowdesign">
                      <div className="pricing-top-content">
                        <div className="pricing-image-name-wrap">
                          <div className="pricing-icon-wrapper"><img loading="lazy" src="/images/wow-design-color-logo-dark.svg" alt="" className="pricing-icon" /></div>
                        </div>
                        <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="pricing-features-wrapper">
                          <ul role="list" className="pricing-features-list">
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Interactive digital twin</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Instant loading on any smartphone</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Real-time CRM synchronization</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Live inventory & pricing control</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Unit-level buyer intent tracking</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Qualified Leads Delivered to Your CRM</div>
                            </li>
                            <li className="pricing-features-list-item">
                              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                                  <g fill="currentColor">
                                    <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                                    <path d="M173.66 98.34a8 8 0 0 1 0 11.32l-56 56a8 8 0 0 1-11.32 0l-24-24a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 0M224 48v160a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-16 160V48H48v160z"></path>
                                  </g>
                                </svg></div>
                              <div className="pricing-features-list-item-text">Complete Presales System</div>
                            </li>
                          </ul>
                        </div>
                        <div className="pricing-features-button-wrapper">
                          <div className="primary-button-wrapper pricing">
                            <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta="Comparison - Calc" className="pricing" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sky-container">
              <div className="primary-sky-circle"></div>
              <div className="secondary-sky-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section testimonial">
      <div data-w-id="d1c43377-0abd-fb74-1663-3b34e3b073f7" className="testimonial-content">
        <div className="testimonial-wrapper">
          <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="container">
            <div className="section-subtitle-wrapper">
              <div className="tagline-container">
                <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M15 11V4H4v8.17l.59-.58l.58-.59H6z" opacity=".3"></path>
                    <path fill="currentColor" d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1m-5 7c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4zM4.59 11.59l-.59.58V4h11v7H5.17z"></path>
                  </svg></div>
                <div className="text-style-tagline">Testimonials</div>
              </div>
            </div>
            <div className="testimonial-section-title-wrapper">
              <div className="testimonial-section-title-single">
                <div className="margin-bottom margin-small">
                  <h2 className="section-title">What developers say about results, not just websites.</h2>
                </div>
                <p className="text-size-medium">Built for boutique developments. Designed for measurable sales impact.</p>
              </div>
              <div className="testimonial-section-button-wrap">
                <div className="primary-button-wrapper">
                  <InnerButton href="/carry-cost-calculator" label="Carry Cost Calc" cta="Testimonials - Calc" />
                </div>
              </div>
            </div>
          </div>
          <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="testimonial-top-content">
            <div className="testimonial-top-left-card">
              <div className="testimonial-single-card one">
                <div className="testimonial-description-wrapper">
                  <p className="testimonial-description-text">"Every agency we talked to showed up with beautiful renders. Nobody talked about what happens when a buyer lands on the site at 11pm and wants to know if unit 4B is available. That's what this actually solves."</p>
                </div>
                <div className="testimonial-author-wrapper">
                  <div className="testimonial-author-image-wrap"><img src="/images/claudia.avif" loading="lazy" alt="" className="testimonial-author-image" /></div>
                  <div className="testimonial-author-name-bio-wrapper">
                    <h6 className="testimonial-author-name">Claudia </h6>
                    <div className="testimonial-author-bio">Principal Developer, Fort Lauderdale</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="testimonial-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="testimonial-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="testimonial-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="testimonial-line bottom-right" />
              </div>
              <div className="testimonial-single-card two">
                <div className="testimonial-description-wrapper">
                  <p className="testimonial-description-text">"Our team used to spend the first 20 minutes of every call figuring out what the buyer was actually interested in. Now that information is already there before anyone picks up the phone."</p>
                </div>
                <div className="testimonial-author-wrapper">
                  <div className="testimonial-author-image-wrap"><img src="/images/thomas.avif" loading="lazy" alt="" className="testimonial-author-image" /></div>
                  <div className="testimonial-author-name-bio-wrapper">
                    <h6 className="testimonial-author-name">Thomas </h6>
                    <div className="testimonial-author-bio">VP of Sales, Tampa</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="testimonial-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="testimonial-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="testimonial-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="testimonial-line bottom-right" />
              </div>
            </div>
            <div className="testimonial-top-right-card">
              <div className="testimonial-single-card three">
                <div className="testimonial-description-wrapper">
                  <p className="testimonial-description-text">"We had a situation where two buyers were interested in the same unit and our website still showed it available after we'd taken it off market internally. That was the moment I knew we needed something better. Haven't had that problem since."</p>
                </div>
                <div className="testimonial-author-wrapper">
                  <div className="testimonial-author-image-wrap"><img src="/images/marcus.avif" loading="lazy" alt="" className="testimonial-author-image" /></div>
                  <div className="testimonial-author-name-bio-wrapper">
                    <h6 className="testimonial-author-name">Marcus </h6>
                    <div className="testimonial-author-bio">Managing Partner, Miami</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="testimonial-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="testimonial-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="testimonial-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="testimonial-line bottom-right" />
              </div>
            </div>
          </div>
          <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="testimonial-bottom-content">
            <div className="testimonial-bottom-left-card">
              <div className="testimonial-single-card four">
                <div className="testimonial-description-wrapper">
                  <p className="testimonial-description-text">"We sent out probably 200 PDF packages last cycle. Maybe 15 people actually opened them. First month with the presales system we could see exactly who was looking at what. That’s a different business."</p>
                </div>
                <div className="testimonial-author-wrapper">
                  <div className="testimonial-author-image-wrap"><img src="/images/elena.avif" loading="lazy" alt="" className="testimonial-author-image" /></div>
                  <div className="testimonial-author-name-bio-wrapper">
                    <h6 className="testimonial-author-name">Elena</h6>
                    <div className="testimonial-author-bio">Principal, Brickell Development</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="testimonial-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="testimonial-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="testimonial-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="testimonial-line bottom-right" />
              </div>
            </div>
            <div className="testimonial-single-card five">
              <div className="testimonial-description-wrapper">
                <p className="testimonial-description-text">"Pre-construction is a long game and buyers go cold. What I didn't expect was how much the digital twin keeps them engaged between first look and signing. It gives them something to come back to."</p>
              </div>
              <div className="testimonial-author-wrapper">
                <div className="testimonial-author-image-wrap"><img src="/images/daniel.avif" loading="lazy" alt="" className="testimonial-author-image" /></div>
                <div className="testimonial-author-name-bio-wrapper">
                  <h6 className="testimonial-author-name">Daniel </h6>
                  <div className="testimonial-author-bio">Director of Sales, Orlando</div>
                </div>
              </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="testimonial-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="testimonial-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="testimonial-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="testimonial-line bottom-right" />
            </div>
          </div><img src="/images/modern-residential-tower.avif" loading="lazy" alt="" className="testimonial-world-img" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="testimonial-pluse top-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="testimonial-pluse top-right" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="testimonial-pluse bottom-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="testimonial-pluse bottom-right" />
        </div>
      </div>
    </section>
    <TeamMembers storyHref="/about" />
    <PageCta />
    <section id="faq" className="section faq">
      <div className="container">
        <div data-w-id="012200b2-da6c-54ac-4c67-4c085ad775fe" className="faq-section-title-wrapper">
          <div className="section-subtitle-wrapper center">
            <div className="tagline-container">
              <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M8 4v12h12V4zm6.74 10.69a.96.96 0 0 1-.73.31c-.29 0-.54-.1-.74-.31a1 1 0 0 1-.31-.74c0-.29.1-.54.31-.74s.45-.3.74-.3s.54.1.74.3s.3.45.3.74s-.11.54-.31.74m1.77-5.86c-.23.34-.54.69-.92 1.06c-.3.27-.51.52-.64.75q-.18.345-.18.78v.4h-1.52v-.56c0-.42.09-.78.26-1.09c.18-.32.49-.67.95-1.07c.32-.29.55-.54.69-.74q.21-.3.21-.72q0-.54-.36-.87c-.24-.23-.57-.34-.99-.34c-.4 0-.72.12-.97.36s-.42.53-.53.87l-1.37-.57c.18-.55.52-1.03 1-1.45c.49-.43 1.11-.64 1.85-.64c.56 0 1.05.11 1.49.33q.66.33 1.02.93c.36.6.36.84.36 1.33s-.11.9-.35 1.24" opacity=".3"></path>
                  <path fill="currentColor" d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H8V4h12zm-6.49-5.84c.41-.73 1.18-1.16 1.63-1.8c.48-.68.21-1.94-1.14-1.94c-.88 0-1.32.67-1.5 1.23l-1.37-.57C11.51 5.96 12.52 5 13.99 5c1.23 0 2.08.56 2.51 1.26c.37.6.58 1.73.01 2.57c-.63.93-1.23 1.21-1.56 1.81c-.13.24-.18.4-.18 1.18h-1.52c.01-.41-.06-1.08.26-1.66m-.56 3.79c0-.59.47-1.04 1.05-1.04c.59 0 1.04.45 1.04 1.04c0 .58-.44 1.05-1.04 1.05c-.58 0-1.05-.47-1.05-1.05"></path>
                </svg></div>
              <div className="text-style-tagline">FAQ</div>
            </div>
          </div>
          <div className="section-title-single">
            <h2 className="section-title">Frequently asked questions</h2>
          </div>
        </div>
        <div data-w-id="012200b2-da6c-54ac-4c67-4c085ad77607" className="faq-content">
          <div data-current="Tab 1" data-easing="ease" data-duration-in="300" data-duration-out="100" className="w-tabs">
            <div className="faq-accordion-wrapper w-tab-menu">
              <a data-w-tab="Tab 1" className="single-faq-accordion-wrap w-inline-block w-tab-link w--current">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">What does a project cost?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">$45k–$75k per project. Website, digital twin, and follow-up. 6–8 weeks for 10–50 unit buildings.<br /><br />The range is units, how far the twin goes, and how it lands in your sales team&apos;s tools — not three packages. We run it under maintenance. You don&apos;t buy or operate a separate viewer.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 2" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">What is carry cost — and why does it matter?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">Carry is what you spend every month until units are sold: loan interest plus marketing and ops burn. Not the interest alone.<br /><br />A typical boutique loan is $67k–$100k a month to the bank. Sell out months earlier and that money stays yours. That is the $400k+. Use the calculator to see your number.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 3" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">What is the difference between a normal website and your presales system?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">A traditional website is a digital brochure — static visuals and a generic contact form.<br /><br />Our presales system is an interactive digital twin that syncs live with your CRM, tracks unit-level buyer interest, and actively supports your sales team.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 4" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">Do you integrate with our existing CRM?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">Yes. We integrate directly with most modern real estate CRMs including Spark, Yardi, Salesforce, HubSpot, and others.<br /><br />We work within your existing workflow — no duplicate systems, no manual updates.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 5" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">How long does it take to build and launch?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">Most projects launch within 6–8 weeks depending on asset readiness and CRM setup.<br /><br />We handle the technical implementation — you provide floorplans, renders, and CRM access.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 6" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">Does this replace our sales team?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">No. It strengthens your sales team.<br /><br />Our presales system qualifies buyers, tracks unit interest, and delivers better-informed leads — so your sales team can close faster.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 7" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">How do we track buyer interest?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">We track unit-level interactions — including which units buyers explore, view preferences, and floorplan interest.<br /><br />This data syncs directly into your CRM so your sales team sees context before making contact.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 8" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">Can the system handle multiple phases and complex floorplans?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">Yes. The system supports multi-phase developments, varied floorplans, and dynamic availability across buildings.<br /><br />It scales with your project without requiring enterprise-level complexity.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 9" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">Do we need all our final 3D renders finished before we start?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">No. We can begin with architectural floorplans and preliminary renders.<br /><br />The digital twin can evolve as final assets become available.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 10" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">Why shouldn't we just have our branding agency build this?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">Branding agencies specialize in visual identity and marketing materials.<br /><br />Our presales system requires interactive 3D infrastructure, live CRM synchronization, performance optimization, and compliance integration.<br /><br />We focus specifically on building sales infrastructure for real estate developers.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 11" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">Is this overkill for a smaller project?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">Our systems are designed specifically for 10–50 unit developments.<br /><br />Our presales system requires digital twin infrastructure, live CRM synchronization, performance optimization, and compliance integration.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
            </div>
            <div className="display-none w-tab-content">
              <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active"></div>
              <div data-w-tab="Tab 2" className="w-tab-pane"></div>
              <div data-w-tab="Tab 3" className="w-tab-pane"></div>
              <div data-w-tab="Tab 4" className="w-tab-pane"></div>
              <div data-w-tab="Tab 5" className="w-tab-pane"></div>
              <div data-w-tab="Tab 6" className="w-tab-pane"></div>
              <div data-w-tab="Tab 7" className="w-tab-pane"></div>
              <div data-w-tab="Tab 8" className="w-tab-pane"></div>
              <div data-w-tab="Tab 9" className="w-tab-pane"></div>
              <div data-w-tab="Tab 10" className="w-tab-pane"></div>
              <div data-w-tab="Tab 11" className="w-tab-pane"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section footer">
      <div className="footer-container">
        <div className="footer-content">
          <div data-w-id="7ccbf7a2-080d-66f9-81b6-2448b055e0d1" className="footer-top-content">
            <div className="footer-information-wrapper">
              <div className="footer-information-single">
                <div className="footer-logo-description">
                  <a href="/" aria-current="page" className="footer-logo-link-block w-inline-block w--current"><img src="/images/wow-design-color-logo-dark.svg" loading="lazy" alt="" className="footer-logo-image" /></a>
                  <p className="footer-description-text">We build the website, the digital twin, and the automated follow-up system — so boutique developers keep $400k+ by selling out faster.</p>
                </div>
              </div>
              <div className="footer-information-details">
                <div className="footer-information-details-single"><img src="/images/Footer-Information-Details-Icon2.svg" loading="lazy" alt="" className="footer-information-details-icon" />
                  <div className="footer-information-details-text"><a href="mailto:info@wowdesign.io">info@wowdesign.io</a></div>
                </div>
                <div className="footer-information-details-single"><img src="/images/Footer-Information-Details-Icon3.svg" loading="lazy" alt="" className="footer-information-details-icon" />
                  <div className="footer-information-details-text">wowdesign LLC<br />407 Lincoln Rd<br />Suite 6H PMB 1673<br />Miami Beach, FL 33139</div>
                </div>
              </div>
            </div>
            <div className="footer-menu-wrapper">
              <div id="newsletter" className="footer-form-wrapper">
                <div className="footer-form-block w-form">
                  <form id="wf-form-NL-Form" name="wf-form-NL-Form" data-name="NL-Form" method="get" className="footer-form" data-wf-page-id="68ac826b2e7f29829046bfc6" data-wf-element-id="7ccbf7a2-080d-66f9-81b6-2448b055e13b">
                    <div className="footer-form-text-wrapper"><label htmlFor="name" className="footer-form-text-block">Subscribe to Newsletter</label></div>
                    <div className="footer-form-input-field-button"><input className="footer-form-input-field is-1 w-input" maxLength={256} name="nl_first_name" data-name="nl_first_name" placeholder="First Name" type="text" id="nl_first_name" required /><input className="footer-form-input-field w-input" maxLength={256} name="nl_email" data-name="nl_email" placeholder="Email" type="email" id="nl_email" required /><input type="submit" data-wait="" className="footer-form-submit-button w-button" value="" /></div>
                  </form>
                  <div className="success-message w-form-done">
                    <div className="text-block">🎉 <strong className="text-color-white">You’re in!</strong><br />Expect insights, growth tips, and behind-the-scenes tactics — landing right in your inbox soon.</div>
                  </div>
                  <div className="error-message w-form-fail">
                    <div className="newsletter-error">Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
              <div className="footer-menu-content">
                <div className="footer-menu-single">
                  <div className="footer-menu-title-wrapper">
                    <h5 className="footer-menu-title">Explore</h5>
                  </div>
                  <div className="footer-menu-list-wrapper">
                    <ul role="list" className="footer-menu-list">
                      <li className="footer-menu-list-item">
                        <a href="/" aria-current="page" className="footer-menu-text-link w--current">home</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/about" className="footer-menu-text-link">about</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/features" className="footer-menu-text-link">Features</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/how-it-works" className="footer-menu-text-link">How it works</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-menu-single last">
                  <div className="footer-menu-title-wrapper">
                    <h5 className="footer-menu-title">Get started</h5>
                  </div>
                  <div className="footer-menu-list-wrapper">
                    <ul role="list" className="footer-menu-list">
                      <li className="footer-menu-list-item">
                        <a href="/book-a-demo" className="footer-menu-text-link">Book A Demo</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/carry-cost-calculator" className="footer-menu-text-link">Carry Cost Calculator</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/#faq" className="footer-menu-text-link">FAQ</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-menu-single last">
                  <div className="footer-menu-title-wrapper">
                    <h5 className="footer-menu-title">Social</h5>
                  </div>
                  <div className="footer-menu-list-wrapper">
                    <ul role="list" className="footer-menu-list">
                      <li className="footer-menu-list-item">
                        <a href="https://www.youtube.com/@andy_bittner" target="_blank" className="footer-menu-text-link">YouTube</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="https://www.linkedin.com/in/andy-bittner-wowdesign/" target="_blank" className="footer-menu-text-link">LinkedIn</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="https://www.instagram.com/wowdesign_miami" target="_blank" className="footer-menu-text-link">Instagram</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-menu-single">
                  <div className="footer-menu-title-wrapper">
                    <h5 className="footer-menu-title">Legal</h5>
                  </div>
                  <div className="footer-menu-list-wrapper">
                    <ul role="list" className="footer-menu-list">
                      <li className="footer-menu-list-item">
                        <a href="/privacy-policy" className="footer-menu-text-link">Privacy Policy</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/terms-of-service" className="footer-menu-text-link">Terms of Service</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/disclaimer" className="footer-menu-text-link">Disclaimer</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div><img src="/images/Footer-Pluse-Icon.svg" loading="lazy" alt="" className="footer-pluse-icon top-left" /><img src="/images/Footer-Pluse-Icon.svg" loading="lazy" alt="" className="footer-pluse-icon top-right" /><img src="/images/Footer-Pluse-Icon.svg" loading="lazy" alt="" className="footer-pluse-icon bottom-left" /><img src="/images/Footer-Pluse-Icon.svg" loading="lazy" alt="" className="footer-pluse-icon bottom-right" />
          </div>
          <div className="footer-bottom-content">
            <div className="footer-details-wrapper">
              <div className="footer-details-text">© Copyright 2026 - wowdesign LLC</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-line"></div>
    </section>
  </div>
      {/* Webflow IX2 (jQuery + exported runtime with this site's interaction data) */}
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="afterInteractive" />
      <Script src="/webflow.js" strategy="afterInteractive" />
      {/* goo stagger reveals (GSAP + ScrollTrigger + goo-motion-library) */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/goo-motion-library@latest/dist/goo.bundle.js" strategy="afterInteractive" />
    </>
  )
}

