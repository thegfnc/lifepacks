import { ReactNode } from 'react'

import {
  Text,
  Avatar,
  HStack,
  Flex,
  Center,
  Stack,
  Link as ChakraLink,
  AvatarBadge,
  Box,
} from '@chakra-ui/react'
import { MdVerified } from 'react-icons/md'
import { UserProfile as UserProfileType } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import SocialAccountButton from 'src/components/SocialAccountButton/SocialAccountButton'
import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import { trackSelectUserProfile } from 'src/lib/analytics'
import SocialAccount from 'src/types/SocialAccount'

import RichTextStyleWrapper from '../RichTextStyleWrapper/RichTextStyleWrapper'

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
  const linkProps = {
    as: Link,
    to: routes.userProfile({ username: userProfile.username }),
    onClick: () => trackSelectUserProfile(userProfile.username),
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
          src={getImageUrlWithTransform({
            src: userProfile.imageUrl,
            transform: { width: 256, height: 256, resize: 'cover' },
          })}
          name={userDisplayName}
          {...linkProps}
        >
          {userProfile.verified && (
            <AvatarBadge
              color="purple.500"
              bgColor="beige.500"
              border="none"
              boxSize=".75em"
              bottom={1}
              right={1}
            >
              <MdVerified size=".6em" />
            </AvatarBadge>
          )}
        </Avatar>
      </Center>
      <Stack mt={4} spacing={1}>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          lineHeight="shorter"
          color="blackAlpha.800"
          {...linkProps}
        >
          {userDisplayName}
        </Text>
        {!userDisplayName.endsWith(userProfile.username) && (
          <Text fontSize="md" color="blackAlpha.700" {...linkProps}>
            @{userProfile.username}
          </Text>
        )}
      </Stack>
      {userProfile.biography && (
        <RichTextStyleWrapper
          fontSize="md"
          lineHeight={6}
          mt={2}
          color="blackAlpha.800"
          maxW="xl"
        >
          <Box dangerouslySetInnerHTML={{ __html: userProfile.biography }} />
        </RichTextStyleWrapper>
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
}: UserProfileLayoutPartialProps) => {
  const linkProps = {
    as: Link,
    to: routes.userProfile({ username: userProfile.username }),
    onClick: () => trackSelectUserProfile(userProfile.username),
  }

  return (
    <>
      <Flex justify="space-between">
        <Avatar
          size={'xl'}
          src={getImageUrlWithTransform({
            src: userProfile.imageUrl,
            transform: { width: 192, height: 192, resize: 'cover' },
          })}
          name={getUserDisplayName(
            userProfile.givenName,
            userProfile.familyName,
            userProfile.username
          )}
          {...linkProps}
        >
          {userProfile.verified && (
            <AvatarBadge
              color="purple.500"
              bgColor="beige.500"
              border="none"
              boxSize=".75em"
              bottom={1}
              right={1}
            >
              <MdVerified size=".6em" />
            </AvatarBadge>
          )}
        </Avatar>
        {actionButton}
      </Flex>
      <Flex direction="column" mt={4}>
        {(userProfile.givenName || userProfile.familyName) && (
          <Text
            fontSize="21px"
            lineHeight="28px"
            fontWeight="medium"
            color="blackAlpha.800"
            {...linkProps}
          >
            {getUserDisplayName(
              userProfile.givenName,
              userProfile.familyName,
              userProfile.username
            )}
          </Text>
        )}
        <Text
          fontSize="14px"
          lineHeight="20px"
          color="blackAlpha.600"
          {...linkProps}
        >
          @{userProfile.username}
        </Text>
        {userProfile.biography && (
          <RichTextStyleWrapper
            fontSize="14px"
            lineHeight="20px"
            mt={2}
            color="blackAlpha.800"
          >
            <Box dangerouslySetInnerHTML={{ __html: userProfile.biography }} />
          </RichTextStyleWrapper>
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
        <Text
          mt={6}
          pt={6}
          borderTop="1px solid"
          borderColor="blackAlpha.100"
          color="blackAlpha.700"
          fontSize="xs"
        >
          Support our contributors! When you buy through their links they may
          earn a commission.{' '}
          <ChakraLink as={Link} to={routes.affiliateLinks101()}>
            Learn more
          </ChakraLink>
        </Text>
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
