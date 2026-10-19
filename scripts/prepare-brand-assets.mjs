/**
 * One-shot: generate sky glow PNGs, 2x logos, token exports, and a download ZIP.
 * Run: node scripts/prepare-brand-assets.mjs
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import { execFileSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const require = createRequire(import.meta.url)
const sharp = require('sharp')

const TOKENS = [
  { name: '--dark-bg', value: '#0b0f19', group: 'background', use: 'Page background' },
  { name: '--surface-bg', value: '#151c2c', group: 'surfaces', use: 'Card surface' },
  { name: '--surface-30', value: '#151c2c4d', group: 'surfaces', use: 'Glass card fill' },
  { name: '--surface-90', value: '#151c2ce6', group: 'surfaces', use: 'Nav and hero glass' },
  { name: '--primary', value: '#2d68ff', group: 'brand', use: 'Brand blue, CTAs, proof numbers' },
  { name: '--secondary', value: '#a044ff', group: 'brand', use: 'Violet' },
  { name: '--tertiary', value: '#eb32ab', group: 'accents', use: 'Magenta' },
  { name: '--tertiary-2', value: '#ff2c55', group: 'accents', use: 'Red-pink' },
  { name: '--radial-primary', value: '#2e77fa9e', group: 'accents', use: 'Radial glow blue' },
  { name: '--radial-secondary', value: '#a044ff80', group: 'accents', use: 'Radial glow violet' },
  { name: '--light', value: '#ffffff', group: 'text', use: 'White' },
  { name: '--white-74', value: '#ffffffbd', group: 'text', use: 'Soft white' },
  { name: '--paragraph', value: '#bebec1', group: 'text', use: 'Body text' },
  { name: '--grey', value: '#94a3b8', group: 'text', use: 'Muted text, gradient end' },
  { name: '--light-border', value: '#ffffff0f', group: 'borders', use: 'Hairline borders' },
  { name: '--border-card', value: '#ffffff14', group: 'borders', use: 'Card borders' },
  { name: '--border-tagline', value: '#fff3', group: 'borders', use: 'Tagline chips, primary CTA rim' },
  { name: '--dark', value: '#000000', group: 'overlays', use: 'Black' },
  { name: '--dark-50', value: '#00000080', group: 'overlays', use: 'Shadows' },
  { name: '--dark-60', value: '#0009', group: 'overlays', use: 'Overlays' },
]

const brandDir = path.join(root, 'public', 'brand')
const logosDir = path.join(brandDir, 'logos')
const tokensDir = path.join(brandDir, 'tokens')
const skyDir = path.join(brandDir, 'sky')

fs.mkdirSync(tokensDir, { recursive: true })
fs.mkdirSync(skyDir, { recursive: true })

// Token exports
const tokensJson = {
  meta: {
    brand: 'wowdesign',
    source: 'src/app/wowdesign-miami.css :root + globals.css --surface-90',
    updated: new Date().toISOString().slice(0, 10),
  },
  colors: Object.fromEntries(TOKENS.map((t) => [t.name.replace(/^--/, ''), { css: t.name, value: t.value, group: t.group, use: t.use }])),
  typography: {
    display: { family: 'Outfit', weights: [300, 400, 500, 600, 700], headingWeights: { h1: 500, h2Plus: 400 } },
    body: { family: 'Inter', weights: [300, 400, 500, 600, 700] },
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap',
  },
  motion: {
    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    revealDuration: '1.3s–1.4s',
  },
  breakpoints: [2560, 1366, 991, 767, 479],
}

fs.writeFileSync(path.join(tokensDir, 'tokens.json'), JSON.stringify(tokensJson, null, 2))
fs.writeFileSync(
  path.join(tokensDir, 'tokens.css'),
  `:root {\n${TOKENS.map((t) => `  ${t.name}: ${t.value};`).join('\n')}\n}\n`,
)
fs.writeFileSync(
  path.join(tokensDir, 'swatches.txt'),
  TOKENS.map((t) => `${t.name}\t${t.value}\t${t.group}\t${t.use}`).join('\n') + '\n',
)

function hexToRgba(hex) {
  let h = hex.replace('#', '')
  if (h.length === 3) h = h.split('').map((c) => c + c).join('')
  let a = 1
  if (h.length === 8) {
    a = parseInt(h.slice(6, 8), 16) / 255
    h = h.slice(0, 6)
  }
  const n = parseInt(h, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255, a }
}

/**
 * Soft gaussian orbs in float → Floyd–Steinberg into 8-bit at final size.
 * (SVG blur and “dither then downscale” both leave contour rings on dark navy.)
 */
