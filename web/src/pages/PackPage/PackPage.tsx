import { Heading } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer/PageContainer'

const PackPage = () => {
  return (
    <>
      <MetaTags title="Pack" description="Pack page" />

      <PageContainer>
        <Heading>Pack Page</Heading>
        <p>
          Find me in <code>./web/src/pages/PackPage/PackPage.tsx</code>
        </p>
        <p>
          My default route is named <code>pack</code>, link to me with `
          <Link to={routes.pack({ slug: 'wow' })}>Pack</Link>`
        </p>
      </PageContainer>
    </>
  )
}

export default PackPage
