import { useState } from 'react'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import HeaderCtaContext from 'src/contexts/HeaderCtaContext'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [HeaderCtaComponent, setHeaderCtaComponent] = useState(null)

  return (
    <HeaderCtaContext.Provider
      value={[HeaderCtaComponent, setHeaderCtaComponent]}
    >
      <Header />
      {children}
      <Footer />
    </HeaderCtaContext.Provider>
  )
}

export default AppLayout
