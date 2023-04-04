import { Alert, AlertIcon } from '@chakra-ui/react'
import type {
  FindEditPackQuery,
  FindEditPackQueryVariables,
  UpdatePackMutation,
  UpdatePackMutationVariables,
} from 'types/graphql'

import { routes, navigate } from '@redwoodjs/router'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import PackForm, { PackFormSubmitData } from 'src/forms/PackForm/PackForm'
import stripTypename from 'src/helpers/stripTypename'

type EditPackCellProps = CellSuccessProps<
  FindEditPackQuery,
  FindEditPackQueryVariables
> & {
  id: number
  username: string
}

export const QUERY = gql`
  query FindEditPackQuery($username: String!, $id: Int!) {
    pack(username: $username, id: $id) {
      title
      description
      packItems {
        id
        title
        purchaseUrl
        imageUrl
        description
      }
    }
  }
`

const MUTATION = gql`
  mutation UpdatePackMutation($id: Int!, $input: UpdatePackInput!) {
    updatePack(id: $id, input: $input) {
      slug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditPackQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ id, username, pack }: EditPackCellProps) => {
  const [mutate, { loading, error }] = useMutation<
    UpdatePackMutation,
    UpdatePackMutationVariables
  >(MUTATION, {
    refetchQueries: [{ query: QUERY, variables: { username, id } }],
    onCompleted: ({ updatePack: { slug } }) =>
      navigate(routes.pack({ username, slug })),
  })

  const onSubmit = (data: PackFormSubmitData) => {
    mutate({
      variables: {
        id,
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
      <PackForm
        onSubmit={onSubmit}
        isLoading={loading}
        defaultValues={stripTypename(pack)}
      />
    </>
  )
}
