import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Hide,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import LatestPacksCell from 'src/cells/LatestPacksCell'
import PackItem from 'src/components/PackItem/PackItem'
import PageContainer from 'src/components/PageContainer/PageContainer'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

const HomePage = () => {
  return (
    <>
      <MetaTags ogUrl={getEnvironmentUrl(routes.home())} />

      <Box as="section" bg="#E4DDFF" overflow="hidden">
        <PageContainer
          pt={0}
          pb={0}
          px={0} // moved paddings to Stack below so box-shadow doesn't cut off
          maxHeight={{ base: '150vh', md: 'calc(100vh - 110px)' }}
          minHeight={{ base: 'auto', md: '720px' }}
        >
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            overflow="hidden"
            height="full"
            px={{ base: 4, md: 10 }}
            spacing={0}
          >
            <Flex align={'center'} justify="center" mt={{ base: 4, lg: 0 }}>
              <Box
                w={'full'}
                maxW={{ base: '760px', lg: '400px', xl: '448px' }}
                textAlign={{ base: 'center', lg: 'left' }}
                mr={{ base: 0, lg: '40px', xl: '72px' }}
              >
                <Show above="lg">
                  <Heading
                    fontSize={{ lg: '48px', xl: '56px' }}
                    lineHeight={1}
                    letterSpacing="tight"
                  >
                    Share the <br />
                    products you <br />
                    swear by.
                  </Heading>
                  <Text
                    fontFamily="bitter"
                    fontSize={{ base: 'lg', md: '2xl' }}
                    lineHeight="1.33"
                    mt={{ base: 4, md: 6 }}
                  >
                    Easily create product guides and earn commission–just like
                    the pros at <i>Wirecutter</i> and <i>Consumer Reports</i>.
                  </Text>
                </Show>
                <Hide above="lg">
                  <Heading
                    fontSize={{ base: '36px', md: '48px' }}
                    lineHeight={1}
                    letterSpacing="tight"
                  >
                    Share the products you swear by.
                  </Heading>
                  <Text
                    fontFamily="bitter"
                    fontSize={{ base: '18px', md: '2xl' }}
                    lineHeight="1.33"
                    mt={{ base: 4 }}
                  >
                    Easily create product guides and earn commission–just like
                    the pros at <i>Wirecutter</i> and <i>Consumer Reports</i>.
                  </Text>
                </Hide>
                <Box mt={{ base: 6, lg: 10 }}>
                  <HStack spacing={3}>
                    <Button
                      as={Link}
                      size={{ base: 'lg', md: 'xl' }}
                      to={routes.signUp()}
                    >
                      Sign Up
                    </Button>
                    <Button
                      as={Link}
                      size={{ base: 'lg', md: 'xl' }}
                      to={routes.about()}
                      colorScheme="gray"
                    >
                      Learn More
                    </Button>
                  </HStack>
                </Box>
              </Box>
            </Flex>
            <Flex
              flex={1}
              justify="center"
              mt={{ base: 8, md: 10, lg: 0 }}
              position="relative"
              _after={{
                content: '""',
                background:
                  'linear-gradient(180deg, rgba(95, 69, 255, 0.00) 0%, rgba(95, 69, 255, 0.20) 100%)',
                position: 'absolute',
                bottom: 0,
                height: '200px',
                width: '100%',
              }}
            >
              <Stack
                spacing={{ base: 4, md: 6 }}
                maxW={{ base: '440px', md: '760px', lg: 'none' }}
              >
                <PackItem
                  title="HiFiMan Sundara"
                  description="The best cans for any entry-level audiophile. Hands down."
                  purchaseUrl="https://amzn.to/3Jiswta"
                  imageUrl="https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/34344f82-a086-4155-a60d-18061796386d-hifimansundara.jpeg"
                />
                <PackItem
                  title="Apple AirPods Pro"
                  description="High-quality wireless earbud option with great sound quality, convenient connectivity, and a sleek design."
                  purchaseUrl="https://goto.walmart.com/c/4408565/565706/9383?veh=aff&sourceid=imp_000011112222333344&u=https%3A%2F%2Fwww.walmart.com%2Fip%2FApple-AirPods-Pro-2nd-Generation%2F1752657021%3Fathbdg%3DL1102"
                  imageUrl="https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/21717ce2-ae68-4bd2-98f9-636f21996656-mqd83.jpeg"
                />
              </Stack>
            </Flex>
          </Stack>
        </PageContainer>
      </Box>

      <PageContainer>
        <Heading size="2xl">Explore Packs</Heading>
        <Box my={8}>
          <LatestPacksCell />
        </Box>
      </PageContainer>
    </>
  )
}

export default HomePage
