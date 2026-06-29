import { storyblokInit, apiPlugin } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  use: [apiPlugin],
})

export async function fetchStory(slug: string) {
  const api = getStoryblokApi()
  const { data } = await api.get(`cdn/stories/${slug}`, {
    version: (process.env.STORYBLOK_VERSION as 'draft' | 'published') ?? 'published',
  })
  return data.story
}

export async function fetchGlobalSettings() {
  return fetchStory('global-settings')
}
