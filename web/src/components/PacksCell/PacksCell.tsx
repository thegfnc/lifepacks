import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link as ChakraLink,
  Square,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import type { PacksQuery } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

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
            {data?.currentUserProfile?.givenName ||
              data?.currentUserProfile?.username}{' '}
            hasn&apos;t created a pack yet.
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
  return (
    <Stack>
      {packs.map((pack) => {
        return (
          <Flex
            key={pack.id}
            py={6}
            borderBottomWidth="1px"
            borderBottomColor="blackAlpha.200"
          >
            <Square size="180px" borderRadius="3xl">
              <Image
                src={pack.packItems[0]?.imageUrl}
                boxSize="180px"
                fit="contain"
                alt={pack.packItems[0]?.title}
              />
            </Square>
            <Flex ml={8} alignItems="center">
              <Box>
                <Text>{format(new Date(pack.createdAt), 'MMM d')}</Text>
                <Box mt={2}>
                  <ChakraLink
                    as={Link}
                    to={routes.pack({
                      username,
                      slug: pack.slug,
                    })}
                    fontSize="xl"
                    lineHeight={7}
                    fontWeight="bold"
                  >
                    {pack.title}
                  </ChakraLink>
                </Box>
                <Tag size="md" mt={4}>
                  {pack.packItems.length}{' '}
                  {pack.packItems.length === 1 ? 'Item' : 'Items'}
                </Tag>
              </Box>
            </Flex>
          </Flex>
        )
      })}
    </Stack>
  )
}
