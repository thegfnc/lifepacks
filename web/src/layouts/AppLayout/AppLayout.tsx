import { StrictMode, useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import Footer from 'src/components/Footer/Footer'
import Header from 'src/components/Header/Header'
import HeaderCtaContext from 'src/contexts/HeaderCtaContext'
import getLogoCard from 'src/helpers/getLogoCard'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [HeaderCtaComponent, setHeaderCtaComponent] = useState(null)

  return (
    <StrictMode>
      <MetaTags
        title="Make guides for the products you swear by"
        description="Publish product recommendations just like the professionals."
        ogType="website"
        ogContentUrl={getLogoCard({ color: 'random' })}
      />

      <HeaderCtaContext.Provider value={setHeaderCtaComponent}>
        <Header ctaComponent={HeaderCtaComponent} />
        <main>{children}</main>
        <Footer />
      </HeaderCtaContext.Provider>
    </StrictMode>
  )
}

export default AppLayout
