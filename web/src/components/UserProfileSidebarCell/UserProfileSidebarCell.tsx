import { Stack, Text } from '@chakra-ui/react'
import type {
  FindUserProfileSidebarQuery,
  FindUserProfileSidebarQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar/Avatar'
import SocialAccountButton, {
  SocialAccountType,
} from 'src/components/SocialAccountButton/SocialAccountButton'

export const QUERY = gql`
  query FindUserProfileSidebarQuery($username: String!) {
    userProfile(username: $username) {
      username
      givenName
      familyName
      biography
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindUserProfileSidebarQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userProfile,
}: CellSuccessProps<
  FindUserProfileSidebarQuery,
  FindUserProfileSidebarQueryVariables
>) => {
  return (
    <>
      <Avatar
        size={'xl'}
        src={
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
        }
      />
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="bold"
        pt={4}
        color="blackAlpha.900"
      >
        {userProfile.givenName} {userProfile.familyName}
      </Text>
      <Text
        as={Link}
        fontSize="sm"
        lineHeight={5}
        color="blackAlpha.700"
        to={routes.user({ username: userProfile.username })}
      >
        @{userProfile.username}
      </Text>
      <Text fontSize="md" lineHeight={6} pt={2}>
        {userProfile.biography}
      </Text>
      <Stack mt={6}>
        <SocialAccountButton
          accountType={SocialAccountType.YouTube}
          username="@OutdoorsmanChannel"
          linkUrl="https://www.youtube.com/@outdoorsmanchannel"
        />
        <SocialAccountButton
          accountType={SocialAccountType.Instagram}
          username="@Outdoorsman"
          linkUrl="https://www.instagram.com/outdoorsman/"
        />
      </Stack>
    </>
  )
}
