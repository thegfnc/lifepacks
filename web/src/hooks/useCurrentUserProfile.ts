import { navigate, routes, useLocation } from '@redwoodjs/router'
import { useQuery } from '@redwoodjs/web'

import { useAuth } from 'src/auth'

export const CURRENT_USER_PROFILE_QUERY = gql`
  query GetCurrentUserProfile {
    currentUserProfile {
      id
      userId
      username
      givenName
      familyName
      biography
      imageUrl
      facebookUrl
      instagramUrl
      youtubeUrl
      createdAt
      updatedAt
    }
  }
`

function useCurrentUserProfile() {
  const { currentUser } = useAuth()
  const { pathname } = useLocation()

  const { data, loading, error, refetch } = useQuery(CURRENT_USER_PROFILE_QUERY)

  // If a user hasn't created a user profile yet, redirect them to finish sign up
  if (
    pathname !== routes.completeSignUp() &&
    currentUser &&
    !loading &&
    data &&
    !data.currentUserProfile
  ) {
    navigate(routes.completeSignUp())
  }
  // End if

  return {
    currentUserProfile: data?.currentUserProfile,
    loading,
    error,
    refetch,
  }
}

export default useCurrentUserProfile
