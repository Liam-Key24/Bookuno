-- Newsletter subscribers (double opt-in) + campaign send records.
-- Service-role only: RLS on, no public policies.

create table if not exists public.newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  first_name text,
  status text not null default 'pending'
    check (status in ('pending', 'subscribed', 'unsubscribed')),
  confirmation_token text,
  unsubscribe_token text not null,
  consent_timestamp timestamptz not null,
  source text not null default 'website_footer',
  created_at timestamptz not null default now(),
  confirmed_at timestamptz,
  unsubscribed_at timestamptz,
  constraint newsletter_subscribers_email_unique unique (email)
);

create unique index if not exists newsletter_subscribers_confirmation_token_uidx
  on public.newsletter_subscribers (confirmation_token)
  where confirmation_token is not null;

create unique index if not exists newsletter_subscribers_unsubscribe_token_uidx
  on public.newsletter_subscribers (unsubscribe_token);

create index if not exists newsletter_subscribers_status_idx
  on public.newsletter_subscribers (status);

alter table public.newsletter_subscribers enable row level security;

create table if not exists public.newsletter_campaign_sends (
  id uuid primary key default gen_random_uuid(),
  subscriber_id uuid not null references public.newsletter_subscribers (id) on delete cascade,
  campaign_path text not null,
  subject text not null,
  status text not null check (status in ('sent', 'failed', 'skipped')),
  provider_message_id text,
  error_message text,
  created_at timestamptz not null default now()
);

create index if not exists newsletter_campaign_sends_subscriber_idx
  on public.newsletter_campaign_sends (subscriber_id);

create index if not exists newsletter_campaign_sends_campaign_idx
  on public.newsletter_campaign_sends (campaign_path);

alter table public.newsletter_campaign_sends enable row level security;

-- No policies for anon/authenticated: public cannot SELECT/INSERT/UPDATE/DELETE.
-- Next.js API and scripts use the service role, which bypasses RLS.
