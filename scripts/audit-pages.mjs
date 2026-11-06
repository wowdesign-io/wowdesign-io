/**
 * Sitewide spacing + smoke audit against staging.
 * Run: node scripts/audit-pages.mjs
 */
import { chromium } from 'playwright'

const BASE = process.env.AUDIT_BASE || 'https://wowdesign-io.vercel.app'

const PAGES = [
  '/',
  '/features',
  '/how-it-works',
  '/about',
  '/insights',
  '/book-a-demo',
  '/carry-cost-calculator',
  '/contact',
  '/links',
  '/proposal',
  '/privacy-policy',
  '/terms-of-service',
  '/disclaimer',
  '/insights/digital-twin-pre-construction',
  '/insights/construction-loan-extra-month',
  '/insights/boutique-website-besides-renderings',
  '/insights/sell-pre-construction-condos-faster',
  '/insights/what-sales-team-should-know-before-calling',
]

const BAD_TEXT = [
  /G\?\?/,
  /â€|Â |Ã©|Ã¢/,
  /interactive building/i,
  /\$75k/,
  /45k\s*\/\s*55k/,
  /What a project costs/i,
]

async function auditPage(page, path) {
  const url = `${BASE}${path}`
  const issues = []
  const consoleErrors = []

  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text().slice(0, 200))
  })
  page.on('pageerror', (err) => consoleErrors.push(String(err).slice(0, 200)))

  const res = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 })
  if (!res || res.status() >= 400) {
    issues.push(`HTTP ${res?.status() ?? 'no response'}`)
    return { path, status: res?.status(), issues, consoleErrors, stacks: [] }
  }

  await page.waitForTimeout(800)

  const bodyText = await page.locator('body').innerText()
  for (const re of BAD_TEXT) {
    if (re.test(bodyText)) issues.push(`bad copy match: ${re}`)
  }

  const h1 = await page.locator('h1').count()
  if (h1 === 0) issues.push('no h1')

  const stacks = await page.evaluate(() => {
    const sections = [...document.querySelectorAll('main section, .page-wrapper > section, .page-wrapper section.section, section.section, section.section_layout237, .section.inner-banner, .section.cta, .section.faq, .section.features, .section.solving, .section.footer')]
    // Dedupe by top
    const seen = new Set()
    const rows = []
    for (const el of sections) {
      const r = el.getBoundingClientRect()
      if (r.height < 40) continue
      const key = `${Math.round(r.top + scrollY)}`
      if (seen.has(key)) continue
      seen.add(key)
      const pad = el.querySelector('.padding-section-large')
      const target = pad || el
      const cs = getComputedStyle(target)
      const elCs = getComputedStyle(el)
      rows.push({
        id: el.id || el.className.toString().split(/\s+/).slice(0, 3).join('.'),
        top: Math.round(r.top + scrollY),
        bottom: Math.round(r.bottom + scrollY),
        pt: parseFloat(cs.paddingTop) || 0,
        pb: parseFloat(cs.paddingBottom) || 0,
        elPt: parseFloat(elCs.paddingTop) || 0,
        elPb: parseFloat(elCs.paddingBottom) || 0,
      })
    }
    rows.sort((a, b) => a.top - b.top)

    const stacks = []
    for (let i = 1; i < rows.length; i++) {
      const prev = rows[i - 1]
      const next = rows[i]
      // visual air between content boxes is 0 if sections abut; stacked pads = prev.pb + next.pt (or el pads)
      const prevBottomPad = Math.max(prev.pb, prev.elPb)
      const nextTopPad = Math.max(next.pt, next.elPt)
      const stacked = prevBottomPad + nextTopPad
      // Ignore footer and tiny
      if (/footer/i.test(next.id) || /footer/i.test(prev.id)) continue
      if (stacked >= 200 && nextTopPad >= 80 && prevBottomPad >= 80) {
        stacks.push({
          between: `${prev.id} → ${next.id}`,
          stackedPx: Math.round(stacked),
          prevPb: Math.round(prevBottomPad),
          nextPt: Math.round(nextTopPad),
        })
      }
    }
    return { stacks, sectionCount: rows.length }
  })

  for (const s of stacks.stacks) {
    issues.push(`double pad ${s.stackedPx}px ${s.between}`)
  }

  // Unique console errors
  const uniqErr = [...new Set(consoleErrors)].slice(0, 5)

  return {
    path,
    status: res.status(),
    sectionCount: stacks.sectionCount,
    stackCount: stacks.stacks.length,
    stacks: stacks.stacks,
    issues,
    consoleErrors: uniqErr,
  }
}

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })

const results = []
for (const path of PAGES) {
  try {
    results.push(await auditPage(page, path))
    console.error(`ok ${path}`)
  } catch (e) {
    results.push({ path, issues: [`crash: ${e.message}`], stacks: [], consoleErrors: [] })
    console.error(`fail ${path}`, e.message)
  }
}

await browser.close()

const problemPages = results.filter((r) => (r.issues?.length || 0) > 0 || (r.consoleErrors?.length || 0) > 0)
console.log(JSON.stringify({ base: BASE, checked: results.length, problemCount: problemPages.length, results }, null, 2))
