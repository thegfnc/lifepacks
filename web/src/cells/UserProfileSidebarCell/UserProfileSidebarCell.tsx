import { Button, useDisclosure } from '@chakra-ui/react'
import type {
  FindUserProfileSidebarQuery,
  FindUserProfileSidebarQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EditUserProfileModal from 'src/components/EditUserProfileModal/EditUserProfileModal'
import UserProfileSidebar from 'src/components/UserProfileSidebar/UserProfileSidebar'

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
    currentUserProfile {
      username
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
  currentUserProfile,
}: CellSuccessProps<
  FindUserProfileSidebarQuery,
  FindUserProfileSidebarQueryVariables
>) => {
  const isCurrentUser = userProfile.username === currentUserProfile?.username

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()

  return (
    <>
      <UserProfileSidebar
        userProfile={userProfile}
        actionButton={
          isCurrentUser && (
            <Button
              variant="outline"
              colorScheme="gray"
              onClick={onEditModalOpen}
            >
              Edit Profile
            </Button>
          )
        }
      />

      {isCurrentUser && (
        <EditUserProfileModal
          isOpen={isEditModalOpen}
          onClose={onEditModalClose}
        />
      )}
    </>
  )
}
