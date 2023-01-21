import { useAuth } from '@redwoodjs/auth'
import { navigate, routes, useLocation } from '@redwoodjs/router'

import Header from 'src/components/Header/Header'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const {
    isAuthenticated,
    loading: isAuthLoading,
    currentUser,
    logOut,
  } = useAuth()

  // If a user hasn't created a user profile yet, redirect them to finish sign up
  const { pathname } = useLocation()
  const { data, loading } = useCurrentUserProfile()
  if (
    pathname !== '/complete-sign-up' &&
    currentUser &&
    !loading &&
    !data.currentUserProfile
  ) {
    navigate(routes.completeSignUp())
  }
  // End if

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        isAuthLoading={isAuthLoading}
        currentUser={currentUser}
        logOut={logOut}
      />
      {children}
    </>
  )
}

export default AppLayout
