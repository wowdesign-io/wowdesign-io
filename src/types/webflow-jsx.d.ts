import 'react'

// Webflow's exported markup uses non-standard "goo" attributes (GSAP goo-motion-library)
// that must pass through to the DOM verbatim so the runtime can find them.
declare module 'react' {
  interface HTMLAttributes<T> {
    goo?: string
    'goo-stagger'?: string
    'goo-type'?: string
  }
}

export {}
