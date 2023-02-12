import { Stack, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import Avatar from 'src/components/Avatar/Avatar'
import SocialAccountButton, {
  SocialAccountType,
} from 'src/components/SocialAccountButton/SocialAccountButton'

type UserProfileSidebarProps = {
  username: string
}

const UserProfileSidebar = ({ username }: UserProfileSidebarProps) => {
  return (
    <>
      <Avatar
        size={'xl'}
        src={
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
        }
      />
      <Text
        as="h2"
        fontSize="lg"
        fontWeight="bold"
        pt={4}
        color="blackAlpha.900"
      >
        Marcia Espowood
      </Text>
      <Text
        as={Link}
        fontSize="sm"
        lineHeight={5}
        color="blackAlpha.700"
        to={routes.user({ username })}
      >
        @{username}
      </Text>
      <Text fontSize="md" lineHeight={6} pt={2}>
        Marcia is a seasoned outdoorswoman who lives for exploring the
        wilderness, experiencing new adventures, and preserving the beauty of
        nature.
      </Text>
      <Stack mt={6}>
        <SocialAccountButton
          accountType={SocialAccountType.YouTube}
          username="@OutdoorsmanChannel"
          linkUrl="https://www.youtube.com/@outdoorsmanchannel"
        />
        <SocialAccountButton
          accountType={SocialAccountType.Instagram}
          username="@Outdoorsman"
          linkUrl="https://www.instagram.com/outdoorsman/"
        />
      </Stack>
    </>
  )
}

export default UserProfileSidebar
