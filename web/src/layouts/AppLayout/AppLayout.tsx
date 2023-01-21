import { useAuth } from '@redwoodjs/auth'

import Header from 'src/components/Header/Header'

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
