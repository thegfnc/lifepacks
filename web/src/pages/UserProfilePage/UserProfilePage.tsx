import { Box, Flex, Stack, useBreakpointValue } from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import BylineCell from 'src/cells/BylineCell'
import PacksCell from 'src/cells/PacksCell'
import UserProfileSidebarCell from 'src/cells/UserProfileSidebarCell'
import PageContainer from 'src/components/PageContainer/PageContainer'

type UserProfilePageProps = {
  username: string
}

const UserProfilePage = ({ username }: UserProfilePageProps) => {
  const isBylineVisible = useBreakpointValue({ base: false, md: true })

  return (
    <>
      {/* Default MetaTags, some props will get overwritten by UserProfileSidebarCell below */}
      <MetaTags
        title={`@${username}'s Profile`}
        description={`Check out the packs created by @${username}`}
        ogType="profile"
        ogUrl={`https://www.lifepacks.co${routes.userProfile({ username })}`}
      />

      <PageContainer>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Stack
            width={{ base: 'full', md: '70%' }}
            spacing={8}
            paddingRight={{ base: 0, md: 20 }}
            mt={{ base: 6, md: 0 }}
            order={{ base: 2, md: 1 }}
          >
            {isBylineVisible && <BylineCell username={username} />}
            <PacksCell username={username} />
          </Stack>
          <Box
            width={{ base: 'full', md: '30%' }}
            borderLeftWidth={{ base: '0', md: '1px' }}
            borderLeftColor={'blackAlpha.200'}
            paddingLeft={{ base: 0, md: 14 }}
            order={{ base: 1, md: 2 }}
          >
            <UserProfileSidebarCell username={username} setMetaTags={true} />
          </Box>
        </Flex>
      </PageContainer>
    </>
  )
}

export default UserProfilePage
