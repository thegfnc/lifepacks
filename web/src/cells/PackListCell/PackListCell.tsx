import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import type { PackListQuery, PackListQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PackList from 'src/components/PackList/PackList'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type PackListCellProps = CellSuccessProps<
  PackListQuery,
  PackListQueryVariables
> & {
  username: string
}

export const QUERY = gql`
  query PackListQuery($username: String!) {
    packs(username: $username) {
      id
      slug
      title
      createdAt
      packItems {
        title
        imageUrl
      }
      userProfile {
        username
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ username }) => {
  const { data } = useCurrentUserProfile()
  const isCurrentUser = username === data?.currentUserProfile?.username

  return (
    <Center borderRadius="3xl" bg="blackAlpha.50" p={12}>
      <Box textAlign="center">
        {isCurrentUser ? (
          <>
            <Heading
              fontSize="xl"
              lineHeight={7}
              fontWeight="bold"
              color="gray.700"
            >
              Create your first pack!
            </Heading>
            <Text fontSize="md" lineHeight={6} color="gray.500">
              Recommend products you swear by.
            </Text>
            <Button colorScheme="purple" mt={4} as={Link} to={routes.newPack()}>
              Create Pack
            </Button>
          </>
        ) : (
          <>
            <Heading
              fontSize="xl"
              lineHeight={7}
              fontWeight="bold"
              color="gray.700"
            >
              {data?.currentUserProfile?.givenName || username} hasn&apos;t
              created a pack yet.
            </Heading>
            <Text fontSize="md" lineHeight={6} color="gray.500">
              Check back soon for products they swear by.
            </Text>
            <Button colorScheme="purple" mt={4} as={Link} to={routes.home()}>
              Browse Other Packs
            </Button>
          </>
        )}
      </Box>
    </Center>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ packs }: PackListCellProps) => {
  return <PackList packs={packs} />
}
