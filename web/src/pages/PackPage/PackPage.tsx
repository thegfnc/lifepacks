import { Box, Flex } from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PackCell from 'src/cells/PackCell'
import UserProfileCell from 'src/cells/UserProfileCell'
import PageContainer from 'src/components/PageContainer/PageContainer'
import { UserProfileLayout } from 'src/components/UserProfile/UserProfile'

type PackPageProps = {
  username: string
  slug: string
}

const PackPage = ({ username, slug }: PackPageProps) => {
  return (
    <>
      {/* Default MetaTags, some props will get overwritten by PackCell below */}
      <MetaTags
        title={`@${username}'s Pack`}
        description={`This pack was created by @${username}`}
        ogType="article"
        ogUrl={`https://lifepacks.co${routes.pack({ username, slug })}`}
      />

      <PageContainer>
        <Flex direction={{ base: 'column', md: 'row' }} mb={10}>
          <Box
            width={{ base: 'full', md: '70%' }}
            paddingRight={{ base: 0, md: 20 }}
            mt={{ base: 6, md: 0 }}
            order={{ base: 2, md: 1 }}
          >
            <PackCell username={username} slug={slug} setMetaTags={true} />
          </Box>
          <Box
            width={{ base: 'full', md: '30%' }}
            borderLeftWidth={{ base: '0', md: '1px' }}
            borderLeftColor={'blackAlpha.200'}
            paddingLeft={{ base: 0, md: 14 }}
            order={{ base: 1, md: 2 }}
          >
            <UserProfileCell
              username={username}
              layout={UserProfileLayout.Sidebar}
            />
          </Box>
        </Flex>
      </PageContainer>
    </>
  )
}

export default PackPage
