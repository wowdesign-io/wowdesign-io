import Script from 'next/script'

const GA_ID = 'G-D4B4T43SBH'
const CLARITY_ID = 'xblutmy6s9'

/**
 * Parity with Webflow custom code: GA4 + Clarity + CTA click events.
 */
export default function SiteAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
      <Script id="clarity-init" strategy="afterInteractive">{`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${CLARITY_ID}");
      `}</Script>
      <Script id="cta-click-tracking" strategy="afterInteractive">{`
        document.addEventListener('DOMContentLoaded', function () {
          document.querySelectorAll('a[href*="carry-cost-calculator"], a[href*="cal.com/wowdesign"], a[href*="/book-a-demo"]').forEach(function (b) {
            b.addEventListener('click', function () {
              var label = b.getAttribute('data-cta') || b.innerText.trim();
              if (typeof gtag === 'function') {
                gtag('event', 'cta_click', { cta_name: label });
              }
            });
          });
        });
      `}</Script>
    </>
  )
}
