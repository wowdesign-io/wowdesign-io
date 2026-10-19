import type { ReactNode } from 'react'
import InnerButton from '@/components/InnerButton'
import SkyGlow from '@/components/SkyGlow'
import FaqAccordion from '@/components/FaqAccordion'
import CopyChip from '@/components/brand/CopyChip'
import DownloadLink from '@/components/brand/DownloadLink'
import type { FaqItem } from '@/lib/schema'
import {
  BREAKPOINTS,
  COLOR_TOKENS,
  FONTS_EMBED,
  MOTION,
  TOKEN_GROUPS,
} from '@/lib/tokens'

const FAQ_SAMPLE: FaqItem[] = [
  {
    q: 'Who is this page for?',
    a: 'Designers, video and motion partners, and anyone building something that should look like wowdesign.',
  },
  {
    q: 'Can I recolor the logo?',
    a: 'No. Use the provided variants. Do not stretch, outline, or invent new colors.',
  },
]

function Section({
  id,
  kicker,
  title,
  lead,
  children,
}: {
  id: string
  kicker: string
  title: string
  lead: string
  children: ReactNode
}) {
  return (
    <section id={id} className="sg-section">
      <div className="sg-section-head">
        <div className="sg-kicker">{kicker}</div>
        <h2 className="section-title">{title}</h2>
        <p className="sg-lead">{lead}</p>
      </div>
      {children}
    </section>
  )
}

