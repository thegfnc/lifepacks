import { Box, Button, Center, Heading, Text } from '@chakra-ui/react'
import type { PacksQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

import Packs from '../Packs/Packs'

type PacksCellProps = CellSuccessProps<PacksQuery> & {
  username: string
}

export const QUERY = gql`
  query PacksQuery($username: String!) {
    packs(username: $username) {
      id
      slug
      title
      createdAt
      packItems {
        title
        imageUrl
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = ({ username }) => {
  const { data } = useCurrentUserProfile()
  const isCurrentUser = username === data?.currentUserProfile?.username

  return (
    <Center
      h="2xl"
      borderWidth="1px"
      borderRadius="3xl"
      borderStyle="dashed"
      borderColor="gray.400"
    >
      {isCurrentUser ? (
        <Box textAlign="center">
          <Heading
            fontSize="xl"
            lineHeight={7}
            fontWeight="bold"
            color="gray.700"
          >
            Create your first pack!
          </Heading>
          <Text fontSize="md" lineHeight={6} color="gray.500">
            Make a page endorsing the products you swear by.
          </Text>
          <Button colorScheme="teal" mt={4} as={Link} to={routes.newPack()}>
            Create Pack
          </Button>
        </Box>
      ) : (
        <Box textAlign="center">
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
          <Button colorScheme="teal" mt={4} as={Link} to={routes.home()}>
            Browse Other Packs
          </Button>
        </Box>
      )}
    </Center>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ username, packs }: PacksCellProps) => {
  return <Packs username={username} packs={packs} />
}
