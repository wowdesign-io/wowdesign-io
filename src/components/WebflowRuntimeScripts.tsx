import Script from 'next/script'

/**
 * Same stack + order as Webflow site footer custom code:
 * jquery → webflow → gsap → ScrollTrigger → goo.
 *
 * beforeInteractive (root layout only) ≈ Webflow's blocking end-of-body scripts,
 * so gsap.from applies before paint. afterInteractive paints first → flash.
 */
export default function WebflowRuntimeScripts() {
  return (
    <>
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js"
        strategy="beforeInteractive"
      />
      <Script src="/webflow.js" strategy="beforeInteractive" />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/goo-motion-library@latest/dist/goo.bundle.js"
        strategy="beforeInteractive"
      />
    </>
  )
}
