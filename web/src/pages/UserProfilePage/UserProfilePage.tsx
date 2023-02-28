import { Box, Flex, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import BylineCell, { Mode } from 'src/cells/BylineCell'
import PacksCell from 'src/cells/PacksCell'
import UserProfileSidebarCell from 'src/cells/UserProfileSidebarCell'
import PageContainer from 'src/components/PageContainer/PageContainer'

type UserProfilePageProps = {
  username: string
}

const UserProfilePage = ({ username }: UserProfilePageProps) => {
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
          </Box>
        </Flex>
      </PageContainer>
    </>
  )
}

export default UserProfilePage
