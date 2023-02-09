import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import PageContainer from 'src/components/PageContainer/PageContainer'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

const UserPage = () => {
  const { currentUser } = useAuth()
  const { data: currentUserProfileData } = useCurrentUserProfile()
  const { currentUserProfile } = currentUserProfileData || {}

  return (
    <>
      <MetaTags title="User" description="User page" />

      <PageContainer>
        <Heading>User Page</Heading>
        <SimpleGrid columns={3} spacing={10}>
          <Card>
            <CardHeader>currentUser</CardHeader>
            <CardBody>{JSON.stringify(currentUser)}</CardBody>
          </Card>
          <Card>
            <CardHeader>currentUserProfile</CardHeader>
            <CardBody>{JSON.stringify(currentUserProfile)}</CardBody>
          </Card>
          <Card>
            <CardHeader>Packs</CardHeader>
            <CardBody>{JSON.stringify({})}</CardBody>
          </Card>
        </SimpleGrid>
      </PageContainer>
    </>
  )
}

export default UserPage
