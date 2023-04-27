import { validate, validateWithSync } from '@redwoodjs/api'

import { RedwoodUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

import validiateCommonPackItemInputFields from './validateCommonPackItemInputFields'

export const createPackItem = ({ input }) => {
  validate(input.packId, 'Pack Id', {
    presence: true,
    numericality: { integer: true },
  })
  validiateCommonPackItemInputFields(input)

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

  validateWithSync(() => {
    if (packItemToUpdate.userId !== userId) {
      throw new Error('You are not authorized to update that pack item.')
    }
  })
  validiateCommonPackItemInputFields(input)

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

export const deletePackItemsByIds = async ({
  ids,
}: DeletePackItemsByIdInput) => {
  validateWithSync(() => {
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
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
    validateWithSync(() => {
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
  validate(packId, 'Pack Id', {
    presence: true,
    numericality: { integer: true },
  })

  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  const packItemsToDelete = await db.packItem.findMany({
    where: {
      packId: packId,
    },
  })

  for (const packItemToDelete of packItemsToDelete) {
    validateWithSync(() => {
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
