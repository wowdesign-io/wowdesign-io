'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

/* Native replacement for the Webflow "goo" fade-up stagger. Wrap a group in
   <Reveal> and each child in <RevealItem> to get the staggered entrance.
   `immediate` animates on mount (above-the-fold, e.g. hero); otherwise it
   animates when scrolled into view, once. */

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Reveal({
  children,
  className,
  immediate = false,
}: {
  children: ReactNode
  className?: string
  immediate?: boolean
}) {
  return (
    <motion.div
      className={className}
      variants={group}
      initial="hidden"
      {...(immediate
        ? { animate: 'show' }
        : { whileInView: 'show', viewport: { once: true, amount: 0.2 } })}
    >
      {children}
    </motion.div>
  )
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div variants={item} className={className}>
      {children}
    </motion.div>
  )
}
