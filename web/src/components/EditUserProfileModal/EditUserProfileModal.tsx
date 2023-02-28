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
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'

import EditUserProfileCell from 'src/cells/EditUserProfileCell'

type EditUserProileModalProps = {
  isOpen: boolean
  onClose: () => void
}

const EditUserProfileModal = ({
  isOpen,
  onClose,
}: EditUserProileModalProps) => {
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
          <ModalHeader>Edit Profile</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <EditUserProfileCell
              onFormDirtyStateChange={setIsFormDirty}
              onCancel={onCloseWithDirtyCheck}
              onCompleted={onClose}
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

export default EditUserProfileModal
