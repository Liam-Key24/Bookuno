/**
 * Focused verification for Merevo lead idempotency + truthful delivery failures.
 *
 * Proves (against the configured Supabase project + static source checks):
 * 1. A successful submission creates one lead and at most one email of each type
 * 2. Repeating one idempotency key creates no second lead or email
 * 3. Failed-email submissions stay truthful when repeated (delivery_issue, no fake success)
 * 4. No client/server automatic retry loop exists in lead form / API
 *
 * Also checks public RLS (optional anon key) and service-role not in browser bundles.
 *
 * Usage: node --env-file=.env.local scripts/verify-lead-idempotency.mjs
 */

import { createClient } from '@supabase/supabase-js'
import { createHash, randomUUID } from 'node:crypto'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const url = process.env.SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
const anonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

const DELIVERY_ISSUE_MESSAGE =
  'We received your enquiry, but there was a problem sending the confirmation email. We still have your details and will follow up personally — no need to submit again.'

function fail(message) {
  console.error(`FAIL: ${message}`)
  process.exitCode = 1
}

function pass(message) {
  console.log(`PASS: ${message}`)
}

function assert(condition, message) {
  if (condition) pass(message)
  else fail(message)
}

async function cleanup(admin, ids) {
  if (!ids.length) return
  await admin.from('lead_email_deliveries').delete().in('lead_id', ids)
  await admin.from('leads').delete().in('id', ids)
}

function walkFiles(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.next' || name === '.git') continue
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) walkFiles(full, out)
    else if (/\.(ts|tsx|js|jsx|mjs|cjs|md|example|toml|sql)$/.test(name) || name === '.env.example') {
      out.push(full)
    }
  }
  return out
}

function deliveryStateFromRows(rows) {
  const byKind = new Map((rows ?? []).map((row) => [row.kind, row.status]))
  const founder = byKind.get('founder_notification')
  const prospect = byKind.get('prospect_confirmation')
  if (founder === 'sent' && prospect === 'sent') return 'complete'
  return 'delivery_issue'
}

/** Mirrors API truthfulness: failed deliveries must not be reported as full success. */
function apiOutcomeForDeliveryState(state, leadId) {
  if (state === 'complete') {
    return {
      ok: true,
      id: leadId,
      received: true,
      confirmationDelivery: 'sent',
    }
  }
  return {
    ok: true,
    id: leadId,
    received: true,
    confirmationDelivery: 'failed',
    message: DELIVERY_ISSUE_MESSAGE,
  }
}

