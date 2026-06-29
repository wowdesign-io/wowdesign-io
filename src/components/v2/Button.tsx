import Link from 'next/link'
import s from './Button.module.css'
import type { ReactNode } from 'react'

export function Button({
  href,
  children,
  variant = 'primary',
  stars = false,
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  stars?: boolean
}) {
  return (
    <Link href={href} className={`${s.btn} ${variant === 'primary' ? s.primary : s.ghost}`}>
      <span className={s.label}>{children}</span>
      {stars && <span className={s.stars} aria-hidden>✦</span>}
    </Link>
  )
}
