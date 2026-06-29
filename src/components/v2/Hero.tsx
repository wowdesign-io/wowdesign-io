import { Reveal, RevealItem } from './Reveal'
import { Button } from './Button'
import s from './Hero.module.css'

const BUILDING = 'https://a.storyblok.com/f/293523249633085/158204/b331a144ce/hero-building.webp'
const PLUS = '/images/Inner-Banner-Pluse-Icon.svg'

function BuildingIcon() {
  return (
    <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden>
      <path d="M240 208h-16V96a16 16 0 0 0-16-16h-64V32a16 16 0 0 0-24.88-13.32L39.12 72A16 16 0 0 0 32 85.34V208H16a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M208 96v112h-64V96ZM48 85.34L128 32v176H48ZM112 112v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m-32 0v16a8 8 0 0 1-16 0v-16a8 8 0 1 1 16 0m0 56v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0m32 0v16a8 8 0 0 1-16 0v-16a8 8 0 0 1 16 0" />
    </svg>
  )
}

export function Hero() {
  return (
    <section className={s.hero}>
      <div className={s.radial1} />
      <div className={s.radial2} />
      {/* eslint-disable @next/next/no-img-element */}
      <img src={PLUS} alt="" className={`${s.plus} ${s.tl}`} />
      <img src={PLUS} alt="" className={`${s.plus} ${s.tr}`} />
      <img src={PLUS} alt="" className={`${s.plus} ${s.bl}`} />
      <img src={PLUS} alt="" className={`${s.plus} ${s.br}`} />

      <div className={s.container}>
        <div className={s.content}>
          <Reveal immediate className={s.copy}>
            <RevealItem>
              <span className={s.tagline}>
                <BuildingIcon />
                Presales System
              </span>
            </RevealItem>
            <RevealItem>
              <h1 className={s.title}>Sell Out Faster.</h1>
            </RevealItem>
            <RevealItem>
              <p className={s.desc}>
                Boutique developers close 31% faster with wowdesign — we build the website, the
                digital twin, and the automated follow-up system, so your team always knows
                who&rsquo;s ready to buy.
              </p>
            </RevealItem>
            <RevealItem>
              <div className={s.buttons}>
                <Button href="/carry-cost-calculator" variant="ghost" stars>
                  Carry Cost Calc
                </Button>
                <Button href="#features" variant="ghost" stars>
                  Features
                </Button>
              </div>
            </RevealItem>
          </Reveal>

          <div className={s.visual}>
            <img src={BUILDING} alt="" className={s.building} />
          </div>
          {/* eslint-enable @next/next/no-img-element */}
        </div>
      </div>
    </section>
  )
}
