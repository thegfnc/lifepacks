import * as SibApiV3Sdk from '@sendinblue/client'
import type { MutationResolvers } from 'types/graphql'

const apiInstance = new SibApiV3Sdk.ContactsApi()

apiInstance.setApiKey(
  SibApiV3Sdk.ContactsApiApiKeys.apiKey,
  process.env.SENDINBLUE_API_KEY
)

export const mailingListSignUp: MutationResolvers['mailingListSignUp'] =
  async ({ input }) => {
    const createContact = new SibApiV3Sdk.CreateContact()

    createContact.email = input.email
    createContact.listIds = [2]

    try {
      const data = await apiInstance.createContact(createContact)
      return data.body
    } catch (error) {
      console.log(error.response.body)

      if (error.response.body.code === 'duplicate_parameter') {
        throw new Error('Looks like this email is already signed up.')
      } else {
        throw new Error(
          'Sorry, there was an error signing up for the mailing list.'
        )
      }
    }
  }
