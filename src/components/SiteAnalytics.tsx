import Script from 'next/script'

const GA_ID = 'G-D4B4T43SBH'
const CLARITY_ID = 'xblutmy6s9'

/**
 * GA4 + Clarity + conversion events (GSC/Grok SEO pass 2026-10-20).
 * Single gtag ID — do not add a second tag.
 *
 * Mark as Key events in GA4 Admin: generate_lead, book_demo_click, calculator_calculate.
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
      <Script
        id="wwd-ga4-events"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function () {
  function track(name, params) {
    if (typeof gtag === 'function') gtag('event', name, params || {});
  }
  function path() { return window.location.pathname || '/'; }
  function cleanNum(v) {
    return parseFloat(String(v || '').replace(/[$,%\\s,]/g, '')) || 0;
  }
  function loanBucket(n) {
    if (!n || n < 5000000) return 'under_5m';
    if (n < 10000000) return '5m_10m';
    if (n < 15000000) return '10m_15m';
    if (n < 25000000) return '15m_25m';
    return 'over_25m';
  }
  function demoLocation(el) {
    if (!el) return 'unknown';
    if (el.closest('.navbar') || el.closest('.w-nav')) return 'nav';
    if (el.closest('.section.footer') || el.closest('.footer')) return 'footer';
    var cta = el.getAttribute('data-cta') || '';
    if (/Insights CTA/i.test(cta) || /\\/insights\\//.test(path())) return 'insights_article';
    return 'page_cta';
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var a = t.closest('a');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    var cta = a.getAttribute('data-cta') || '';

    if (href.indexOf('/book-a-demo') !== -1 || href.indexOf('cal.com/wowdesign') !== -1) {
      track('book_demo_click', { location: demoLocation(a), page_path: path() });
    }

    if (/Insights CTA/i.test(cta) && href.indexOf('carry-cost-calculator') !== -1) {
      var slug = '';
      var m = cta.match(/Insights CTA\\s*-\\s*(.+)$/i);
      if (m) slug = m[1].trim();
      if (!slug && path().indexOf('/insights/') === 0) {
        slug = path().replace(/^\\/insights\\//, '').replace(/\\/$/, '');
      }
      track('insights_cta_click', { slug: slug || 'unknown', page_path: path() });
    }

    if (a.id === 'wwd-cta-link' || (a.classList && a.classList.contains('wwd-cta-btn'))) {
      track('calculator_cta_click', { page_path: path() });
    }

    if (href.indexOf('carry-cost-calculator') !== -1 || href.indexOf('cal.com/wowdesign') !== -1 || href.indexOf('/book-a-demo') !== -1) {
      track('cta_click', { cta_name: cta || (a.innerText || '').trim() });
    }
  }, true);

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest || !t.closest('#wwd-gate-btn')) return;
    setTimeout(function () {
      var results = document.getElementById('wwd-results');
      if (!results || results.style.display === 'none') return;
      if (results.getAttribute('data-wwd-ga-calc-fired')) return;
      results.setAttribute('data-wwd-ga-calc-fired', '1');
      var loanEl = document.getElementById('wwd-loan');
      var monthsEl = document.getElementById('wwd-months');
      track('calculator_calculate', {
        loan_amount_bucket: loanBucket(cleanNum(loanEl && loanEl.value)),
        months_delay: parseInt(monthsEl && monthsEl.value, 10) || 0
      });
    }, 250);
  }, true);

  function bindCal() {
    try {
      if (typeof Cal === 'undefined' || window.__wwdCalLeadBound) return;
      var api = (Cal.ns && Cal.ns['book-a-demo']) || Cal;
      if (!api) return;
      window.__wwdCalLeadBound = true;
      api('on', {
        action: 'bookingSuccessful',
        callback: function () {
          track('generate_lead', { method: 'cal_com', page_path: path() });
        }
      });
    } catch (err) {}
  }
  setTimeout(bindCal, 1500);
  setTimeout(bindCal, 4000);
})();
`,
        }}
      />
    </>
  )
}
