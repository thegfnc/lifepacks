import {
  Box,
  Button,
  CloseButton,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useBoolean,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import PageContainer from '../PageContainer/PageContainer'

import announcementBannerIcons from './announcement-banner-icons.png'

const BANNER_HEIGHT = '245px'
const BANNER_VERSION = 1 // bump this each time you want to show the banner again
const BANNER_LOCAL_STORAGE_KEY = 'announcement-banner-dismissed-version'

const AnnouncementBanner = () => {
  const [hasJustDismissedBanner, setHasJustDismissedBanner] = useBoolean(false)
  const hasAlreadyDismissedBanner =
    localStorage.getItem(BANNER_LOCAL_STORAGE_KEY) === BANNER_VERSION.toString()

  const hasDismissedBanner = hasJustDismissedBanner || hasAlreadyDismissedBanner

  const handleDismissBanner = () => {
    setHasJustDismissedBanner.on()
    localStorage.setItem(BANNER_LOCAL_STORAGE_KEY, BANNER_VERSION.toString())
  }

  return hasDismissedBanner ? null : (
    <PageContainer pt={10} pb={0} minHeight="none">
      <Box
        background="purple.50"
        height={BANNER_HEIGHT}
        borderRadius="3xl"
        position="relative"
      >
        <CloseButton
          position="absolute"
          top={6}
          right={6}
          onClick={handleDismissBanner}
        />
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
