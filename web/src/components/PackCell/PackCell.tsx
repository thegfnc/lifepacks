import { EditIcon } from '@chakra-ui/icons'
import { Button, Flex, Heading, HStack, Stack, Text } from '@chakra-ui/react'
import type { FindPackQuery, FindPackQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar/Avatar'
import PackItem from 'src/components/PackItem/PackItem'

export const QUERY = gql`
  query FindPackQuery($username: String!, $slug: String!) {
    pack(username: $username, slug: $slug) {
      id
      title
      description
      packItems {
        id
        imageUrl
        purchaseUrl
        title
        description
      }
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
  pack,
}: CellSuccessProps<FindPackQuery, FindPackQueryVariables>) => {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <HStack spacing={3}>
          <Avatar
            size={'md'}
            src={
              'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
            }
          />
          <Text fontSize="lg">Marcia Espowood · Jan 8</Text>
        </HStack>
        <Button
          as={Link}
          leftIcon={<EditIcon />}
          variant="outline"
          to={routes.editPack({ id: 1 })}
        >
          Edit Pack
        </Button>
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
            key={pack.id}
            imageUrl={packItem.imageUrl}
            purchaseUrl={packItem.purchaseUrl}
            title={packItem.title}
            description={packItem.description}
          />
        ))}
        {/* <PackItem
          imageUrl="https://i5.walmartimages.com/asr/e2eaf2d6-392e-4703-8338-d9b113e0e124.85c6678244824a2e565fa624c03c2301.jpeg"
          title="Coleman Classic Two-Burner Propane Stove"
          description="Once you have your sleeping arrangements and apparel squared
      away, the experts say you’ll want to think about your camp
      kitchen. While some campgrounds have grills at each site, a
      lot do not, so if you’re planning for a few days (or more),
      you’ll probably want to bring your own portable stove."
        /> */}
      </Stack>
    </>
  )
}
