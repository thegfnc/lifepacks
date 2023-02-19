import { GetCurrentUserProfile } from 'types/graphql'

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

export default function useCurrentUserProfile(): QueryOperationResult<GetCurrentUserProfile> {
  const { currentUser } = useAuth()
  const { pathname } = useLocation()
  const query = useQuery(CURRENT_USER_PROFILE_QUERY)

  // If a user hasn't created a user profile yet, redirect them to finish sign up
  if (
    pathname !== routes.completeSignUp() &&
    currentUser &&
    !query.loading &&
    !query.data.currentUserProfile
  ) {
    navigate(routes.completeSignUp())
  }
  // End if

  return query
}
