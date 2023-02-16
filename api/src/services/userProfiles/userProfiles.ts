import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { RedwoodUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const currentUserProfile: QueryResolvers['currentUserProfile'] = () => {
  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  return db.userProfile.findUnique({
    where: { userId },
  })
}

export const userProfile: QueryResolvers['userProfile'] = ({ username }) => {
  return db.userProfile.findUnique({
    where: { username },
  })
}

export const createCurrentUserProfile: MutationResolvers['createCurrentUserProfile'] =
  ({ input }) => {
    const currentUser: RedwoodUser = context.currentUser
    const userId = currentUser.sub

    return db.userProfile.create({
      data: {
        userId,
        ...input,
      },
    })
  }

// export const updateCurrentUserProfile: MutationResolvers['updateCurrentUserProfile'] =
//   ({ input }) => {
//     const currentUser: RedwoodUser = context.currentUser
//     const userId = currentUser.sub

//     return db.userProfile.update({
//       data: input,
//       where: { userId },
//     })
//   }
