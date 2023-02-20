import { useReducer, useState } from 'react'

import { AddIcon } from '@chakra-ui/icons'
import {
  Alert,
  AlertIcon,
  FormErrorMessage,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  FormControl,
  Stack,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import type {
  CreatePackMutation,
  CreatePackMutationVariables,
} from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import EditPackItemModal from 'src/components/EditPackItemModal/EditPackItemModal'
import PackItemEditable from 'src/components/PackItemEditable/PackItemEditable'
import PageContainer from 'src/components/PageContainer/PageContainer'
import { arrayMoveImmutable } from 'src/helpers/arrayMove'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

const MUTATION = gql`
  mutation CreatePackMutation($input: CreatePackInput!) {
    createPack(input: $input) {
      id
    }
  }
`

function packItemsReducer(packItems, action) {
  switch (action.type) {
    case 'MOVE_PACK_ITEM_UP':
      return arrayMoveImmutable(
        packItems,
        action.payload.index,
        action.payload.index - 1
      )

    case 'MOVE_PACK_ITEM_DOWN':
      return arrayMoveImmutable(
        packItems,
        action.payload.index,
        action.payload.index + 1
      )

    case 'ADD_PACK_ITEM': {
      const packItemsCopy = [...packItems]
      packItemsCopy.splice(action.payload.index, 0, {
        title: '',
        imageUrl: '',
        purchaseUrl: '',
        description: '',
      })
      return packItemsCopy
    }

    case 'UPDATE_PACK_ITEM':
      return [
        ...packItems.slice(0, action.payload.index),
        {
          ...packItems[action.payload.index],
          ...action.payload.packItem,
        },
        ...packItems.slice(action.payload.index + 1),
      ]

    case 'DELETE_PACK_ITEM':
      return [
        ...packItems.slice(0, action.payload.index),
        ...packItems.slice(action.payload.index + 1),
      ]

    default:
      return packItems
  }
}

const NewPackPage = () => {
  const { data } = useCurrentUserProfile()
  const formMethods = useForm()
  const { register, formState } = formMethods

  const [packItems, dispatch] = useReducer(packItemsReducer, [])

  // Move functions
  const createMovePackItemUp = (index) => () =>
    dispatch({ type: 'MOVE_PACK_ITEM_UP', payload: { index } })
  const createMovePackItemDown = (index) => () =>
    dispatch({ type: 'MOVE_PACK_ITEM_DOWN', payload: { index } })

  // Add + Edit functions
  const [editModalTitle, setEditModalTitle] = useState('')
  const [indexToEdit, setIndexToEdit] = useState(0)
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()
  const createOpenAddPackItemModal = (index) => () => {
    dispatch({
      type: 'ADD_PACK_ITEM',
      payload: { index },
    })
    setEditModalTitle('Add Item')
    setIndexToEdit(index)
    onEditModalOpen()
  }
  const createOpenEditPackItemModal = (index) => () => {
    setEditModalTitle('Edit Item')
    setIndexToEdit(index)
    onEditModalOpen()
  }
  const editPackItem = (packItem) => {
    dispatch({
      type: 'UPDATE_PACK_ITEM',
      payload: { index: indexToEdit, packItem },
    })
    onEditModalClose()
  }

  // Delete functions
  const [indexToConfirmDelete, setIndexToConfirmDelete] = useState(null)
  const cancelDeleteRef = React.useRef()
  const {
    isOpen: isDeleteAlertOpen,
    onOpen: onDeleteAlertOpen,
    onClose: onDeleteAlertClose,
  } = useDisclosure()
  const createOpenDeletePackItemAlert = (index) => () => {
    setIndexToConfirmDelete(index)
    onDeleteAlertOpen()
  }
  const deletePackItem = () => {
    dispatch({
      type: 'DELETE_PACK_ITEM',
      payload: { index: indexToConfirmDelete },
    })
    onDeleteAlertClose()
  }

  const [mutate, { loading, error }] = useMutation<
    CreatePackMutation,
    CreatePackMutationVariables
  >(MUTATION, {
    refetchQueries: [],
    onCompleted: () =>
      navigate(
        routes.userProfile({ username: data.currentUserProfile.username })
      ),
  })

  const onSubmit = (formData) => {
    mutate({
      variables: {
        input: {
          ...formData,
          packItems,
        },
      },
    })
  }

  return (
    <PageContainer>
      <MetaTags title="EditPack" description="EditPack page" />

      <Flex justifyContent="center">
        <Stack w="3xl" spacing={6}>
          <Form formMethods={formMethods} onSubmit={onSubmit}>
            <Stack w="3xl" spacing={6}>
              {error && (
                <Alert status="error">
                  <AlertIcon />
                  {error.message}
                </Alert>
              )}
              <FormControl isInvalid={Boolean(formState.errors.title)}>
                <Textarea
                  placeholder="Title"
                  fontSize="5xl"
                  fontWeight="extrabold"
                  color="blackAlpha.900"
                  variant="unstyled"
                  size="lg"
                  lineHeight={1}
                  {...register('title', {
                    required: {
                      value: true,
                      message: 'Pack title is required',
                    },
                  })}
                />
                <FormErrorMessage>
                  {formState.errors.title?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(formState.errors.description)}>
                <Textarea
                  placeholder="What is your pack about..."
                  fontSize="xl"
                  lineHeight={7}
                  color="blackAlpha.800"
                  variant="unstyled"
                  {...register('description')}
                />
                <FormErrorMessage>
                  {formState.errors.description?.message}
                </FormErrorMessage>
              </FormControl>
              <Button
                leftIcon={<AddIcon boxSize={3} />}
                onClick={createOpenAddPackItemModal(0)}
              >
                Add Item
              </Button>
              <Stack spacing={6}>
                {packItems.map((packItem, index) => (
                  <PackItemEditable
                    key={packItem.id || packItem.title}
                    imageUrl={packItem.imageUrl}
                    purchaseUrl={packItem.purchaseUrl}
                    title={packItem.title}
                    description={packItem.description}
                    hideMoveItemUp={Boolean(index === 0)}
                    moveItemUp={createMovePackItemUp(index)}
                    hideMoveItemDown={Boolean(index === packItems.length - 1)}
                    moveItemDown={createMovePackItemDown(index)}
                    editItem={createOpenEditPackItemModal(index)}
                    deleteItem={createOpenDeletePackItemAlert(index)}
                  />
                ))}
              </Stack>
              {packItems.length > 0 && (
                <Button
                  leftIcon={<AddIcon boxSize={3} />}
                  onClick={createOpenAddPackItemModal(packItems.length)}
                >
                  Add Item
                </Button>
              )}
              <Flex justifyContent="flex-end">
                <Button type="submit" colorScheme="teal" isLoading={loading}>
                  Create Pack
                </Button>
              </Flex>
            </Stack>
          </Form>
          <EditPackItemModal
            isOpen={isEditModalOpen}
            title={editModalTitle}
            packItem={packItems[indexToEdit]}
            onClose={onEditModalClose}
            onSubmit={editPackItem}
          />

          <AlertDialog
            isOpen={isDeleteAlertOpen}
            leastDestructiveRef={cancelDeleteRef}
            onClose={onDeleteAlertClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                  Delete Pack Item
                </AlertDialogHeader>

                <AlertDialogBody>
                  {'Are you sure you want to delete this pack item?'}
                </AlertDialogBody>

                <AlertDialogFooter>
                  <Button ref={cancelDeleteRef} onClick={onDeleteAlertClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="red" onClick={deletePackItem} ml={3}>
                    Delete Item
                  </Button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialogOverlay>
          </AlertDialog>
        </Stack>
      </Flex>
    </PageContainer>
  )
}

export default NewPackPage
