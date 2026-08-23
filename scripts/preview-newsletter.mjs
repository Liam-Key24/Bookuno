#!/usr/bin/env node
/**
 * Render a Meridian campaign HTML file with sample data for visual QA.
 *
 * Usage:
 *   node scripts/preview-newsletter.mjs emails/campaigns/2026-08-welcome.html
 *   node scripts/preview-newsletter.mjs emails/campaigns/2026-08-welcome.html --out /tmp/preview.html
 */

import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { loadCampaign, renderCampaignHtml } from './lib/newsletterCampaign.mjs'

function printHelp() {
  console.log(`Meridian newsletter preview

Usage:
  node scripts/preview-newsletter.mjs <campaign.html> [--out path.html]

Writes rendered HTML (sample FIRST_NAME / UNSUBSCRIBE_URL) for browser checks.
`)
}

function parseArgs(argv) {
  const args = { campaignPath: null, out: null, help: false }
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') args.help = true
    else if (arg === '--out') {
      args.out = argv[i + 1] || null
      i += 1
    } else if (!args.campaignPath) args.campaignPath = arg
    else throw new Error(`Unexpected argument: ${arg}`)
  }
  return args
}

function main() {
  const args = parseArgs(process.argv.slice(2))
  if (args.help || !args.campaignPath) {
    printHelp()
    if (!args.campaignPath) process.exit(1)
    return
  }

  const campaign = loadCampaign(args.campaignPath)
  const rendered = renderCampaignHtml(campaign, {
    firstName: 'Alex',
    unsubscribeUrl: 'https://example.com/api/newsletter/unsubscribe?token=SAMPLE',
    year: new Date().getFullYear(),
    postalAddress:
      process.env.NEWSLETTER_POSTAL_ADDRESS ||
      '[Meridian business address — set NEWSLETTER_POSTAL_ADDRESS]',
    subject: campaign.subjectDefault,
  })

  const outPath =
    args.out ||
    resolve(process.cwd(), '.newsletter-preview', `${campaign.subjectDefault.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}.html`)

  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, rendered.html, 'utf8')

  console.log(`Subject: ${rendered.subject}`)
  console.log(`Wrote: ${outPath}`)
  console.log(`HTML bytes: ${Buffer.byteLength(rendered.html, 'utf8')}`)
  console.log('Open the file in a browser to review. Sample data only — no live sends.')
}

try {
  main()
} catch (error) {
  console.error(error instanceof Error ? error.message : 'Preview failed')
  process.exit(1)
}
