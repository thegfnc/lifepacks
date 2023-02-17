import { EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
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

import BylineCell, { Mode } from 'src/components/BylineCell/BylineCell'
import PacksCell from 'src/components/PacksCell/PacksCell'
import PageContainer from 'src/components/PageContainer/PageContainer'
import SocialAccountIcon, {
  SocialAccountType,
} from 'src/components/SocialAccountIcon/SocialAccountIcon'
import UserProfileSidebarCell from 'src/components/UserProfileSidebarCell/UserProfileSidebarCell'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type UserPageProps = {
  username: string
}

const UserPage = ({ username }: UserPageProps) => {
  const { data } = useCurrentUserProfile()

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()

  const editCurrentUserProfile = () => {
    onEditModalClose()
  }

  return (
    <>
      <MetaTags title="User" description="User page" />

      <PageContainer>
        <Flex>
          <Stack width="70%" spacing={4} paddingRight={20}>
            <BylineCell username={username} mode={Mode.User} />
            <PacksCell username={username} />
          </Stack>
          <Box
            width="30%"
            borderLeftWidth={'1px'}
            borderLeftColor={'blackAlpha.200'}
            paddingLeft={14}
          >
            <UserProfileSidebarCell username={username} />

            {username === data?.currentUserProfile?.username && (
              <Button
                leftIcon={<EditIcon />}
                variant="outline"
                mt={4}
                onClick={onEditModalOpen}
              >
                Edit Profile
              </Button>
            )}
          </Box>
        </Flex>

        <Modal onClose={onEditModalClose} isOpen={isEditModalOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Stack spacing={4}>
                <FormControl>
                  <FormLabel>Profile Image</FormLabel>
                  <IconButton
                    aria-label="Upload image"
                    icon={<BiImageAdd size="1.5rem" />}
                    borderWidth="1px"
                    borderColor="gray.300"
                    borderStyle="dashed"
                    borderRadius="full"
                    boxSize={24}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Username*</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>First Name</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>Last Name</FormLabel>
                  <Input />
                </FormControl>
                <FormControl>
                  <FormLabel>Biography</FormLabel>
                  <Textarea />
                </FormControl>
                <FormControl>
                  <FormLabel>Social Links</FormLabel>
                  <Stack>
                    <InputGroup>
                      <InputLeftElement width="3.25rem">
                        <SocialAccountIcon
                          accountType={SocialAccountType.Facebook}
                          size="sm"
                        />
                      </InputLeftElement>
                      <Input pl="3.25rem" placeholder="facebook.com/xxxx" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement width="3.25rem">
                        <SocialAccountIcon
                          accountType={SocialAccountType.YouTube}
                          size="sm"
                        />
                      </InputLeftElement>
                      <Input pl="3.25rem" placeholder="youtube.com/xxxx" />
                    </InputGroup>
                    <InputGroup>
                      <InputLeftElement width="3.25rem">
                        <SocialAccountIcon
                          accountType={SocialAccountType.Instagram}
                          size="sm"
                        />
                      </InputLeftElement>
                      <Input pl="3.25rem" placeholder="instagram.com/xxxx" />
                    </InputGroup>
                  </Stack>
                </FormControl>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onEditModalClose}>
                Cancel
              </Button>
              <Button colorScheme="teal" onClick={editCurrentUserProfile}>
                Save Profile
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </PageContainer>
    </>
  )
}

export default UserPage
