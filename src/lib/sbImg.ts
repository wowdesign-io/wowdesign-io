// Storyblok CDN image transform — forces WebP at capped width + quality
// Applied to raw content-team uploads which may be uncompressed
export function sbImg(url: string, maxWidth = 1800, quality = 80): string {
  if (!url || !url.includes('a.storyblok.com')) return url
  const base = url.startsWith('//') ? `https:${url}` : url
  return `${base}/m/${maxWidth}x0/filters:quality(${quality}):format(webp)`
}
