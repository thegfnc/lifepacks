import {
  Alert,
  AlertIcon,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import type {
  FindEditPackQuery,
  FindEditPackQueryVariables,
} from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

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
    }
  }
`

const MUTATION = gql`
  mutation UpdatePackMutation($id: Int!, $input: UpdatePackInput!) {
    updatePack(id: $id, input: $input) {
      id
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
  const formMethods = useForm()
  const { register, formState } = formMethods

  const [mutate, { loading, error }] = useMutation<
    UpdatePackMutation,
    UpdatePackMutationVariables
  >(MUTATION, {
    refetchQueries: [{ query: QUERY, variables: { username, id } }],
    onCompleted: () => navigate(routes.userProfile({ username })),
  })

  const onSubmit = (data) => {
    mutate({
      variables: {
        id,
        input: data,
      },
    })
  }

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Stack w="3xl" spacing={6}>
        {error && (
          <Alert status="error">
            <AlertIcon />
            {error.message}
          </Alert>
        )}
        <FormControl isInvalid={Boolean(formState.errors.title)}>
          <Input
            placeholder="Title"
            fontSize="5xl"
            fontWeight="extrabold"
            color="blackAlpha.900"
            variant="unstyled"
            size="lg"
            lineHeight={1}
            defaultValue={pack.title}
            {...register('title')}
          />
          <FormErrorMessage>{formState.errors.title?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={Boolean(formState.errors.description)}>
          <Textarea
            placeholder="What is your pack about..."
            fontSize="xl"
            lineHeight={7}
            color="blackAlpha.800"
            variant="unstyled"
            defaultValue={pack.description}
            {...register('description')}
          />
          <FormErrorMessage>
            {formState.errors.description?.message}
          </FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal" isLoading={loading}>
          Update Pack
        </Button>
      </Stack>
    </Form>
  )
}