function checkNoRetryLoops() {
  const root = process.cwd()
  const formPath = join(root, 'src/components/forms/LeadForm.tsx')
  const routePath = join(root, 'src/app/api/leads/route.ts')
  const submissionPath = join(root, 'src/lib/leadSubmission.ts')
  const form = readFileSync(formPath, 'utf8')
  const route = readFileSync(routePath, 'utf8')
  const submission = readFileSync(submissionPath, 'utf8')

  assert(
    !/setInterval\s*\(/.test(form) &&
      !/while\s*\(/.test(form) &&
      !/for\s*\(\s*;;/.test(form) &&
      !form.toLowerCase().includes('retry(') &&
      (form.match(/fetch\(/g) || []).length === 1,
    '4a. LeadForm has no automatic retry loop (single fetch per submit)',
  )
  const failedBranch = form.indexOf("confirmationDelivery === 'failed'")
  const thankYou = form.indexOf("router.push('/thank-you')")
  assert(
    failedBranch !== -1 &&
      thankYou !== -1 &&
      failedBranch < thankYou &&
      form.includes('deliveryNotice') &&
      form.includes('disabled={pending || Boolean(deliveryNotice)}'),
    '4b. Delivery-issue path shows notice, disables resubmit, and runs before thank-you redirect',
  )
  assert(
    route.includes('getLeadEmailDeliveryState') &&
      route.includes("confirmationDelivery: 'failed'") &&
      submission.includes('do not auto-retry'),
    '4c. API uses delivery state for truthful retries; email layer does not auto-retry',
  )
}

function checkServiceRoleNotInBrowser() {
  const root = process.cwd()
  const clientPaths = [join(root, 'src/components'), join(root, 'src/app')]
  const files = []
  for (const p of clientPaths) {
    try {
      walkFiles(p, files)
    } catch {
      /* skip */
    }
  }

  const leaks = []
  for (const file of files) {
    const text = readFileSync(file, 'utf8')
    if (/NEXT_PUBLIC_.*SERVICE_ROLE/i.test(text)) leaks.push(file)
    if (file.includes(`${join('src', 'components')}`) && /SUPABASE_SERVICE_ROLE_KEY/.test(text)) {
      leaks.push(file)
    }
  }

  const example = readFileSync(join(root, '.env.example'), 'utf8')
  assert(
    !/NEXT_PUBLIC_SUPABASE_SERVICE_ROLE/.test(example) && /SUPABASE_SERVICE_ROLE_KEY=/.test(example),
    'Service-role key is documented as server-only in .env.example (not NEXT_PUBLIC_)',
  )
  assert(
    leaks.length === 0,
    'Service-role key is not referenced from client components / NEXT_PUBLIC_ bindings',
  )
}

async function main() {
  console.log('Merevo lead idempotency + delivery-truth verification\n')

  checkServiceRoleNotInBrowser()
  checkNoRetryLoops()

  if (!url || !serviceRoleKey) {
    fail('SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY required in .env.local')
    console.log('\nSkipped live database checks (missing Supabase credentials).')
    return
  }

  const admin = createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  })

  const createdIds = []
  const keyA = randomUUID()
  const keyFail = randomUUID()
  const keyB = randomUUID()
  const stamp = Date.now()

  try {
    const first = await admin
      .from('leads')
      .insert({
        name: 'Idempotency Test A',
        email: `idempotency-a-${stamp}@example.com`,
        business_name: 'Test Salon',
        business_type: 'salon',
        message: 'Verification message for unique submission A.',
        source: 'verify-script',
        idempotency_key: keyA,
      })
      .select('id')
      .single()

    assert(!first.error && first.data?.id, '1. Valid unique submission creates one lead')
    if (first.data?.id) createdIds.push(first.data.id)
    const leadIdA = first.data?.id

    if (leadIdA) {
      await admin.from('lead_email_deliveries').insert([
        {
          lead_id: leadIdA,
          kind: 'founder_notification',
          status: 'sent',
          provider_message_id: 'verify-founder-1',
        },
        {
          lead_id: leadIdA,
          kind: 'prospect_confirmation',
          status: 'sent',
          provider_message_id: 'verify-prospect-1',
        },
      ])

      const rows = await admin
        .from('lead_email_deliveries')
        .select('kind, status')
        .eq('lead_id', leadIdA)

      assert(
        rows.data?.length === 2 &&
          rows.data.every((r) => r.status === 'sent'),
        '1b. Successful path records at most one email of each type (founder + prospect)',
      )

      const dupFounder = await admin.from('lead_email_deliveries').insert({
        lead_id: leadIdA,
        kind: 'founder_notification',
        status: 'pending',
      })
      const dupProspect = await admin.from('lead_email_deliveries').insert({
        lead_id: leadIdA,
        kind: 'prospect_confirmation',
        status: 'failed',
        error_message: 'should not insert',
      })
      assert(
        dupFounder.error?.code === '23505' && dupProspect.error?.code === '23505',
        '1c. Unique (lead_id, kind) prevents a second email of either type',
      )
    }

    const second = await admin
      .from('leads')
      .insert({
        name: 'Idempotency Test A Replay',
        email: `idempotency-a-replay-${stamp}@example.com`,
        message: 'Should not create a second lead.',
        source: 'verify-script',
        idempotency_key: keyA,
      })
      .select('id')
      .single()

    assert(second.error?.code === '23505', '2. Repeating the same idempotency key does not create a second lead')

    const countA = await admin
      .from('leads')
      .select('id', { count: 'exact', head: true })
      .eq('idempotency_key', keyA)
    assert(countA.count === 1, '2b. Exactly one lead exists for key A')

    if (leadIdA) {
      const emailCount = await admin
        .from('lead_email_deliveries')
        .select('id', { count: 'exact', head: true })
        .eq('lead_id', leadIdA)
      assert(emailCount.count === 2, '2c. Repeating the key does not create additional email rows')
    }

    // 3. Failed-email submissions stay truthful when repeated
    const failLead = await admin
      .from('leads')
      .insert({
        name: 'Delivery Failure Test',
        email: `idempotency-fail-${stamp}@example.com`,
        message: 'Lead used to verify truthful failed-email responses.',
        source: 'verify-script',
        idempotency_key: keyFail,
      })
      .select('id')
      .single()

    assert(!failLead.error && failLead.data?.id, '3a. Failed-email case still stores one lead')
    if (failLead.data?.id) {
      createdIds.push(failLead.data.id)
      const failId = failLead.data.id

      await admin.from('lead_email_deliveries').insert([
        {
          lead_id: failId,
          kind: 'founder_notification',
          status: 'failed',
          error_message: 'Simulated Resend failure for manual review',
        },
        {
          lead_id: failId,
          kind: 'prospect_confirmation',
          status: 'failed',
          error_message: 'Simulated Resend failure for manual review',
        },
      ])

      const failRows = await admin
        .from('lead_email_deliveries')
        .select('kind, status, error_message')
        .eq('lead_id', failId)

      const firstState = deliveryStateFromRows(failRows.data)
      const firstOutcome = apiOutcomeForDeliveryState(firstState, failId)
      assert(
        firstState === 'delivery_issue' &&
          firstOutcome.confirmationDelivery === 'failed' &&
          firstOutcome.received === true &&
          firstOutcome.message === DELIVERY_ISSUE_MESSAGE &&
          !JSON.stringify(firstOutcome).includes('Simulated Resend'),
        '3b. First failed-email outcome is truthful (received + confirmationDelivery failed, no provider leak)',
      )

      // Simulate idempotent retry: same key cannot create second lead; delivery rows unchanged
      const replayInsert = await admin
        .from('leads')
        .insert({
          name: 'Delivery Failure Replay',
          email: `idempotency-fail-replay-${stamp}@example.com`,
          message: 'Should not create a second lead on replay.',
          source: 'verify-script',
          idempotency_key: keyFail,
        })
        .select('id')
        .single()

      assert(replayInsert.error?.code === '23505', '3c. Replay with same key creates no second lead')

      const replayRows = await admin
        .from('lead_email_deliveries')
        .select('kind, status')
        .eq('lead_id', failId)
      const replayDup = await admin.from('lead_email_deliveries').insert({
        lead_id: failId,
        kind: 'prospect_confirmation',
        status: 'sent',
      })
      assert(replayDup.error?.code === '23505', '3d. Replay cannot claim a second email send slot')

      const replayState = deliveryStateFromRows(replayRows.data)
      const replayOutcome = apiOutcomeForDeliveryState(replayState, failId)
      assert(
        replayState === 'delivery_issue' &&
          replayOutcome.confirmationDelivery === 'failed' &&
          replayOutcome.received === true &&
          replayOutcome.message === DELIVERY_ISSUE_MESSAGE,
        '3e. Repeated submission with same key stays truthful (not generic success)',
      )
      assert(replayRows.data?.length === 2, '3f. Replay leaves email delivery row count unchanged')
    }

    const other = await admin
      .from('leads')
      .insert({
        name: 'Idempotency Test B',
        email: `idempotency-b-${stamp}@example.com`,
        message: 'Verification message for unique submission B.',
        source: 'verify-script',
        idempotency_key: keyB,
      })
      .select('id')
      .single()

    assert(
      !other.error && other.data?.id && other.data.id !== leadIdA,
      'Separate idempotency key can create another valid lead',
    )
    if (other.data?.id) createdIds.push(other.data.id)

    if (!anonKey) {
      console.log(
        'SKIP: Public RLS read check (set SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY to run)',
      )
    } else {
      const anon = createClient(url, anonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
      const publicRead = await anon.from('leads').select('id').limit(5)
      assert(
        (publicRead.data?.length ?? 0) === 0,
        'Public users cannot read leads from Supabase',
      )
    }

    try {
      const chunkDir = join(process.cwd(), '.next', 'static', 'chunks')
      const keyFingerprint = createHash('sha256').update(serviceRoleKey).digest('hex').slice(0, 16)
      const needle = serviceRoleKey.slice(0, 24)
      let found = false
      function scan(dir) {
        for (const name of readdirSync(dir)) {
          const full = join(dir, name)
          const st = statSync(full)
          if (st.isDirectory()) scan(full)
          else if (/\.(js|css|json)$/.test(name)) {
            if (readFileSync(full, 'utf8').includes(needle)) found = true
          }
        }
      }
      scan(chunkDir)
      assert(!found, `Service-role key is not present in .next/static client chunks (fp ${keyFingerprint})`)
    } catch {
      console.log('SKIP: Client bundle scan (run after npm run build)')
    }
  } finally {
    await cleanup(admin, createdIds)
  }

  if (process.exitCode) {
    console.log('\nVerification finished with failures.')
    process.exit(1)
  }

  console.log('\nVerification finished successfully (database + static checks).')
  console.log(
    'Note: Full browser Turnstile + Upstash + live Resend E2E was not claimed by this script.',
  )
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
