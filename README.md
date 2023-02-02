# README
Welcome to [Lifepacks](https://www.lifepacks.co)!

## Local Dev Commands
Here is a list of the standard set of dev commands to run while developing.

1. `supabase start`
1. `yarn rw prisma migrate dev`
1. `yarn rw dev`
1. `yarn rw prisma studio`
1. `yarn rw storybook`
1. `yarn rw test`

## Local Dev URLs
Here is a list of the standard set of URLs to use while developing locally.

### Redwood
* App: http://localhost:8910/
* GraphQL Playground: http://localhost:8911/graphql
* Prisma Studio: http://localhost:5555/
* Storybook: http://localhost:7910/
### Supabase
* API URL: http://localhost:54321
* DB URL: postgresql://postgres:postgres@localhost:54322/postgres
* Studio URL: http://localhost:54323
* Inbucket URL: http://localhost:54324

## Services Used
* [Lifepacks Production](https://www.lifepacks.co/)
* [Google Domains](https://domains.google.com/)
* [Github Repo](https://github.com/jmdesiderio/lifepacks)
* [Supbase Dashboard](https://app.supabase.com/projects)
* [Vercel Dashboard](https://vercel.com/jmdesiderio/lifepacks)

## Technologies Used
* [RedwoodJS](https://redwoodjs.com/)
* [Prisma](https://www.prisma.io/)
* [Supabase](https://supabase.com/)
* [Chakra UI](https://chakra-ui.com/)

## How-To's
### Set roles on a user
1. `yarn rw console`
1. `await db.users.update({data: { raw_user_meta_data: { roles: ["admin"] }}, where: { email: "jmdesiderio@gmail.com" }})`

### Set up new database
1. `psql postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/
1. `postgres=> CREATE DATABASE postgres_shadow;`
1. `postgres=> exit`


## RedwoodJS Default Readme Below

Start by installing dependencies:

```
yarn install
```

Supabase local - https://supabase.com/docs/guides/resources/supabase-cli/local-development

> **The Redwood CLI**
>
> Congratulations on running your first Redwood CLI command!
> From dev to deploy, the CLI is with you the whole way.
> And there's quite a few commands at your disposal:
> ```
> yarn redwood --help
> ```
> For all the details, see the [CLI reference](https://redwoodjs.com/docs/cli-commands).

## Prisma and the database

Redwood wouldn't be a full-stack framework without a database. It all starts with the schema. Open the [`schema.prisma`](api/db/schema.prisma) file in `api/db` and replace the `UserExample` model with the following `Post` model:

```
model Post {
  id        Int      @id @default(autoincrement())
  title     String
  body      String
  createdAt DateTime @default(now())
}
```

Redwood uses [Prisma](https://www.prisma.io/), a next-gen Node.js and TypeScript ORM, to talk to the database. Prisma's schema offers a declarative way of defining your app's data models. And Prisma [Migrate](https://www.prisma.io/migrate) uses that schema to make database migrations hassle-free:

```
yarn rw prisma migrate dev

# ...

? Enter a name for the new migration: › create posts
```

> `rw` is short for `redwood`

You'll be prompted for the name of your migration. `create posts` will do.

Now let's generate everything we need to perform all the CRUD (Create, Retrieve, Update, Delete) actions on our `Post` model:

```
yarn redwood g scaffold post
```

Navigate to http://localhost:8910/posts/new, fill in the title and body, and click "Save":

Did we just create a post in the database? Yup! With `yarn rw g scaffold <model>`, Redwood created all the pages, components, and services necessary to perform all CRUD actions on our posts table.

## Frontend first with Storybook

Don't know what your data models look like?
That's more than ok—Redwood integrates Storybook so that you can work on design without worrying about data.
Mockup, build, and verify your React components, even in complete isolation from the backend:

```
yarn rw storybook
```

Before you start, see if the CLI's `setup ui` command has your favorite styling library:

```
yarn rw setup ui --help
```

## Testing with Jest

It'd be hard to scale from side project to startup without a few tests.
Redwood fully integrates Jest with the front and the backends and makes it easy to keep your whole app covered by generating test files with all your components and services:

```
yarn rw test
```

To make the integration even more seamless, Redwood augments Jest with database [scenarios](https://redwoodjs.com/docs/testing.md#scenarios)  and [GraphQL mocking](https://redwoodjs.com/docs/testing.md#mocking-graphql-calls).

## Ship it

Redwood is designed for both serverless deploy targets like Netlify and Vercel and serverful deploy targets like Render and AWS:

```
yarn rw setup deploy --help
```

Don't go live without auth!
Lock down your front and backends with Redwood's built-in, database-backed authentication system ([dbAuth](https://redwoodjs.com/docs/authentication#self-hosted-auth-installation-and-setup)), or integrate with nearly a dozen third party auth providers:

```
yarn rw setup auth --help
```

## Next Steps

The best way to learn Redwood is by going through the comprehensive [tutorial](https://redwoodjs.com/docs/tutorial/foreword) and joining the community (via the [Discourse forum](https://community.redwoodjs.com) or the [Discord server](https://discord.gg/redwoodjs)).

## Quick Links

- Stay updated: read [Forum announcements](https://community.redwoodjs.com/c/announcements/5), follow us on [Twitter](https://twitter.com/redwoodjs), and subscribe to the [newsletter](https://redwoodjs.com/newsletter)
- [Learn how to contribute](https://redwoodjs.com/docs/contributing)
