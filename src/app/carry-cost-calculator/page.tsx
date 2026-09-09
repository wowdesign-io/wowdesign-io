import Script from 'next/script'
import type { Metadata } from 'next'
import InnerButton from '@/components/InnerButton'
import JsonLd from '@/components/JsonLd'
import FaqAccordion from '@/components/FaqAccordion'
import { CALC_FAQS, faqPage, howToRunCalc, webApplicationCalc } from '@/lib/schema'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Carry Cost Calculator',
  description:
    'See what extra months of construction-loan interest plus marketing and ops cost. Monthly interest is loan x rate / 12. Free calculator for 10-50 unit developers.',
  alternates: { canonical: `${SITE}/carry-cost-calculator` },
}

export default function CarryCostCalculatorPage() {
  return (
    <>
      <JsonLd data={webApplicationCalc()} />
      <JsonLd data={howToRunCalc()} />
      <JsonLd data={faqPage(`${SITE}/carry-cost-calculator`, CALC_FAQS)} />
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
            <a href="/how-it-works" className="nav-menu-link w-nav-link">How it works</a>
            <a href="/about" className="nav-menu-link w-nav-link">about</a>
            <a data-cta="Nav - Calc" href="/carry-cost-calculator" aria-current="page" className="nav-menu-link w-nav-link w--current">Carry Cost Calc</a>
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
    <section className="section inner-banner">
      <div className="inner-banner-content">
        <div className="inner-banner-wrapper">
          <div className="container">
            <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="inner-banner-typography">
              <div className="inner-banner-subtitle-wrap">
                <div className="tagline-container">
                  <div className="icon-embed-xsmall text-color-primary w-embed"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--ph" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                      <g fill="currentColor">
                        <path d="M224 104v48H48v-48Z" opacity=".2"></path>
                        <path d="M224 96h-40V56a8 8 0 0 0-8-8H56v-8a8 8 0 0 0-16 0v176a8 8 0 0 0 16 0v-8h88a8 8 0 0 0 8-8v-40h72a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-56-32v32H56V64Zm-32 128H56v-32h80Zm80-48H56v-32h160Z"></path>
                      </g>
                    </svg></div>
                  <div className="text-style-tagline">Carry Cost Calculator</div>
                </div>
              </div>
              <div className="inner-banner-title-wrapper">
                <h1 className="inner-banner-title contact-us">How much does an extra month of a construction loan cost?</h1>
                <p className="inner-banner-description about-us">On a typical boutique $10M-$15M loan at about 8%, the bank takes $67k-$100k a month. Marketing and ops keep running until units are gone. Enter your loan, rate, months saved, and monthly burn.</p>
              </div>
              <div className="banner-button-wrapper">
                <div className="primary-button-wrapper">
                  <InnerButton href="#roi-calculator" label="Run your numbers" />
                </div>
              </div>
            </div>
          </div><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="inner-banner-pluse-icon top-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="inner-banner-pluse-icon top-right" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="inner-banner-pluse-icon bottom-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="inner-banner-pluse-icon bottom-right" />
          <div className="cta-radial-gradient1"></div>
          <div className="cta-radial-gradient2"></div>
        </div>
      </div>
    </section>
    <section id="roi-calculator" className="section roi">
      <div className="container">
        <div data-w-id="cce02c8f-bf74-6eb9-db79-4a28a0499fb5" className="contact-us-wrapper"><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="contact-us-icon top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="contact-us-icon top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="contact-us-icon bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="contact-us-icon bottom-right" />
          <div className="w-embed w-script">
            <div id="wwd-calc-root"></div>
            
          </div>
          <div className="call-radial-gradient1"></div>
          <div className="call-radial-gradient2"></div>
        </div>
      </div>
    </section>
    <section className="section_content7">
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="content7_component">
              <div className="max-width-large align-center">
                <div className="content7_content-wrapper">
                  <div className="text-rich-text w-richtext">
                    <h4>What the numbers mean</h4>
                    <p className="rich-text-p">Monthly interest is loan x (annual rate / 100) / 12. A $12M loan at 8% is $80,000 a month to the bank. Multiply by the months you could save (2-6). Then add monthly marketing and ops burn for those months. That is extra months - not a lender draw-schedule calculator.</p>
                    <h4>How to run it</h4>
                    <ol>
                      <li>Enter the construction loan amount in USD.</li>
                      <li>Enter the annual interest rate as a percent.</li>
                      <li>Choose how many months faster you could sell out (2-6).</li>
                      <li>Add monthly marketing and ops spend. Leave 0 for interest only.</li>
                      <li>Read the total: interest plus burn, times months saved.</li>
                    </ol>
                    <p>Buyers pick a unit tonight. Your sales team only calls people who are ready. That is how extra months come off. After you run the number, book a demo if you want CRM, what the sales team sees, and follow-up.</p>
                    <p>
                      <a href="/insights/construction-loan-extra-month">How much an extra month of a construction loan costs</a>
                      {" — "}
                      <a href="/insights">all Insights</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <FaqAccordion items={CALC_FAQS} />
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
                  <form id="wf-form-NL-Form" name="wf-form-NL-Form" data-name="NL-Form" method="get" className="footer-form" data-wf-page-id="68b04f4de2c473630dcbed39" data-wf-element-id="7ccbf7a2-080d-66f9-81b6-2448b055e13b">
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
                        <a href="/about" className="footer-menu-text-link">about</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/features" className="footer-menu-text-link">Features</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/how-it-works" className="footer-menu-text-link">How it works</a>
                      </li>
                                          <li className="footer-menu-list-item">
                        <a href="/insights" className="footer-menu-text-link">Insights</a>
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
                        <a href="/contact" className="footer-menu-text-link">Contact</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/book-a-demo" className="footer-menu-text-link">Book A Demo</a>
                      </li>
                      <li className="footer-menu-list-item">
                        <a href="/carry-cost-calculator" aria-current="page" className="footer-menu-text-link w--current">Carry Cost Calculator</a>
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
              <div className="footer-details-text">{'\u00A9'} Copyright 2026 - wowdesign LLC</div>
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
      <Script src="https://cdn.jsdelivr.net/gh/wowdesign-io/carry-cost-calc@main/carry-cost-calculator.js" strategy="afterInteractive" />
    </>
  )
}
