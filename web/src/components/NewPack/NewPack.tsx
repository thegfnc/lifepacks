import { Alert, AlertIcon } from '@chakra-ui/react'
import type {
  CreatePackMutation,
  CreatePackMutationVariables,
} from 'types/graphql'

import { routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import PackForm, { PackFormSubmitData } from 'src/forms/PackForm/PackForm'

type NewPackProps = {
  username: string
}

const MUTATION = gql`
  mutation CreatePackMutation($input: CreatePackInput!) {
    createPack(input: $input) {
      id
    }
  }
`

const NewPack = ({ username }: NewPackProps) => {
  const [mutate, { loading, error }] = useMutation<
    CreatePackMutation,
    CreatePackMutationVariables
  >(MUTATION, {
    refetchQueries: [],
    onCompleted: () => navigate(routes.userProfile({ username })),
  })

  const onSubmit = (data: PackFormSubmitData) => {
    mutate({
      variables: {
        input: data,
      },
    })
  }

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      )}
      <PackForm onSubmit={onSubmit} isLoading={loading} />
    </>
  )
}

export default NewPack
