import { EditIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Stack, useDisclosure } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import BylineCell, { Mode } from 'src/cells/BylineCell'
import PacksCell from 'src/cells/PacksCell'
import UserProfileSidebarCell from 'src/cells/UserProfileSidebarCell'
import EditUserProfileModal from 'src/components/EditUserProfileModal/EditUserProfileModal'
import PageContainer from 'src/components/PageContainer/PageContainer'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type UserProfilePageProps = {
  username: string
}

const UserProfilePage = ({ username }: UserProfilePageProps) => {
  const { data } = useCurrentUserProfile()
  const isCurrentUser = username === data?.currentUserProfile?.username

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()

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

            {isCurrentUser && (
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

        {isCurrentUser && (
          <EditUserProfileModal
            isOpen={isEditModalOpen}
            onClose={onEditModalClose}
          />
        )}
      </PageContainer>
    </>
  )
}

export default UserProfilePage
