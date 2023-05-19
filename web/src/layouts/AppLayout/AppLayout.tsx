import { useEffect, useState } from 'react'

import { useAuth } from 'src/auth'
import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import HeaderCtaContext from 'src/contexts/HeaderCtaContext'
import Sentry from 'src/lib/sentry'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { currentUser } = useAuth()
  const [HeaderCtaComponent, setHeaderCtaComponent] = useState(null)

  useEffect(
    () => Sentry.setUser({ id: currentUser.sub, email: currentUser.email }),
    [currentUser]
  )

  return (
    <HeaderCtaContext.Provider value={setHeaderCtaComponent}>
      <Header ctaComponent={HeaderCtaComponent} />
      <main>{children}</main>
      <Footer />
    </HeaderCtaContext.Provider>
  )
}

export default AppLayout
