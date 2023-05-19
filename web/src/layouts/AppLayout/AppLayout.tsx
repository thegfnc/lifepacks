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
  const [HeaderCtaComponent, setHeaderCtaComponent] = useState(null)

  return (
    <HeaderCtaContext.Provider value={setHeaderCtaComponent}>
      <Header ctaComponent={HeaderCtaComponent} />
      <main>{children}</main>
      <Footer />
    </HeaderCtaContext.Provider>
  )
}

export default AppLayout
