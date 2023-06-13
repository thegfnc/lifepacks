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
        <Flex direction={{ base: 'column', lg: 'row' }} mb={10}>
          <Box
            paddingRight={{ base: 0, lg: 10, xl: 20 }}
            borderRightWidth={{ base: 0, lg: '1px' }}
            borderColor="blackAlpha.200"
          >
            <PackCell username={username} slug={slug} setMetaTags={true} />
          </Box>
          <Box
            minWidth={{ base: 'full', lg: '264px', xl: '320px' }}
            borderWidth={{ base: '1px', lg: 0 }}
            borderColor="blackAlpha.200"
            borderRadius={{ base: '32px', lg: 0 }}
            ml={{ base: 0, lg: 10 }}
            mt={{ base: 12, lg: 0 }}
            p={{ base: 10, lg: 0 }}
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
