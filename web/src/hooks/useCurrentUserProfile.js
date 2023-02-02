import { navigate, routes, useLocation } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

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
  const { currentUser } = useAuth()
  const { pathname } = useLocation()
  const { data, loading } = useQuery(CURRENT_USER_PROFILE_QUERY)

  // If a user hasn't created a user profile yet, redirect them to finish sign up
  if (
    pathname !== routes.completeSignUp() &&
    currentUser &&
    !loading &&
    !data.currentUserProfile
  ) {
    navigate(routes.completeSignUp())
    return {}
  }
  // End if

  return { data, loading }
}
