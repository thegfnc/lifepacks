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
      <Modal
        onClose={onCloseWithDirtyCheck}
        isOpen={isOpen}
        scrollBehavior="inside"
        size={{ base: 'full', md: 'md' }}
      >
        <ModalOverlay />
        <ModalContent borderRadius={{ base: 'none', md: '3xl' }}>
          <ModalHeader
            fontWeight="medium"
            p="6"
            lineHeight="shorter"
            borderBottomWidth="1px"
            borderBottomColor="blackAlpha.300"
          >
            Edit Profile
          </ModalHeader>
          <ModalCloseButton top={4} right={6} size="lg" />
          <ModalBody py={4} mb="72px">
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
