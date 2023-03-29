import { HStack, Text, Avatar, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { format } from 'date-fns'
import type { FindBylineQuery, FindBylineQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import getUserDisplayName from 'src/helpers/getUserDisplayName'

type BylineCellSuccessProps = CellSuccessProps<
  FindBylineQuery,
  FindBylineQueryVariables
> & {
  date?: string
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

export const Success = ({ userProfile, date }: BylineCellSuccessProps) => {
  return (
    <LinkBox as={HStack} spacing={3}>
      <Avatar
        size={'md'}
        src={userProfile.imageUrl}
        name={userProfile?.givenName}
      />
      <Text fontSize="lg" fontWeight="medium" color="blackAlpha.800">
        <LinkOverlay
          as={Link}
          to={routes.userProfile({ username: userProfile.username })}
        >
          {getUserDisplayName(
            userProfile.givenName,
            userProfile.familyName,
            userProfile.username
          )}
        </LinkOverlay>
        {date && (
          <Text as="span" fontWeight="normal">
            {' · ' + format(new Date(date), 'MMM d, yyyy')}
          </Text>
        )}
      </Text>
    </LinkBox>
  )
}
