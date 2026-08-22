-- Baseline for the existing Meridian `public.leads` table.
-- Safe to apply on a fresh database OR against the already-created remote table
-- (uses IF NOT EXISTS; does not drop or truncate data).
--
-- If the remote table already exists from an earlier dashboard/MCP create,
-- this migration documents it under version control without deleting live rows.

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

-- Intentionally no policies for anon/authenticated.
-- Public clients cannot SELECT/INSERT/UPDATE/DELETE.
-- The Next.js API uses the service role, which bypasses RLS.
