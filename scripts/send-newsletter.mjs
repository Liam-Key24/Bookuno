#!/usr/bin/env node
/**
 * Merevo newsletter campaign sender (server-side only).
 *
 * Usage:
 *   node scripts/send-newsletter.mjs --help
 *   node --env-file=.env.local scripts/send-newsletter.mjs emails/campaigns/2026-08-welcome.html --dry-run
 *   node --env-file=.env.local scripts/send-newsletter.mjs emails/campaigns/2026-08-welcome.html --subject "..." --confirm-send
 *
 * Safety:
 * - Loads only status = subscribed
 * - Batches ≤ 50 with delay between batches
 * - Requires --confirm-send for live sends
 * - Never logs emails, tokens, or API keys
 * - Stops after repeated provider errors
 */

import { createClient } from '@supabase/supabase-js'
import { basename } from 'node:path'
import { Resend } from 'resend'
import { loadCampaign, renderCampaignHtml } from './lib/newsletterCampaign.mjs'

const BATCH_SIZE = 50
const BATCH_DELAY_MS = 1500
const MAX_CONSECUTIVE_ERRORS = 5

function printHelp() {
  console.log(`Merevo newsletter sender

Usage:
  node scripts/send-newsletter.mjs <campaign.html> [options]

Options:
  --dry-run          Load subscribed contacts and render counts; send nothing
  --confirm-send     Required for live Resend sending
  --subject "..."    Override campaign default subject
  --help             Show this help

Environment (.env.local):
  SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
  RESEND_API_KEY, RESEND_FROM_EMAIL
  NEXT_PUBLIC_SITE_URL
  NEWSLETTER_POSTAL_ADDRESS

Never sends to pending or unsubscribed contacts.
`)
}

function parseArgs(argv) {
  const args = {
    campaignPath: null,
    dryRun: false,
    confirmSend: false,
    subject: null,
    help: false,
  }

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i]
    if (arg === '--help' || arg === '-h') args.help = true
    else if (arg === '--dry-run') args.dryRun = true
    else if (arg === '--confirm-send') args.confirmSend = true
    else if (arg === '--subject') {
      args.subject = argv[i + 1] || null
      i += 1
    } else if (arg.startsWith('-')) {
      throw new Error(`Unknown option: ${arg}`)
    } else if (!args.campaignPath) {
      args.campaignPath = arg
    } else {
      throw new Error(`Unexpected argument: ${arg}`)
    }
  }

  return args
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function siteOrigin() {
  return (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '')
}

function unsubscribeUrl(token) {
  return `${siteOrigin()}/api/newsletter/unsubscribe?token=${encodeURIComponent(token)}`
}

function assertProductionSender(fromEmail) {
  const match = fromEmail.match(/<([^>]+)>/)
  const address = (match?.[1] || fromEmail).trim().toLowerCase()
  if (process.env.NODE_ENV === 'production') {
    if (address.endsWith('@resend.dev')) {
      throw new Error('Production requires a verified sending domain sender (not @resend.dev).')
    }
  }
}

