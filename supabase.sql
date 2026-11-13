-- Run in Supabase SQL Editor. Keep service-role key SERVER-SIDE ONLY.
create table if not exists public.appointments (
 id uuid primary key default gen_random_uuid(),
 full_name text not null,
 email text not null,
 service text not null,
 preferred_date date not null,
 message text not null default '',
 status text not null default 'pending' check (status in ('pending','confirmed','cancelled')),
 created_at timestamptz not null default now()
);
alter table public.appointments enable row level security;
-- No public policies: only the server-side service role can access requests.
