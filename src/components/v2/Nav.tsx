import Link from 'next/link'
import { Button } from './Button'
import s from './Nav.module.css'

const LOGO = 'https://a.storyblok.com/f/293523249633085/8983/8b2fec33e4/wowdesign-logo-dark.svg'

export function Nav() {
  return (
    <header className={s.navbar}>
      <div className={s.inner}>
        <Link href="/v2" className={s.logo} aria-label="wowdesign home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={LOGO} alt="wowdesign" />
        </Link>
        <nav className={s.menu}>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#about">About</a>
          <Link href="/carry-cost-calculator">Carry Cost Calc</Link>
        </nav>
        <Button href="/book-a-demo" variant="primary">
          Book A Demo
        </Button>
      </div>
    </header>
  )
}
