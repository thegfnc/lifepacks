import {
  HStack,
  Text,
  Avatar,
  LinkBox,
  LinkOverlay,
  Stack,
  AvatarBadge,
} from '@chakra-ui/react'
import { MdVerified } from 'react-icons/md'
import sanitizeHtml from 'sanitize-html'
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
      >
        {verified && (
          <AvatarBadge
            color="purple.500"
            bgColor="beige.500"
            border="none"
            boxSize="22px"
            bottom={0}
            right={0}
          >
            <MdVerified size="20px" />
          </AvatarBadge>
        )}
      </Avatar>
      <Stack spacing={0}>
        <HStack
          spacing={1}
          fontSize="md"
          fontWeight="medium"
          color="blackAlpha.800"
        >
          <LinkOverlay
            as={Link}
            to={routes.userProfile({ username: username })}
            onClick={() => trackSelectUserProfile(username)}
          >
            {getUserDisplayName(givenName, familyName, username)}
          </LinkOverlay>
        </HStack>
        <Text
          fontSize="sm"
          color="blackAlpha.600"
          fontWeight="normal"
          lineHeight="20px"
          noOfLines={3}
        >
          {sanitizeHtml(biography, {
            allowedTags: [],
            allowedAttributes: {},
          })}
        </Text>
      </Stack>
    </LinkBox>
  )
}

export default UserProfileThumbnailListItem
