import Script from 'next/script'
import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ContactForm from '@/components/ContactForm'
import '../how-it-works-headings.css'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Write to wowdesign. Questions about the presales system, a project, or a demo — we reply at info@wowdesign.io.',
  alternates: { canonical: 'https://www.wowdesign.io/contact' },
}

export default function ContactPage() {
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
    <PageHero
      tagline="Contact"
      title="Write to us."
      description="A question about the system, a project, or a demo. We reply from info@wowdesign.io."
      ctaLabel="Book a Demo"
      ctaHref="/book-a-demo"
      ctaData="Contact - Hero"
      timeline={null}
      taglineIcon={
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
          <g fill="currentColor">
            <path d="M224 56v144H32V56Z" opacity=".2"></path>
            <path d="M224 48H32a8 8 0 0 0-8 8v144a8 8 0 0 0 8 8h192a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8m-8 144H40V72.47l82.34 73.18a8 8 0 0 0 11.32 0L216 72.47Zm-89.66-61.66L40 64h176Z"></path>
          </g>
        </svg>
      }
    />
    <div className="spacer-xhuge"></div>
    <ContactForm />
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
                        <a href="/about" className="footer-menu-text-link">about</a>
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
                        <a href="/contact" aria-current="page" className="footer-menu-text-link w--current">Contact</a>
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
