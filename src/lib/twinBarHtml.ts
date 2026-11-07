/** Injected into proxied Planpoint HTML on 3dlite / 3dimmersive hosts. */

const BACK_HREF = 'https://www.wowdesign.io/proposal#open-the-demos'
const LOGO_SRC = 'https://www.wowdesign.io/images/wow-design-color-logo-dark.svg'
const FAVICON_SRC = 'https://www.wowdesign.io/favicon.png'

export function injectWowTwinBar(html: string, title: string): string {
  const safeTitle = title.replace(/</g, '&lt;').replace(/>/g, '&gt;')

  const headSnippet = `
<link rel="icon" href="${FAVICON_SRC}" type="image/png"/>
<link rel="shortcut icon" href="${FAVICON_SRC}" type="image/png"/>
<link rel="apple-touch-icon" href="${FAVICON_SRC}"/>
<title>${safeTitle}</title>
<script id="wowdesign-twin-url-scrub">
(function(){
  function scrubPath(path){
    if(typeof path!=='string') return path;
    try{
      var u=new URL(path, location.origin);
      if(/planpoint/i.test(u.pathname)){
        u.pathname='/';
        return u.pathname+u.search+u.hash;
      }
    }catch(e){}
    return path;
  }
  function wrap(fn){
    return function(state, title, url){
      if(typeof url==='string') url=scrubPath(url);
      return fn.call(this, state, title, url);
    };
  }
  history.pushState=wrap(history.pushState);
  history.replaceState=wrap(history.replaceState);
  if(/planpoint/i.test(location.pathname)){
    history.replaceState(history.state, '', '/'+location.search+location.hash);
  }
  document.title=${JSON.stringify(title)};
})();
</script>`

  const barSnippet = `
<style id="wowdesign-twin-bar-css">
  #wowdesign-twin-bar{
    position:fixed;top:0;left:0;right:0;z-index:2147483646;
    box-sizing:border-box;
    padding:0.55rem 0.75rem 0.65rem;
    padding-top:calc(0.55rem + env(safe-area-inset-top,0px));
    background:#0b0b0b;border-bottom:1px solid rgba(255,255,255,.18);
    font-family:Inter,system-ui,sans-serif;color:#fff;
  }
  #wowdesign-twin-bar .wdt-top{
    display:grid;grid-template-columns:44px 1fr 44px;align-items:center;column-gap:.5rem;
  }
  #wowdesign-twin-bar a.wdt-back{
    width:44px;height:44px;margin:0;padding:0;display:inline-flex;align-items:center;justify-content:center;
    border:1px solid rgba(255,255,255,.22);color:#fff!important;text-decoration:none;opacity:.9;box-sizing:border-box;
  }
  #wowdesign-twin-bar a.wdt-back:hover{opacity:1;border-color:rgba(255,255,255,.4)}
  #wowdesign-twin-bar a.wdt-back svg{display:block;width:20px;height:20px}
  #wowdesign-twin-bar a.wdt-brand{display:flex;align-items:center;justify-content:center;justify-self:center;text-decoration:none}
  #wowdesign-twin-bar .wdt-logo{display:block;height:20px;width:auto}
  #wowdesign-twin-bar .wdt-spacer{width:44px;height:44px}
  #wowdesign-twin-bar .wdt-meta{margin-top:.35rem;text-align:center}
  #wowdesign-twin-bar .wdt-title{
    margin:0;font-size:.75rem;font-weight:600;letter-spacing:.06em;line-height:1.25;
    text-transform:uppercase;color:#fff!important;
  }
  html{scroll-padding-top:96px}
  body{padding-top:96px!important;box-sizing:border-box}
  @media (min-width:768px){
    #wowdesign-twin-bar{padding:0.65rem 1rem 0.75rem;padding-top:calc(0.65rem + env(safe-area-inset-top,0px))}
    #wowdesign-twin-bar .wdt-logo{height:24px}
    #wowdesign-twin-bar .wdt-title{font-size:.8125rem}
    body{padding-top:104px!important}
    html{scroll-padding-top:104px}
  }
</style>
<header id="wowdesign-twin-bar" role="banner">
  <div class="wdt-top">
    <a class="wdt-back" href="${BACK_HREF}" aria-label="Back to demos">
      <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 256 256" width="20" height="20">
        <path fill="currentColor" d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"/>
      </svg>
    </a>
    <a class="wdt-brand" href="${BACK_HREF}" aria-label="wowdesign — back to demos">
      <img class="wdt-logo" src="${LOGO_SRC}" alt="wowdesign" width="132" height="28"/>
    </a>
    <span class="wdt-spacer" aria-hidden="true"></span>
  </div>
  <div class="wdt-meta"><p class="wdt-title">${safeTitle}</p></div>
</header>`

  let out = html
  // Drop Planpoint favicon / title so ours win.
  out = out.replace(/<link[^>]+rel=["'][^"']*icon[^"']*["'][^>]*>/gi, '')
  out = out.replace(/<title[^>]*>[\s\S]*?<\/title>/gi, '')

  if (/<head[^>]*>/i.test(out)) {
    out = out.replace(/<head([^>]*)>/i, `<head$1>${headSnippet}`)
  } else {
    out = headSnippet + out
  }

  if (/<body[^>]*>/i.test(out)) {
    out = out.replace(/<body([^>]*)>/i, `<body$1>${barSnippet}`)
  } else {
    out = barSnippet + out
  }

  return out
}
