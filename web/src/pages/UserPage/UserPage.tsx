import { EditIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Stack } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BylineCell, { Mode } from 'src/components/BylineCell/BylineCell'
import PacksCell from 'src/components/PacksCell/PacksCell'
import PageContainer from 'src/components/PageContainer/PageContainer'
import UserProfileSidebarCell from 'src/components/UserProfileSidebarCell/UserProfileSidebarCell'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type UserPageProps = {
  username: string
}

const UserPage = ({ username }: UserPageProps) => {
  const { data: currentUserProfileData } = useCurrentUserProfile()
  const { currentUserProfile } = currentUserProfileData || {}

  return (
    <>
      <MetaTags title="User" description="User page" />

      <PageContainer>
        <Flex>
          <Stack width="70%" spacing={2} paddingRight={20}>
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

            {username === currentUserProfile?.username && (
              <Button
                as={Link}
                leftIcon={<EditIcon />}
                variant="outline"
                to={routes.home()}
                mt={4}
              >
                Edit Profile
              </Button>
            )}
          </Box>
        </Flex>
      </PageContainer>
    </>
  )
}

export default UserPage
