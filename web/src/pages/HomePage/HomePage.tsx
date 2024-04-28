import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Balancer } from 'react-wrap-balancer'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import PacksMostRecentCell from 'src/cells/PacksMostRecentCell'
import PacksStaffPicksCell from 'src/cells/PacksStaffPicksCell'
import UserProfilesFeaturedCell from 'src/cells/UserProfilesFeaturedCell'
import AnnouncementBanner from 'src/components/AnnouncementBanner/AnnouncementBanner'
import { HEADER_HEIGHT } from 'src/components/Header/Header'
import PackItem from 'src/components/PackItem/PackItem'
import PageContainer from 'src/components/PageContainer/PageContainer'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

const HomePage = () => {
  const { isAuthenticated } = useAuth()

  return (
    <>
      <Metadata og={{ url: getEnvironmentUrl(routes.home()) }} />

      {isAuthenticated ? (
        <AnnouncementBanner />
      ) : (
        <Box
          as="section"
          bg="linear-gradient(180deg, #E5DFFF 0%, #FFEACD 100%)"
          overflow={{ base: 'auto', lg: 'hidden' }}
          borderBottom="1px solid"
          borderBottomColor="blackAlpha.100"
          pt={HEADER_HEIGHT}
          mt={'-' + HEADER_HEIGHT}
        >
          <PageContainer
            pt={0}
            pb={0}
            px={0} // moved paddings to Stack below so box-shadow doesn't cut off
            maxHeight={{ base: 'none', lg: 'calc(100vh - 110px)' }}
            minHeight={{ base: 'auto', lg: '630px' }}
          >
            <Stack
              direction="row"
              overflow="hidden"
              height="full"
              px={{ base: 4, md: 10 }}
              pt={{ base: 20, lg: 0 }}
              pb={{ base: '100px', lg: 0 }}
              spacing={0}
              mb={{ base: 0, lg: '-250px' }}
            >
              <Flex align={'center'} justify="center">
                <Box
                  w={'full'}
                  maxW={{ base: '760px', lg: '400px', xl: '448px' }}
                  mr={{ base: 0, lg: '40px', xl: '72px' }}
                >
                  <Heading
                    fontSize={{ base: '48px', xl: '56px' }}
                    lineHeight={1}
                    letterSpacing="tighter"
                    color="marketing.deepBlue"
                    fontWeight={800}
                  >
                    <Balancer>Recommend the products you swear by.</Balancer>
                  </Heading>
                  <Text
                    fontFamily="bitter"
                    fontSize={{ base: '20px', md: '22px' }}
                    lineHeight="1.33"
                    mt={{ base: 4, md: 6 }}
                    color="marketing.deepBlue"
                  >
                    Easily create product guides and earn commission–just like
                    the pros at <i>Wirecutter</i> and <i>Consumer Reports</i>.
                  </Text>
                  <Box mt={{ base: 6, lg: 10 }}>
                    <HStack spacing={3}>
                      <Button
                        as={Link}
                        size={{ base: 'lg', md: 'xl' }}
                        to={routes.signUp()}
                        variant="primary"
                      >
                        Sign Up
                      </Button>
                      <Button
                        as={Link}
                        size={{ base: 'lg', md: 'xl' }}
                        to={routes.about()}
                        variant="secondary"
                      >
                        Learn More
                      </Button>
                    </HStack>
                  </Box>
                </Box>
              </Flex>
              <Show above="lg">
                <Flex
                  flex={1}
                  justify="center"
                  mt={{ base: 8, md: 10, lg: 0 }}
                  position="relative"
                  pointerEvents="none"
                  userSelect="none"
                >
                  <Stack
                    spacing={{ base: 4, md: 6 }}
                    maxW={{ base: '440px', md: '760px', lg: 'none' }}
                  >
                    <PackItem
                      id={-1}
                      title="KitchenAid Artisan Series Tilt Head Stand Mixer"
                      description="This was my gateway into baking. Take your cookies and cakes to the next level."
                      purchaseUrl="https://amzn.to/"
                      imageUrl="https://lewdorirqeadvphajbbq.supabase.co/storage/v1/render/image/public/pack-item-images/2ebd0064-d1e8-414f-a008-90eaf26eac63-kitchenaid.png"
                    />
                    <PackItem
                      id={-1}
                      title="Le Creuset Enameled Cast Iron Dutch Oven, 2.75 Qt"
                      description="A beautiful, versatile kitchen staple for stews, sauces, bread and more."
                      purchaseUrl="https://goto.walmart.com/"
                      imageUrl="https://lewdorirqeadvphajbbq.supabase.co/storage/v1/render/image/public/pack-item-images/a0944bd5-16f6-473c-bc6a-91eb90cf42b1-dutchoven.png"
                    />
                  </Stack>
                </Flex>
              </Show>
            </Stack>
          </PageContainer>
        </Box>
      )}

      <PageContainer>
        <Flex
          mt={{ base: 10, lg: isAuthenticated ? 6 : 16 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          <Box flexGrow={1}>
            <Box>
              <Heading
                fontSize="14px"
                lineHeight="20px"
                fontWeight={700}
                textTransform="uppercase"
                letterSpacing=".84px"
              >
                Trending Packs
              </Heading>
              <Box mt={6}>
                <PacksStaffPicksCell />
              </Box>
              <Heading
                fontSize="14px"
                lineHeight="20px"
                fontWeight={700}
                textTransform="uppercase"
                letterSpacing=".84px"
                mt={{ base: 14, lg: 16 }}
              >
                Recent Packs
              </Heading>
              <Box mt={6}>
                <PacksMostRecentCell />
              </Box>
            </Box>
          </Box>
          <Box
            minW={{ base: 'full', lg: '275px', xl: '320px' }}
            maxW={{ base: 'full', lg: '275px', xl: '320px' }}
            ml={{ base: 0, lg: '36px', xl: '80px' }}
            mt={{ base: 14, lg: 0 }}
          >
            <Heading
              fontSize="14px"
              lineHeight="20px"
              fontWeight={700}
              textTransform="uppercase"
              letterSpacing=".84px"
            >
              Featured Members
            </Heading>
            <Box mt={2}>
              <UserProfilesFeaturedCell />
            </Box>
          </Box>
        </Flex>
      </PageContainer>
    </>
  )
}

export default HomePage
