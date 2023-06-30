import { StrictMode, useState } from 'react'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import HeaderCtaContext from 'src/contexts/HeaderCtaContext'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [HeaderCtaComponent, setHeaderCtaComponent] = useState(null)

  return (
    <StrictMode>
      <HeaderCtaContext.Provider value={setHeaderCtaComponent}>
        <Header ctaComponent={HeaderCtaComponent} />
        <main>{children}</main>
        <Footer />
      </HeaderCtaContext.Provider>
    </StrictMode>
  )
}

export default AppLayout
