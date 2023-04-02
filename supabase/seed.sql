
/* Database configuration */

/* Prisma requires a shadow database - https://supabase.com/docs/guides/integrations/prisma */
CREATE DATABASE postgres_shadow;
/* Test database is used for redwood api tests */
CREATE DATABASE postgres_test;


/* Storage configuration */

insert into storage.buckets
  (id, name, public)
values
  ('user-profile-images', 'user-profile-images', true);

create policy "Users can manipulate their own images 1lgyli6_0"
  on storage.objects for select
  using ((bucket_id = 'user-profile-images'::text) AND (auth.uid() = owner));

create policy "Users can manipulate their own images 1lgyli6_1"
  on storage.objects for insert
  with check ((bucket_id = 'user-profile-images'::text) AND (auth.uid() = owner));

create policy "Users can manipulate their own images 1lgyli6_2"
  on storage.objects for update
  using ((bucket_id = 'user-profile-images'::text) AND (auth.uid() = owner));

create policy "Users can manipulate their own images 1lgyli6_3"
  on storage.objects for delete
  using ((bucket_id = 'user-profile-images'::text) AND (auth.uid() = owner));



insert into storage.buckets
  (id, name, public)
values
  ('pack-item-images', 'pack-item-images', true);

create policy "Users can manipulate their own images 1933w72_0"
  on storage.objects for select
  using ((bucket_id = 'pack-item-images'::text) AND (auth.uid() = owner));

create policy "Users can manipulate their own images 1933w72_1"
  on storage.objects for insert
  with check ((bucket_id = 'pack-item-images'::text) AND (auth.uid() = owner));

create policy "Users can manipulate their own images 1933w72_2"
  on storage.objects for update
  using ((bucket_id = 'pack-item-images'::text) AND (auth.uid() = owner));

create policy "Users can manipulate their own images 1933w72_3"
  on storage.objects for delete
  using ((bucket_id = 'pack-item-images'::text) AND (auth.uid() = owner));
