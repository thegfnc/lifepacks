import { useAuth } from '@redwoodjs/auth'
import { navigate, routes, useLocation } from '@redwoodjs/router'

import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

// If a user hasn't created a user profile yet, redirect them to finish sign up

const useCompleteSignUpCheck = () => {
  const { currentUser } = useAuth()
  const { pathname } = useLocation()
  const { data, loading } = useCurrentUserProfile()

  if (
    pathname !== routes.completeSignUp() &&
    currentUser &&
    !loading &&
    !data.currentUserProfile
  ) {
    navigate(routes.completeSignUp())
  }

  return null
}

export default useCompleteSignUpCheck
