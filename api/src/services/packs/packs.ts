import type {
  QueryResolvers,
  // MutationResolvers,
  PackRelationResolvers,
} from 'types/graphql'

// import { RedwoodUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const packs: QueryResolvers['packs'] = async ({ username }) => {
  const { userId } = await db.userProfile.findUnique({ where: { username } })

  return db.pack.findMany({ where: { userId } })
}

export const pack: QueryResolvers['pack'] = async ({ username, slug }) => {
  const { userId } = await db.userProfile.findUnique({ where: { username } })

  return db.pack.findFirst({
    where: { userId, slug },
  })
}

// export const createPack: MutationResolvers['createPack'] = ({ input }) => {
//   const currentUser: RedwoodUser = context.currentUser
//   const userId = currentUser.sub

//   return db.pack.create({
//     data: {
//       userId,
//       ...input,
//     },
//   })
// }

// export const updatePack: MutationResolvers['updatePack'] = async ({
//   id,
//   input,
// }) => {
//   const currentUser: RedwoodUser = context.currentUser
//   const userId = currentUser.sub

//   const packToUpdate = await db.pack.findUnique({ where: { id } })

//   if (packToUpdate.userId !== userId) {
//     throw new Error('You are not authorized to update that pack.')
//   }

//   return db.pack.update({
//     data: input,
//     where: { id },
//   })
// }

// export const deletePack: MutationResolvers['deletePack'] = async ({ id }) => {
//   const currentUser: RedwoodUser = context.currentUser
//   const userId = currentUser.sub

//   const packToDelete = await db.pack.findUnique({ where: { id } })

//   if (packToDelete.userId !== userId) {
//     throw new Error('You are not authorized to update that pack.')
//   }

//   return db.pack.delete({
//     where: { id },
//   })
// }

export const Pack: PackRelationResolvers = {
  packItems: (_obj, { root }) => {
    return db.pack.findUnique({ where: { id: root?.id } }).packItems()
  },
}
