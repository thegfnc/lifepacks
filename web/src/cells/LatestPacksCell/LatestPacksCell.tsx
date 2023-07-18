import type { LatestPacksQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import PackList from 'src/components/PackList/PackList'

export const QUERY = gql`
  query LatestPacksQuery {
    latestPacks {
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
  latestPacks,
}: CellSuccessProps<LatestPacksQuery>) => {
  return <PackList packs={latestPacks} showByline={true} layout="list" />
}
