-- Run in Supabase SQL Editor
create table if not exists students (
 id uuid primary key references auth.users(id) on delete cascade,
 mobile text unique not null,
 name text,
 created_at timestamp default now()
);

create table if not exists payment_requests (
 id uuid primary key default gen_random_uuid(),
 user_id uuid references auth.users(id),
 mobile text,
 course text,
 utr text,
 screenshot text,
 status text default 'pending',
 created_at timestamp default now()
);

create table if not exists course_access (
 user_id uuid primary key references auth.users(id),
 prelims boolean default false,
 mains boolean default false,
 approved_at timestamp
);
