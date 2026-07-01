import type { ReactNode } from 'react'
import Script from 'next/script'

// `heroVisual` swaps the hero's building image for an alternate (the 3D scene on /hero-lab).
// Defaults to the original isometric image so the live homepage is unchanged.
export default function HomePage({ heroVisual }: { heroVisual?: ReactNode }) {
  return (
    <>
<div className="page-wrapper">
    <div className="global-styles">
      <div className="style-overrides w-embed">
        
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
            <a href="/#features" className="nav-menu-link w-nav-link">Features</a>
            <a href="/#how-it-works" className="nav-menu-link w-nav-link">How it works</a>
            <a href="/#about" className="nav-menu-link w-nav-link">about</a>
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
    <section data-w-id="ff16e7a9-f7e3-77c2-015f-a1152daaa887" className="section relative" style={heroVisual ? { minHeight: '100svh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0a1020' } : undefined}>
      {heroVisual && (
        <>
          {/* live 3D scene as the hero background */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>{heroVisual}</div>
          {/* brand radial light on the copy side (glows through the glass card) + a soft bottom
              fade into the dark page. Light touch of darkening on the far left for legibility. */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none', background: 'radial-gradient(58% 82% at 24% 48%, rgba(46,119,250,0.34) 0%, rgba(215,56,255,0.16) 42%, rgba(7,11,22,0) 72%), linear-gradient(90deg, rgba(7,11,22,0.42) 0%, rgba(7,11,22,0.16) 38%, rgba(7,11,22,0) 60%), linear-gradient(0deg, rgba(9,12,22,1) 0%, rgba(9,12,22,0) 26%)' }} />
          {/* hero's own brand glow — the site's sky-container system, contained by the relative hero (sits behind the copy via DOM order) */}
          <div className="sky-container">
            <div className="primary-sky-circle"></div>
            <div className="secondary-sky-circle"></div>
          </div>
        </>
      )}
      <div className="banner-container" style={heroVisual ? { position: 'absolute', left: 'max(28px, 5vw)', top: '50%', transform: 'translateY(-50%)', zIndex: 2, width: 'auto', maxWidth: 600, margin: 0, padding: 0 } : undefined}>
        <div className="banner-content" style={heroVisual ? { display: 'block', width: 'auto', margin: 0 } : undefined}>
          <div
            {...(heroVisual
              ? { className: 'banner-typography solving-card hero-card', style: { textAlign: 'left', alignItems: 'flex-start', maxWidth: 600, margin: 0 } }
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
              <p className="banner-description-text">Boutique developers close 31% faster with wowdesign — we build the website, the digital twin, and the automated follow-up system, so your team always knows who’s ready to buy.</p>
            </div>
            <div className="banner-button-wrapper">
              <div className="primary-button-wrapper">
                <a data-cta="Hero - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                  <div className="primary-button-border-wrap">
                    <div className="inner-button-wrap">
                      <div className="inner-button-text-wrap">
                        <div className="inner-button-text">Carry Cost Calc</div>
                        <div className="inner-button-hover-text">Carry Cost Calc</div>
                      </div>
                      <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                      <div className="inner-button-hover-bg"></div>
                    </div>
                  </div>
                  <div className="line-wrap-inner">
                    <div className="inner-line-wrap _1">
                      <div className="line"></div>
                      <div className="line _2"></div>
                    </div>
                    <div className="inner-line-wrap _2">
                      <div className="line _3"></div>
                      <div className="line _4"></div>
                    </div>
                    <div className="inner-line-wrap _3">
                      <div className="line _5"></div>
                      <div className="line _6"></div>
                    </div>
                    <div className="inner-line-wrap _4">
                      <div className="line _7"></div>
                      <div className="line _8"></div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="primary-button-wrapper">
                <a href="#features" className="inner-button w-inline-block">
                  <div className="primary-button-border-wrap">
                    <div className="inner-button-wrap">
                      <div className="inner-button-text-wrap">
                        <div className="inner-button-text">Features</div>
                        <div className="inner-button-hover-text">Features</div>
                      </div>
                      <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                      <div className="inner-button-hover-bg"></div>
                    </div>
                  </div>
                  <div className="line-wrap-inner">
                    <div className="inner-line-wrap _1">
                      <div className="line"></div>
                      <div className="line _2"></div>
                    </div>
                    <div className="inner-line-wrap _2">
                      <div className="line _3"></div>
                      <div className="line _4"></div>
                    </div>
                    <div className="inner-line-wrap _3">
                      <div className="line _5"></div>
                      <div className="line _6"></div>
                    </div>
                    <div className="inner-line-wrap _4">
                      <div className="line _7"></div>
                      <div className="line _8"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            {heroVisual && (<>
              <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="solving-card-top-element" />
              <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="solving-card-bottom-element" />
            </>)}
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
    <section className="section solving">
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
                  <p className="solving-card-description-text">Buyers explore your development from any device — rotating the building, clicking into units, and seeing live availability — before they ever call your team.</p>
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
                  <p className="solving-card-description-text">Live unit data syncs out to buyers in real time. Every buyer interaction syncs back to your team automatically. No manual updates. No duplicate entry.</p>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="solving-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="solving-card-bottom-element" />
              </div>
              <div className="solving-card five">
                <div className="solving-card-icon-wrapper"><img src="/images/unit-specific-leads.svg" loading="lazy" alt="" className="solving-card-icon" /></div>
                <div className="solving-card-title-description">
                  <h4 className="solving-card-title">Unit-Level Buyer Intent</h4>
                  <p className="solving-card-description-text">Know exactly which unit a buyer explored before your team ever calls. No generic leads. No guesswork.</p>
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
                  <div className="historical-ticker-number">+73%</div>
                </div>
                <div className="historical-ticker-title">More Inquiries</div>
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
                  <div className="historical-ticker-number">+73%</div>
                </div>
                <div className="historical-ticker-title">More Inquiries</div>
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
                  <div className="historical-ticker-number">+73%</div>
                </div>
                <div className="historical-ticker-title">More Inquiries</div>
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
                  <div className="historical-ticker-number">4x</div>
                </div>
                <div className="historical-ticker-title">More Inquiries</div>
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
                  <div className="historical-ticker-number">4x</div>
                </div>
                <div className="historical-ticker-title">More Inquiries</div>
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
                  <div className="historical-ticker-number">4x</div>
                </div>
                <div className="historical-ticker-title">More Inquiries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="stats-subline text-size-small">Based on Planpoint platform data across comparable pre-construction developments.</div>
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
                            <a data-cta="Comparison - Calc" href="/carry-cost-calculator" className="inner-button pricing w-inline-block">
                              <div className="primary-button-border-wrap">
                                <div className="inner-button-wrap">
                                  <div className="inner-button-text-wrap">
                                    <div className="inner-button-text">Carry Cost Calc</div>
                                    <div className="inner-button-hover-text">Carry Cost Calc</div>
                                  </div>
                                  <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                                  <div className="inner-button-hover-bg"></div>
                                </div>
                              </div>
                              <div className="line-wrap-inner">
                                <div className="inner-line-wrap _1">
                                  <div className="line"></div>
                                  <div className="line _2"></div>
                                </div>
                                <div className="inner-line-wrap _2">
                                  <div className="line _3"></div>
                                  <div className="line _4"></div>
                                </div>
                                <div className="inner-line-wrap _3">
                                  <div className="line _5"></div>
                                  <div className="line _6"></div>
                                </div>
                                <div className="inner-line-wrap _4">
                                  <div className="line _7"></div>
                                  <div className="line _8"></div>
                                </div>
                              </div>
                            </a>
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
                  <a data-cta="Testimonials - Demo" href="/book-a-demo" className="inner-button w-inline-block">
                    <div className="primary-button-border-wrap">
                      <div className="inner-button-wrap">
                        <div className="inner-button-text-wrap">
                          <div className="inner-button-text">Book A Demo</div>
                          <div className="inner-button-hover-text">Book A Demo</div>
                        </div>
                        <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                        <div className="inner-button-hover-bg"></div>
                      </div>
                    </div>
                    <div className="line-wrap-inner">
                      <div className="inner-line-wrap _1">
                        <div className="line"></div>
                        <div className="line _2"></div>
                      </div>
                      <div className="inner-line-wrap _2">
                        <div className="line _3"></div>
                        <div className="line _4"></div>
                      </div>
                      <div className="inner-line-wrap _3">
                        <div className="line _5"></div>
                        <div className="line _6"></div>
                      </div>
                      <div className="inner-line-wrap _4">
                        <div className="line _7"></div>
                        <div className="line _8"></div>
                      </div>
                    </div>
                  </a>
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
    <div id="features" className="spacer-xhuge"></div>
    <section className="section features">
      <div data-w-id="55692835-ec59-ff32-dc75-62ba954b11b2" className="container">
        <div data-w-id="cfed3ab0-e0d5-9d4d-71bb-4e33ec1cc83e" className="features-content">
          <div data-w-id="8e59ac06-7b15-3b19-f5f5-8abed0e71d57" className="features-flex">
            <div className="features-typography-card top-border-none">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
                        <path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></path>
                        <path d="M2 21v9h9v-2H4v-7H2z" fill="currentColor"></path>
                        <path d="M30 11V2h-9v2h7v7h2z" fill="currentColor"></path>
                        <path d="M21 30h9v-9h-2v7h-7v2z" fill="currentColor"></path>
                        <path d="M25.49 10.13l-9-5a1 1 0 0 0-1 0l-9 5A1 1 0 0 0 6 11v10a1 1 0 0 0 .51.87l9 5a1 1 0 0 0 1 0l9-5A1 1 0 0 0 26 21V11a1 1 0 0 0-.51-.87zM16 7.14L22.94 11L16 14.86L9.06 11zM8 12.7l7 3.89v7.71l-7-3.89zm9 11.6v-7.71l7-3.89v7.71z" fill="currentColor"></path>
                      </svg></div>
                    <div className="text-style-tagline">Interactive Digital Twin</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">A live, explorable replica of your development.</h3>
                  <p className="features-description-text">Static images can't answer buyer questions. A digital twin lets prospects explore units, views, and surroundings directly on their phone — before they ever schedule a visit.</p>
                </div>
                <div className="features-list-wrapper">
                  <ul role="list" className="features-list">
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">360° Building Rotation</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Real-Time Pricing Per Unit</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Neighborhood Context</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Live Unit Availability</div>
                    </li>
                  </ul>
                </div>
                <div className="features-button-wrapper">
                  <div className="primary-button-wrapper">
                    <a data-cta="Digital Twin - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                      <div className="primary-button-border-wrap">
                        <div className="inner-button-wrap">
                          <div className="inner-button-text-wrap">
                            <div className="inner-button-text">Carry Cost Calc</div>
                            <div className="inner-button-hover-text">Carry Cost Calc</div>
                          </div>
                          <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                          <div className="inner-button-hover-bg"></div>
                        </div>
                      </div>
                      <div className="line-wrap-inner">
                        <div className="inner-line-wrap _1">
                          <div className="line"></div>
                          <div className="line _2"></div>
                        </div>
                        <div className="inner-line-wrap _2">
                          <div className="line _3"></div>
                          <div className="line _4"></div>
                        </div>
                        <div className="inner-line-wrap _3">
                          <div className="line _5"></div>
                          <div className="line _6"></div>
                        </div>
                        <div className="inner-line-wrap _4">
                          <div className="line _7"></div>
                          <div className="line _8"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" />
            </div>
            <div className="features-card-image-wrapper is-img-right">
              <div data-w-id="a202ce4a-5e35-d5f5-2be0-ab58c0d0077c" style={{ opacity: "0" }} className="feature-card is-img"><img src="/images/digital-twin-screenshot.avif" loading="lazy" alt="" className="feature-image" /></div>
              <div className="sky-container">
                <div className="primary-sky-circle"></div>
                <div className="secondary-sky-circle"></div>
              </div>
            </div>
          </div>
          <div data-w-id="ebd5f07d-eafe-59e0-f034-e156826266d1" className="features-flex">
            <div className="features-card-image-wrapper is-img-left">
              <div data-w-id="28e89ac4-77b9-0431-08a4-05002c844b00" style={{ opacity: "0" }} className="feature-card is-img"><img src="/images/crm-sync-v9.avif" loading="lazy" alt="" className="feature-image" /></div>
              <div className="sky-container">
                <div className="primary-sky-circle"></div>
                <div className="secondary-sky-circle"></div>
              </div>
            </div>
            <div className="features-typography-card">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path d="M216 48v104a8 8 0 0 1-8 8h-40v48a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V104a8 8 0 0 1 8-8h40V48a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8" opacity=".2"></path>
                          <path d="M224 48v104a16 16 0 0 1-16 16H99.31l10.35 10.34a8 8 0 0 1-11.32 11.32l-24-24a8 8 0 0 1 0-11.32l24-24a8 8 0 0 1 11.32 11.32L99.31 152H208V48H96v8a8 8 0 0 1-16 0v-8a16 16 0 0 1 16-16h112a16 16 0 0 1 16 16m-56 144a8 8 0 0 0-8 8v8H48V104h108.69l-10.35 10.34a8 8 0 0 0 11.32 11.32l24-24a8 8 0 0 0 0-11.32l-24-24a8 8 0 0 0-11.32 11.32L156.69 88H48a16 16 0 0 0-16 16v104a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-8a8 8 0 0 0-8-8"></path>
                        </g>
                      </svg></div>
                    <div className="text-style-tagline">CRM Integration</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">Your CRM, Connected Both Ways.</h3>
                  <p className="features-description-text">We connect your CRM directly to your presales system — syncing live inventory, pricing, and availability to buyers while pushing every buyer interaction back into your team’s workflow automatically.</p>
                </div>
                <div className="features-list-wrapper">
                  <ul role="list" className="features-list">
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Native Spark.re, Salesforce, HubSpot, Yardi and more</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Sold Units Come Off Market the Moment They Close</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Price Changes & Status Updates Reflect in Real Time</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Every Lead Routes Directly Into Your CRM — No Manual Entry</div>
                    </li>
                  </ul>
                </div>
                <div className="features-button-wrapper">
                  <div className="primary-button-wrapper">
                    <a data-cta="CRM - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                      <div className="primary-button-border-wrap">
                        <div className="inner-button-wrap">
                          <div className="inner-button-text-wrap">
                            <div className="inner-button-text">Carry Cost Calc</div>
                            <div className="inner-button-hover-text">Carry Cost Calc</div>
                          </div>
                          <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                          <div className="inner-button-hover-bg"></div>
                        </div>
                      </div>
                      <div className="line-wrap-inner">
                        <div className="inner-line-wrap _1">
                          <div className="line"></div>
                          <div className="line _2"></div>
                        </div>
                        <div className="inner-line-wrap _2">
                          <div className="line _3"></div>
                          <div className="line _4"></div>
                        </div>
                        <div className="inner-line-wrap _3">
                          <div className="line _5"></div>
                          <div className="line _6"></div>
                        </div>
                        <div className="inner-line-wrap _4">
                          <div className="line _7"></div>
                          <div className="line _8"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" /><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
            </div>
          </div>
          <div data-w-id="13d6c07f-4a33-8d62-06ff-903db291555a" className="features-flex">
            <div className="features-typography-card">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" fillOpacity=".3" d="M18.5 10.2c0 2.57-2.1 5.79-6.16 9.51l-.34.3l-.34-.31C7.6 15.99 5.5 12.77 5.5 10.2c0-3.84 2.82-6.7 6.5-6.7s6.5 2.85 6.5 6.7"></path>
                        <path fill="currentColor" d="M12 11c1.33 0 4 .67 4 2v.16c-.97 1.12-2.4 1.84-4 1.84s-3.03-.72-4-1.84V13c0-1.33 2.67-2 4-2m0-1c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2m6 .2C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14c4.05-3.7 6-6.8 6-9.14M12 2c4.2 0 8 3.22 8 8.2c0 3.32-2.67 7.25-8 11.8c-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2"></path>
                      </svg></div>
                    <div className="text-style-tagline">Lead Capture</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">Unit-Specific Lead Capture</h3>
                  <p className="features-description-text">Generic contact forms create noise. Our system tells your sales team exactly which unit and floorplan a buyer explored — before they even pick up the phone.</p>
                </div>
                <div className="features-list-wrapper">
                  <ul role="list" className="features-list">
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Unit-Specific Inquiries</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Leads sent directly to CRM</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Automated Brochure Delivery</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Filters For Serious Buyers</div>
                    </li>
                  </ul>
                </div>
                <div className="features-button-wrapper">
                  <div className="primary-button-wrapper">
                    <a data-cta="Unit-Specific - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                      <div className="primary-button-border-wrap">
                        <div className="inner-button-wrap">
                          <div className="inner-button-text-wrap">
                            <div className="inner-button-text">Carry Cost Calc</div>
                            <div className="inner-button-hover-text">Carry Cost Calc</div>
                          </div>
                          <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                          <div className="inner-button-hover-bg"></div>
                        </div>
                      </div>
                      <div className="line-wrap-inner">
                        <div className="inner-line-wrap _1">
                          <div className="line"></div>
                          <div className="line _2"></div>
                        </div>
                        <div className="inner-line-wrap _2">
                          <div className="line _3"></div>
                          <div className="line _4"></div>
                        </div>
                        <div className="inner-line-wrap _3">
                          <div className="line _5"></div>
                          <div className="line _6"></div>
                        </div>
                        <div className="inner-line-wrap _4">
                          <div className="line _7"></div>
                          <div className="line _8"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" />
            </div>
            <div className="features-card-image-wrapper is-img-right">
              <div data-w-id="3f282790-4b02-6f90-2ea8-57469b4e2a1b" style={{ opacity: "0" }} className="feature-card is-img"><img src="/images/leads-screenshot.avif" loading="lazy" alt="" className="feature-image" /></div>
              <div className="sky-container">
                <div className="primary-sky-circle"></div>
                <div className="secondary-sky-circle"></div>
              </div>
            </div>
          </div>
          <div data-w-id="9b51addb-87d6-74b6-befd-d478bccc56a5" className="features-flex">
            <div className="features-card-image-wrapper is-img-left">
              <div data-w-id="b0b350bf-9e4f-7b40-1b72-6b6f8835e8e3" style={{ opacity: "0" }} className="feature-card is-img"><img src="/images/65e2250341631373794d20d2_6564d517cc477ac6d22cd256_Devices2023.avif" loading="lazy" alt="" className="feature-image" /></div>
              <div className="sky-container">
                <div className="primary-sky-circle"></div>
                <div className="secondary-sky-circle"></div>
              </div>
            </div>
            <div className="features-typography-card">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 6c-3.87 0-7 3.13-7 7s3.13 7 7 7s7-3.13 7-7s-3.13-7-7-7m0 1c.46 0 .9.06 1.33.15l-2.72 4.7l-2.32-3.56C9.31 7.49 10.6 7 12 7m-6 6c0-1.54.59-2.95 1.55-4.01L10.81 14H6.09c-.05-.33-.09-.66-.09-1m.35 2h5.33l-2.03 3.5l.11.06A6 6 0 0 1 6.35 15M12 19c-.48 0-.94-.06-1.39-.17l2.85-4.92l2.11 3.9A5.98 5.98 0 0 1 12 19m6-6c0 1.6-.63 3.06-1.66 4.13L13.57 12h4.34c.05.33.09.66.09 1m-5.74-2l2.05-3.54c1.56.65 2.77 1.94 3.34 3.54z" opacity=".3"></path>
                        <path fill="currentColor" d="M7.55 8.99A5.97 5.97 0 0 0 6 13c0 .34.04.67.09 1h4.72zm6.76-1.53L12.26 11h5.39a6 6 0 0 0-3.34-3.54m-.98-.31C12.9 7.06 12.46 7 12 7c-1.4 0-2.69.49-3.71 1.29l2.32 3.56zM11.68 15H6.35a6 6 0 0 0 3.41 3.56l-.11-.06zm7.35-7.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.96 8.96 0 0 0 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9a8.994 8.994 0 0 0 7.03-14.61M12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7M9 1h6v2H9zm7.34 16.13A5.94 5.94 0 0 0 18 13c0-.34-.04-.67-.09-1h-4.34zm-5.73 1.7c.45.11.91.17 1.39.17c1.34 0 2.57-.45 3.57-1.19l-2.11-3.9z"></path>
                      </svg></div>
                    <div className="text-style-tagline">Speed</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">Instant Loading On Any Device</h3>
                  <p className="features-description-text">Your sales tools need to work everywhere. We build your presales system to load instantly on any smartphone — no app required.</p>
                </div>
                <div className="features-list-wrapper">
                  <ul role="list" className="features-list">
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Instant Mobile Loading</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">No App Download Required</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Works on all major browsers</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Optimized for 4G networks</div>
                    </li>
                  </ul>
                </div>
                <div className="features-button-wrapper">
                  <div className="primary-button-wrapper">
                    <a data-cta="Speed - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                      <div className="primary-button-border-wrap">
                        <div className="inner-button-wrap">
                          <div className="inner-button-text-wrap">
                            <div className="inner-button-text">Carry Cost Calc</div>
                            <div className="inner-button-hover-text">Carry Cost Calc</div>
                          </div>
                          <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                          <div className="inner-button-hover-bg"></div>
                        </div>
                      </div>
                      <div className="line-wrap-inner">
                        <div className="inner-line-wrap _1">
                          <div className="line"></div>
                          <div className="line _2"></div>
                        </div>
                        <div className="inner-line-wrap _2">
                          <div className="line _3"></div>
                          <div className="line _4"></div>
                        </div>
                        <div className="inner-line-wrap _3">
                          <div className="line _5"></div>
                          <div className="line _6"></div>
                        </div>
                        <div className="inner-line-wrap _4">
                          <div className="line _7"></div>
                          <div className="line _8"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" /><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
            </div>
          </div>
          <div data-w-id="ed8183e3-0c0e-6b26-1a78-ccf67eb07729" className="features-flex">
            <div className="features-typography-card">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path d="M128 32v96l-83.14 48A96 96 0 0 1 128 32" opacity=".2"></path>
                          <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m71.87 53.27L136 114.14V40.37a88 88 0 0 1 63.87 36.9M120 40.37v83l-71.89 41.5A88 88 0 0 1 120 40.37M128 216a88 88 0 0 1-71.87-37.27l151.76-87.61A88 88 0 0 1 128 216"></path>
                        </g>
                      </svg></div>
                    <div className="text-style-tagline">Analytics</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">Buyer Analytics & Heatmaps</h3>
                  <p className="features-description-text">Most developers have no idea which units are generating interest until buyers start calling. Our presales system tracks every view, click, and session — so your team always knows where demand is.</p>
                </div>
                <div className="features-list-wrapper">
                  <ul role="list" className="features-list">
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Unit Popularity Rankings</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Floor & Building Heatmaps</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Bedroom Type Demand Breakdown</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Spot Slow-Moving Units Early</div>
                    </li>
                  </ul>
                </div>
                <div className="features-button-wrapper">
                  <div className="primary-button-wrapper">
                    <a data-cta="Analytics - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                      <div className="primary-button-border-wrap">
                        <div className="inner-button-wrap">
                          <div className="inner-button-text-wrap">
                            <div className="inner-button-text">Carry Cost Calc</div>
                            <div className="inner-button-hover-text">Carry Cost Calc</div>
                          </div>
                          <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                          <div className="inner-button-hover-bg"></div>
                        </div>
                      </div>
                      <div className="line-wrap-inner">
                        <div className="inner-line-wrap _1">
                          <div className="line"></div>
                          <div className="line _2"></div>
                        </div>
                        <div className="inner-line-wrap _2">
                          <div className="line _3"></div>
                          <div className="line _4"></div>
                        </div>
                        <div className="inner-line-wrap _3">
                          <div className="line _5"></div>
                          <div className="line _6"></div>
                        </div>
                        <div className="inner-line-wrap _4">
                          <div className="line _7"></div>
                          <div className="line _8"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" />
            </div>
            <div className="features-card-image-wrapper is-img-right">
              <div data-w-id="b634b020-4b0a-a245-cafd-8a6c14447ece" style={{ opacity: "0" }} className="feature-card is-img"><img src="/images/analytics-screenshot.avif" loading="lazy" alt="" className="feature-image" />
                <div className="icon-embed-custom w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="fi_993762" x="0px" y="0px" viewBox="0 0 479.998 479.998" xmlSpace="preserve" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                    <g>
                      <g>
                        <path d="M364,0H44C21.92,0.026,4.026,17.92,4,40v256c-0.002,18.245,12.342,34.178,30.008,38.736l4-15.488    C27.405,316.514,19.996,306.95,20,296V40c0-13.255,10.745-24,24-24h320c13.255,0,24,10.745,24,24v8h16v-8    C403.974,17.92,386.08,0.026,364,0z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="36" y="32" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="68" y="32" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="100" y="32" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M473.656,442.344l-75.88-75.88c3.986-7.115,7.174-14.649,9.504-22.464H420v-16h-9.28    c3.013-19.365,0.69-39.185-6.72-57.328V192h-16v50.944c-4.751-6.069-10.112-11.634-16-16.608V160h-16v55.152    c-5.121-2.968-10.472-5.523-16-7.64V128h-16v74.656c-5.272-1.138-10.619-1.889-16-2.248V144h-16v56.408    c-5.381,0.359-10.728,1.11-16,2.248V176h-16v31.512c-5.528,2.117-10.878,4.672-16,7.64V168h-16v58.336    c-5.888,4.974-11.249,10.539-16,16.608V184h-16v86.672c-7.41,18.143-9.733,37.963-6.72,57.328H84v16h108.72    c17.546,59.182,79.746,92.934,138.927,75.388c11.662-3.458,22.682-8.796,32.625-15.804l74.072,74.072    c3.124,3.123,8.188,3.123,11.312,0l24-24C476.779,450.532,476.779,445.468,473.656,442.344z M300,408    c-52.996-0.057-95.943-43.004-96-96c0-53.019,42.981-96,96-96s96,42.981,96,96S353.019,408,300,408z M444,460.688l-67.296-67.296    c4.36-4.12,8.386-8.579,12.04-13.336L456.688,448L444,460.688z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M300,232c-44.183,0-80,35.817-80,80c0,44.183,35.817,80,80,80c44.183,0,80-35.817,80-80    C379.952,267.837,344.163,232.048,300,232z M300,376c-22.836-0.029-43.926-12.224-55.344-32h110.688    C343.926,363.776,322.836,375.971,300,376z M238.104,328c-6.437-24.36,2.158-50.22,21.896-65.88V312h16v-59.288    c5.13-2.076,10.509-3.474,16-4.16V312h16v-63.448c5.491,0.686,10.87,2.084,16,4.16V312h16v-49.88    c19.738,15.66,28.333,41.52,21.896,65.88H238.104z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M412,64H92c-22.08,0.026-39.974,17.92-40,40v256c0.026,22.08,17.92,39.974,40,40h104v-16H92c-13.255,0-24-10.745-24-24    V104c0-13.255,10.745-24,24-24h320c13.255,0,24,10.745,24,24v256c-0.001,5.845-2.134,11.488-6,15.872l12,10.584    c6.448-7.304,10.004-16.713,10-26.456V104C451.974,81.92,434.08,64.026,412,64z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="84" y="96" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="116" y="96" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="148" y="96" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="100" y="264" width="16" height="48"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="132" y="216" width="16" height="96"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="164" y="240" width="16" height="72"></rect>
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg></div>
                <div className="icon-embed-custom w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="fi_993762" x="0px" y="0px" viewBox="0 0 479.998 479.998" xmlSpace="preserve" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                    <g>
                      <g>
                        <path d="M364,0H44C21.92,0.026,4.026,17.92,4,40v256c-0.002,18.245,12.342,34.178,30.008,38.736l4-15.488    C27.405,316.514,19.996,306.95,20,296V40c0-13.255,10.745-24,24-24h320c13.255,0,24,10.745,24,24v8h16v-8    C403.974,17.92,386.08,0.026,364,0z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="36" y="32" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="68" y="32" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="100" y="32" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M473.656,442.344l-75.88-75.88c3.986-7.115,7.174-14.649,9.504-22.464H420v-16h-9.28    c3.013-19.365,0.69-39.185-6.72-57.328V192h-16v50.944c-4.751-6.069-10.112-11.634-16-16.608V160h-16v55.152    c-5.121-2.968-10.472-5.523-16-7.64V128h-16v74.656c-5.272-1.138-10.619-1.889-16-2.248V144h-16v56.408    c-5.381,0.359-10.728,1.11-16,2.248V176h-16v31.512c-5.528,2.117-10.878,4.672-16,7.64V168h-16v58.336    c-5.888,4.974-11.249,10.539-16,16.608V184h-16v86.672c-7.41,18.143-9.733,37.963-6.72,57.328H84v16h108.72    c17.546,59.182,79.746,92.934,138.927,75.388c11.662-3.458,22.682-8.796,32.625-15.804l74.072,74.072    c3.124,3.123,8.188,3.123,11.312,0l24-24C476.779,450.532,476.779,445.468,473.656,442.344z M300,408    c-52.996-0.057-95.943-43.004-96-96c0-53.019,42.981-96,96-96s96,42.981,96,96S353.019,408,300,408z M444,460.688l-67.296-67.296    c4.36-4.12,8.386-8.579,12.04-13.336L456.688,448L444,460.688z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M300,232c-44.183,0-80,35.817-80,80c0,44.183,35.817,80,80,80c44.183,0,80-35.817,80-80    C379.952,267.837,344.163,232.048,300,232z M300,376c-22.836-0.029-43.926-12.224-55.344-32h110.688    C343.926,363.776,322.836,375.971,300,376z M238.104,328c-6.437-24.36,2.158-50.22,21.896-65.88V312h16v-59.288    c5.13-2.076,10.509-3.474,16-4.16V312h16v-63.448c5.491,0.686,10.87,2.084,16,4.16V312h16v-49.88    c19.738,15.66,28.333,41.52,21.896,65.88H238.104z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <path d="M412,64H92c-22.08,0.026-39.974,17.92-40,40v256c0.026,22.08,17.92,39.974,40,40h104v-16H92c-13.255,0-24-10.745-24-24    V104c0-13.255,10.745-24,24-24h320c13.255,0,24,10.745,24,24v256c-0.001,5.845-2.134,11.488-6,15.872l12,10.584    c6.448-7.304,10.004-16.713,10-26.456V104C451.974,81.92,434.08,64.026,412,64z"></path>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="84" y="96" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="116" y="96" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="148" y="96" width="16" height="16"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="100" y="264" width="16" height="48"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="132" y="216" width="16" height="96"></rect>
                      </g>
                    </g>
                    <g>
                      <g>
                        <rect x="164" y="240" width="16" height="72"></rect>
                      </g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                  </svg></div>
              </div>
              <div className="sky-container">
                <div className="primary-sky-circle"></div>
                <div className="secondary-sky-circle"></div>
              </div>
            </div>
          </div>
          <div data-w-id="e9747994-564d-829d-c6d7-6006be2c22af" className="features-flex">
            <div className="features-card-image-wrapper">
              <div data-w-id="ed36d771-d953-0d6b-b454-fed5f6567fc3" style={{ opacity: "0", WebkitTransform: "translate3d(0, 200px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 200px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 200px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 200px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} className="feature-card">
                <div style={{ opacity: "0", WebkitTransform: "translate3d(0, 200px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 200px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 200px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 200px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} className="icon-1x1-features w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12.75L11.25 15L15 9.75m-3-7.036A11.96 11.96 0 0 1 3.598 6A12 12 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623c5.176-1.332 9-6.03 9-11.622c0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285"></path>
                  </svg></div>
              </div>
              <div className="sky-container">
                <div className="primary-sky-circle"></div>
                <div className="secondary-sky-circle"></div>
              </div>
            </div>
            <div className="features-typography-card">
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="features-typography-card-single">
                <div className="features-subtitle-wrapper">
                  <div className="tagline-container">
                    <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                        <g fill="currentColor">
                          <path d="M216 56v56c0 96-88 120-88 120s-88-24-88-120V56a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                          <path d="M208 40H48a16 16 0 0 0-16 16v56c0 52.72 25.52 84.67 46.93 102.19c23.06 18.86 46 25.26 47 25.53a8 8 0 0 0 4.2 0c1-.27 23.91-6.67 47-25.53C198.48 196.67 224 164.72 224 112V56a16 16 0 0 0-16-16m0 72c0 37.07-13.66 67.16-40.6 89.42a129.3 129.3 0 0 1-39.4 22.2a128.3 128.3 0 0 1-38.92-21.81C61.82 179.51 48 149.3 48 112V56h160ZM82.34 141.66a8 8 0 0 1 11.32-11.32L112 148.69l50.34-50.35a8 8 0 0 1 11.32 11.32l-56 56a8 8 0 0 1-11.32 0Z"></path>
                        </g>
                      </svg></div>
                    <div className="text-style-tagline">Compliance</div>
                  </div>
                </div>
                <div className="features-title-description">
                  <h3 className="features-title">Native ADA Compliance Protection</h3>
                  <p className="features-description-text">Protect your project from legal risk. A built-in accessibility mode makes your digital twin screen-reader-friendly.</p>
                </div>
                <div className="features-list-wrapper">
                  <ul role="list" className="features-list">
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Built-In Accessibility Mode</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Screen-reader friendly</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Fair Housing Compliant</div>
                    </li>
                    <li className="features-list-item">
                      <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="m136 128l-80 80V48Z" opacity=".2"></path>
                            <path d="m141.66 122.34l-80-80A8 8 0 0 0 48 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32M64 188.69V67.31L124.69 128Zm157.66-55l-80 80a8 8 0 0 1-11.32-11.32L204.69 128l-74.35-74.34a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32Z"></path>
                          </g>
                        </svg></div>
                      <div className="features-list-item-text">Reduces Compliance Risk</div>
                    </li>
                  </ul>
                </div>
                <div className="features-button-wrapper">
                  <div className="primary-button-wrapper">
                    <a data-cta="Compliance - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                      <div className="primary-button-border-wrap">
                        <div className="inner-button-wrap">
                          <div className="inner-button-text-wrap">
                            <div className="inner-button-text">Carry Cost Calc</div>
                            <div className="inner-button-hover-text">Carry Cost Calc</div>
                          </div>
                          <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                          <div className="inner-button-hover-bg"></div>
                        </div>
                      </div>
                      <div className="line-wrap-inner">
                        <div className="inner-line-wrap _1">
                          <div className="line"></div>
                          <div className="line _2"></div>
                        </div>
                        <div className="inner-line-wrap _2">
                          <div className="line _3"></div>
                          <div className="line _4"></div>
                        </div>
                        <div className="inner-line-wrap _3">
                          <div className="line _5"></div>
                          <div className="line _6"></div>
                        </div>
                        <div className="inner-line-wrap _4">
                          <div className="line _7"></div>
                          <div className="line _8"></div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="features-typography-card-shape top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="features-typography-card-shape bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="features-card-shape-bottom-right" /><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="features-typography-card-shape top-left" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="how-it-works" className="section_layout237">
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
                          <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M15 7H7.89l3.57 5l-3.57 5H15l3.55-5z" opacity=".3"></path>
                              <path fill="currentColor" d="M16.63 5.84C16.27 5.33 15.67 5 15 5H4l5 7l-5 6.99h11c.67 0 1.27-.32 1.63-.83L21 12zM15 17H7.89l3.57-5l-3.57-5H15l3.55 5z"></path>
                            </svg></div>
                          <div className="text-style-tagline">How it works</div>
                        </div>
                      </div>
                    </div>
                    <div className="margin-bottom margin-small">
                      <h2 className="section-title">We Handle Everything. <br />You Get Buyers.</h2>
                    </div>
                    <p className="text-size-medium">You provide the floorplans and CRM access. <br />We handle the build, configuration, and launch.<br /></p>
                  </div>
                </div>
              </div>
              <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="w-layout-grid layout237_list">
                <div id="w-node-_5bacbfb7-9f05-92dc-f68d-38ed810a6613-9046bfc6" className="layout237_item">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zM140 80v96a8 8 0 0 1-16 0V95l-11.56 7.71a8 8 0 1 1-8.88-13.32l24-16A8 8 0 0 1 140 80"></path>
                          </g>
                        </svg></div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <h3 className="heading-style-h6">Connect Your CRM</h3>
                  </div>
                  <p>We securely connect to your existing CRM and map your unit data, pricing, and availability. From day one, your presales system reflects live data automatically.</p><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" />
                </div>
                <div id="w-node-_5bacbfb7-9f05-92dc-f68d-38ed810a661c-9046bfc6" className="layout237_item is-2">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-32a8 8 0 0 1-8 8h-48a8 8 0 0 1-6.4-12.8l43.17-57.56a16 16 0 1 0-27.86-15a8 8 0 0 1-15.09-5.34a32.4 32.4 0 0 1 4.62-8.59a32 32 0 1 1 51.11 38.52L120 168h32a8 8 0 0 1 8 8"></path>
                          </g>
                        </svg></div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <h3 className="heading-style-h6">Build The Digital Twin</h3>
                  </div>
                  <p className="paragraph">We build your digital twin — configuring interactive floor plans, live unit availability, and buyer flows — wrapped in a complete branded presales experience.</p><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" /><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
                <div id="w-node-_5bacbfb7-9f05-92dc-f68d-38ed810a6625-9046bfc6" className="layout237_item is-3">
                  <div className="margin-bottom margin-small">
                    <div className="layout237_item-icon-wrapper">
                      <div className="icon-embed-medium w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                          <g fill="currentColor">
                            <path d="M216 48v160a8 8 0 0 1-8 8H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></path>
                            <path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h160zm-48-60a36 36 0 0 1-61.71 25.19A8 8 0 1 1 109.71 162A20 20 0 1 0 124 128a8 8 0 0 1-6.55-12.59L136.63 88H104a8 8 0 0 1 0-16h48a8 8 0 0 1 6.55 12.59l-21 30A36.07 36.07 0 0 1 160 148"></path>
                          </g>
                        </svg></div>
                    </div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <h3 className="heading-style-h6">Launch And Test</h3>
                  </div>
                  <p>We launch your presales system and test every workflow — ensuring buyer inquiries and unit interactions flow directly into your sales team.</p><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="process-card-bottom-element" /><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="process-card-top-element" />
                </div>
              </div>
              <div className="process-timeline text-size-small">Typical launch timeline: 6–8 weeks.</div>
              <div className="process-button-wrapper">
                <div className="primary-button-wrapper">
                  <a data-cta="How to - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                    <div className="primary-button-border-wrap">
                      <div className="inner-button-wrap">
                        <div className="inner-button-text-wrap">
                          <div className="inner-button-text">Carry Cost Calc</div>
                          <div className="inner-button-hover-text">Carry Cost Calc</div>
                        </div>
                        <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                        <div className="inner-button-hover-bg"></div>
                      </div>
                    </div>
                    <div className="line-wrap-inner">
                      <div className="inner-line-wrap _1">
                        <div className="line"></div>
                        <div className="line _2"></div>
                      </div>
                      <div className="inner-line-wrap _2">
                        <div className="line _3"></div>
                        <div className="line _4"></div>
                      </div>
                      <div className="inner-line-wrap _3">
                        <div className="line _5"></div>
                        <div className="line _6"></div>
                      </div>
                      <div className="inner-line-wrap _4">
                        <div className="line _7"></div>
                        <div className="line _8"></div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="primary-button-wrapper">
                  <a data-cta="How to - Demo" href="/book-a-demo" className="inner-button w-inline-block">
                    <div className="primary-button-border-wrap">
                      <div className="inner-button-wrap">
                        <div className="inner-button-text-wrap">
                          <div className="inner-button-text">Book A Demo</div>
                          <div className="inner-button-hover-text">Book A Demo</div>
                        </div>
                        <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                        <div className="inner-button-hover-bg"></div>
                      </div>
                    </div>
                    <div className="line-wrap-inner">
                      <div className="inner-line-wrap _1">
                        <div className="line"></div>
                        <div className="line _2"></div>
                      </div>
                      <div className="inner-line-wrap _2">
                        <div className="line _3"></div>
                        <div className="line _4"></div>
                      </div>
                      <div className="inner-line-wrap _3">
                        <div className="line _5"></div>
                        <div className="line _6"></div>
                      </div>
                      <div className="inner-line-wrap _4">
                        <div className="line _7"></div>
                        <div className="line _8"></div>
                      </div>
                    </div>
                  </a>
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
    </section>
    <section className="section community-spotlight">
      <div data-w-id="5b30ccf4-9c4d-b796-8be3-2831dab6d2ae" className="community-spotlight-content">
        <div className="community-spotlight-typography">
          <div className="community-spotlight-icon-wrapper"><img src="/images/wowdesign-w.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-icon" /></div>
          <div style={{ opacity: "0", WebkitTransform: "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} className="community-spotlight-title-description">
            <h2 className="community-spotlight-title">Native To Your Existing Workflow.</h2>
            <p className="community-spotlight-description">We connect directly to the CRMs and platforms your sales team already uses — syncing unit availability, pricing, and buyer interactions automatically. <br />No manual updates. No duplicate entry.</p>
          </div>
        </div>
        <div data-w-id="f5204fb9-5501-c729-be95-6f1e3f47b79b" className="community-spotlight-image-wrap"><img src="/images/integrations_bg.webp" loading="lazy" alt="" className="community-spotlight-image-bg-shape" />
          <div className="community-spotlight-top-images"><img src="/images/yardi.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -430px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -430px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -430px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -430px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _1" /><img src="/images/meta.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _2" /><img src="/images/google-ads.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _3" /><img src="/images/hubspot.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _4" /><img src="/images/activecampaign.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _5" /><img src="/images/spark.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _6" /><img src="/images/calendly.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -420px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _7" /></div>
          <div className="community-spotlight-bottom-images"><img src="/images/slack.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _8" /><img src="/images/claude.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _9" /><img src="/images/twilio.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _10" /><img src="/images/hotjar.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _11" /><img src="/images/chatgpt.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _12" /><img src="/images/webflow.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _13" /><img src="/images/airtable.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _14" /><img src="/images/salesforce.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _15" /><img src="/images/n8n.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _16" /><img src="/images/zapier.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _17" /><img src="/images/make.svg" loading="lazy" style={{ WebkitTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -400px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="community-spotlight-image _18" /></div>
        </div>
        <div className="community-spotlight-button-wrapper">
          <div className="primary-button-wrapper">
            <a data-cta="Integration - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
              <div className="primary-button-border-wrap">
                <div className="inner-button-wrap">
                  <div className="inner-button-text-wrap">
                    <div className="inner-button-text">Carry Cost Calc</div>
                    <div className="inner-button-hover-text">Carry Cost Calc</div>
                  </div>
                  <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                  <div className="inner-button-hover-bg"></div>
                </div>
              </div>
              <div className="line-wrap-inner">
                <div className="inner-line-wrap _1">
                  <div className="line"></div>
                  <div className="line _2"></div>
                </div>
                <div className="inner-line-wrap _2">
                  <div className="line _3"></div>
                  <div className="line _4"></div>
                </div>
                <div className="inner-line-wrap _3">
                  <div className="line _5"></div>
                  <div className="line _6"></div>
                </div>
                <div className="inner-line-wrap _4">
                  <div className="line _7"></div>
                  <div className="line _8"></div>
                </div>
              </div>
            </a>
          </div>
          <div className="primary-button-wrapper">
            <a data-cta="Integration - Demo" href="/book-a-demo" className="inner-button w-inline-block">
              <div className="primary-button-border-wrap">
                <div className="inner-button-wrap">
                  <div className="inner-button-text-wrap">
                    <div className="inner-button-text">Book A Demo</div>
                    <div className="inner-button-hover-text">Book A Demo</div>
                  </div>
                  <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                  <div className="inner-button-hover-bg"></div>
                </div>
              </div>
              <div className="line-wrap-inner">
                <div className="inner-line-wrap _1">
                  <div className="line"></div>
                  <div className="line _2"></div>
                </div>
                <div className="inner-line-wrap _2">
                  <div className="line _3"></div>
                  <div className="line _4"></div>
                </div>
                <div className="inner-line-wrap _3">
                  <div className="line _5"></div>
                  <div className="line _6"></div>
                </div>
                <div className="inner-line-wrap _4">
                  <div className="line _7"></div>
                  <div className="line _8"></div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="sky-container">
        <div className="primary-sky-circle is-tools"></div>
        <div className="secondary-sky-circle is-tools"></div>
      </div>
    </section>
    <div id="about" className="spacer-xhuge"></div>
    <section className="section team-member">
      <div className="team-member-content">
        <div data-w-id="9d8f881c-aa19-35f1-e630-46c8098def5c" className="team-member-wrapper">
          <div className="team-member-title-team-member">
            <div style={{ opacity: "0" }} className="team-member-title-wrapper">
              <div className="section-subtitle-wrapper">
                <div className="tagline-container">
                  <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                      <circle cx="9" cy="8" r="2" fill="currentColor" opacity=".3"></circle>
                      <path fill="currentColor" d="M9 15c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2" opacity=".3"></path>
                      <path fill="currentColor" d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24m-6 0c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m0-6c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2z"></path>
                    </svg></div>
                  <div className="text-style-tagline">Team</div>
                </div>
              </div>
              <div className="margin-bottom margin-small">
                <h2 className="section-title">The Team Behind Your Presales System.</h2>
              </div>
              <p className="text-size-medium">A specialized team focused on digital twin infrastructure and CRM-integrated presales systems for boutique real estate developers.</p>
            </div>
            <div className="top-team-member-wrapper">
              <div className="w-layout-grid top-team-member-grid">
                <div data-w-id="9d8f881c-aa19-35f1-e630-46c8098def66" style={{ opacity: "0" }} className="team-member-single one">
                  <div className="team-member-image-wrap"><img src="/images/andy-bittner-1_1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                  <div style={{ opacity: "0", display: "none", WebkitTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} className="team-member-typography-wrap"><img src="/images/Team-Member-Typography-Mouse.svg" loading="lazy" alt="" className="team-member-typography-mouse" />
                    <div className="team-member-typography">
                      <div className="team-member-name">Andy</div>
                      <div className="team-member-bio">CEO & Founder</div>
                    </div>
                  </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="top-team-member-bottom-content">
            <div className="w-layout-grid bottom-team-member-grid">
              <div data-w-id="f0cf19fe-9c6a-73c3-428d-e15ef9e21901" style={{ opacity: "0" }} className="team-member-single two">
                <div className="team-member-image-wrap"><img src="/images/ashekur-rahman-1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                <div style={{ opacity: "0", display: "none", WebkitTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} className="team-member-typography-wrap"><img src="/images/Team-Member-Typography-Mouse.svg" loading="lazy" alt="" className="team-member-typography-mouse" />
                  <div className="team-member-typography">
                    <div className="team-member-name">Ashekur</div>
                    <div className="team-member-bio">Lead Systems Engineer</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
              </div>
              <div data-w-id="262b2154-2c95-39a5-a2a3-e1a4af8f25ec" style={{ opacity: "0" }} className="team-member-single border-none three">
                <div className="team-member-image-wrap"><img src="/images/mahmudul-hasan-1_1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                <div className="team-member-typography-wrap left-0"><img src="/images/Team-Member-Typography-Mouse.svg" loading="lazy" alt="" className="team-member-typography-mouse" />
                  <div className="team-member-typography">
                    <div className="team-member-name">Mahmudul</div>
                    <div className="team-member-bio">Digital Twin Architect</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
              </div>
              <div data-w-id="9d8f881c-aa19-35f1-e630-46c8098def86" style={{ opacity: "0" }} className="team-member-single four">
                <div className="team-member-image-wrap"><img src="/images/odule-enoch-1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                <div style={{ opacity: "0", display: "none", WebkitTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} className="team-member-typography-wrap"><img src="/images/Team-Member-Typography-Mouse.svg" loading="lazy" alt="" className="team-member-typography-mouse" />
                  <div className="team-member-typography">
                    <div className="team-member-name">Odule</div>
                    <div className="team-member-bio">CRM Integration Lead</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
              </div>
              <div data-w-id="9d8f881c-aa19-35f1-e630-46c8098def95" style={{ opacity: "0" }} className="team-member-single five">
                <div className="team-member-image-wrap"><img src="/images/bence-judak-1_1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                <div style={{ opacity: "0", display: "none", WebkitTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, 0, 0) scale3d(0.6, 0.6, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" }} className="team-member-typography-wrap"><img src="/images/Team-Member-Typography-Mouse.svg" loading="lazy" alt="" className="team-member-typography-mouse" />
                  <div className="team-member-typography">
                    <div className="team-member-name">Bence</div>
                    <div className="team-member-bio">Performance Engineer</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
              </div>
            </div>
          </div><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="team-member-pluse top-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="team-member-pluse top-right" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="team-member-pluse bottom-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="team-member-pluse bottom-right" />
        </div>
      </div>
    </section>
    <section data-w-id="1c3f6ead-2444-a223-fec9-b2e0c543d72e" className="section cta">
      <div className="container">
        <div className="cta-content">
          <div data-w-id="1c3f6ead-2444-a223-fec9-b2e0c543d731" className="cta-typography">
            <div className="cta-title-description">
              <h2 className="cta-title">Stop Sending PDFs. <br />Start Selling Units.</h2>
              <p className="cta-description-text">Replace static brochures with a presales system built to accelerate sales — combining a digital twin, live inventory sync, and qualified buyer data delivered directly to your team.<br /></p>
            </div>
            <div className="cta-button-wrapper">
              <div className="primary-button-wrapper">
                <a data-cta="CTA - Calc" href="/carry-cost-calculator" className="inner-button w-inline-block">
                  <div className="primary-button-border-wrap">
                    <div className="inner-button-wrap">
                      <div className="inner-button-text-wrap">
                        <div className="inner-button-text">Carry Cost Calc</div>
                        <div className="inner-button-hover-text">Carry Cost Calc</div>
                      </div>
                      <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                      <div className="inner-button-hover-bg"></div>
                    </div>
                  </div>
                  <div className="line-wrap-inner">
                    <div className="inner-line-wrap _1">
                      <div className="line"></div>
                      <div className="line _2"></div>
                    </div>
                    <div className="inner-line-wrap _2">
                      <div className="line _3"></div>
                      <div className="line _4"></div>
                    </div>
                    <div className="inner-line-wrap _3">
                      <div className="line _5"></div>
                      <div className="line _6"></div>
                    </div>
                    <div className="inner-line-wrap _4">
                      <div className="line _7"></div>
                      <div className="line _8"></div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="primary-button-wrapper">
                <a data-cta="CTA - Demo" href="/book-a-demo" className="inner-button w-inline-block">
                  <div className="primary-button-border-wrap">
                    <div className="inner-button-wrap">
                      <div className="inner-button-text-wrap">
                        <div className="inner-button-text">Book A Demo</div>
                        <div className="inner-button-hover-text">Book A Demo</div>
                      </div>
                      <div className="inner-button-star-wrap"><img loading="lazy" src="/images/inner-button-star-1.svg" alt="" className="inner-button-star _1" /><img loading="lazy" src="/images/inner-button-star-2.svg" alt="" className="inner-button-star _2" /><img loading="lazy" src="/images/inner-button-star-3.svg" alt="" className="inner-button-star _3" /></div>
                      <div className="inner-button-hover-bg"></div>
                    </div>
                  </div>
                  <div className="line-wrap-inner">
                    <div className="inner-line-wrap _1">
                      <div className="line"></div>
                      <div className="line _2"></div>
                    </div>
                    <div className="inner-line-wrap _2">
                      <div className="line _3"></div>
                      <div className="line _4"></div>
                    </div>
                    <div className="inner-line-wrap _3">
                      <div className="line _5"></div>
                      <div className="line _6"></div>
                    </div>
                    <div className="inner-line-wrap _4">
                      <div className="line _7"></div>
                      <div className="line _8"></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="cta-timeline text-size-small">Built for 10–50 unit developments.<br />Launched in 6–8 weeks.</div>
          </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="cta-top-left-element" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="cta-top-right-element" /><img src="/images/CTA-Botton-Left-Element.svg" loading="lazy" alt="" className="cta-bottom-left-element" /><img src="/images/CTA-Botton-Right-Element.svg" loading="lazy" alt="" className="cta-bottom-right-element" />
        </div>
      </div>
      <div className="sky-container">
        <div className="primary-sky-circle"></div>
        <div className="secondary-sky-circle"></div>
      </div>
    </section>
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
                  <h3 className="faq-question">What is the difference between a normal website and your presales system?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">A traditional website is a digital brochure — static visuals and a generic contact form.<br /><br />Our presales system is an interactive digital twin that syncs live with your CRM, tracks unit-level buyer interest, and actively supports your sales team.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 2" className="single-faq-accordion-wrap w-inline-block w-tab-link">
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
              <a data-w-tab="Tab 3" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">How long does it take to build and launch?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">Most projects launch within 6–8 weeks depending on asset readiness and CRM setup.<br /><br />We handle the technical implementation — your team provides floorplans, renders, and CRM access.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 4" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">Does this replace our sales team?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">No. It strengthens your sales team.<br /><br />Our presales system qualifies buyers, tracks unit interest, and delivers better-informed leads — so your team can close faster.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 5" className="single-faq-accordion-wrap w-inline-block w-tab-link">
                <div className="faq-accordion-question-wrap">
                  <h3 className="faq-question">How do we track buyer interest?</h3>
                  <div className="faq-icon-wrapper"><img loading="lazy" src="/images/Faq-Icon.svg" alt="" className="faq-icon" /><img loading="lazy" src="/images/Faq-Icon-Shape.svg" alt="" className="faq-icon-shape" /></div>
                </div>
                <div className="faq-accordion-answer-wrap">
                  <div className="faq-answer">
                    <p className="faq-answer-text">We track unit-level interactions — including which units buyers explore, view preferences, and floorplan interest.<br /><br />This data syncs directly into your CRM so your team sees context before making contact.</p>
                  </div>
                </div><img loading="lazy" src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="single-faq-accordion-line top-left" /><img loading="lazy" src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="single-faq-accordion-line top-right" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="single-faq-accordion-line bottom-left" /><img loading="lazy" src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="single-faq-accordion-line bottom-right" />
              </a>
              <a data-w-tab="Tab 6" className="single-faq-accordion-wrap w-inline-block w-tab-link">
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
              <a data-w-tab="Tab 7" className="single-faq-accordion-wrap w-inline-block w-tab-link">
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
              <a data-w-tab="Tab 8" className="single-faq-accordion-wrap w-inline-block w-tab-link">
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
              <a data-w-tab="Tab 9" className="single-faq-accordion-wrap w-inline-block w-tab-link">
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
                  <p className="footer-description-text">We build the website, the digital twin, and the automated follow-up system — so boutique developers sell out 31% faster.</p>
                </div>
              </div>
              <div className="footer-information-details">
                <div className="footer-information-details-single"><img src="/images/Footer-Information-Details-Icon2.svg" loading="lazy" alt="" className="footer-information-details-icon" />
                  <div className="footer-information-details-text">info@wowdesign.io</div>
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
                        <a href="/#about" className="footer-menu-text-link">about</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/#features" className="footer-menu-text-link">Features</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/#how-it-works" className="footer-menu-text-link">How it works</a>
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
