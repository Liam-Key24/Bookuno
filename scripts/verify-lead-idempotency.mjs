/**
 * Focused verification for Meridian lead idempotency + RLS.
 *
 * Proves (against the configured Supabase project):
 * 1. A unique submission creates one lead
 * 2. Repeating the same idempotency key does not create a second lead
 * 3. Repeating the same key does not create a second email-delivery claim (no resend slot)
 * 4. A different idempotency key can create a separate valid lead
 * 5. Public (anon) users cannot read leads
 * 6. The service-role key is never exposed via NEXT_PUBLIC_* / client source
 *
 * Does NOT claim a full end-to-end Turnstile / Upstash / Resend test unless those
 * env vars are present and email sends are explicitly enabled.
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

function checkServiceRoleNotInBrowser() {
  const root = process.cwd()
  const clientPaths = [
    join(root, 'src/components'),
    join(root, 'src/app'),
  ]
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
    // Server-only API / lib routes may reference the env var name — that is fine.
    // Fail if a NEXT_PUBLIC_ service-role style binding exists, or key material appears in client components.
    const text = readFileSync(file, 'utf8')
    if (/NEXT_PUBLIC_.*SERVICE_ROLE/i.test(text)) {
      leaks.push(file)
    }
    if (
      file.includes(`${join('src', 'components')}`) &&
      /SUPABASE_SERVICE_ROLE_KEY/.test(text)
    ) {
      leaks.push(file)
    }
  }

  // .env.example must document server-only usage, not NEXT_PUBLIC_ for service role
  const example = readFileSync(join(root, '.env.example'), 'utf8')
  assert(
    !/NEXT_PUBLIC_SUPABASE_SERVICE_ROLE/.test(example) &&
      /SUPABASE_SERVICE_ROLE_KEY=/.test(example),
    'Service-role key is documented as server-only in .env.example (not NEXT_PUBLIC_)',
  )
  assert(leaks.length === 0, 'Service-role key is not referenced from client components / NEXT_PUBLIC_ bindings')
}

async function main() {
  console.log('Meridian lead idempotency verification\n')

  checkServiceRoleNotInBrowser()

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

    // Email delivery unique protection (send-at-most-once slots)
    if (leadIdA) {
      const claim1 = await admin.from('lead_email_deliveries').insert({
        lead_id: leadIdA,
        kind: 'founder_notification',
        status: 'sent',
        provider_message_id: 'verify-founder-1',
      })
      assert(!claim1.error, '3a. Founder delivery row can be recorded once')

      const claim1b = await admin.from('lead_email_deliveries').insert({
        lead_id: leadIdA,
        kind: 'founder_notification',
        status: 'pending',
      })
      assert(
        claim1b.error?.code === '23505',
        '3. Repeating the same key/lead cannot claim a second founder email delivery (no resend slot)',
      )

      const claim2 = await admin.from('lead_email_deliveries').insert({
        lead_id: leadIdA,
        kind: 'prospect_confirmation',
        status: 'sent',
        provider_message_id: 'verify-prospect-1',
      })
      assert(!claim2.error, '3b. Prospect delivery row can be recorded once')

      const claim2b = await admin.from('lead_email_deliveries').insert({
        lead_id: leadIdA,
        kind: 'prospect_confirmation',
        status: 'failed',
        error_message: 'should not insert',
      })
      assert(
        claim2b.error?.code === '23505',
        '3c. Prospect confirmation cannot get a second delivery row (no resend)',
      )

      // Failure recording path
      const failLead = await admin
        .from('leads')
        .insert({
          name: 'Failure Record Test',
          email: `idempotency-fail-${stamp}@example.com`,
          message: 'Lead used only to verify failure recording.',
          source: 'verify-script',
          idempotency_key: randomUUID(),
        })
        .select('id')
        .single()

      if (failLead.data?.id) {
        createdIds.push(failLead.data.id)
        const failRow = await admin.from('lead_email_deliveries').insert({
          lead_id: failLead.data.id,
          kind: 'founder_notification',
          status: 'failed',
          error_message: 'Simulated Resend failure for manual review',
        })
        assert(!failRow.error, '3d. Email failures can be recorded clearly for manual review')
      }
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
      '4. A different idempotency key can create a separate valid lead',
    )
    if (other.data?.id) createdIds.push(other.data.id)

    // Public cannot read leads
    if (!anonKey) {
      console.log(
        'SKIP: 5. Public RLS read check (set SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY to run)',
      )
    } else {
      const anon = createClient(url, anonKey, {
        auth: { persistSession: false, autoRefreshToken: false },
      })
      const publicRead = await anon.from('leads').select('id').limit(5)
      const blocked =
        publicRead.error != null ||
        publicRead.data == null ||
        publicRead.data.length === 0
      // With RLS and no policies, PostgREST typically returns empty or an error
      assert(blocked && (publicRead.data?.length ?? 0) === 0, '5. Public users cannot read leads from Supabase')
    }

    // Fingerprint: service role key material must not appear in built client chunks if .next exists
    try {
      const chunkDir = join(process.cwd(), '.next', 'static', 'chunks')
      const keyFingerprint = createHash('sha256').update(serviceRoleKey).digest('hex').slice(0, 16)
      // Look for raw key substring (first 20 chars of JWT payload area is enough signal)
      const needle = serviceRoleKey.slice(0, 24)
      let found = false
      function scan(dir) {
        for (const name of readdirSync(dir)) {
          const full = join(dir, name)
          const st = statSync(full)
          if (st.isDirectory()) scan(full)
          else if (/\.(js|css|json)$/.test(name)) {
            const text = readFileSync(full, 'utf8')
            if (text.includes(needle)) found = true
          }
        }
      }
      scan(chunkDir)
      assert(!found, `6. Service-role key is not present in .next/static client chunks (fp ${keyFingerprint})`)
    } catch {
      console.log('SKIP: 6. Client bundle scan (run after npm run build)')
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
