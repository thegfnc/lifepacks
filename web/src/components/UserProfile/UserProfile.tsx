import { ReactNode } from 'react'

import { Text, Avatar, HStack, Flex, Center, Stack } from '@chakra-ui/react'
import { UserProfile as UserProfileType } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import SocialAccountButton from 'src/components/SocialAccountButton/SocialAccountButton'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import SocialAccount from 'src/types/SocialAccount'

export enum UserProfileLayout {
  Banner = 'Banner',
  Sidebar = 'Sidebar',
}

type UserProfileLayoutPartialProps = {
  userProfile: UserProfileType
  actionButton?: ReactNode
}

type UserProfileProps = UserProfileLayoutPartialProps & {
  layout?: UserProfileLayout
}

const UserProfileBannerLayout = ({
  userProfile,
  actionButton,
}: UserProfileLayoutPartialProps) => {
  const userDisplayName = getUserDisplayName(
    userProfile.givenName,
    userProfile.familyName,
    userProfile.username
  )

  return (
    <Center textAlign="center" flexDirection="column">
      <Center>
        <Avatar
          boxSize={'112px'}
          src={userProfile.imageUrl}
          name={userDisplayName}
        />
      </Center>
      <Stack mt={4} spacing={1}>
        <Text
          as={Link}
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="shorter"
          color="blackAlpha.800"
          to={routes.userProfile({ username: userProfile.username })}
        >
          {userDisplayName}
        </Text>
        {!userDisplayName.endsWith(userProfile.username) && (
          <Text
            as={Link}
            fontSize="md"
            color="blackAlpha.700"
            to={routes.userProfile({ username: userProfile.username })}
          >
            @{userProfile.username}
          </Text>
        )}
      </Stack>
      {userProfile.biography && (
        <Text
          fontSize="md"
          lineHeight={6}
          mt={2}
          color="blackAlpha.800"
          maxW="xl"
        >
          {userProfile.biography}
        </Text>
      )}
      <Center mt={4}>
        <HStack>
          {userProfile.facebookUrl && (
            <SocialAccountButton
              accountType={SocialAccount.Facebook}
              linkUrl={userProfile.facebookUrl}
            />
          )}
          {userProfile.instagramUrl && (
            <SocialAccountButton
              accountType={SocialAccount.Instagram}
              linkUrl={userProfile.instagramUrl}
            />
          )}
          {userProfile.youtubeUrl && (
            <SocialAccountButton
              accountType={SocialAccount.YouTube}
              linkUrl={userProfile.youtubeUrl}
            />
          )}
          {userProfile.twitterUrl && (
            <SocialAccountButton
              accountType={SocialAccount.Twitter}
              linkUrl={userProfile.twitterUrl}
            />
          )}
        </HStack>
      </Center>
      {actionButton && <Center mt={4}>{actionButton}</Center>}
    </Center>
  )
}

const UserProfileSidebarLayout = ({
  userProfile,
  actionButton,
}: UserProfileLayoutPartialProps) => {
  return (
    <>
      <Flex justify="space-between">
        <Avatar
          size={'xl'}
          src={userProfile.imageUrl}
          name={getUserDisplayName(
            userProfile.givenName,
            userProfile.familyName,
            userProfile.username
          )}
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
            {getUserDisplayName(
              userProfile.givenName,
              userProfile.familyName,
              userProfile.username
            )}
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
              accountType={SocialAccount.Facebook}
              linkUrl={userProfile.facebookUrl}
            />
          )}
          {userProfile.instagramUrl && (
            <SocialAccountButton
              accountType={SocialAccount.Instagram}
              linkUrl={userProfile.instagramUrl}
            />
          )}
          {userProfile.youtubeUrl && (
            <SocialAccountButton
              accountType={SocialAccount.YouTube}
              linkUrl={userProfile.youtubeUrl}
            />
          )}
          {userProfile.twitterUrl && (
            <SocialAccountButton
              accountType={SocialAccount.Twitter}
              linkUrl={userProfile.twitterUrl}
            />
          )}
        </HStack>
      </Flex>
    </>
  )
}

const UserProfile = ({
  userProfile,
  actionButton,
  layout = UserProfileLayout.Sidebar,
}: UserProfileProps) => {
  return layout === UserProfileLayout.Sidebar ? (
    <UserProfileSidebarLayout
      userProfile={userProfile}
      actionButton={actionButton}
    />
  ) : (
    <UserProfileBannerLayout
      userProfile={userProfile}
      actionButton={actionButton}
    />
  )
}

export default UserProfile