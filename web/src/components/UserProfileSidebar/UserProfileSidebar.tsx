import { ReactNode } from 'react'

import { Text, Avatar, HStack, Flex } from '@chakra-ui/react'
import { UserProfile } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import SocialAccountButton from 'src/components/SocialAccountButton/SocialAccountButton'
import { SocialAccountType } from 'src/components/SocialAccountIcon/SocialAccountIcon'

type UserProfileSidebarProps = {
  userProfile: UserProfile
  actionButton?: ReactNode
}

const UserProfileSidebar = ({
  userProfile,
  actionButton,
}: UserProfileSidebarProps) => {
  return (
    <>
      <Flex justify="space-between">
        <Avatar
          size={'xl'}
          src={userProfile.imageUrl}
          name={userProfile.givenName}
        />
        {actionButton}
      </Flex>
      <Flex direction="column" mt={4}>
        {(userProfile.givenName || userProfile.familyName) && (
          <Text
            as={Link}
            fontSize="xl"
            fontWeight="bold"
            color="blackAlpha.800"
            to={routes.userProfile({ username: userProfile.username })}
          >
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
      </Flex>
    </>
  )
}

export default UserProfileSidebar
