import {
  HStack,
  Text,
  Avatar,
  LinkBox,
  LinkOverlay,
  Stack,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import type { FindBylineQuery, FindBylineQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import { trackSelectUserProfile } from 'src/lib/analytics'

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
        src={getImageUrlWithTransform({
          src: userProfile.imageUrl,
          transform: { width: 96, height: 96, resize: 'cover' },
        })}
        name={getUserDisplayName(
          userProfile.givenName,
          userProfile.familyName,
          userProfile.username
        )}
      />
      <Stack spacing={0}>
        <Text fontSize="md" fontWeight="medium" color="blackAlpha.800">
          <LinkOverlay
            as={Link}
            to={routes.userProfile({ username: userProfile.username })}
            onClick={() => trackSelectUserProfile(userProfile.username)}
          >
            {getUserDisplayName(
              userProfile.givenName,
              userProfile.familyName,
              userProfile.username
            )}
          </LinkOverlay>
        </Text>
        <Text fontSize="md" color="blackAlpha.600">
          {date && (
            <Text as="span" fontWeight="normal">
              {format(new Date(date), 'MMM d, yyyy')}
            </Text>
          )}
        </Text>
      </Stack>
    </LinkBox>
  )
}
