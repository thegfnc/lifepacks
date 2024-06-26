import { Box, Flex } from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PackCell from 'src/cells/PackCell'
import UserProfileCell from 'src/cells/UserProfileCell'
import PageContainer from 'src/components/PageContainer/PageContainer'
import { UserProfileLayout } from 'src/components/UserProfile/UserProfile'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

type PackPageProps = {
  username: string
  slug: string
}

const PackPage = ({ username, slug }: PackPageProps) => {
  return (
    <>
      {/* Default Metadata, some props will get overwritten by PackCell below */}
      <Metadata
        title={`@${username}'s Pack`}
        description={`This pack was created by @${username}`}
        og={{
          type: 'article',
          url: getEnvironmentUrl(routes.pack({ username, slug })),
        }}
      />

      <PageContainer>
        <Flex direction={{ base: 'column', lg: 'row' }}>
          <Box
            paddingRight={{ base: 0, lg: 10, xl: 20 }}
            borderRightWidth={{ base: 0, lg: '1px' }}
            borderColor="blackAlpha.200"
            minWidth={{
              base: 'full',
              lg: 'calc(100% - 304px)', // width of sidebar + left margin
              xl: 'calc(100% - 360px)', // width of sidebar + left margin
            }}
          >
            <PackCell username={username} slug={slug} setMetadata={true} />
          </Box>
          <Box
            minWidth={{ base: 'full', lg: '264px', xl: '320px' }}
            borderWidth={{ base: '1px', lg: 0 }}
            borderColor="blackAlpha.200"
            borderRadius={{ base: '32px', lg: 0 }}
            ml={{ base: 0, lg: 10 }}
            mt={{ base: 12, lg: 0 }}
            px={{ base: 4, lg: 0 }}
            py={{ base: 6, lg: 0 }}
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
