import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
} from '@chakra-ui/react'

import EditUserProfileCell from '../EditUserProfileCell/EditUserProfileCell'

type EditUserProileModalProps = {
  isOpen: boolean
  onClose: () => void
}

const EditUserProfileModal = ({
  isOpen,
  onClose,
}: EditUserProileModalProps) => {
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <EditUserProfileCell onCancel={onClose} onSuccess={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default EditUserProfileModal
