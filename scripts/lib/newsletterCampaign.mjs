/**
 * Shared newsletter campaign rendering (Node scripts only).
 * Placeholders: {{FIRST_NAME}} {{UNSUBSCRIBE_URL}} {{CURRENT_YEAR}} {{POSTAL_ADDRESS}} {{SUBJECT}} {{PREHEADER}} {{CONTENT}}
 */

import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..')

export function loadCampaign(campaignPath) {
  const absolute = resolve(process.cwd(), campaignPath)
  const raw = readFileSync(absolute, 'utf8')
  const subjectMatch = raw.match(/\{\{SUBJECT:([^}]+)\}\}/)
  const preheaderMatch = raw.match(/\{\{PREHEADER:([^}]+)\}\}/)
  const contentMatch = raw.match(/\{\{CONTENT\}\}([\s\S]*?)\{\{\/CONTENT\}\}/)

  if (!contentMatch) {
    throw new Error('Campaign file must include {{CONTENT}} ... {{/CONTENT}}')
  }

  return {
    absolute,
    subjectDefault: subjectMatch?.[1]?.trim() || 'Meridian update',
    preheader: preheaderMatch?.[1]?.trim() || '',
    contentHtml: contentMatch[1].trim(),
  }
}

export function renderCampaignHtml(campaign, vars) {
  const base = readFileSync(join(root, 'emails/templates/base.html'), 'utf8')
  const firstName = vars.firstName?.trim() || 'there'
  const year = String(vars.year || new Date().getFullYear())
  const postal = vars.postalAddress || '[Meridian business address]'
  const unsubscribeUrl = vars.unsubscribeUrl || '#unsubscribe'
  const subject = vars.subject || campaign.subjectDefault

  let html = base
    .replaceAll('{{SUBJECT}}', escapeHtml(subject))
    .replaceAll('{{PREHEADER}}', escapeHtml(campaign.preheader))
    .replaceAll('{{CONTENT}}', campaign.contentHtml)
    .replaceAll('{{FIRST_NAME}}', escapeHtml(firstName))
    .replaceAll('{{UNSUBSCRIBE_URL}}', unsubscribeUrl)
    .replaceAll('{{CURRENT_YEAR}}', year)
    .replaceAll('{{POSTAL_ADDRESS}}', escapeHtml(postal))

  // Content block may still contain placeholders
  html = html
    .replaceAll('{{FIRST_NAME}}', escapeHtml(firstName))
    .replaceAll('{{UNSUBSCRIBE_URL}}', unsubscribeUrl)
    .replaceAll('{{CURRENT_YEAR}}', year)
    .replaceAll('{{POSTAL_ADDRESS}}', escapeHtml(postal))

  const text = [
    `Hi ${firstName},`,
    '',
    stripTags(campaign.contentHtml)
      .replaceAll('{{FIRST_NAME}}', firstName)
      .replaceAll('{{UNSUBSCRIBE_URL}}', unsubscribeUrl)
      .replaceAll('{{CURRENT_YEAR}}', year)
      .replaceAll('{{POSTAL_ADDRESS}}', postal)
      .replace(/\s+\n/g, '\n')
      .trim(),
    '',
    '— Meridian',
    postal,
    '',
    `Unsubscribe: ${unsubscribeUrl}`,
  ].join('\n')

  return { html, text, subject }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/p>/gi, '\n\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
}
