import type { QueryResolvers } from 'types/graphql'

import { validateWith } from '@redwoodjs/api'
import { AuthenticationError } from '@redwoodjs/graphql-server'

import { isOwner } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const user: QueryResolvers['user'] = ({ id }) => {
  validateWith(() => {
    if (!isOwner(id)) {
      throw new AuthenticationError("You don't have permission to do that.")
    }
  })

  return db.user.findUnique({
    where: { id },
  })
}
