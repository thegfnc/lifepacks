import { Box } from '@chakra-ui/react'
import type { UserProfilesFeaturedQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import UserProfileThumbnailListItem from 'src/components/UserProfileThumbnailListItem'

export const QUERY = gql`
  query UserProfilesFeaturedQuery {
    userProfilesFeatured {
      username
      imageUrl
      givenName
      familyName
      biography
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userProfilesFeatured,
}: CellSuccessProps<UserProfilesFeaturedQuery>) => {
  return (
    <Box mt={3}>
      {userProfilesFeatured.map((userProfile) => (
        <Box
          py={4}
          key={userProfile.username}
          borderBottom="1px solid"
          borderBottomColor="blackAlpha.200"
        >
          <UserProfileThumbnailListItem
            username={userProfile.username}
            imageUrl={userProfile.imageUrl}
            givenName={userProfile.givenName}
            familyName={userProfile.familyName}
            biography={userProfile.biography}
          />
        </Box>
      ))}
    </Box>
  )
}
