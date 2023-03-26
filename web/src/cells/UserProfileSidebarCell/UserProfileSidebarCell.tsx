import { Button, useDisclosure } from '@chakra-ui/react'
import type {
  FindUserProfileSidebarQuery,
  FindUserProfileSidebarQueryVariables,
} from 'types/graphql'

import {
  CellSuccessProps,
  CellFailureProps,
  MetaTags,
  Head,
} from '@redwoodjs/web'

import EditUserProfileModal from 'src/components/EditUserProfileModal/EditUserProfileModal'
import UserProfileSidebar from 'src/components/UserProfileSidebar/UserProfileSidebar'
import getUserDisplayName from 'src/helpers/getUserDisplayName'

type UserProfileSidebarCellProps = CellSuccessProps<
  FindUserProfileSidebarQuery,
  FindUserProfileSidebarQueryVariables
> & {
  setMetaTags?: boolean
}

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
      twitterUrl
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
  setMetaTags = false,
}: UserProfileSidebarCellProps) => {
  const isCurrentUser = userProfile.username === currentUserProfile?.username

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()

  return (
    <>
      {setMetaTags && (
        <>
          <MetaTags
            title={`@${userProfile.username}'s Profile`}
            description={`${
              userProfile.biography
            } \n Check out the packs created by ${getUserDisplayName(
              userProfile.givenName,
              userProfile.familyName,
              userProfile.username
            )}`}
            ogType="profile"
            ogContentUrl={userProfile.imageUrl}
          />
          <Head>
            <meta
              property="og:profile:first_name"
              content={userProfile.givenName}
            />
            <meta
              property="og:profile:last_name"
              content={userProfile.familyName}
            />
            <meta
              property="og:profile:username"
              content={userProfile.username}
            />
          </Head>
        </>
      )}
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
