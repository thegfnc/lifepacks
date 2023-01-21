import { useAuth } from '@redwoodjs/auth'

import Header from 'src/components/Header/Header'
import useCompleteSignUpCheck from 'src/hooks/useCompleteSignUpCheck'

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

  useCompleteSignUpCheck()

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
