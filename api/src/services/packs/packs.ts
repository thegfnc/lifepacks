import slug from 'slug'
import type {
  QueryResolvers,
  MutationResolvers,
  PackRelationResolvers,
} from 'types/graphql'

import { validate, validateUniqueness, validateWithSync } from '@redwoodjs/api'

import { RedwoodUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

import {
  createPackItem,
  deletePackItemsByIds,
  deletePackItemsByPackId,
  updatePackItem,
} from '../packItems/packItems'

import { normalizeCommonPackInputFields } from './packsInputNormalization'
import { validiateCommonPackInputFields } from './packsInputValidation'

export const packsMostRecent: QueryResolvers['packsMostRecent'] = async ({
  take = 99,
}) => {
  validate(take, 'Take', { numericality: { lessThan: 100 } })

  return db.pack.findMany({ orderBy: { createdAt: 'desc' }, take })
}

export const packsStaffPicks: QueryResolvers['packsStaffPicks'] = async () => {
  return db.pack.findMany({ orderBy: { createdAt: 'desc' } })
}

export const packs: QueryResolvers['packs'] = async ({ username }) => {
  validate(username, 'Username', { presence: true })

  const { userId } = await db.userProfile.findUnique({ where: { username } })

  return db.pack.findMany({ where: { userId }, orderBy: { createdAt: 'desc' } })
}

export const pack: QueryResolvers['pack'] = async ({ username, slug, id }) => {
  validate(username, 'Username', { presence: true })
  validateWithSync(() => {
    if (!slug && !id) {
      throw new Error('You must provide `id` or `slug` to fetch a pack.')
    }
  })

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
  validiateCommonPackInputFields(input)

  normalizeCommonPackInputFields(input)

  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub
  const packSlug = slug(input.title)

  // PACK
  const createdPack = await validateUniqueness(
    'pack',
    {
      slug: packSlug,
      $scope: { userId },
    },
    { message: 'You already have a pack with that title.' },
    (db) => {
      return db.pack.create({
        data: {
          userId,
          slug: packSlug,
          title: input.title,
          description: input.description,
        },
      })
    }
  )

  // PACK ITEMS
  const inputPackItemsWithDisplaySequence = input.packItems.map(
    (packItem, index) => ({
      ...packItem,
      displaySequence: index,
    })
  )

  for (const packItemToCreate of inputPackItemsWithDisplaySequence) {
    await createPackItem({
      input: {
        packId: createdPack.id,
        title: packItemToCreate.title,
        description: packItemToCreate.description,
        imageUrl: packItemToCreate.imageUrl,
        purchaseUrl: packItemToCreate.purchaseUrl,
        displaySequence: packItemToCreate.displaySequence,
      },
    })
  }

  return db.pack.findFirstOrThrow({
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

  validateWithSync(() => {
    if (packToUpdate.userId !== userId) {
      throw new Error('You are not authorized to update that pack.')
    }
  })

  validiateCommonPackInputFields(input)

  normalizeCommonPackInputFields(input)

  await db.pack.update({
    data: { title: input.title, description: input.description },
    where: { id },
  })

  // PACK ITEMS DELETE
  if (input.packItemIdsToDelete && input.packItemIdsToDelete.length > 0) {
    await deletePackItemsByIds({ ids: input.packItemIdsToDelete })
  }

  // PACK ITEMS
  const inputPackItemsWithDisplaySequence = input.packItems.map(
    (packItem, index) => ({
      ...packItem,
      displaySequence: index,
    })
  )

  // PACK ITEMS CREATE
  const packItemsToCreate = inputPackItemsWithDisplaySequence.filter(
    (packItem) => !packItem.id
  )

  for (const packItemToCreate of packItemsToCreate) {
    await createPackItem({
      input: {
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

  for (const packItemId of existingPackItemIdsToUpdate) {
    const { title, description, imageUrl, purchaseUrl, displaySequence } =
      inputPackItemsWithDisplaySequence.find((p) => p.id === packItemId)

    await updatePackItem({
      id: packItemId,
      input: { title, description, imageUrl, purchaseUrl, displaySequence },
    })
  }

  return db.pack.findFirst({
    where: { userId, id },
  })
}

export const deletePack: MutationResolvers['deletePack'] = async ({ id }) => {
  validate(id, 'Id', { presence: true, numericality: { integer: true } })

  const currentUser: RedwoodUser = context.currentUser
  const userId = currentUser.sub

  const packToDelete = await db.pack.findUnique({ where: { id } })

  validateWithSync(() => {
    if (packToDelete.userId !== userId) {
      throw new Error('You are not authorized to delete that pack.')
    }
  })

  await deletePackItemsByPackId({ packId: id })

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
  userProfile: (_obj, { root }) => {
    return db.pack.findUnique({ where: { id: root?.id } }).userProfile()
  },
}
