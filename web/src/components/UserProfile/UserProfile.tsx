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
  disableLinks?: boolean
}

type UserProfileProps = UserProfileLayoutPartialProps & {
  layout?: UserProfileLayout
}

const UserProfileBannerLayout = ({
  userProfile,
  actionButton,
  disableLinks,
}: UserProfileLayoutPartialProps) => {
  const linkProps = {
    as: Link,
    to: routes.userProfile({ username: userProfile.username }),
  }

  const userDisplayName = getUserDisplayName(
    userProfile.givenName,
    userProfile.familyName,
    userProfile.username
  )

  return (
    <Center textAlign="center" flexDirection="column">
      <Center>
        <Avatar
          size={'2xl'}
          src={userProfile.imageUrl}
          name={userDisplayName}
        />
      </Center>
      <Stack mt={4} spacing={1}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="shorter"
          color="blackAlpha.800"
          {...(disableLinks ? {} : linkProps)}
        >
          {userDisplayName}
        </Text>
        {!userDisplayName.endsWith(userProfile.username) && (
          <Text
            fontSize="md"
            color="blackAlpha.700"
            {...(disableLinks ? {} : linkProps)}
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
          {userProfile.youtubeUrl && (
            <SocialAccountButton
              accountType={SocialAccount.YouTube}
              linkUrl={userProfile.youtubeUrl}
            />
          )}
          {userProfile.instagramUrl && (
            <SocialAccountButton
              accountType={SocialAccount.Instagram}
              linkUrl={userProfile.instagramUrl}
            />
          )}
          {userProfile.twitterUrl && (
            <SocialAccountButton
              accountType={SocialAccount.Twitter}
              linkUrl={userProfile.twitterUrl}
            />
          )}
          {userProfile.facebookUrl && (
            <SocialAccountButton
              accountType={SocialAccount.Facebook}
              linkUrl={userProfile.facebookUrl}
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
  disableLinks,
}: UserProfileLayoutPartialProps) => {
  const linkProps = {
    as: Link,
    to: routes.userProfile({ username: userProfile.username }),
  }

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
            fontSize="xl"
            fontWeight="bold"
            color="blackAlpha.800"
            {...(disableLinks ? {} : linkProps)}
          >
            {getUserDisplayName(
              userProfile.givenName,
              userProfile.familyName,
              userProfile.username
            )}
          </Text>
        )}
        <Text
          fontSize="md"
          color="blackAlpha.700"
          {...(disableLinks ? {} : linkProps)}
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
  disableLinks = false,
  layout = UserProfileLayout.Sidebar,
}: UserProfileProps) => {
  return layout === UserProfileLayout.Sidebar ? (
    <UserProfileSidebarLayout
      userProfile={userProfile}
      actionButton={actionButton}
      disableLinks={disableLinks}
    />
  ) : (
    <UserProfileBannerLayout
      userProfile={userProfile}
      actionButton={actionButton}
      disableLinks={disableLinks}
    />
  )
}

export default UserProfile
