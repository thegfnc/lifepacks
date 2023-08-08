import { useBreakpointValue } from '@chakra-ui/react'
import type { PacksStaffPicksQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PackList from 'src/components/PackList/PackList'

export const QUERY = gql`
  query PacksStaffPicksQuery {
    packsStaffPicks {
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
  packsStaffPicks,
}: CellSuccessProps<PacksStaffPicksQuery>) => {
  const layout = useBreakpointValue<'grid' | 'list'>({
    base: 'grid',
    md: 'list',
  })

  return <PackList packs={packsStaffPicks} showByline={true} layout={layout} />
}
