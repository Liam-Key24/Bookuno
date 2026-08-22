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
- Phosphor Icons (`@phosphor-icons/react`)
- Supabase (lead storage)
- Resend (founder notify + prospect confirmation)

## Lead capture setup

Contact form posts to `POST /api/leads` (server-only). Privileged keys never ship to the browser. Use the Supabase Table Editor as the founder lead dashboard.

### 1. Environment

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
| --- | --- |
| `SUPABASE_URL` | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Server-only service role key |
| `FOUNDER_EMAIL` | Inbox for new-lead alerts |
| `RESEND_API_KEY` | Resend API key |
| `RESEND_FROM_EMAIL` | Verified sender, e.g. `Meridian <hello@yourdomain.com>` |
| `NEXT_PUBLIC_SITE_URL` | Public site origin |

### 2. Supabase `leads` table

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
```

Do **not** add public insert policies for anon users. The Next.js API route inserts with the service role.

### 3. Resend

1. Create a Resend account and API key.
2. Verify your sending domain (or use Resend’s test sender while developing).
3. Set `RESEND_FROM_EMAIL` and `FOUNDER_EMAIL`.

On each successful submit Meridian:

1. Saves the lead in Supabase.
2. Emails the founder.
3. Emails the prospect a short confirmation.
4. Redirects to `/thank-you` only after those steps succeed.

If saving or emailing fails, the form shows an error and does **not** show a fake success state.
