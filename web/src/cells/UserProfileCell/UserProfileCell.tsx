import { Button, useDisclosure } from '@chakra-ui/react'
import type {
  FindUserProfileQuery,
  FindUserProfileQueryVariables,
} from 'types/graphql'

import {
  CellSuccessProps,
  CellFailureProps,
  MetaTags,
  Head,
} from '@redwoodjs/web'

import EditUserProfileModal from 'src/components/EditUserProfileModal/EditUserProfileModal'
import UserProfile, {
  UserProfileLayout,
} from 'src/components/UserProfile/UserProfile'
import getUserDisplayName from 'src/helpers/getUserDisplayName'

type UserProfileCellProps = CellSuccessProps<
  FindUserProfileQuery,
  FindUserProfileQueryVariables
> & {
  setMetaTags?: boolean
  layout?: UserProfileLayout
}

export const QUERY = gql`
  query FindUserProfileQuery($username: String!) {
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
}: CellFailureProps<FindUserProfileQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userProfile,
  currentUserProfile,
  setMetaTags = false,
  layout,
}: UserProfileCellProps) => {
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
      <UserProfile
        layout={layout}
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
