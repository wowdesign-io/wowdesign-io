import Script from 'next/script'

const GA_ID = 'G-D4B4T43SBH'
const CLARITY_ID = 'xblutmy6s9'

/**
 * GA4 + Clarity + conversion events (GSC/Grok SEO pass 2026-10-20).
 * Single gtag ID — do not add a second tag.
 *
 * Mark as Key events in GA4 Admin: generate_lead, book_demo_click, calculator_calculate.
 *
 * 2026-11-02: internal-link clicks delay navigation ~400ms so GA4 can flush
 * (transport_type beacon does not work for GA4). calculator_calculate watches
 * #wwd-results. Cal lead binding retries until the embed API is ready.
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
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_ID}', {
          send_page_view: true,
          ...(location.search.indexOf('gtm_debug=') !== -1 || location.search.indexOf('debug_mode=1') !== -1
            ? { debug_mode: true }
            : {})
        });
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
  var pending = [];
  var NAV_DELAY_MS = 400;

  function flushPending() {
    if (typeof window.gtag !== 'function') return;
    while (pending.length) {
      var item = pending.shift();
      window.gtag('event', item.name, item.params);
    }
  }

  function track(name, params) {
    var payload = Object.assign({}, params || {});
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, payload);
      return;
    }
    pending.push({ name: name, params: payload });
    setTimeout(flushPending, 500);
    setTimeout(flushPending, 2000);
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

  function sameOriginNav(a, href) {
    if (!href || href.charAt(0) === '#') return false;
    if (a.target && a.target !== '_self') return false;
    if (a.hasAttribute('download')) return false;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return false;
    if (/^https?:\\/\\//i.test(href)) {
      try {
        return new URL(href).origin === window.location.origin;
      } catch (err) {
        return false;
      }
    }
    return href.charAt(0) === '/';
  }

  function go(href) {
    window.location.href = href;
  }

  function fireCalculate() {
    var results = document.getElementById('wwd-results');
    if (!results) return;
    if (results.style.display === 'none' || results.getAttribute('hidden') !== null) return;
    if (results.getAttribute('data-wwd-ga-calc-fired')) return;
    results.setAttribute('data-wwd-ga-calc-fired', '1');
    var loanEl = document.getElementById('wwd-loan');
    var monthsEl = document.getElementById('wwd-months');
    track('calculator_calculate', {
      loan_amount_bucket: loanBucket(cleanNum(loanEl && loanEl.value)),
      months_delay: parseInt(monthsEl && monthsEl.value, 10) || 0
    });
  }

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var a = t.closest('a');
    if (!a) return;
    if (e.defaultPrevented) return;
    if (e.button !== 0) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

    var href = a.getAttribute('href') || '';
    var cta = a.getAttribute('data-cta') || '';
    var tracked = false;

    if (href.indexOf('/book-a-demo') !== -1 || href.indexOf('cal.com/wowdesign') !== -1) {
      track('book_demo_click', { location: demoLocation(a), page_path: path() });
      tracked = true;
    }

    if (/Insights CTA/i.test(cta) && href.indexOf('carry-cost-calculator') !== -1) {
      var slug = '';
      var m = cta.match(/Insights CTA\\s*-\\s*(.+)$/i);
      if (m) slug = m[1].trim();
      if (!slug && path().indexOf('/insights/') === 0) {
        slug = path().replace(/^\\/insights\\//, '').replace(/\\/$/, '');
      }
      track('insights_cta_click', { slug: slug || 'unknown', page_path: path() });
      tracked = true;
    }

    if (a.id === 'wwd-cta-link' || (a.classList && a.classList.contains('wwd-cta-btn'))) {
      track('calculator_cta_click', { page_path: path() });
      tracked = true;
    }

    if (href.indexOf('carry-cost-calculator') !== -1 || href.indexOf('cal.com/wowdesign') !== -1 || href.indexOf('/book-a-demo') !== -1) {
      track('cta_click', { cta_name: cta || (a.innerText || '').trim() });
      tracked = true;
    }

    // Same-origin navigations: hold the page ~400ms so GA4 can send the hit
    if (tracked && sameOriginNav(a, href)) {
      e.preventDefault();
      setTimeout(function () { go(href); }, NAV_DELAY_MS);
    }
  }, true);

  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest || !t.closest('#wwd-gate-btn')) return;
    setTimeout(fireCalculate, 0);
    setTimeout(fireCalculate, 250);
    setTimeout(fireCalculate, 1000);
  }, true);

  function watchResults() {
    var root = document.getElementById('wwd-calc-root') || document.body;
    if (!root || root.getAttribute('data-wwd-ga-obs')) return;
    root.setAttribute('data-wwd-ga-obs', '1');
    try {
      var obs = new MutationObserver(function () { fireCalculate(); });
      obs.observe(root, { attributes: true, childList: true, subtree: true, attributeFilter: ['style', 'class', 'hidden'] });
    } catch (err) {}
  }
  watchResults();
  setTimeout(watchResults, 1500);
  setTimeout(watchResults, 4000);

  function bindCal() {
    try {
      if (typeof Cal === 'undefined') return false;
      if (window.__wwdCalLeadBound) return true;
      var api = (Cal.ns && Cal.ns['book-a-demo']) || Cal;
      if (!api || typeof api !== 'function') return false;
      window.__wwdCalLeadBound = true;
      api('on', {
        action: 'bookingSuccessful',
        callback: function () {
          track('generate_lead', { method: 'cal_com', page_path: path() });
        }
      });
      return true;
    } catch (err) {
      return false;
    }
  }
  var calTries = 0;
  var calTimer = setInterval(function () {
    calTries += 1;
    if (bindCal() || calTries > 40) clearInterval(calTimer);
  }, 500);
})();
`,
        }}
      />
    </>
  )
}
