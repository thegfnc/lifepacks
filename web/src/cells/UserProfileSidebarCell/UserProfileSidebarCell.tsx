import {
  Text,
  Avatar,
  Button,
  useDisclosure,
  HStack,
  Flex,
  Box,
} from '@chakra-ui/react'
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
      <Box mt={4}>
        {(userProfile.givenName || userProfile.familyName) && (
          <Text as="h2" fontSize="xl" fontWeight="bold" color="blackAlpha.800">
            {userProfile.givenName} {userProfile.familyName}
          </Text>
        )}
        <Text
          as={Link}
          fontSize="md"
          color="blackAlpha.700"
          to={routes.userProfile({ username: userProfile.username })}
        >
          @{userProfile.username}
        </Text>
        {userProfile.biography && (
          <Text fontSize="md" lineHeight={6} mt={2} color="blackAlpha.800">
            {userProfile.biography}
          </Text>
        )}
        <HStack mt={4}>
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
      </Box>

      {isCurrentUser && (
        <EditUserProfileModal
          isOpen={isEditModalOpen}
          onClose={onEditModalClose}
        />
      )}
    </>
  )
}
