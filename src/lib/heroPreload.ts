export function getHeroPreloadHref(imageSrc: string, width = 1920): string {
  return `/_next/image?url=${encodeURIComponent(imageSrc)}&w=${width}&q=75`
}
