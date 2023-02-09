import { useAuth } from 'src/auth'
import Header from 'src/components/Header/Header'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'
// import useCompleteSignUpCheck from 'src/hooks/useCompleteSignUpCheck'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const {
    currentUser,
    isAuthenticated,
    loading: isAuthLoading,
    logOut,
  } = useAuth()
  const { data } = useCurrentUserProfile()

  return (
    <>
      <Header
        isAuthenticated={isAuthenticated}
        isAuthLoading={isAuthLoading}
        currentUser={currentUser}
        currentUserProfileData={data}
        logOut={logOut}
      />
      {children}
    </>
  )
}

export default AppLayout
