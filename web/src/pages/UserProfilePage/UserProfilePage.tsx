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
        <UserProfileSidebarCell username={username} setMetaTags={true} />
        <PacksCell username={username} />
      </PageContainer>
    </>
  )
}

export default UserProfilePage
