import Header from 'src/components/Header/Header'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default AppLayout
