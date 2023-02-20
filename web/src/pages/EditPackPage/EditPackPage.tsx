import { useState } from 'react'

import { AddIcon } from '@chakra-ui/icons'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Flex,
  FormControl,
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

import { MetaTags } from '@redwoodjs/web'

import EditPackCell from 'src/components/EditPackCell'
import PackItemEditable from 'src/components/PackItemEditable/PackItemEditable'
import PageContainer from 'src/components/PageContainer/PageContainer'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

const EditPackPage = ({ id }) => {
  const { data } = useCurrentUserProfile()
  const movePackItemUp = () => {}
  const movePackItemDown = () => {}

  // Add + Edit functions
  const [editModalTitle, setEditModalTitle] = useState('')
  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()
  const openAddPackItemModal = () => {
    setEditModalTitle('Add Item')
    onEditModalOpen()
  }
  const openEditPackItemModal = () => {
    setEditModalTitle('Edit Item')
    onEditModalOpen()
  }
  const editPackItem = () => {
    onEditModalClose()
  }

  // Delete functions
  const cancelDeleteRef = React.useRef()
  const {
    isOpen: isDeleteAlertOpen,
    onOpen: onDeleteAlertOpen,
    onClose: onDeleteAlertClose,
  } = useDisclosure()
  const openDeletePackItemAlert = () => {
    onDeleteAlertOpen()
  }
  const deletePackItem = () => {
    onDeleteAlertClose()
  }

  return (
    <PageContainer>
      <MetaTags title="EditPack" description="EditPack page" />

      <Flex justifyContent="center">
        <Stack w="3xl" spacing={6}>
          {data?.currentUserProfile && (
            <EditPackCell username={data.currentUserProfile.username} id={id} />
          )}
          <Button
            leftIcon={<AddIcon boxSize={3} />}
            onClick={openAddPackItemModal}
          >
            Add Item
          </Button>
          <Stack spacing={6}>
            <PackItemEditable
              imageUrl="https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588"
              purchaseUrl="knob.com"
              title="REI Co-op Trailbreak 30 Sleeping Bag - Men's"
              description="While the above sleeping bag will suffice for three seasons,
            if you’re a beginner camper who is looking for one that will
            get you through four seasons (or one that can just handle
              cooler temperatures), the Mandagies recommend investing in
              this more expensive down-filled option from REI’s in-house
              line."
              moveItemUp={movePackItemUp}
              moveItemDown={movePackItemDown}
              editItem={openEditPackItemModal}
              deleteItem={openDeletePackItemAlert}
            />
            <PackItemEditable
              imageUrl="https://i5.walmartimages.com/asr/e2eaf2d6-392e-4703-8338-d9b113e0e124.85c6678244824a2e565fa624c03c2301.jpeg"
              purchaseUrl="knob.com"
              title="Coleman Classic Two-Burner Propane Stove"
              description="Once you have your sleeping arrangements and apparel squared
                  away, the experts say you’ll want to think about your camp
                  kitchen. While some campgrounds have grills at each site, a
                  lot do not, so if you’re planning for a few days (or more),
                  you’ll probably want to bring your own portable stove."
              moveItemUp={movePackItemUp}
              moveItemDown={movePackItemDown}
              editItem={openEditPackItemModal}
              deleteItem={openDeletePackItemAlert}
            />
          </Stack>
          <Button
            leftIcon={<AddIcon boxSize={3} />}
            onClick={openAddPackItemModal}
          >
            Add Item
          </Button>
        </Stack>
      </Flex>

      <Modal onClose={onEditModalClose} isOpen={isEditModalOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{editModalTitle}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Title*</FormLabel>
                <Input />
              </FormControl>
              <FormControl>
                <FormLabel>Purchase Url*</FormLabel>
                <Input placeholder="amazon.com/xxxx" />
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
                <Textarea />
              </FormControl>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onEditModalClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={editPackItem}>
              Save Item
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

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
    </PageContainer>
  )
}

export default EditPackPage
