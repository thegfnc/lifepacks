import { useQuery } from '@redwoodjs/web'

export const CURRENT_USER_PROFILE_QUERY = gql`
  query CurrentUserProfile {
    currentUserProfile {
      id
      username
      givenName
      familyName
    }
  }
`

export default function useCurrentUserProfile() {
  return useQuery(CURRENT_USER_PROFILE_QUERY)
}