function LogoCard({
  title,
  src,
  board,
  mark,
  downloads,
}: {
  title: string
  src: string
  board: 'dark' | 'light'
  mark?: boolean
  downloads: { href: string; label: string; fileName?: string }[]
}) {
  return (
    <div className="sg-card sg-card-solid">
      <strong style={{ color: 'var(--light)', fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}>{title}</strong>
      <div className={`sg-logo-board is-${board}${mark ? ' is-mark' : ''}`} style={{ marginTop: '1rem' }}>
        <img src={src} alt="" />
      </div>
      <div className="sg-dl-row">
        {downloads.map((d) => (
          <DownloadLink key={d.href} href={d.href} label={d.label} fileName={d.fileName} />
        ))}
      </div>
    </div>
  )
}

export default function BrandGuide() {
  return (
    <div className="sg-page">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <nav className="sg-toc" aria-label="On this page">
          <a href="#downloads">Downloads</a>
          <a href="#basics">Brand basics</a>
          <a href="#color">Color</a>
          <a href="#type">Typography</a>
          <a href="#spacing">Spacing</a>
          <a href="#effects">Effects</a>
          <a href="#atoms">Atoms</a>
          <a href="#molecules">Molecules</a>
          <a href="#media">3D and media</a>
          <a href="#motion">Motion and video</a>
        </nav>

        <Section
          id="downloads"
          kicker="Partner asset hub"
          title="Downloads"
          lead="Everything partners need in one place. Use the files as they are. Clear space around the logo, never stretch or recolor it, and keep color logos on dark or approved light backgrounds."
        >
          <div className="sg-note">
            Minimum logo width on screen: about 120px for the full wordmark, 32px for the mark. Leave clear space equal to the height of the mark on all sides. Prefer SVG for print and UI. Use PNG for video editors that need raster.
          </div>
          <div className="sg-dl-row" style={{ marginTop: '1.5rem' }}>
            <DownloadLink href="/brand/wowdesign-brand-kit.zip" label="Download all (ZIP)" fileName="wowdesign-brand-kit.zip" />
            <DownloadLink href="/brand/tokens/tokens.json" label="Tokens JSON" />
            <DownloadLink href="/brand/tokens/tokens.css" label="Tokens CSS" />
            <DownloadLink href="/brand/tokens/swatches.txt" label="Swatch list" />
          </div>
          <div className="sg-grid sg-grid-2" style={{ marginTop: '2rem' }}>
            <LogoCard
              title="Full logo on dark"
              src="/brand/logos/wowdesign-logo-full-dark-bg.svg"
              board="dark"
              downloads={[
                { href: '/brand/logos/wowdesign-logo-full-dark-bg.svg', label: 'SVG' },
                { href: '/brand/logos/wowdesign-logo-full-dark-bg.png', label: 'PNG 1x' },
                { href: '/brand/logos/wowdesign-logo-full-dark-bg@2x.png', label: 'PNG 2x' },
              ]}
            />
            <LogoCard
              title="Full logo on light"
              src="/brand/logos/wowdesign-logo-full-light-bg.svg"
              board="light"
              downloads={[
                { href: '/brand/logos/wowdesign-logo-full-light-bg.svg', label: 'SVG' },
                { href: '/brand/logos/wowdesign-logo-full-light-bg.png', label: 'PNG 1x' },
                { href: '/brand/logos/wowdesign-logo-full-light-bg@2x.png', label: 'PNG 2x' },
              ]}
            />
            <LogoCard
              title="Mono white"
              src="/brand/logos/wowdesign-logo-mono-white.png"
              board="dark"
              downloads={[
                { href: '/brand/logos/wowdesign-logo-mono-white.png', label: 'PNG 1x' },
                { href: '/brand/logos/wowdesign-logo-mono-white@2x.png', label: 'PNG 2x' },
              ]}
            />
            <LogoCard
              title="Mono black"
              src="/brand/logos/wowdesign-logo-mono-black.png"
              board="light"
              downloads={[
                { href: '/brand/logos/wowdesign-logo-mono-black.png', label: 'PNG 1x' },
                { href: '/brand/logos/wowdesign-logo-mono-black@2x.png', label: 'PNG 2x' },
              ]}
            />
            <LogoCard
              title="Mark only (color)"
              src="/brand/logos/wowdesign-mark-color.png"
              board="dark"
              mark
              downloads={[
                { href: '/brand/logos/wowdesign-mark-color.png', label: 'PNG 1x' },
                { href: '/brand/logos/wowdesign-mark-color@2x.png', label: 'PNG 2x' },
                { href: '/brand/logos/wowdesign-mark-w.svg', label: 'W mark SVG' },
                { href: '/brand/logos/wowdesign-mark-w.png', label: 'W mark PNG' },
              ]}
            />
            <LogoCard
              title="Favicon and webclip"
              src="/brand/logos/webclip.png"
              board="dark"
              mark
              downloads={[
                { href: '/brand/logos/favicon.png', label: 'Favicon' },
                { href: '/brand/logos/webclip.png', label: 'Webclip' },
                { href: '/brand/logos/signature-logo.png', label: 'Signature mark' },
              ]}
            />
          </div>

          <h3 className="heading-style-h5" style={{ marginTop: '2.5rem' }}>
            Fonts
          </h3>
          <p className="sg-lead">
            Outfit for headings and display. Inter for body and UI. Both are free on Google Fonts. Weights we ship: 300 to 700.
          </p>
          <div className="sg-grid sg-grid-2" style={{ marginTop: '1.25rem' }}>
            <div className="sg-card">
              <div className="tagline-container" style={{ marginBottom: '0.75rem' }}>
                <div className="text-style-tagline">Outfit</div>
              </div>
              <p style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.75rem', color: 'var(--light)', fontWeight: 500, margin: 0 }}>
                Sell Out Faster.
              </p>
              <div className="sg-weight-row" style={{ fontFamily: 'Outfit, sans-serif' }}>
                <span style={{ fontWeight: 300 }}>300</span>
                <span style={{ fontWeight: 400 }}>400</span>
                <span style={{ fontWeight: 500 }}>500</span>
                <span style={{ fontWeight: 600 }}>600</span>
                <span style={{ fontWeight: 700 }}>700</span>
              </div>
              <p className="sg-lead" style={{ fontSize: '0.9rem' }}>
                Headings mostly use 400 and 500. H1 uses 500. Never heavier than 500 for display on the site.
              </p>
              <div className="sg-dl-row">
                <InnerButton href="https://fonts.google.com/specimen/Outfit" label="Get Outfit" target="_blank" rel="noopener noreferrer" />
              </div>
            </div>
            <div className="sg-card">
              <div className="tagline-container" style={{ marginBottom: '0.75rem' }}>
                <div className="text-style-tagline">Inter</div>
              </div>
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', color: 'var(--paragraph)', margin: 0 }}>
                Your sales team only calls people who are ready.
              </p>
              <div className="sg-weight-row" style={{ fontFamily: 'Inter, sans-serif' }}>
                <span style={{ fontWeight: 300 }}>300</span>
                <span style={{ fontWeight: 400 }}>400</span>
                <span style={{ fontWeight: 500 }}>500</span>
                <span style={{ fontWeight: 600 }}>600</span>
                <span style={{ fontWeight: 700 }}>700</span>
              </div>
              <div className="sg-dl-row">
                <InnerButton href="https://fonts.google.com/specimen/Inter" label="Get Inter" target="_blank" rel="noopener noreferrer" />
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1.25rem' }}>
            <CopyChip value={FONTS_EMBED} label="Developer embed URL" />
            <code className="sg-code" style={{ marginTop: '0.75rem' }}>
              {`<link href="${FONTS_EMBED}" rel="stylesheet" />`}
            </code>
          </div>

          <h3 className="heading-style-h5" style={{ marginTop: '2.5rem' }}>
            Sky glow backgrounds
          </h3>
          <p className="sg-lead">High resolution PNGs for video and social. Dark base with brand lighting only.</p>
          <div className="sg-grid sg-grid-3" style={{ marginTop: '1.25rem' }}>
            {[
              ['Primary', 'sky-primary'],
              ['Secondary', 'sky-secondary'],
              ['Combined', 'sky-combined'],
            ].map(([label, slug]) => (
              <div key={slug} className="sg-card sg-card-solid">
                <img src={`/brand/sky/${slug}-16x9.png`} alt="" style={{ width: '100%', display: 'block', marginBottom: '0.75rem' }} />
                <div className="sg-sky-meta">
                  <strong>{label}</strong>
                  <div className="sg-dl-row is-ratios">
                    <DownloadLink href={`/brand/sky/${slug}-16x9.png`} label="16:9" compact />
                    <DownloadLink href={`/brand/sky/${slug}-9x16.png`} label="9:16" compact />
                    <DownloadLink href={`/brand/sky/${slug}-1x1.png`} label="1:1" compact />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="basics"
          kicker="Identity"
          title="Brand basics"
          lead="Voice stays plain and human. Lead with money and months for developers. Say Sell Out Faster. Say your sales team. No dashes in public copy."
        >
          <div className="sg-grid sg-grid-2">
            <div className="sg-card">
              <h3 className="heading-style-h5" style={{ marginTop: 0 }}>
                Voice
              </h3>
              <ul style={{ margin: '0.75rem 0 0', paddingLeft: '1.1rem', color: 'var(--paragraph)', lineHeight: 1.55 }}>
                <li>Sell Out Faster is the hero line.</li>
                <li>Audience is the boutique developer, not their unit buyer.</li>
                <li>Always say sales team, never team alone.</li>
                <li>No em dashes or pause hyphens in published copy.</li>
                <li>Do not name third party pricing tools on this site.</li>
              </ul>
            </div>
            <div className="sg-card">
              <h3 className="heading-style-h5" style={{ marginTop: 0 }}>
                Logo clear space
              </h3>
              <p className="sg-lead" style={{ marginTop: 0 }}>
                Keep the mark readable. Do not place it on busy photos without a dark scrim. Do not outline, rotate, or add drop shadows to the wordmark.
              </p>
              <div className="sg-do-dont" style={{ marginTop: '1rem' }}>
                <div className="sg-card sg-do">
                  <h4>Do</h4>
                  <p style={{ margin: 0, color: 'var(--grey)', fontSize: '0.9rem' }}>Color logo on dark navy. Mono white on photography with a dark wash.</p>
                </div>
                <div className="sg-card sg-dont">
                  <h4>Don&apos;t</h4>
                  <p style={{ margin: 0, color: 'var(--grey)', fontSize: '0.9rem' }}>Recolor to neon. Stretch. Park it on a bright complex photo.</p>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="color"
          kicker="Tokens"
          title="Color"
          lead="Live UI reads these CSS variables. Swatches below mirror wowdesign-miami.css and globals.css. Body text uses --paragraph on --dark-bg."
        >
          <div className="sg-dl-row" style={{ marginBottom: '1.5rem' }}>
            <DownloadLink href="/brand/tokens/tokens.json" label="JSON" />
            <DownloadLink href="/brand/tokens/tokens.css" label="CSS variables" />
            <DownloadLink href="/brand/tokens/swatches.txt" label="Plain swatches" />
          </div>
          {TOKEN_GROUPS.map((group) => {
            const tokens = COLOR_TOKENS.filter((t) => t.group === group.id)
            if (!tokens.length) return null
            return (
              <div key={group.id} style={{ marginBottom: '2rem' }}>
                <div className="tagline-container" style={{ marginBottom: '0.85rem' }}>
                  <div className="text-style-tagline">{group.label}</div>
                </div>
                <div className="sg-grid sg-grid-4">
                  {tokens.map((t) => (
                    <div key={t.css} className="sg-swatch">
                      <div className="sg-swatch-chip" style={{ background: `var(${t.css})` }} />
                      <div className="sg-swatch-meta">
                        <strong>{t.css}</strong>
                        <CopyChip value={t.value} />
                        <p>{t.use}</p>
                        {t.contrastOnDark ? <p>{t.contrastOnDark}</p> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
          <div className="sg-note">
            Contrast: --light and --paragraph on --dark-bg are the default reading pairs. --primary is for focus (CTAs, proof numbers), not long body. Gradient lighting uses --radial-primary and --radial-secondary. Never put the brand gradient on buttons or icons. Solid --primary for UI accents.
          </div>
        </Section>

        <Section
          id="type"
          kicker="Type ramp"
          title="Typography"
          lead="Outfit for headings. Inter for body and UI."
        >
          <div className="sg-type-row">
            <div className="sg-type-meta">h1 · 80/90 · 500 · -3.2px</div>
            <h1>Sell Out Faster.</h1>
          </div>
          <div className="sg-type-row">
            <div className="sg-type-meta">h2 · 3.5rem/64 · 400</div>
            <h2>Your sales team stays ready.</h2>
          </div>
          <div className="sg-type-row">
            <div className="sg-type-meta">h3 · 2.5rem / 3.25rem</div>
            <h3>Pick a unit tonight.</h3>
          </div>
          <div className="sg-type-row">
            <div className="sg-type-meta">h4 · 2rem / 1.3</div>
            <h4>Follow up that night.</h4>
          </div>
          <div className="sg-type-row">
            <div className="sg-type-meta">h5 · 24/34</div>
            <h5>Digital twin on the site.</h5>
          </div>
          <div className="sg-type-row">
            <div className="sg-type-meta">h6 · 22/32</div>
            <h6>Automated follow up.</h6>
          </div>
          <div className="sg-type-row">
            <div className="sg-type-meta">p</div>
            <p>
              Your sales team only calls people who are ready. Body copy uses Inter and --paragraph on --dark-bg.
            </p>
          </div>
          <div className="sg-type-row">
            <div className="sg-type-meta">a</div>
            <p>
              <a href="mailto:info@wowdesign.io">info@wowdesign.io</a>
            </p>
          </div>
          <div className="sg-note">
            Mobile: h1 drops to 72px / 82px at max-width 991px. Hero proof numbers stay Outfit 500 in --primary.
          </div>
        </Section>

        <Section
          id="spacing"
          kicker="Layout"
          title="Spacing and layout"
          lead="Webflow section paddings and containers drive the rhythm. Prefer existing padding-section-* classes."
        >
          <div className="sg-grid sg-grid-3">
            <div className="sg-card">
              <strong style={{ color: 'var(--light)' }}>.padding-section-large</strong>
              <p className="sg-lead" style={{ marginTop: '0.5rem' }}>
                7rem top and bottom on desktop.
              </p>
              <div className="sg-spacer-demo">
                <div className="sg-spacer-bar" style={{ width: '100%' }} />
              </div>
            </div>
            <div className="sg-card">
              <strong style={{ color: 'var(--light)' }}>.padding-section-medium</strong>
              <p className="sg-lead" style={{ marginTop: '0.5rem' }}>
                5rem top and bottom.
              </p>
              <div className="sg-spacer-demo">
                <div className="sg-spacer-bar" style={{ width: '72%' }} />
              </div>
            </div>
            <div className="sg-card">
              <strong style={{ color: 'var(--light)' }}>.padding-section-small</strong>
              <p className="sg-lead" style={{ marginTop: '0.5rem' }}>
                3rem top and bottom.
              </p>
              <div className="sg-spacer-demo">
                <div className="sg-spacer-bar" style={{ width: '45%' }} />
              </div>
            </div>
          </div>
          <ul className="sg-bp-list">
            {BREAKPOINTS.map((b) => (
              <li key={b.px}>
                {b.px}px<span>{b.note}</span>
              </li>
            ))}
          </ul>
          <p className="sg-lead">
            Containers use Relume width utilities (.container, .container-large, .max-width-*). Grid gaps often sit at 16px via .w-layout-grid.
          </p>
        </Section>

        <Section
          id="effects"
          kicker="Signature"
          title="Effects"
          lead="Sky glows, glass, corner marks, gradient text, and calm motion. Decorative sky sits behind content with pointer-events none."
        >
          <div className="sg-grid sg-grid-2">
            <div>
              <div className="tagline-container" style={{ marginBottom: '0.75rem' }}>
                <div className="text-style-tagline">Sky · primary</div>
              </div>
              <div className="sg-sky-demo is-primary-only">
                <div className="sky-container" aria-hidden="true">
                  <div className="primary-sky-circle"></div>
                  <div className="secondary-sky-circle"></div>
                </div>
              </div>
              <CopyChip value=".primary-sky-circle" />
            </div>
            <div>
              <div className="tagline-container" style={{ marginBottom: '0.75rem' }}>
                <div className="text-style-tagline">Sky · secondary</div>
              </div>
              <div className="sg-sky-demo is-secondary-only">
                <div className="sky-container" aria-hidden="true">
                  <div className="primary-sky-circle"></div>
                  <div className="secondary-sky-circle"></div>
                </div>
              </div>
              <CopyChip value=".secondary-sky-circle" />
            </div>
            <div>
              <div className="tagline-container" style={{ marginBottom: '0.75rem' }}>
                <div className="text-style-tagline">Sky · combined</div>
              </div>
              <div className="sg-sky-demo">
                <SkyGlow />
              </div>
              <CopyChip value="SkyGlow · .sky-container" />
            </div>
            <div>
              <div className="tagline-container" style={{ marginBottom: '0.75rem' }}>
                <div className="text-style-tagline">Mobile menu corners</div>
              </div>
              <div className="sg-sky-demo is-mobile-corners" />
              <CopyChip value=".w-nav-overlay corner radials" />
              <div className="sg-dl-row">
                <DownloadLink href="/brand/sky/sky-mobile-corners-16x9.png" label="Corner PNG 16:9" />
              </div>
            </div>
          </div>

          <div className="sg-grid sg-grid-2" style={{ marginTop: '2rem' }}>
            <div className="sg-card">
              <strong style={{ color: 'var(--light)' }}>Glass · --surface-30</strong>
              <p className="sg-lead">Blur 5px, border --border-card, shadow 0 20px 40px #0006.</p>
            </div>
            <div className="sg-card-hero-glass">
              <strong style={{ color: 'var(--light)' }}>Glass · --surface-90</strong>
              <p className="sg-lead">Hero and nav glass. Blur 36px, saturate 1.15.</p>
            </div>
          </div>

          <div className="sg-corner-demo" style={{ marginTop: '1.5rem' }}>
            <img src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="cta-top-left-element" />
            <img src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="cta-top-right-element" />
            <img src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="cta-bottom-left-element" />
            <img src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="cta-bottom-right-element" />
            <p style={{ margin: 0, color: 'var(--light)', position: 'relative', zIndex: 1 }}>Corner marks · .cta-*-element</p>
          </div>

          <div className="sg-grid sg-grid-2" style={{ marginTop: '1.5rem' }}>
            <div className="sg-card">
              <strong style={{ color: 'var(--light)' }}>Motion easing</strong>
              <CopyChip value={MOTION.ease} />
              <p className="sg-lead">Reveals about {MOTION.revealMs}.</p>
              <div className="sg-motion-demo" style={{ marginTop: '1rem' }} />
            </div>
            <div className="sg-card">
              <strong style={{ color: 'var(--light)' }}>Gradient text</strong>
              <p className="section-title" style={{ fontSize: '2rem', marginTop: '0.75rem' }}>
                linear-gradient(125deg, #fff 40%, #999 70%)
              </p>
              <CopyChip value="linear-gradient(125deg, #fff 40%, #999 70%)" />
            </div>
          </div>
        </Section>

        <Section
          id="atoms"
          kicker="UI atoms"
          title="Atoms"
          lead="Buttons, chips, inputs, links. Nav keeps primary-button. Body CTAs use InnerButton."
        >
          <div className="sg-grid sg-grid-2">
            <div className="sg-card">
              <div className="tagline-container" style={{ marginBottom: '1rem' }}>
                <div className="text-style-tagline">InnerButton primary</div>
              </div>
              <InnerButton href="#downloads" label="Primary CTA" />
              <CopyChip value="InnerButton variant=primary" />
            </div>
            <div className="sg-card">
              <div className="tagline-container" style={{ marginBottom: '1rem' }}>
                <div className="text-style-tagline">InnerButton secondary</div>
              </div>
              <InnerButton href="#downloads" label="Secondary CTA" variant="secondary" />
              <CopyChip value="InnerButton variant=secondary" />
            </div>
          </div>
          <div className="sg-card" style={{ marginTop: '1.25rem' }}>
            <div className="tagline-container" style={{ marginBottom: '1rem' }}>
              <div className="text-style-tagline">Nav primary-button</div>
            </div>
            <div className="primary-button-wrapper">
              <a href="/book-a-demo" className="primary-button w-inline-block">
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
            <CopyChip value=".primary-button" />
          </div>
          <div className="sg-card sg-form-demo" style={{ marginTop: '1.25rem' }}>
            <div className="tagline-container" style={{ marginBottom: '1rem' }}>
              <div className="text-style-tagline">Inputs</div>
            </div>
            <input className="footer-form-input-field w-input" placeholder="Email" type="email" readOnly />
            <p className="sg-lead">Reuse footer and contact form field classes. Hard edges, dark fill, hairline border.</p>
            <div className="sg-inline-links">
              <a href="mailto:info@wowdesign.io">Text link example</a>
              <span style={{ color: 'var(--light-border)' }}>|</span>
              <span style={{ color: 'var(--grey)' }}>Dividers use --light-border</span>
            </div>
          </div>
        </Section>

        <Section
          id="molecules"
          kicker="Composed"
          title="Molecules and organisms"
          lead="Compose from existing miami.css classes. Cards, CTA, FAQ, proof strip, nav, and footer already live on the site."
        >
          <div className="features-typography-card" style={{ marginBottom: '1.5rem' }}>
            <div className="features-typography-card-single">
              <div className="features-subtitle-wrapper">
                <div className="tagline-container">
                  <div className="text-style-tagline">Features card</div>
                </div>
              </div>
              <div className="features-title-description">
                <h3 className="features-title">.features-typography-card</h3>
                <p className="features-description-text">Live glass card used across Features, Insights, and How it works.</p>
              </div>
            </div>
            <img src="/images/Features-Card-Shape-Top-Left.svg" alt="" className="features-typography-card-shape top-left" />
            <img src="/images/Features-Card-Shape-Top-Right.svg" alt="" className="features-typography-card-shape top-right" />
            <img src="/images/Features-Card-Shape-Bottom-Left.svg" alt="" className="features-typography-card-shape bottom-left" />
            <img src="/images/Features-Card-Shape-Bottom-Right.svg" alt="" className="features-card-shape-bottom-right" />
          </div>
          <FaqAccordion items={FAQ_SAMPLE} />
          <p className="sg-lead" style={{ marginTop: '1.5rem' }}>
            Also reference on the live site: PageHero, PageCta, SiteChrome nav and footer, ProblemSection, OfferSection, HowItWorksSection, FeaturesDeepDive, FounderStory, TeamMembers, ToolsIntegrations, SelvaShowcase, InsightsArticle.
          </p>
        </Section>

        <Section
          id="media"
          kicker="Product media"
          title="3D and media"
          lead="The hero tower lives under src/components/hero3d and shows on /hero-lab. SELVA phone screens stay framed dark and premium."
        >
          <div className="sg-do-dont">
            <div className="sg-card sg-do">
              <h4>Do</h4>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--paragraph)', lineHeight: 1.5 }}>
                <li>Dark premium base behind devices.</li>
                <li>Sky glow lighting, not flat grey.</li>
                <li>One idea per frame in reels.</li>
                <li>Real product UI, not mock cartoons.</li>
              </ul>
            </div>
            <div className="sg-card sg-dont">
              <h4>Don&apos;t</h4>
              <ul style={{ margin: 0, paddingLeft: '1.1rem', color: 'var(--paragraph)', lineHeight: 1.5 }}>
                <li>Bright stock office photos as the hero.</li>
                <li>Neon gradients on UI chrome.</li>
                <li>Cartoon characters or mascots.</li>
                <li>Busy type over a busy screen recording.</li>
              </ul>
            </div>
          </div>
          <div className="sg-media-frame" style={{ marginTop: '1.25rem' }}>
            <p style={{ color: 'var(--grey)', marginBottom: '1rem' }}>Device framing: keep bezels quiet, screens sharp, background --dark-bg with sky.</p>
            <img src="/brand/sky/sky-combined-1x1.png" alt="" style={{ maxWidth: 280, opacity: 0.9 }} />
          </div>
        </Section>

        <Section
          id="motion"
          kicker="Partners"
          title="Motion and video"
          lead="Rules for LinkedIn and Instagram reels, and any homepage film. Dark premium base. Restrained color. Sky glow lighting. Outfit headlines. Captions for viewers on mute."
        >
          <div className="sg-grid sg-grid-2">
            <div className="sg-card">
              <h3 className="heading-style-h5" style={{ marginTop: 0 }}>
                Look
              </h3>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.1rem', lineHeight: 1.55 }}>
                <li>Base: --dark-bg ink.</li>
                <li>Light: primary and secondary sky only.</li>
                <li>Type: Outfit for titles, Inter for lower thirds.</li>
                <li>Accent: solid --primary, never a rainbow UI.</li>
              </ul>
            </div>
            <div className="sg-card">
              <h3 className="heading-style-h5" style={{ marginTop: 0 }}>
                Edit
              </h3>
              <ul style={{ margin: '0.5rem 0 0', paddingLeft: '1.1rem', lineHeight: 1.55 }}>
                <li>One idea per frame.</li>
                <li>Money or the buyer scene in the first seconds.</li>
                <li>Burned captions for mute viewing.</li>
                <li>Nothing cartoonish. Nothing loud for its own sake.</li>
              </ul>
            </div>
          </div>
          <div className="sg-dl-row" style={{ marginTop: '1.25rem' }}>
            <DownloadLink href="/brand/sky/sky-combined-9x16.png" label="Vertical sky 9:16" />
            <DownloadLink href="/brand/sky/sky-combined-16x9.png" label="Wide sky 16:9" />
            <DownloadLink href="/brand/wowdesign-brand-kit.zip" label="Full brand kit" />
          </div>
        </Section>
      </div>
    </div>
  )
}
