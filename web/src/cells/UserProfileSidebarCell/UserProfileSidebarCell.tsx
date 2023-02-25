import {
  Text,
  Avatar,
  Button,
  useDisclosure,
  HStack,
  Flex,
} from '@chakra-ui/react'
import { MdOutlineModeEdit } from 'react-icons/md'
import type {
  FindUserProfileSidebarQuery,
  FindUserProfileSidebarQueryVariables,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import EditUserProfileModal from 'src/components/EditUserProfileModal/EditUserProfileModal'
import SocialAccountButton from 'src/components/SocialAccountButton/SocialAccountButton'
import { SocialAccountType } from 'src/components/SocialAccountIcon/SocialAccountIcon'

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
      <Flex justify="space-between">
        <Avatar
          size={'xl'}
          src={userProfile.imageUrl}
          name={userProfile.givenName}
        />
        {isCurrentUser && (
          <Button
            variant="outline"
            colorScheme="gray"
            onClick={onEditModalOpen}
          >
            Edit Profile
          </Button>
        )}
      </Flex>
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
      <HStack mt={6}>
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
      </HStack>

      {isCurrentUser && (
        <EditUserProfileModal
          isOpen={isEditModalOpen}
          onClose={onEditModalClose}
        />
      )}
    </>
  )
}
