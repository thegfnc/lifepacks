import { useState } from 'react'

import { Alert, AlertIcon, Box } from '@chakra-ui/react'
import type {
  MailingListSignUpMutation,
  MailingListSignUpMutationVariables,
} from 'types/graphql'

import { useMutation } from '@redwoodjs/web'

import MailingListSignUpForm, {
  MailingListSignUpSubmitData,
} from 'src/forms/MailingListSignUpForm/MailingListSignUpForm'

const MUTATION = gql`
  mutation MailingListSignUpMutation($input: MailingListSignUpInput!) {
    mailingListSignUp(input: $input) {
      id
    }
  }
`

const MailingListSignUp = () => {
  const [isSuccessful, setIsSuccessful] = useState(false)

  const [mutate, { loading, error }] = useMutation<
    MailingListSignUpMutation,
    MailingListSignUpMutationVariables
  >(MUTATION, {
    refetchQueries: [],
    onCompleted: () => setIsSuccessful(true),
  })

  const onSubmit = (data: MailingListSignUpSubmitData) => {
    mutate({
      variables: {
        input: data,
      },
    })
  }

  return (
    <Box>
      {isSuccessful ? (
        <Alert status="success" borderRadius="xl">
          <AlertIcon />
          Thank you for signing up!
        </Alert>
      ) : (
        <MailingListSignUpForm onSubmit={onSubmit} isLoading={loading} />
      )}
      {error && (
        <Alert mt={{ base: 4, md: 8 }} status="error" color="black">
          <AlertIcon />
          {error.message}
        </Alert>
      )}
    </Box>
  )
}

export default MailingListSignUp
