import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate, validateUniqueness } from '@redwoodjs/api'

import { RedwoodUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

import {
  normalizeCommonUserProfileInputFields,
  normalizeUsernameInput,
} from './userProfilesInputNormalization'
import {
  validateUsernameInput,
  validateCommonUserProfileInputFields,
} from './userProfilesInputValidation'

export const userProfile: QueryResolvers['userProfile'] = ({ username }) => {
  validate(username, 'Username', { presence: true })

  return db.userProfile.findUnique({
    where: { username },
  })
}

export const currentUserProfile: QueryResolvers['currentUserProfile'] = () => {
  const currentUser: RedwoodUser = context.currentUser

  if (!currentUser) {
    return null
  }

  const userId = currentUser.sub

  return db.userProfile.findUnique({
    where: { userId },
  })
}

export const createCurrentUserProfile: MutationResolvers['createCurrentUserProfile'] =
  ({ input }) => {
    validateUsernameInput(input)
    validateCommonUserProfileInputFields(input)

    normalizeUsernameInput(input)
    normalizeCommonUserProfileInputFields(input)

    const currentUser: RedwoodUser = context.currentUser
    const userId = currentUser.sub

    const { username, ...restOfInput } = input

    return validateUniqueness(
      'userProfile',
      { username },
      { message: 'Username is already in use.' },
      (db) => {
        return db.userProfile.create({
          data: {
            userId,
            username,
            ...restOfInput,
          },
        })
      }
    )
  }

export const updateCurrentUserProfile: MutationResolvers['updateCurrentUserProfile'] =
  ({ input }) => {
    validateCommonUserProfileInputFields(input)

    normalizeCommonUserProfileInputFields(input)

    const currentUser: RedwoodUser = context.currentUser
    const userId = currentUser.sub

    return db.userProfile.update({
      data: input,
      where: { userId },
    })
  }
