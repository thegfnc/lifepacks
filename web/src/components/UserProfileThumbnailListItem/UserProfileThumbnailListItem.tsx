import {
  HStack,
  Text,
  Avatar,
  LinkBox,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react'
import { UserProfile } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import { trackSelectUserProfile } from 'src/lib/analytics'

type UserProfileThumbnailListItemProps = Pick<
  UserProfile,
  'username' | 'imageUrl' | 'givenName' | 'familyName' | 'biography'
>

const UserProfileThumbnailListItem = ({
  username,
  imageUrl,
  givenName,
  familyName,
  biography,
}: UserProfileThumbnailListItemProps) => {
  return (
    <LinkBox as={HStack} spacing={3}>
      <Avatar
        boxSize="56px"
        src={getImageUrlWithTransform({
          src: imageUrl,
          transform: { width: 96, height: 96, resize: 'cover' },
        })}
        name={getUserDisplayName(givenName, familyName, username)}
      />
      <Stack spacing={0}>
        <Text fontSize="md" fontWeight="medium" color="blackAlpha.800">
          <LinkOverlay
            as={Link}
            to={routes.userProfile({ username: username })}
            onClick={() => trackSelectUserProfile(username)}
          >
            {getUserDisplayName(givenName, familyName, username)}
          </LinkOverlay>
        </Text>
        <Text fontSize="xs" color="blackAlpha.600" fontWeight="normal">
          {biography}
        </Text>
      </Stack>
    </LinkBox>
  )
}

export default UserProfileThumbnailListItem
