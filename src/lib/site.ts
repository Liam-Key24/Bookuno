export const CONTACT_EMAIL = 'hello@meridian.studio'
export const CONTACT_LABEL = 'Merevo'
export const SITE_NAME = 'Merevo'

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '')
export const SITE_URL = rawSiteUrl ?? 'https://merevo.studio'
