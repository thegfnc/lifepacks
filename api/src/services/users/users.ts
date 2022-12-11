import type { QueryResolvers } from 'types/graphql'

import { isOwner } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const user: QueryResolvers['user'] = ({ id }) => {
  isOwner(id)

  return db.user.findUnique({
    where: { id },
  })
}
