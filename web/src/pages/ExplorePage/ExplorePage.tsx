import { Box, Heading } from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LatestPacksCell from 'src/cells/LatestPacksCell'
import PageContainer from 'src/components/PageContainer/PageContainer'

const ExplorePage = () => {
  return (
    <>
      <MetaTags
        title={`Explore Packs`}
        description={`Explore all of the packs that Lifepacks has to offer.`}
        ogType="website"
        ogUrl={`https://www.lifepacks.co${routes.explore()}`}
      />

      <PageContainer>
        <Heading size="2xl">Explore Packs</Heading>
        <Box mt={8}>
          <LatestPacksCell />
        </Box>
      </PageContainer>
    </>
  )
}

export default ExplorePage
