import {
  HStack,
  Text,
  Avatar,
  LinkBox,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react'
import { MdVerified } from 'react-icons/md'
import { UserProfile } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import { trackSelectUserProfile } from 'src/lib/analytics'

type UserProfileThumbnailListItemProps = Pick<
  UserProfile,
  | 'username'
  | 'imageUrl'
  | 'givenName'
  | 'familyName'
  | 'biography'
  | 'verified'
>

const UserProfileThumbnailListItem = ({
  username,
  imageUrl,
  givenName,
  familyName,
  biography,
  verified,
}: UserProfileThumbnailListItemProps) => {
  return (
    <LinkBox as={HStack} spacing={3} align="flex-start">
      <Avatar
        boxSize="48px"
        src={getImageUrlWithTransform({
          src: imageUrl,
          transform: { width: 96, height: 96, resize: 'cover' },
        })}
        name={getUserDisplayName(givenName, familyName, username)}
      />
      <Stack spacing={0}>
        <Text fontSize="md" fontWeight="medium" color="blackAlpha.800">
          <HStack spacing={1}>
            <LinkOverlay
              as={Link}
              to={routes.userProfile({ username: username })}
              onClick={() => trackSelectUserProfile(username)}
            >
              {getUserDisplayName(givenName, familyName, username)}
            </LinkOverlay>
            <Text color="purple.500">
              {verified ? <MdVerified size="20px" /> : null}
            </Text>
          </HStack>
        </Text>
        <Text fontSize="sm" color="blackAlpha.600" fontWeight="normal">
          {biography}
        </Text>
      </Stack>
    </LinkBox>
  )
}

export default UserProfileThumbnailListItem
