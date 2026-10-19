/**
 * Brand tokens — mirror of CSS variables in wowdesign-miami.css :root
 * and globals.css (--surface-90). Values are documented for partners;
 * live UI should still use the CSS variables.
 */

export type TokenGroup =
  | 'background'
  | 'surfaces'
  | 'brand'
  | 'accents'
  | 'text'
  | 'borders'
  | 'overlays'

export type ColorToken = {
  css: string
  value: string
  group: TokenGroup
  use: string
  contrastOnDark?: string
}

export const COLOR_TOKENS: ColorToken[] = [
  { css: '--dark-bg', value: '#0b0f19', group: 'background', use: 'Page background', contrastOnDark: 'Base surface' },
  { css: '--surface-bg', value: '#151c2c', group: 'surfaces', use: 'Card surface' },
  { css: '--surface-30', value: '#151c2c4d', group: 'surfaces', use: 'Glass card fill' },
  { css: '--surface-90', value: '#151c2ce6', group: 'surfaces', use: 'Nav and hero glass' },
  { css: '--primary', value: '#2d68ff', group: 'brand', use: 'Brand blue, CTAs, proof numbers', contrastOnDark: 'AA on dark for large text / numbers' },
  { css: '--secondary', value: '#a044ff', group: 'brand', use: 'Violet accents and sky' },
  { css: '--tertiary', value: '#eb32ab', group: 'accents', use: 'Magenta accent' },
  { css: '--tertiary-2', value: '#ff2c55', group: 'accents', use: 'Red-pink accent' },
  { css: '--radial-primary', value: '#2e77fa9e', group: 'accents', use: 'Radial glow blue' },
  { css: '--radial-secondary', value: '#a044ff80', group: 'accents', use: 'Radial glow violet' },
  { css: '--light', value: '#ffffff', group: 'text', use: 'Headings and high contrast', contrastOnDark: 'AAA on dark-bg' },
  { css: '--white-74', value: '#ffffffbd', group: 'text', use: 'Soft white', contrastOnDark: 'Good for secondary labels' },
  { css: '--paragraph', value: '#bebec1', group: 'text', use: 'Body copy', contrastOnDark: 'AA for body on dark-bg' },
  { css: '--grey', value: '#94a3b8', group: 'text', use: 'Muted text, gradient end', contrastOnDark: 'Use for captions, not long body' },
  { css: '--light-border', value: '#ffffff0f', group: 'borders', use: 'Hairline borders' },
  { css: '--border-card', value: '#ffffff14', group: 'borders', use: 'Card borders' },
  { css: '--border-tagline', value: '#fff3', group: 'borders', use: 'Tagline chips, primary CTA rim' },
  { css: '--dark', value: '#000000', group: 'overlays', use: 'Black' },
  { css: '--dark-50', value: '#00000080', group: 'overlays', use: 'Shadows' },
  { css: '--dark-60', value: '#0009', group: 'overlays', use: 'Overlays' },
]

export const TOKEN_GROUPS: { id: TokenGroup; label: string }[] = [
  { id: 'background', label: 'Background' },
  { id: 'surfaces', label: 'Surfaces' },
  { id: 'brand', label: 'Brand' },
  { id: 'accents', label: 'Accents' },
  { id: 'text', label: 'Text' },
  { id: 'borders', label: 'Borders' },
  { id: 'overlays', label: 'Overlays' },
]

export const MOTION = {
  ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
  revealMs: '1300 to 1400ms',
}

export const BREAKPOINTS = [
  { px: 2560, note: 'Ultra wide' },
  { px: 1366, note: 'Laptop' },
  { px: 991, note: 'Tablet / collapse nav' },
  { px: 767, note: 'Large phone' },
  { px: 479, note: 'Small phone' },
]

export const FONTS_EMBED =
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700&display=swap'

export const GROUP_LABEL: Record<TokenGroup, string> = Object.fromEntries(
  TOKEN_GROUPS.map((g) => [g.id, g.label]),
) as Record<TokenGroup, string>
