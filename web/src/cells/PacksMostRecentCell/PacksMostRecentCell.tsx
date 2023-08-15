import { useState } from 'react'

import { Button, Center, Show, useBreakpointValue } from '@chakra-ui/react'
import type { PascksMostRecentQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PackList from 'src/components/PackList/PackList'

export const QUERY = gql`
  query PascksMostRecentQuery($cursor: Int, $take: Int) {
    packsMostRecent(cursor: $cursor, take: $take) {
      id
      slug
      title
      createdAt
      packItems {
        id
        title
        imageUrl
      }
      userProfile {
        username
        givenName
        familyName
        imageUrl
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  packsMostRecent,
  queryResult,
}: CellSuccessProps<PascksMostRecentQuery>) => {
  // for some reason the `updating` prop in Success isn't updating during
  // fetchMore, so I'm using this state hook as a workaround for now
  const [isUpdating, setIsUpdating] = useState(false)
  const [isEndOfList, setIsEndOfList] = useState(false)
  const layout = useBreakpointValue<'grid' | 'list'>({
    base: 'grid',
    md: 'list',
  })

  const cursor = packsMostRecent.at(-1).id
  const take = 10

  const onFetchMore = () => {
    setIsUpdating(true)

    queryResult.fetchMore({
      query: QUERY,
      variables: {
        cursor,
        take,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        if (fetchMoreResult.packsMostRecent.length < take) {
          setIsEndOfList(true)
        }

        setIsUpdating(false)

        return {
          packsMostRecent: [
            ...previousResult.packsMostRecent,
            ...fetchMoreResult.packsMostRecent,
          ],
        }
      },
    })
  }

  return (
    <>
      <PackList packs={packsMostRecent} showByline={true} layout={layout} />
      {!isEndOfList && (
        <Show above="lg">
          <Center mt={6}>
            <Button
              variant="secondary"
              size="lg"
              onClick={onFetchMore}
              isLoading={isUpdating}
            >
              Load more
            </Button>
          </Center>
        </Show>
      )}
    </>
  )
}
