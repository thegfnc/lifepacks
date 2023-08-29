import {
  Box,
  Button,
  CloseButton,
  Flex,
  Heading,
  Image,
  Show,
  Text,
  useBoolean,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import PageContainer from '../PageContainer/PageContainer'

import announcementBannerIcons from './announcement-banner-icons.png'

const BANNER_HEIGHT = '245'
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
      <Flex
        background="purple.50"
        maxHeight={BANNER_HEIGHT}
        borderRadius="3xl"
        position="relative"
        border="1px solid"
        borderColor="blackAlpha.100"
      >
        <CloseButton
          position="absolute"
          top={{ base: 3, xl: 6 }}
          right={{ base: 3, xl: 6 }}
          onClick={handleDismissBanner}
          borderRadius="full"
        />
        <Flex display="flex" alignItems="center" justify="space-between">
          <Box
            px={{ base: 6, lg: 10 }}
            py={{ base: 6, md: 8, lg: 10 }}
            maxWidth={{ base: '100%', md: '46%', lg: '50%' }}
          >
            <Heading
              color="marketing.deepBlue"
              fontSize={{ base: 'xl', md: '22px', lg: '28px', xl: '36px' }}
              lineHeight={{ base: '1', xl: '40px' }}
              fontWeight="extrabold"
              letterSpacing="-0.72px"
            >
              It pays to have great taste.
            </Heading>
            <Text
              color="marketing.deepBlue"
              mt={3}
              fontSize={{ base: 'sm', lg: 'md' }}
            >
              Create Packs with affiliate links and earn commission when someone
              buys one of your recommendations.
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
          <Show above="md">
            <Box height="100%" pr={{ base: '30px', lg: '50px', xl: '100px' }}>
              <Image
                src={announcementBannerIcons}
                fit="contain"
                height="100%"
                justifySelf="flex-end"
              />
            </Box>
          </Show>
        </Flex>
      </Flex>
    </PageContainer>
  )
}

export default AnnouncementBanner
