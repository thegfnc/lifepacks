import { Button, useDisclosure } from '@chakra-ui/react'
import sanitizeHtml from 'sanitize-html'
import type {
  FindUserProfileQuery,
  FindUserProfileQueryVariables,
} from 'types/graphql'

import { routes } from '@redwoodjs/router'
import {
  CellSuccessProps,
  CellFailureProps,
  Metadata,
  Head,
} from '@redwoodjs/web'

import EditUserProfileModal from 'src/components/EditUserProfileModal/EditUserProfileModal'
import UserProfile, {
  UserProfileLayout,
} from 'src/components/UserProfile/UserProfile'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'
import getLogoCard from 'src/helpers/getLogoCard'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type UserProfileCellProps = CellSuccessProps<
  FindUserProfileQuery,
  FindUserProfileQueryVariables
> & {
  setMetadata?: boolean
  layout?: UserProfileLayout
}

export const QUERY = gql`
  query FindUserProfileQuery($username: String!) {
    userProfile(username: $username) {
      username
      givenName
      familyName
      biography
      verified
      imageUrl
      facebookUrl
      instagramUrl
      youtubeUrl
      twitterUrl
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
  setMetadata = false,
  layout,
}: UserProfileCellProps) => {
  const { currentUserProfile } = useCurrentUserProfile()
  const isCurrentUser = userProfile.username === currentUserProfile?.username

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure()

  return (
    <>
      {setMetadata && (
        <>
          <Metadata
            title={`${getUserDisplayName(
              userProfile.givenName,
              userProfile.familyName,
              userProfile.username
            )}'s Profile`}
            description={sanitizeHtml(userProfile.biography, {
              allowedTags: [],
              allowedAttributes: {},
            })}
            og={{
              type: 'profile',
              url: getEnvironmentUrl(
                routes.userProfile({
                  username: userProfile.username,
                })
              ),
              image: userProfile.imageUrl || getLogoCard({ color: 'random' }),
            }}
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
            <Button variant="secondary" size="lg" onClick={onEditModalOpen}>
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
