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
import stripTypename from 'src/helpers/stripTypename'

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
            py={6}
            px={{ base: 4, md: 6 }}
            lineHeight="shorter"
            borderBottomWidth="1px"
            borderBottomColor="blackAlpha.300"
          >
            {packItem ? 'Edit Item' : 'Add Item'}
          </ModalHeader>
          <ModalCloseButton top={4} right={{ base: 4, md: 6 }} size="lg" />
          <ModalBody py={4} px={{ base: 4, md: 6 }} mb="72px">
            <PackItemForm
              onFormDirtyStateChange={setIsFormDirty}
              onSubmit={onSubmit}
              onCancel={onCloseWithDirtyCheck}
              defaultValues={stripTypename(packItem)}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <AlertDialog
        isOpen={isDiscardChangesModalOpen}
        leastDestructiveRef={cancelDiscardChangesRef}
        onClose={onDiscardChangesModalClose}
        isCentered={true}
      >
        <AlertDialogOverlay>
          <AlertDialogContent borderRadius="3xl">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Unsaved Changes
            </AlertDialogHeader>

            <AlertDialogBody>
              {'Are you sure you want to discard your unsaved changes?'}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button
                variant="secondary"
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
