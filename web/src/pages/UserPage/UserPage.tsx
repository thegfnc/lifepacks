import { EditIcon } from '@chakra-ui/icons'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Link as ChakraLink,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import PageContainer from 'src/components/PageContainer/PageContainer'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type UserPageProps = {
  username: string
}

const UserPage = ({ username }: UserPageProps) => {
  const { currentUser } = useAuth()
  const { data: currentUserProfileData } = useCurrentUserProfile()
  const { currentUserProfile } = currentUserProfileData || {}

  return (
    <>
      <MetaTags title="User" description="User page" />

      <PageContainer>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading>User Page</Heading>
          <Button
            as={Link}
            leftIcon={<EditIcon />}
            variant="outline"
            to={routes.editUserProfile()}
          >
            Edit Profile
          </Button>
        </Flex>
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
            <CardBody>
              <ChakraLink
                as={Link}
                to={routes.pack({
                  username,
                  slug: 'test',
                })}
              >
                Test Pack
              </ChakraLink>
            </CardBody>
          </Card>
        </SimpleGrid>
      </PageContainer>
    </>
  )
}

export default UserPage
