# Meridian

Next.js + Tailwind marketing site. Folder name remains Bookluno.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm start` — run production server

## Stack

- Next.js (App Router)
- React
- Tailwind CSS
- Phosphor Icons
- Supabase (lead storage)
- Resend (founder notify + prospect confirmation)
- Cloudflare Turnstile (bot protection)
- Upstash Redis (serverless rate limiting)

## Lead capture setup

Contact form posts to `POST /api/leads` (server-only). The Supabase **service-role** key is used only in server code (`src/lib/supabaseAdmin.ts` / API routes). It must never appear in `NEXT_PUBLIC_*` variables or client bundles.

Use the Supabase Table Editor as the founder lead dashboard. Public users must not be able to read, update, or list leads.

### 1. Environment

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public site origin |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only service role key |
| `FOUNDER_EMAIL` | Inbox for new-lead alerts |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Configurable from-address (verified Meridian domain in production) |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Cloudflare Turnstile site key (browser) |
| `TURNSTILE_SECRET_KEY` | Cloudflare Turnstile secret (server) |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis REST URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis REST token |
| `LEAD_IP_HASH_SALT` | Secret salt for hashing IPs used as rate-limit keys |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Optional Plausible domain |
| `ANALYTICS_WEBHOOK_URL` | Optional server analytics webhook |

### 2. Supabase `leads` table + RLS

In the Supabase SQL editor:

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  business_name text,
  business_type text,
  message text not null,
  source text not null default 'website'
);

alter table public.leads enable row level security;

-- No policies for anon/authenticated = public clients cannot SELECT/INSERT/UPDATE/DELETE.
-- The Next.js API inserts with the service role, which bypasses RLS by design.
```

Confirm in Supabase:

1. RLS is **enabled** on `public.leads`.
2. There are **no** policies granting `anon` or `authenticated` `SELECT`, `INSERT`, `UPDATE`, or `DELETE`.
3. Only the service role (server) writes leads.
4. Do **not** put the service-role key in any public/client env var.

### 3. Cloudflare Turnstile

1. Create a Turnstile widget in the Cloudflare dashboard for your Meridian domain.
2. Copy the **site key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`.
3. Copy the **secret key** → `TURNSTILE_SECRET_KEY` (server only).
4. The lead form renders Turnstile; `/api/leads` verifies the token with Cloudflare before saving.

### 4. Upstash Redis rate limiting

1. Create an Upstash Redis database.
2. Copy REST URL → `UPSTASH_REDIS_REST_URL`.
3. Copy REST token → `UPSTASH_REDIS_REST_TOKEN`.
4. Set a long random `LEAD_IP_HASH_SALT`.
5. `/api/leads` allows about **5 submissions per IP hash per 10 minutes** (sliding window). Raw IPs are hashed and not stored in the leads table.

### 5. Resend + DNS (SPF, DKIM, DMARC)

1. Create a Resend account and API key → `RESEND_API_KEY`.
2. Add and **verify your Meridian sending domain** in Resend.
3. Set `RESEND_FROM_EMAIL` to a configurable address on that domain, e.g. `Meridian <hello@your-meridian-domain.com>`.
4. **Development only:** Resend’s `*@resend.dev` test senders are allowed when `NODE_ENV` is not `production`.
5. **Production:** the app **rejects** `@resend.dev` / fake test senders. A verified Meridian domain address is required — Meridian will not silently send as a fake production sender.

#### Required manual DNS launch step

In your DNS host, add the records Resend shows for your domain:

| Record | Purpose |
| --- | --- |
| **SPF** | Authorises Resend to send for the domain |
| **DKIM** | Cryptographic signing of outbound mail |
| **DMARC** | Policy for how receivers treat unauthenticated mail |

Wait until Resend marks the domain as verified before going live.

### 6. Production email checklist

Before launch, complete this checklist:

- [ ] Meridian domain verified in Resend
- [ ] SPF, DKIM, and DMARC records live and verified
- [ ] `RESEND_FROM_EMAIL` uses the verified Meridian address (not `@resend.dev`)
- [ ] `FOUNDER_EMAIL` receives a real founder notification from a test submit
- [ ] Prospect confirmation arrives in the submitter inbox (check spam)
- [ ] Failed Turnstile / rate-limit / validation returns a safe error (no thank-you page)
- [ ] Successful submit still redirects to `/thank-you` only after save + emails succeed
- [ ] Supabase RLS confirmed: public cannot read/list/update leads

### Submission behaviour

1. Validates fields server-side (length + type checks).
2. Rejects honeypot fills.
3. Rate-limits by hashed IP via Upstash.
4. Verifies Turnstile server-side.
5. Inserts the lead with the service role.
6. Emails founder + prospect via Resend.
7. Returns success only when save + emails succeed (no fake success UI).

## Launch trust & analytics

### Legal & contact pages

- `/privacy` — Privacy Policy
- `/terms` — Terms of Service
- `/contact` — Contact details
- Cookie notice — essential preference + optional analytics consent

### Analytics (consent-gated)

| Event | When |
| --- | --- |
| `cta_click` | Primary CTAs (navbar, demo cards) |
| `lead_submit_success` | Contact form succeeds |
| `external_booking_click` | Outbound booking-tool links |

Optional: `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`, `ANALYTICS_WEBHOOK_URL`.
