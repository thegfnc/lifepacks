import { useEffect, useRef } from 'react'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'

import { Form, useForm } from '@redwoodjs/forms'

type EditPackItemFormValues = {
  title: string
  purchaseUrl: string
  description: string
}

type EditPackItemModalProps = {
  isOpen: boolean
  title: string
  packItem: EditPackItemFormValues
  onClose: () => void
  onSubmit: (packItem: EditPackItemFormValues) => void
}

const EditPackItemModal = ({
  isOpen,
  title,
  packItem,
  onClose,
  onSubmit,
}: EditPackItemModalProps) => {
  const formMethods = useForm<EditPackItemFormValues>()
  const { register, formState } = formMethods

  useEffect(() => {
    if (!isOpen) {
      formMethods.reset()
    }
  }, [isOpen, formMethods])

  const {
    isOpen: isDiscardChangesModalOpen,
    onOpen: onDiscardChangesModalOpen,
    onClose: onDiscardChangesModalClose,
  } = useDisclosure()
  const cancelDiscardChangesRef = useRef()

  const onCloseWithDirtyCheck = () => {
    if (formState.isDirty) {
      onDiscardChangesModalOpen()
    } else {
      onClose()
    }
  }

  const onDiscardChanges = () => {
    onDiscardChangesModalClose()
    onClose()
  }

  return (
    <>
      <Modal onClose={onCloseWithDirtyCheck} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          {packItem && (
            <Form formMethods={formMethods} onSubmit={onSubmit}>
              <ModalHeader>{title}</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Stack spacing={4}>
                  <FormControl isInvalid={Boolean(formState.errors.title)}>
                    <FormLabel>Title*</FormLabel>
                    <Input
                      defaultValue={packItem.title}
                      {...register('title', {
                        required: {
                          value: true,
                          message: 'Pack item title is required',
                        },
                      })}
                    />
                    <FormErrorMessage>
                      {formState.errors.title?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={Boolean(formState.errors.purchaseUrl)}
                  >
                    <FormLabel>Purchase Url*</FormLabel>
                    <Input
                      defaultValue={packItem.purchaseUrl}
                      placeholder="amazon.com/xxxx"
                      {...register('purchaseUrl', {
                        required: {
                          value: true,
                          message: 'Pack item purchase url is required',
                        },
                      })}
                    />
                    <FormErrorMessage>
                      {formState.errors.purchaseUrl?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Image*</FormLabel>
                    <IconButton
                      aria-label="Upload image"
                      icon={<BiImageAdd size="1.5rem" />}
                      borderWidth="1px"
                      borderColor="gray.200"
                      h={'7.5rem'}
                      w="100%"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                      defaultValue={packItem.description}
                      {...register('description')}
                    />
                  </FormControl>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button mr={3} onClick={onCloseWithDirtyCheck}>
                  Cancel
                </Button>
                <Button colorScheme="teal" type="submit">
                  Apply
                </Button>
              </ModalFooter>
            </Form>
          )}
        </ModalContent>
      </Modal>
      <AlertDialog
        isOpen={isDiscardChangesModalOpen}
        leastDestructiveRef={cancelDiscardChangesRef}
        onClose={onDiscardChangesModalClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Unsaved Changes
            </AlertDialogHeader>

            <AlertDialogBody>
              {'Are you sure you want to discard your unsaved changes?'}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                ref={cancelDiscardChangesRef}
                onClick={onDiscardChangesModalClose}
              >
                Keep Editing
              </Button>
              <Button colorScheme="red" onClick={onDiscardChanges} ml={3}>
                Discard Changes
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default EditPackItemModal
