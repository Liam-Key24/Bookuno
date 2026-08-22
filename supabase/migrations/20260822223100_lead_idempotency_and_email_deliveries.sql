-- Idempotency key on leads + email delivery records (send-at-most-once).

alter table public.leads
  add column if not exists idempotency_key text;

-- Backfill any pre-existing rows so NOT NULL + UNIQUE can be applied safely.
update public.leads
set idempotency_key = 'legacy-' || id::text
where idempotency_key is null;

alter table public.leads
  alter column idempotency_key set not null;

create unique index if not exists leads_idempotency_key_uidx
  on public.leads (idempotency_key);

create table if not exists public.lead_email_deliveries (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references public.leads (id) on delete cascade,
  kind text not null check (kind in ('founder_notification', 'prospect_confirmation')),
  status text not null check (status in ('pending', 'sent', 'failed')),
  error_message text,
  provider_message_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (lead_id, kind)
);

alter table public.lead_email_deliveries enable row level security;

-- No public policies: service role only.
