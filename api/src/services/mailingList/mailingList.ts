import * as SibApiV3Sdk from '@sendinblue/client'
import type { MutationResolvers } from 'types/graphql'

import { validate, validateWithSync } from '@redwoodjs/api'

const GENERAL_MAILING_LIST_ID = 2

const apiInstance = new SibApiV3Sdk.ContactsApi()

apiInstance.setApiKey(
  SibApiV3Sdk.ContactsApiApiKeys.apiKey,
  process.env.SENDINBLUE_API_KEY
)

export const mailingListSignUp: MutationResolvers['mailingListSignUp'] =
  async ({ input }) => {
    validate(input.email, 'Email Address', {
      email: { message: 'Please provide a valid email address.' },
      presence: true,
    })

    const createContact = new SibApiV3Sdk.CreateContact()

    createContact.email = input.email
    createContact.listIds = [GENERAL_MAILING_LIST_ID]

    try {
      const data = await apiInstance.createContact(createContact)
      return data.body
    } catch (error) {
      console.error(error.response.body)

      validateWithSync(() => {
        if (error.response.body.code === 'duplicate_parameter') {
          throw new Error('This email has already signed up.')
        }
      })

      validateWithSync(() => {
        throw new Error(
          'Sorry, there was an error signing up for the mailing list.'
        )
      })
    }
  }
