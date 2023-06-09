import { db } from '$api/src/lib/db'

export async function routeParameters() {
  return (
    await db.pack.findMany({ take: 500, include: { userProfile: true } })
  ).map((pack) => ({
    slug: pack.slug,
    username: pack.userProfile.username,
  }))
}
