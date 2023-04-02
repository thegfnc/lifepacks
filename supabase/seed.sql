/* Prisma requires a shadow database - https://supabase.com/docs/guides/integrations/prisma */

CREATE DATABASE postgres_shadow;
CREATE DATABASE postgres_test;



insert into storage.buckets
  (id, name)
values
  ('user-profile-images', 'user-profile-images');

insert into storage.buckets
  (id, name)
values
  ('pack-item-images', 'pack-item-images');

create policy "Users can manipulate their own images (select)"
  on storage.objects for select
  using (auth.uid() = owner);

create policy "Users can manipulate their own images (insert)"
  on storage.objects for insert
  with check (auth.uid() = owner);

create policy "Users can manipulate their own images (update)"
  on storage.objects for update
  using (auth.uid() = owner);

create policy "Users can manipulate their own images (delete)"
  on storage.objects for delete
  using (auth.uid() = owner);
