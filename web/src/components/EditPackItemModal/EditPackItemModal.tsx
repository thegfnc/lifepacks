import { useRef, useState } from 'react'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
} from '@chakra-ui/react'

import PackItemForm from 'src/forms/PackItemForm/PackItemForm'

type EditPackItemFormValues = {
  title: string
  imageUrl: string
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
  packItem,
  onClose,
  onSubmit,
}: EditPackItemModalProps) => {
  const [isFormDirty, setIsFormDirty] = useState(false)

  const {
    isOpen: isDiscardChangesModalOpen,
    onOpen: onDiscardChangesModalOpen,
    onClose: onDiscardChangesModalClose,
  } = useDisclosure()
  const cancelDiscardChangesRef = useRef()

  const onCloseWithDirtyCheck = () => {
    if (isFormDirty) {
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
          <ModalHeader>{packItem ? 'Edit Item' : 'Add Item'}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <PackItemForm
              onFormDirtyStateChange={setIsFormDirty}
              onSubmit={onSubmit}
              onCancel={onCloseWithDirtyCheck}
              defaultValues={packItem}
            />
          </ModalBody>
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
                variant="outline"
                colorScheme="gray"
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