async function skyPng(name, width, height, mode) {
  const bg = hexToRgba('#0b0f19')
  const primary = hexToRgba('#2d68ff')
  const secondary = hexToRgba('#a044ff')
  const softBlue = hexToRgba('#2e77fa')
  const softViolet = hexToRgba('#a044ff')

  const sigma = Math.min(width, height) * 0.3
  const peak = 0.42
  const cy = height * 0.5
  /** @type {{ cx: number, cy: number, sigma: number, color: {r:number,g:number,b:number}, peak: number }[]} */
  const orbs = []

  if (mode === 'primary') {
    orbs.push({ cx: width * 0.5, cy, sigma, color: primary, peak })
  } else if (mode === 'secondary') {
    orbs.push({ cx: width * 0.5, cy, sigma, color: secondary, peak })
  } else if (mode === 'combined') {
    const spread = Math.min(width, height) * 0.22
    orbs.push(
      { cx: width * 0.5 - spread, cy, sigma, color: primary, peak },
      { cx: width * 0.5 + spread, cy, sigma, color: secondary, peak },
    )
  } else if (mode === 'mobile-corners') {
    const cornerSigma = Math.min(width, height) * 0.45
    orbs.push(
      { cx: 0, cy: 0, sigma: cornerSigma, color: softBlue, peak: 0.28 },
      { cx: width, cy: height, sigma: cornerSigma, color: softViolet, peak: 0.22 },
    )
  }

  const fr = new Float32Array(width * height)
  const fg = new Float32Array(width * height)
  const fb = new Float32Array(width * height)
  const invTwoSig2 = orbs.map((o) => 1 / (2 * o.sigma * o.sigma))

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let r = bg.r
      let g = bg.g
      let b = bg.b
      const px = x + 0.5
      const py = y + 0.5
      for (let oi = 0; oi < orbs.length; oi++) {
        const orb = orbs[oi]
        const dx = px - orb.cx
        const dy = py - orb.cy
        const weight = orb.peak * Math.exp(-(dx * dx + dy * dy) * invTwoSig2[oi])
        r += (orb.color.r - bg.r) * weight
        g += (orb.color.g - bg.g) * weight
        b += (orb.color.b - bg.b) * weight
      }
      const p = y * width + x
      fr[p] = r
      fg[p] = g
      fb[p] = b
    }
  }

  const buf = Buffer.alloc(width * height * 4)
  const clamp255 = (v) => (v < 0 ? 0 : v > 255 ? 255 : v)
  const diffuse = (arr, x, y, err) => {
    if (x + 1 < width) arr[y * width + (x + 1)] += (err * 7) / 16
    if (y + 1 < height) {
      if (x > 0) arr[(y + 1) * width + (x - 1)] += (err * 3) / 16
      arr[(y + 1) * width + x] += (err * 5) / 16
      if (x + 1 < width) arr[(y + 1) * width + (x + 1)] += err / 16
    }
  }

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x
      const oldR = fr[p]
      const oldG = fg[p]
      const oldB = fb[p]
      const newR = Math.round(clamp255(oldR))
      const newG = Math.round(clamp255(oldG))
      const newB = Math.round(clamp255(oldB))
      diffuse(fr, x, y, oldR - newR)
      diffuse(fg, x, y, oldG - newG)
      diffuse(fb, x, y, oldB - newB)
      const i = p * 4
      buf[i] = newR
      buf[i + 1] = newG
      buf[i + 2] = newB
      buf[i + 3] = 255
    }
  }

  const out = path.join(skyDir, name)
  await sharp(buf, { raw: { width, height, channels: 4 } }).png().toFile(out)
  console.log('sky', name)
}

async function make2x(srcName, outName) {
  const src = path.join(logosDir, srcName)
  if (!fs.existsSync(src)) return
  const img = sharp(src)
  const meta = await img.metadata()
  const w = (meta.width || 400) * 2
  const h = (meta.height || 100) * 2
  await sharp(src).resize(w, h, { fit: 'inside' }).png().toFile(path.join(logosDir, outName))
  console.log('2x', outName)
}

await skyPng('sky-primary-16x9.png', 1920, 1080, 'primary')
await skyPng('sky-primary-9x16.png', 1080, 1920, 'primary')
await skyPng('sky-primary-1x1.png', 1080, 1080, 'primary')
await skyPng('sky-secondary-16x9.png', 1920, 1080, 'secondary')
await skyPng('sky-secondary-9x16.png', 1080, 1920, 'secondary')
await skyPng('sky-secondary-1x1.png', 1080, 1080, 'secondary')
await skyPng('sky-combined-16x9.png', 1920, 1080, 'combined')
await skyPng('sky-combined-9x16.png', 1080, 1920, 'combined')
await skyPng('sky-combined-1x1.png', 1080, 1080, 'combined')
await skyPng('sky-mobile-corners-16x9.png', 1920, 1080, 'mobile-corners')
await skyPng('sky-mobile-corners-9x16.png', 1080, 1920, 'mobile-corners')
await skyPng('sky-mobile-corners-1x1.png', 1080, 1080, 'mobile-corners')

await make2x('wowdesign-logo-full-dark-bg.png', 'wowdesign-logo-full-dark-bg@2x.png')
await make2x('wowdesign-logo-full-light-bg.png', 'wowdesign-logo-full-light-bg@2x.png')
await make2x('wowdesign-logo-mono-white.png', 'wowdesign-logo-mono-white@2x.png')
await make2x('wowdesign-logo-mono-black.png', 'wowdesign-logo-mono-black@2x.png')
await make2x('wowdesign-mark-color.png', 'wowdesign-mark-color@2x.png')

// Transparent mark from W SVG on transparent bg (PNG)
const wSvg = path.join(logosDir, 'wowdesign-mark-w.svg')
if (fs.existsSync(wSvg)) {
  await sharp(wSvg).resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(logosDir, 'wowdesign-mark-w.png'))
  await sharp(wSvg).resize(1024, 1024, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(path.join(logosDir, 'wowdesign-mark-w@2x.png'))
  console.log('mark-w png')
}

// ZIP via PowerShell
const zipPath = path.join(brandDir, 'wowdesign-brand-kit.zip')
if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath)
const ps = `
$dest = '${zipPath.replace(/'/g, "''")}'
$root = '${brandDir.replace(/'/g, "''")}'
Compress-Archive -Path (Join-Path $root 'logos'), (Join-Path $root 'tokens'), (Join-Path $root 'sky') -DestinationPath $dest -Force
`
execFileSync('powershell', ['-NoProfile', '-Command', ps], { stdio: 'inherit' })
console.log('zip', zipPath)
console.log('done')
