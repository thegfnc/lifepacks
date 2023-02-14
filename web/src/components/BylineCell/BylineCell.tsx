import { HStack, Stack, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import type { FindBylineQuery, FindBylineQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Avatar from '../Avatar/Avatar'

export enum Mode {
  User,
  Pack,
}

export const QUERY = gql`
  query FindBylineQuery($username: String!) {
    userProfile(username: $username) {
      username
      givenName
      familyName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindBylineQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  userProfile,
  mode,
  date,
}: CellSuccessProps<FindBylineQuery, FindBylineQueryVariables>) => {
  return mode === Mode.Pack ? (
    <HStack spacing={3}>
      <Avatar
        size={'md'}
        src={
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
        }
      />
      <Text fontSize="lg">
        {userProfile.givenName} {userProfile.familyName} ·{' '}
        {format(new Date(date), 'MMM d')}
      </Text>
    </HStack>
  ) : (
    <HStack spacing={3}>
      <Avatar
        size={'md'}
        src={
          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
        }
      />
      <Stack spacing={0}>
        <Text fontSize="lg" lineHeight={7} fontWeight="bold">
          {userProfile.givenName} {userProfile.familyName}
        </Text>
        <Text fontSize="sm" lineHeight={5} color="blackAlpha.700">
          @{userProfile.username}
        </Text>
      </Stack>
    </HStack>
  )
}
