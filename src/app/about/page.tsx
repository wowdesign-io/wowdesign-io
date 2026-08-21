import Script from 'next/script'
import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import PageCta from '@/components/PageCta'
import FounderStory from '@/components/FounderStory'
import TeamMembers from '@/components/TeamMembers'
import ToolsIntegrations from '@/components/ToolsIntegrations'
import '../how-it-works-headings.css'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Andy Bittner — German founder of wowdesign. Eight years building websites that sell. The team he built delivers the full system so boutique developers sell out faster.',
  alternates: { canonical: 'https://www.wowdesign.io/about' },
}

export default function AboutPage() {
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
    <div data-w-id="3af1c84f-ff74-c014-cb3b-40446b73b1e3" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar w-nav">
      <div className="nav-container _1430">
        <div className="navbar-container">
          <a href="/" className="navbar-logo w-nav-brand"><img src="/images/wow-design-color-logo-dark.svg" loading="lazy" alt="" className="navbar-logo-image" /></a>
          <nav role="navigation" className="nav-menu w-nav-menu">
            <a href="/features" className="nav-menu-link w-nav-link">Features</a>
            <a href="/#how-it-works" className="nav-menu-link w-nav-link">How it works</a>
            <a href="/about" aria-current="page" className="nav-menu-link w-nav-link w--current">about</a>
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
    <PageHero
      tagline="About"
      title="You'll work with us."
      description="Founder-led, team-built. Eight years shipping websites that sell — so a buyer can pick a unit tonight, and your sales team only calls people who are ready."
      ctaLabel="Meet the team"
      ctaHref="#team"
      ctaData="About - Hero"
      taglineIcon={
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
          <g fill="currentColor">
            <path d="M136 108a52 52 0 1 1-52-52a52 52 0 0 1 52 52" opacity=".2"></path>
            <path d="M117.25 157.92a60 60 0 1 0-66.5 0a95.83 95.83 0 0 0-47.22 37.71a8 8 0 1 0 13.4 8.74a80 80 0 0 1 134.14 0a8 8 0 0 0 13.4-8.74a95.83 95.83 0 0 0-47.22-37.71M40 108a44 44 0 1 1 44 44a44.05 44.05 0 0 1-44-44m210.14 98.7a8 8 0 0 1-11.07-2.33A79.83 79.83 0 0 0 172 168a8 8 0 0 1 0-16a44 44 0 1 0-16.34-84.87a8 8 0 1 1-5.94-14.85a60 60 0 0 1 55.53 105.64a95.83 95.83 0 0 1 47.22 37.71a8 8 0 0 1-2.33 11.07"></path>
          </g>
        </svg>
      }
    />
    <div className="spacer-xhuge"></div>
    <FounderStory />
    <TeamMembers anchorId="team" />
    <ToolsIntegrations />
    <PageCta ctaData="About CTA - Calc" />
    <section className="section footer">
      <div className="footer-container">
        <div className="footer-content">
          <div data-w-id="7ccbf7a2-080d-66f9-81b6-2448b055e0d1" className="footer-top-content">
            <div className="footer-information-wrapper">
              <div className="footer-information-single">
                <div className="footer-logo-description">
                  <a href="/" className="footer-logo-link-block w-inline-block"><img src="/images/wow-design-color-logo-dark.svg" loading="lazy" alt="" className="footer-logo-image" /></a>
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
                  <form id="wf-form-NL-Form" name="wf-form-NL-Form" data-name="NL-Form" method="get" className="footer-form" data-wf-page-id="68b03afe7096334b9f7252c6" data-wf-element-id="7ccbf7a2-080d-66f9-81b6-2448b055e13b">
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
                        <a href="/" className="footer-menu-text-link">home</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/about" aria-current="page" className="footer-menu-text-link w--current">about</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/features" className="footer-menu-text-link">Features</a>
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
                        <a href="/contact" className="footer-menu-text-link">Contact</a>
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
      <Script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js" strategy="afterInteractive" />
      <Script src="/webflow.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" strategy="afterInteractive" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/goo-motion-library@latest/dist/goo.bundle.js" strategy="afterInteractive" />
    </>
  )
}
