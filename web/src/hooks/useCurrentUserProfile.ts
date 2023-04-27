import { useEffect, useState } from 'react'

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
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const { currentUser } = useAuth()
  const { pathname } = useLocation()

  const {
    data: queryData,
    loading: queryLoading,
    error: queryError,
    refetch,
  } = useQuery(CURRENT_USER_PROFILE_QUERY)

  useEffect(() => {
    if (queryData) {
      setData(queryData)
      setLoading(false)
    }
    if (queryError) {
      setError(queryError)
      setLoading(false)
    }
  }, [queryData, queryError])

  // If a user hasn't created a user profile yet, redirect them to finish sign up
  if (
    pathname !== routes.completeSignUp() &&
    currentUser &&
    !queryLoading &&
    !queryData.currentUserProfile
  ) {
    navigate(routes.completeSignUp())
  }
  // End if

  return {
    currentUserProfile: data?.currentUserProfile,
    loading: loading || queryLoading,
    error,
    refetch,
  }
}

export default useCurrentUserProfile
