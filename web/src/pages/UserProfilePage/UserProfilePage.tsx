import { Box, Divider, HStack, Text } from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PackListCell from 'src/cells/PackListCell'
import UserProfileCell from 'src/cells/UserProfileCell'
import PageContainer from 'src/components/PageContainer/PageContainer'
import { UserProfileLayout } from 'src/components/UserProfile/UserProfile'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

type UserProfilePageProps = {
  username: string
}

const UserProfilePage = ({ username }: UserProfilePageProps) => {
  return (
    <>
      {/* Default Metadata, some props will get overwritten by UserProfileCell below */}
      <Metadata
        title={`@${username}'s Profile`}
        description={`Check out the packs created by @${username}`}
        og={{
          type: 'profile',
          url: getEnvironmentUrl(routes.userProfile({ username })),
        }}
      />

      <PageContainer>
        <UserProfileCell
          username={username}
          setMetadata={true}
          layout={UserProfileLayout.Banner}
        />
        <HStack spacing={5} mt={6}>
          <Text fontWeight="semibold" fontSize="xs" color="blackAlpha.600">
            PACKS
          </Text>
          <Divider borderColor="blackAlpha.200" />
        </HStack>
        <Box mt={4} mb={12}>
          <PackListCell username={username} />
        </Box>
      </PageContainer>
    </>
  )
}

export default UserProfilePage
