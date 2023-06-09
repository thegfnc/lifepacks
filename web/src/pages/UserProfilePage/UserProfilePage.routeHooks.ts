import { db } from '$api/src/lib/db'

export async function routeParameters() {
  return (await db.userProfile.findMany({ take: 100 })).map((userProfile) => ({
    username: userProfile.username,
  }))
}
