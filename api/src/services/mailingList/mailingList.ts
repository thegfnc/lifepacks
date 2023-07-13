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
    validate(input.givenName, 'First Name', { length: { max: 100 } })
    validate(input.familyName, 'Last Name', { length: { max: 100 } })

    const createContact = new SibApiV3Sdk.CreateContact()

    createContact.email = input.email
    createContact.attributes = {
      FIRSTNAME: input.givenName,
      LASTNAME: input.familyName,
    }
    createContact.listIds = [GENERAL_MAILING_LIST_ID]

    try {
      const data = await apiInstance.createContact(createContact)
      return data.body
    } catch (error) {
      if (error.response.body.code === 'duplicate_parameter') {
        return reportError('This email has already signed up.')
      }

      validateWithSync(() => {
        throw new Error(
          'Sorry, there was an error signing up for the mailing list.'
        )
      })
    }
  }
