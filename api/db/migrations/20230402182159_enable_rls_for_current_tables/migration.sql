alter table if exists _prisma_migrations
  enable row level security;

alter table "Pack"
  enable row level security;

alter table "PackItem"
  enable row level security;

alter table "UserProfile"
  enable row level security;
