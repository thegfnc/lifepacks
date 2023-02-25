import { useRef } from 'react'

import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import type {
  FindPackQuery,
  FindPackQueryVariables,
  DeletePackMutation,
  DeletePackMutationVariables,
} from 'types/graphql'

import { Link, navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import Pack from '../../components/Pack/Pack'

type PackCellSuccessProps = CellSuccessProps<
  FindPackQuery,
  FindPackQueryVariables
> & {
  username: string
}

export const QUERY = gql`
  query FindPackQuery($username: String!, $slug: String!) {
    pack(username: $username, slug: $slug) {
      id
      title
      description
      createdAt
      packItems {
        id
        imageUrl
        purchaseUrl
        title
        description
      }
    }
    currentUserProfile {
      username
    }
  }
`

const MUTATION = gql`
  mutation DeletePackMutation($id: Int!) {
    deletePack(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPackQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  username,
  pack,
  currentUserProfile,
}: PackCellSuccessProps) => {
  const {
    isOpen: isDeleteAlertOpen,
    onOpen: onDeleteAlertOpen,
    onClose: onDeleteAlertClose,
  } = useDisclosure()
  const cancelDeleteRef = useRef()

  const [mutate, { loading, error }] = useMutation<
    DeletePackMutation,
    DeletePackMutationVariables
  >(MUTATION, {
    onCompleted: () => {
      onDeleteAlertClose()
      navigate(routes.userProfile({ username }))
    },
  })

  const deletePack = () => {
    mutate({ variables: { id: pack.id } })
  }

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      )}

      <Pack
        username={username}
        pack={pack}
        actionButtons={
          currentUserProfile?.username === username && (
            <HStack>
              <Button
                as={Link}
                leftIcon={<EditIcon />}
                variant="outline"
                to={routes.editPack({ id: pack.id })}
              >
                Edit Pack
              </Button>
              <IconButton
                icon={<DeleteIcon />}
                aria-label="Delete Pack"
                colorScheme="red"
                onClick={onDeleteAlertOpen}
              />
            </HStack>
          )
        }
      />

      <AlertDialog
        isOpen={isDeleteAlertOpen}
        leastDestructiveRef={cancelDeleteRef}
        onClose={onDeleteAlertClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Pack
            </AlertDialogHeader>

            <AlertDialogBody>
              {'Are you sure you want to delete this pack?'}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelDeleteRef} onClick={onDeleteAlertClose}>
                Cancel
              </Button>
              <Button
                isLoading={loading}
                colorScheme="red"
                onClick={deletePack}
                ml={3}
              >
                Delete Pack
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
