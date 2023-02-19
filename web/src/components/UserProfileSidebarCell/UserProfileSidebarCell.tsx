import { Stack, Text, Avatar } from '@chakra-ui/react'
import type {
  FindUserProfileSidebarQuery,
  FindUserProfileSidebarQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import SocialAccountButton from 'src/components/SocialAccountButton/SocialAccountButton'

import { SocialAccountType } from '../SocialAccountIcon/SocialAccountIcon'

export const QUERY = gql`
  query FindUserProfileSidebarQuery($username: String!) {
    userProfile(username: $username) {
      username
      givenName
      familyName
      biography
      imageUrl
      facebookUrl
      instagramUrl
      youtubeUrl
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
        src={userProfile.imageUrl}
        name={userProfile.givenName}
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
        to={routes.userProfile({ username: userProfile.username })}
      >
        @{userProfile.username}
      </Text>
      <Text fontSize="md" lineHeight={6} pt={2}>
        {userProfile.biography}
      </Text>
      <Stack mt={6}>
        {userProfile.facebookUrl && (
          <SocialAccountButton
            accountType={SocialAccountType.Facebook}
            linkUrl={userProfile.facebookUrl}
          />
        )}
        {userProfile.instagramUrl && (
          <SocialAccountButton
            accountType={SocialAccountType.Instagram}
            linkUrl={userProfile.instagramUrl}
          />
        )}
        {userProfile.youtubeUrl && (
          <SocialAccountButton
            accountType={SocialAccountType.YouTube}
            linkUrl={userProfile.youtubeUrl}
          />
        )}
      </Stack>
    </>
  )
}
