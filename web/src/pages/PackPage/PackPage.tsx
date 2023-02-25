import { Box, Flex } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import PackCell from 'src/cells/PackCell'
import UserProfileSidebarCell from 'src/cells/UserProfileSidebarCell'
import PageContainer from 'src/components/PageContainer/PageContainer'

type PackPageProps = {
  username: string
  slug: string
}

const PackPage = ({ username, slug }: PackPageProps) => {
  return (
    <>
      <MetaTags title="Pack" description="Pack page" />

      <PageContainer>
        <Flex>
          <Box width="70%" paddingRight={20}>
            <PackCell username={username} slug={slug} />
          </Box>
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

export default PackPage
