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
import { MetaTags } from '@redwoodjs/web'

import PacksMostRecentCell from 'src/cells/PacksMostRecentCell'
import PacksStaffPicksCell from 'src/cells/PacksStaffPicksCell'
import UserProfilesFeaturedCell from 'src/cells/UserProfilesFeaturedCell'
import { DESKTOP_HEADER_HEIGHT } from 'src/components/Header/Header'
import PackItem from 'src/components/PackItem/PackItem'
import PageContainer from 'src/components/PageContainer/PageContainer'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

const HomePage = () => {
  return (
    <>
      <MetaTags ogUrl={getEnvironmentUrl(routes.home())} />

      <Box
        as="section"
        bg="linear-gradient(180deg, #E5DFFF 0%, #FFEACD 100%)"
        overflow="hidden"
        borderBottom="1px solid"
        borderBottomColor="blackAlpha.100"
        pt={DESKTOP_HEADER_HEIGHT}
        mt={'-' + DESKTOP_HEADER_HEIGHT}
      >
        <PageContainer
          pt={0}
          pb={0}
          px={0} // moved paddings to Stack below so box-shadow doesn't cut off
          maxHeight={{ base: '150vh', md: 'calc(100vh - 110px)' }}
          minHeight={{ base: '350px', md: '630px' }}
        >
          <Stack
            direction="row"
            overflow="hidden"
            height="full"
            px={{ base: 4, md: 10 }}
            spacing={0}
            mb={{ base: 0, md: '-250px' }}
          >
            <Flex align={'center'} justify="center" mt={{ base: 4, lg: 0 }}>
              <Box
                w={'full'}
                maxW={{ base: '760px', lg: '400px', xl: '448px' }}
                textAlign="left"
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
                  fontSize={{ base: '2xl', md: '2xl' }}
                  lineHeight="1.33"
                  mt={{ base: 4, md: 6 }}
                  color="marketing.deepBlue"
                >
                  Easily create product guides and earn commission–just like the
                  pros at <i>Wirecutter</i> and <i>Consumer Reports</i>.
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
                    title="KitchenAid Artisan Series Tilt Head Stand Mixer"
                    description="This was my gateway into baking. Take your cookies and cakes to the next level."
                    purchaseUrl="https://amzn.to/"
                    imageUrl="https://lewdorirqeadvphajbbq.supabase.co/storage/v1/render/image/public/pack-item-images/2ebd0064-d1e8-414f-a008-90eaf26eac63-kitchenaid.png?height=700&width=700&resize=contain"
                  />
                  <PackItem
                    title="Le Creuset Enameled Cast Iron Dutch Oven, 2.75 Qt"
                    description="A beautiful, versatile kitchen staple for stews, sauces, bread and more."
                    purchaseUrl="https://goto.walmart.com/"
                    imageUrl="https://lewdorirqeadvphajbbq.supabase.co/storage/v1/render/image/public/pack-item-images/a0944bd5-16f6-473c-bc6a-91eb90cf42b1-dutchoven.png?height=700&width=700&resize=contain"
                  />
                </Stack>
              </Flex>
            </Show>
          </Stack>
        </PageContainer>
      </Box>

      <PageContainer>
        <Flex mt={16} direction={{ base: 'column', md: 'row' }}>
          <Box flexGrow={1}>
            <Box>
              <Heading fontSize="xl" fontWeight={700} lineHeight={1.33}>
                Trending Packs
              </Heading>
              <Box mt={6}>
                <PacksStaffPicksCell />
              </Box>
              <Heading fontSize="xl" fontWeight={700} lineHeight={1.33} mt={16}>
                Recent Packs
              </Heading>
              <Box mt={6}>
                <PacksMostRecentCell />
              </Box>
            </Box>
          </Box>
          <Box
            minW="320px"
            maxW="320px"
            ml={{ base: 0, md: '48px', xl: '80px' }}
          >
            <Heading fontSize="xl" fontWeight={700} lineHeight={1.33}>
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
