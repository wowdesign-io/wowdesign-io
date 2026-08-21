import InnerButton from '@/components/InnerButton'
import '@/app/founder-story.css'

type FounderPhoto = {
  src: string
  alt: string
  pos: string
}

const colLeft: FounderPhoto[] = [
  { src: '/images/founder/andy-founder-13-portrait.webp', alt: 'Andy Bittner, founder of wowdesign', pos: 'pos-portrait' },
  { src: '/images/founder/andy-founder-07-nanuk-bench.webp', alt: 'Andy Bittner with Nanuk', pos: 'pos-nanuk' },
  { src: '/images/founder/andy-founder-09-mtb.webp', alt: 'Mountain bike ride at sunset', pos: 'pos-mtb' },
]

const colRight: FounderPhoto[] = [
  { src: '/images/founder/andy-founder-08-nanuk-water.webp', alt: 'Nanuk in the water', pos: 'pos-nanuk-water' },
  { src: '/images/founder/andy-founder-10-proptech.webp', alt: 'Andy Bittner at a PropTech conference', pos: 'pos-proptech' },
  { src: '/images/founder/andy-founder-12-bears.webp', alt: 'Andy Bittner at a Chicago Bears game', pos: 'pos-bears' },
]

function PhotoSet({ photos, hidden }: { photos: FounderPhoto[]; hidden?: boolean }) {
  return (
    <div className="founder-marquee-set" aria-hidden={hidden || undefined}>
      {photos.map((photo) => (
        <div className="founder-marquee-cell" key={photo.src}>
          <img src={photo.src} loading="lazy" alt={hidden ? '' : photo.alt} className={`founder-photo ${photo.pos}`} />
        </div>
      ))}
    </div>
  )
}

function MarqueeColumn({ photos, direction }: { photos: FounderPhoto[]; direction: 'up' | 'down' }) {
  return (
    <div className={`founder-marquee-col is-${direction}`}>
      <div className="founder-marquee-track">
        <PhotoSet photos={photos} />
        <PhotoSet photos={photos} hidden />
      </div>
    </div>
  )
}

export default function FounderStory() {
  return (
    <section className="section founder-header">
      <div className="container">
        <div className="founder-header-layout">
          <div goo-stagger="0.3" goo="fade-up" goo-type="stagger" className="founder-header-copy">
            <div className="tagline-container">
              <div className="icon-embed-xsmall text-color-primary w-embed">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 256">
                  <g fill="currentColor">
                    <path d="M192 96a64 64 0 1 1-64-64a64 64 0 0 1 64 64" opacity=".2"></path>
                    <path d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8M72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56"></path>
                  </g>
                </svg>
              </div>
              <div className="text-style-tagline">Founder</div>
            </div>
            <h3 className="founder-heading">I&apos;m Andy Bittner.</h3>
            <p className="founder-body">I grew up in Munich. Eight years building websites that sell — agency, then six years on my own, now founder of wowdesign. What I care about has not changed: better UX, smarter tools, and automation that turns a visitor into a buyer.</p>
            <p className="founder-body">Family comes first. That includes Nanuk, my dog from Croatia. When I need a clear head I get outside — water, bike, snowboard. At home I love the griddle — tacos or burgers. On a good Sunday: F1, or Miami or Chicago if they are playing.</p>
            <p className="founder-body">I have always been an early adopter — for the gadget, and for the workflow that saves a day. If a tool works, it goes into the build the next morning.</p>
            <div className="founder-header-cta">
              <div className="primary-button-wrapper">
                <InnerButton href="#team" label="Meet the team" cta="About - Story" />
              </div>
            </div>
          </div>
          <div className="founder-header-images">
            <div className="founder-images-frame">
              <div className="founder-images-clip">
                <MarqueeColumn photos={colLeft} direction="up" />
                <MarqueeColumn photos={colRight} direction="down" />
              </div>
              <img src="/images/Features-Card-Shape-Top-Left.svg" loading="lazy" alt="" className="founder-frame-shape top-left" />
              <img src="/images/Features-Card-Shape-Top-Right.svg" loading="lazy" alt="" className="founder-frame-shape top-right" />
              <img src="/images/Features-Card-Shape-Bottom-Left.svg" loading="lazy" alt="" className="founder-frame-shape bottom-left" />
              <img src="/images/Features-Card-Shape-Bottom-Right.svg" loading="lazy" alt="" className="founder-frame-shape bottom-right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
