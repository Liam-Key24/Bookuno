import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

const publicPaths = [
  '/',
  '/about',
  '/contact',
  '/faq',
  '/pricing',
  '/privacy',
  '/terms',
  '/templates',
  '/whats-included',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return publicPaths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
