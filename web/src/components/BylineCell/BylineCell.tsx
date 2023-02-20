import { HStack, Stack, Text, Avatar } from '@chakra-ui/react'
import { format } from 'date-fns'
import type { FindBylineQuery, FindBylineQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export enum Mode {
  User,
  Pack,
}

interface BylineCellSuccessProps
  extends CellSuccessProps<FindBylineQuery, FindBylineQueryVariables> {
  mode: Mode
  date: string
}

export const QUERY = gql`
  query FindBylineQuery($username: String!) {
    userProfile(username: $username) {
      username
      imageUrl
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
}: BylineCellSuccessProps) => {
  return mode === Mode.Pack ? (
    <HStack spacing={3}>
      <Avatar
        size={'md'}
        src={userProfile.imageUrl}
        name={userProfile?.givenName}
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
        src={userProfile.imageUrl}
        name={userProfile.givenName}
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
