import {
  Box,
  Button,
  CloseButton,
  Grid,
  GridItem,
  Heading,
  Hide,
  Image,
  Show,
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
        minHeight={{ base: 'auto', md: BANNER_HEIGHT }}
        borderRadius="3xl"
        position="relative"
      >
        <CloseButton
          position="absolute"
          top={{ base: 4, md: 6 }}
          right={{ base: 4, md: 6 }}
          onClick={handleDismissBanner}
        />
        <Grid
          templateColumns={{
            base: 'repeat(1, minmax(0, 1fr))',
            md: 'repeat(2, minmax(0, 1fr))',
          }}
        >
          <GridItem
            px={{ base: 6, md: 10 }}
            py={{ base: 6, md: 0 }}
            display="flex"
            alignItems="center"
          >
            <Box>
              <Heading
                color="marketing.deepBlue"
                fontSize={{ base: 'xl', md: '2xl', xl: '3xl' }}
              >
                It pays to have great taste.
              </Heading>
              <Text
                color="marketing.deepBlue"
                mt={3}
                fontSize={{ base: 'sm', md: 'md' }}
              >
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
          <Show above="md">
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
          </Show>
        </Grid>
      </Box>
    </PageContainer>
  )
}

export default AnnouncementBanner
