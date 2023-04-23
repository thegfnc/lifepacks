// import type {
//   QueryResolvers,
//   MutationResolvers,
//   PackItemRelationResolvers,
// } from 'types/graphql'

import { validate, validateWith } from '@redwoodjs/api'

import { RedwoodUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

// export const packItems: QueryResolvers['packItems'] = () => {
//   return db.packItem.findMany()
// }

// export const packItem: QueryResolvers['packItem'] = ({ id }) => {
//   return db.packItem.findUnique({
//     where: { id },
//   })
// }

export const createPackItem = ({ input }) => {
  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  return db.packItem.create({
    data: {
      userId,
      packId: input.packId,
      title: input.title,
      description: input.description,
      imageUrl: input.imageUrl,
      purchaseUrl: input.purchaseUrl,
      displaySequence: input.displaySequence,
    },
  })
}

export const updatePackItem = async ({ id, input }) => {
  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  const packItemToUpdate = await db.packItem.findUnique({
    where: {
      id,
    },
  })

  validateWith(() => {
    if (packItemToUpdate.userId !== userId) {
      throw new Error('You are not authorized to update that pack item.')
    }
  })

  return db.packItem.update({
    where: { id },
    data: {
      title: input.title,
      description: input.description,
      imageUrl: input.imageUrl,
      purchaseUrl: input.purchaseUrl,
      displaySequence: input.displaySequence,
    },
  })
}

type DeletePackItemsByIdInput = {
  ids: number[]
}

export const deletePackItemsById = async ({
  ids,
}: DeletePackItemsByIdInput) => {
  validateWith(() => {
    if (!ids || ids.length === 0) {
      throw new Error('You must provide at least one pack item id to delete.')
    }
  })

  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  const packItemsToDelete = await db.packItem.findMany({
    where: {
      id: {
        in: ids,
      },
    },
  })

  for (const packItemToDelete of packItemsToDelete) {
    validateWith(() => {
      if (packItemToDelete.userId !== userId) {
        throw new Error('You are not authorized to delete that pack item.')
      }
    })
  }

  return db.packItem.deleteMany({
    where: {
      id: {
        in: ids,
      },
    },
  })
}

type DeletePackItemsByPackIdInput = {
  packId: number
}

export const deletePackItemsByPackId = async ({
  packId,
}: DeletePackItemsByPackIdInput) => {
  validate(packId, 'Pack Id', { presence: true })

  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  const packItemsToDelete = await db.packItem.findMany({
    where: {
      packId: packId,
    },
  })

  for (const packItemToDelete of packItemsToDelete) {
    validateWith(() => {
      if (packItemToDelete.userId !== userId) {
        throw new Error('You are not authorized to delete that pack item.')
      }
    })
  }

  return db.packItem.deleteMany({
    where: {
      packId: packId,
    },
  })
}

// export const PackItem: PackItemRelationResolvers = {
//   pack: (_obj, { root }) => {
//     return db.packItem.findUnique({ where: { id: root?.id } }).pack()
//   },
// }
