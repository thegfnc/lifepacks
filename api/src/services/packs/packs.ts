import slug from 'slug'
import type {
  QueryResolvers,
  MutationResolvers,
  PackRelationResolvers,
} from 'types/graphql'

import { RedwoodUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

export const packs: QueryResolvers['packs'] = async ({ username }) => {
  const { userId } = await db.userProfile.findUnique({ where: { username } })

  return db.pack.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } })
}

export const pack: QueryResolvers['pack'] = async ({ username, slug, id }) => {
  if (!slug && !id) {
    throw new Error('You must provide `id` or `slug` to fetch a pack.')
  }

  const { userId } = await db.userProfile.findUnique({ where: { username } })

  if (slug) {
    return db.pack.findFirst({
      where: { userId, slug },
    })
  }

  if (id) {
    return db.pack.findFirst({
      where: { userId, id },
    })
  }
}

export const createPack: MutationResolvers['createPack'] = async ({
  input,
}) => {
  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  // PACK
  const createdPack = await db.pack.create({
    data: {
      userId,
      slug: slug(input.title),
      title: input.title,
      description: input.description,
    },
  })

  // PACK ITEMS
  const inputPackItemsWithDisplaySequence = input.packItems.map(
    (packItem, index) => ({
      ...packItem,
      displaySequence: index,
    })
  )

  for (const packItemToCreate of inputPackItemsWithDisplaySequence) {
    await db.packItem.create({
      data: {
        userId,
        packId: createdPack.id,
        title: packItemToCreate.title,
        description: packItemToCreate.description,
        imageUrl: packItemToCreate.imageUrl,
        purchaseUrl: packItemToCreate.purchaseUrl,
        displaySequence: packItemToCreate.displaySequence,
      },
    })
  }

  return db.pack.findFirst({
    where: { userId, id: createdPack.id },
  })
}

export const updatePack: MutationResolvers['updatePack'] = async ({
  id,
  input,
}) => {
  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  // PACK
  const packToUpdate = await db.pack.findUnique({ where: { id } })

  if (packToUpdate.userId !== userId) {
    throw new Error('You are not authorized to update that pack.')
  }

  await db.pack.update({
    data: { title: input.title, description: input.description },
    where: { id },
  })

  // PACK ITEMS
  const inputPackItemsWithDisplaySequence = input.packItems.map(
    (packItem, index) => ({
      ...packItem,
      displaySequence: index,
    })
  )

  // PACK ITEMS DELETE
  if (input.packItemIdsToDelete) {
    const packItemsToDelete = await db.packItem.findMany({
      where: {
        id: {
          in: input.packItemIdsToDelete,
        },
      },
    })

    for (const packItemToDelete of packItemsToDelete) {
      if (packItemToDelete.userId !== userId) {
        throw new Error('You are not authorized to delete that pack item.')
      }

      await db.packItem.delete({
        where: { id: packItemToDelete.id },
      })
    }
  }

  // PACK ITEMS CREATE
  const packItemsToCreate = inputPackItemsWithDisplaySequence.filter(
    (packItem) => !packItem.id
  )

  for (const packItemToCreate of packItemsToCreate) {
    await db.packItem.create({
      data: {
        userId,
        packId: packToUpdate.id,
        title: packItemToCreate.title,
        description: packItemToCreate.description,
        imageUrl: packItemToCreate.imageUrl,
        purchaseUrl: packItemToCreate.purchaseUrl,
        displaySequence: packItemToCreate.displaySequence,
      },
    })
  }

  // PACK ITEMS UPDATE
  const existingPackItemIdsToUpdate = inputPackItemsWithDisplaySequence
    .filter((packItem) => Boolean(packItem.id))
    .map((packItem) => packItem.id)

  const packItemsToUpdate = await db.packItem.findMany({
    where: {
      id: {
        in: existingPackItemIdsToUpdate,
      },
    },
  })

  for (const packItemToUpdate of packItemsToUpdate) {
    if (packItemToUpdate.userId !== userId) {
      throw new Error('You are not authorized to update that pack item.')
    }

    const { title, description, imageUrl, purchaseUrl, displaySequence } =
      inputPackItemsWithDisplaySequence.find(
        (p) => p.id === packItemToUpdate.id
      )

    await db.packItem.update({
      where: { id: packItemToUpdate.id },
      data: {
        title,
        description,
        imageUrl,
        purchaseUrl,
        displaySequence,
      },
    })
  }

  return db.pack.findFirst({
    where: { userId, id },
  })
}

export const deletePack: MutationResolvers['deletePack'] = async ({ id }) => {
  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  const packToDelete = await db.pack.findUnique({ where: { id } })

  if (packToDelete.userId !== userId) {
    throw new Error('You are not authorized to delete that pack.')
  }

  return db.pack.delete({
    where: { id },
  })
}

export const Pack: PackRelationResolvers = {
  packItems: (_obj, { root }) => {
    return db.pack
      .findUnique({ where: { id: root?.id } })
      .packItems({ orderBy: [{ displaySequence: 'asc' }] })
  },
}
