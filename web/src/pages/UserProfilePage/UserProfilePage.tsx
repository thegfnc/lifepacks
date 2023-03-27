import { Box, Divider, HStack, Text } from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PacksCell from 'src/cells/PacksCell'
import UserProfileCell from 'src/cells/UserProfileCell'
import PageContainer from 'src/components/PageContainer/PageContainer'

type UserProfilePageProps = {
  username: string
}

const UserProfilePage = ({ username }: UserProfilePageProps) => {
  return (
    <>
      {/* Default MetaTags, some props will get overwritten by UserProfileCell below */}
      <MetaTags
        title={`@${username}'s Profile`}
        description={`Check out the packs created by @${username}`}
        ogType="profile"
        ogUrl={`https://www.lifepacks.co${routes.userProfile({ username })}`}
      />

      <PageContainer>
        <UserProfileCell username={username} setMetaTags={true} />
        <HStack spacing={5}>
          <Text fontWeight="semibold" fontSize="xs" color="blackAlpha.600">
            PACKS
          </Text>
          <Divider borderColor="blackAlpha.200" />
        </HStack>
        <Box mt={4}>
          <PacksCell username={username} />
        </Box>
      </PageContainer>
    </>
  )
}

export default UserProfilePage
