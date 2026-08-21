import InnerButton from '@/components/InnerButton'
import '@/app/how-it-works-headings.css'

type TeamMembersProps = {
  anchorId?: string
  storyHref?: string
}

export default function TeamMembers({ anchorId = 'about', storyHref }: TeamMembersProps) {
  return (
    <>
    <div id={anchorId} className="spacer-xhuge"></div>
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
                <h2 className="section-title">The team behind your presales system.</h2>
              </div>
              <p className="text-size-medium">The team that builds the website, the live building, and the follow-up — so boutique developers sell out faster.</p>
              {storyHref ? (
                <div className="banner-button-wrapper margin-top margin-small">
                  <div className="primary-button-wrapper">
                    <InnerButton href={storyHref} label="The full story" cta="Home About - Story" />
                  </div>
                </div>
              ) : null}
            </div>
            <div className="top-team-member-wrapper">
              <div className="w-layout-grid top-team-member-grid">
                <div data-w-id="9d8f881c-aa19-35f1-e630-46c8098def66" style={{ opacity: "0" }} className="team-member-single one">
                  <div className="team-member-image-wrap"><img src="/images/andy-bittner-1_1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                  <div className="team-member-typography-wrap">
                    <div className="team-member-typography">
                      <div className="team-member-name">Andy Bittner</div>
                      <div className="team-member-bio">CEO &amp; Founder</div>
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
                <div className="team-member-typography-wrap">
                  <div className="team-member-typography">
                    <div className="team-member-name">Ashekur Rahman</div>
                    <div className="team-member-bio">Developer</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
              </div>
              <div data-w-id="262b2154-2c95-39a5-a2a3-e1a4af8f25ec" style={{ opacity: "0" }} className="team-member-single border-none three">
                <div className="team-member-image-wrap"><img src="/images/sofia-mendez-1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                <div className="team-member-typography-wrap">
                  <div className="team-member-typography">
                    <div className="team-member-name">Sofia Mendez</div>
                    <div className="team-member-bio">Designer</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
              </div>
              <div data-w-id="9d8f881c-aa19-35f1-e630-46c8098def86" style={{ opacity: "0" }} className="team-member-single four">
                <div className="team-member-image-wrap"><img src="/images/odule-enoch-1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                <div className="team-member-typography-wrap">
                  <div className="team-member-typography">
                    <div className="team-member-name">Odule Enoch</div>
                    <div className="team-member-bio">Automation Expert</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
              </div>
              <div data-w-id="9d8f881c-aa19-35f1-e630-46c8098def95" style={{ opacity: "0" }} className="team-member-single five">
                <div className="team-member-image-wrap"><img src="/images/mateo-rivera-1.avif" loading="lazy" alt="" className="team-member-image" /><img src="/images/Team-Member-Shape.webp" loading="lazy" style={{ WebkitTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", MozTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", msTransform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", transform: "translate3d(0, -101%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)", opacity: "0" }} alt="" className="team-member-shape" /></div>
                <div className="team-member-typography-wrap">
                  <div className="team-member-typography">
                    <div className="team-member-name">Mateo Rivera</div>
                    <div className="team-member-bio">3D Artist</div>
                  </div>
                </div><img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="team-member-line top-left" /><img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="team-member-line top-right" /><img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="team-member-line bottom-left" /><img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="team-member-line bottom-right" />
              </div>
            </div>
          </div><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="team-member-pluse top-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="team-member-pluse top-right" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="team-member-pluse bottom-left" /><img src="/images/Inner-Banner-Pluse-Icon.svg" loading="lazy" alt="" className="team-member-pluse bottom-right" />
        </div>
      </div>
    </section>
    </>
  )
}
