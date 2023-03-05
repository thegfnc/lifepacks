import { Fragment, useReducer, useState } from 'react'

import {
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
import { Pack, PackItem } from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'

import EditPackItemModal from 'src/components/EditPackItemModal/EditPackItemModal'
import PackItemEditable from 'src/components/PackItemEditable/PackItemEditable'
import { arrayMoveImmutable } from 'src/helpers/arrayMove'

type PackFormProps = {
  onSubmit: (data: PackFormSubmitData) => void
  isLoading: boolean
  defaultValues?: Pick<Pack, 'title' | 'description'> & {
    packItems: Pick<
      PackItem,
      'id' | 'title' | 'purchaseUrl' | 'imageUrl' | 'description'
    >[]
  }
}

type PackFormValues = {
  title: string
  description: string
}

export type PackFormSubmitData = PackFormValues & {
  packsItems: PackItem[]
  packItemIdsToDelete?: number[]
}

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
      packItemsCopy.splice(action.payload.index, 0, action.payload.packItem)
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

const PackForm = ({ onSubmit, isLoading, defaultValues }: PackFormProps) => {
  const formMethods = useForm<PackFormValues>({ defaultValues })
  const { register, formState } = formMethods

  const [packItems, dispatch] = useReducer(
    packItemsReducer,
    defaultValues
      ? defaultValues.packItems.map((packItem) => ({
          id: packItem.id,
          title: packItem.title,
          purchaseUrl: packItem.purchaseUrl,
          imageUrl: packItem.imageUrl,
          description: packItem.description,
        }))
      : []
  )

  // Move functions
  const createMovePackItemUp = (index) => () =>
    dispatch({ type: 'MOVE_PACK_ITEM_UP', payload: { index } })
  const createMovePackItemDown = (index) => () =>
    dispatch({ type: 'MOVE_PACK_ITEM_DOWN', payload: { index } })

  // Add + Edit functions
  const [editModalStatus, setEditModalStatus] = useState('ADD')
  const [indexToEdit, setIndexToEdit] = useState(0)
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()
  const createOpenAddPackItemModal = (index) => () => {
    setEditModalStatus('ADD')
    setIndexToEdit(index)
    onEditModalOpen()
  }
  const createOpenEditPackItemModal = (index) => () => {
    setEditModalStatus('EDIT')
    setIndexToEdit(index)
    onEditModalOpen()
  }
  const editPackItem = (packItem) => {
    if (editModalStatus === 'ADD') {
      dispatch({
        type: 'ADD_PACK_ITEM',
        payload: { index: indexToEdit, packItem },
      })
    } else if (editModalStatus === 'EDIT') {
      dispatch({
        type: 'UPDATE_PACK_ITEM',
        payload: { index: indexToEdit, packItem },
      })
    }
    onEditModalClose()
  }

  // Delete functions
  const [packItemIdsToDelete, setPackItemIdsToDelete] = useState([])
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
    if (packItems[indexToConfirmDelete].id) {
      setPackItemIdsToDelete([
        ...packItemIdsToDelete,
        packItems[indexToConfirmDelete].id,
      ])
    }
    onDeleteAlertClose()
  }

  const onFormSubmit = (formData) => {
    const data = {
      ...formData,
      packItems,
    }

    if (packItemIdsToDelete.length) {
      data.packItemIdsToDelete = packItemIdsToDelete
    }

    onSubmit(data)
  }

  return (
    <>
      <Form formMethods={formMethods} onSubmit={onFormSubmit}>
        <Stack w="3xl" spacing={6}>
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
            variant="outline"
            colorScheme="gray"
            onClick={createOpenAddPackItemModal(0)}
          >
            Add Item
          </Button>
          <Stack spacing={6}>
            {packItems.map((packItem, index) => (
              <Fragment key={packItem.id || packItem.title}>
                <PackItemEditable
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
                <Button
                  variant="outline"
                  colorScheme="gray"
                  onClick={createOpenAddPackItemModal(index + 1)}
                >
                  Add Item
                </Button>
              </Fragment>
            ))}
          </Stack>
          <Flex justifyContent="flex-end">
            <Button type="submit" colorScheme="green" isLoading={isLoading}>
              {defaultValues ? 'Update Pack' : 'Create Pack'}
            </Button>
          </Flex>
        </Stack>
      </Form>
      <EditPackItemModal
        isOpen={isEditModalOpen}
        title={editModalStatus === 'ADD' ? 'Add Item' : 'Edit Item'}
        packItem={editModalStatus === 'ADD' ? null : packItems[indexToEdit]}
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
              <Button
                variant="outline"
                colorScheme="gray"
                ref={cancelDeleteRef}
                onClick={onDeleteAlertClose}
              >
                Cancel
              </Button>
              <Button colorScheme="red" onClick={deletePackItem} ml={3}>
                Delete Item
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default PackForm