async function run() {
  const args = parseArgs(process.argv.slice(2))

  if (args.help) {
    printHelp()
    return
  }

  if (!args.campaignPath) {
    printHelp()
    process.exit(1)
  }

  if (!args.dryRun && !args.confirmSend) {
    console.error('Refusing live send without --confirm-send. Use --dry-run to preview safely.')
    process.exit(1)
  }

  if (args.dryRun && args.confirmSend) {
    console.error('Choose either --dry-run or --confirm-send, not both.')
    process.exit(1)
  }

  const url = process.env.SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !serviceRoleKey) {
    console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }

  const campaign = loadCampaign(args.campaignPath)
  const campaignKey = basename(args.campaignPath)
  const subject = args.subject || campaign.subjectDefault
  const postal =
    process.env.NEWSLETTER_POSTAL_ADDRESS ||
    '[Merevo business address — set NEWSLETTER_POSTAL_ADDRESS]'

  const supabase = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const { data: subscribers, error } = await supabase
    .from('newsletter_subscribers')
    .select('id, email, first_name, unsubscribe_token, status')
    .eq('status', 'subscribed')

  if (error) {
    console.error('Failed to load subscribers (network or database access error).')
    if (error.code) console.error(`Provider code: ${error.code}`)
    process.exit(1)
  }

  const list = (subscribers || []).filter((row) => row.status === 'subscribed')
  console.log(`Campaign: ${campaignKey}`)
  console.log(`Subject: ${subject}`)
  console.log(`Subscribed recipients: ${list.length}`)
  console.log(`Mode: ${args.dryRun ? 'dry-run' : 'LIVE SEND'}`)

  const sample = renderCampaignHtml(campaign, {
    firstName: 'Alex',
    unsubscribeUrl: `${siteOrigin()}/api/newsletter/unsubscribe?token=SAMPLE`,
    year: new Date().getFullYear(),
    postalAddress: postal,
    subject,
  })
  console.log(`Rendered HTML bytes: ${Buffer.byteLength(sample.html, 'utf8')}`)
  console.log(`Rendered text bytes: ${Buffer.byteLength(sample.text, 'utf8')}`)

  if (list.length === 0) {
    console.log('Nothing to send.')
    return
  }

  if (args.dryRun) {
    console.log('Dry run complete. No emails sent. No database send rows written.')
    return
  }

  const fromEmail = process.env.RESEND_FROM_EMAIL
  const apiKey = process.env.RESEND_API_KEY
  if (!fromEmail || !apiKey) {
    console.error('Missing RESEND_FROM_EMAIL or RESEND_API_KEY')
    process.exit(1)
  }
  assertProductionSender(fromEmail)

  const resend = new Resend(apiKey)
  let sent = 0
  let failed = 0
  let consecutiveErrors = 0

  for (let offset = 0; offset < list.length; offset += BATCH_SIZE) {
    const batch = list.slice(offset, offset + BATCH_SIZE)
    console.log(`Batch ${Math.floor(offset / BATCH_SIZE) + 1}: size ${batch.length}`)

    for (const subscriber of batch) {
      const unsub = unsubscribeUrl(subscriber.unsubscribe_token)
      const rendered = renderCampaignHtml(campaign, {
        firstName: subscriber.first_name || 'there',
        unsubscribeUrl: unsub,
        year: new Date().getFullYear(),
        postalAddress: postal,
        subject,
      })

      try {
        const result = await resend.emails.send({
          from: fromEmail,
          to: subscriber.email,
          subject,
          html: rendered.html,
          text: rendered.text,
          headers: {
            'List-Unsubscribe': `<${unsub}>`,
            'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click',
          },
        })

        if (result.error) {
          throw new Error(result.error.message)
        }

        consecutiveErrors = 0
        sent += 1

        await supabase.from('newsletter_campaign_sends').insert({
          subscriber_id: subscriber.id,
          campaign_path: campaignKey,
          subject,
          status: 'sent',
          provider_message_id: result.data?.id ?? null,
          error_message: null,
        })
      } catch (sendError) {
        consecutiveErrors += 1
        failed += 1

        await supabase.from('newsletter_campaign_sends').insert({
          subscriber_id: subscriber.id,
          campaign_path: campaignKey,
          subject,
          status: 'failed',
          provider_message_id: null,
          error_message:
            sendError instanceof Error ? sendError.message.slice(0, 500) : 'Unknown send error',
        })

        console.error(
          `Send failure recorded (consecutive ${consecutiveErrors}/${MAX_CONSECUTIVE_ERRORS}).`,
        )

        if (consecutiveErrors >= MAX_CONSECUTIVE_ERRORS) {
          console.error('Stopping safely after repeated provider errors.')
          console.log(
            `Summary: sent=${sent} failed=${failed} remaining_unattempted=${list.length - sent - failed}`,
          )
          process.exit(1)
        }
      }
    }

    if (offset + BATCH_SIZE < list.length) {
      await sleep(BATCH_DELAY_MS)
    }
  }

  console.log(`Summary: sent=${sent} failed=${failed}`)
}

run().catch(() => {
  console.error('Newsletter send aborted.')
  process.exit(1)
})
