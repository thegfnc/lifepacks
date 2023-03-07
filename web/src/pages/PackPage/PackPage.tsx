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
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box
            width={{ base: 'full', md: '70%' }}
            paddingRight={{ base: 0, md: 20 }}
            mt={{ base: 6, md: 0 }}
            order={{ base: 2, md: 1 }}
          >
            <PackCell username={username} slug={slug} />
          </Box>
          <Box
            width={{ base: 'full', md: '30%' }}
            borderLeftWidth={{ base: '0', md: '1px' }}
            borderLeftColor={'blackAlpha.200'}
            paddingLeft={{ base: 0, md: 14 }}
            order={{ base: 1, md: 2 }}
          >
            <UserProfileSidebarCell username={username} />
          </Box>
        </Flex>
      </PageContainer>
    </>
  )
}

export default PackPage
