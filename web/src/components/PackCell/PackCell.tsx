import { EditIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import type { FindPackQuery, FindPackQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import BylineCell, { Mode } from 'src/components/BylineCell/BylineCell'
import PackItem from 'src/components/PackItem/PackItem'

interface PackCellSuccessProps
  extends CellSuccessProps<FindPackQuery, FindPackQueryVariables> {
  username: string
}

export const QUERY = gql`
  query FindPackQuery($username: String!, $slug: String!) {
    pack(username: $username, slug: $slug) {
      id
      title
      description
      createdAt
      packItems {
        id
        imageUrl
        purchaseUrl
        title
        description
      }
    }
    currentUserProfile {
      username
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPackQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  username,
  pack,
  currentUserProfile,
}: PackCellSuccessProps) => {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <BylineCell
          username={username}
          mode={Mode.Pack}
          date={pack.createdAt}
        />

        {currentUserProfile?.username === username && (
          <Button
            as={Link}
            leftIcon={<EditIcon />}
            variant="outline"
            to={routes.editPack({ id: pack.id })}
          >
            Edit Pack
          </Button>
        )}
      </Flex>
      <Heading
        as="h1"
        fontSize="5xl"
        lineHeight="none"
        fontWeight="extrabold"
        marginTop={6}
      >
        {pack.title}
      </Heading>
      <Text fontSize="xl" lineHeight={7} marginTop={8}>
        {pack.description}
      </Text>
      <Stack spacing={6} marginTop={10}>
        {pack.packItems.map((packItem) => (
          <PackItem
            key={packItem.id}
            imageUrl={packItem.imageUrl}
            purchaseUrl={packItem.purchaseUrl}
            title={packItem.title}
            description={packItem.description}
          />
        ))}
      </Stack>
    </>
  )
}
