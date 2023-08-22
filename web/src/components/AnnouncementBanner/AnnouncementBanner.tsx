import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import PageContainer from '../PageContainer/PageContainer'

import announcementBannerIcons from './announcement-banner-icons.png'

const BANNER_HEIGHT = '245px'

const AnnouncementBanner = () => {
  return (
    <PageContainer pt={10} pb={0} minHeight="none">
      <Box background="purple.50" height={BANNER_HEIGHT} borderRadius="3xl">
        <Grid templateColumns="repeat(2, minmax(0, 1fr))">
          <GridItem px={10} display="flex" alignItems="center">
            <Box>
              <Heading color="marketing.deepBlue">
                It pays to have great taste.
              </Heading>
              <Text color="marketing.deepBlue" mt={3}>
                Create Packs with affiliate links and earn commission when
                someone buys one of your recommendations.
              </Text>
              <Button
                as={Link}
                variant="primary"
                size="lg"
                mt={4}
                to={routes.about()}
              >
                Learn more
              </Button>
            </Box>
          </GridItem>
          <GridItem
            maxHeight={BANNER_HEIGHT}
            display="flex"
            justifyContent="flex-end"
            pr="100px"
          >
            <Image
              src={announcementBannerIcons}
              height="100%"
              fit="contain"
              maxH="full"
              maxW="full"
            />
          </GridItem>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default AnnouncementBanner
