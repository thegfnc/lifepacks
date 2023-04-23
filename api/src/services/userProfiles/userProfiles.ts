import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { validate } from '@redwoodjs/api'

import { RedwoodUser } from 'src/lib/auth'
import { db } from 'src/lib/db'

import validateCommonUserProfileInputFields from './validateCommonUserProfileInputFields'

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
    validate(input.username, 'Username', {
      presence: true,
      length: { min: 3, max: 50 },
    })
    validateCommonUserProfileInputFields(input)

    const currentUser: RedwoodUser = context.currentUser
    const userId = currentUser.sub

    const { username, ...restOfInput } = input

    return db.userProfile.create({
      data: {
        userId,
        username: username.replace(/@/g, ''),
        ...restOfInput,
      },
    })
  }

export const updateCurrentUserProfile: MutationResolvers['updateCurrentUserProfile'] =
  ({ input }) => {
    validateCommonUserProfileInputFields(input)

    const currentUser: RedwoodUser = context.currentUser
    const userId = currentUser.sub

    return db.userProfile.update({
      data: input,
      where: { userId },
    })
  }
