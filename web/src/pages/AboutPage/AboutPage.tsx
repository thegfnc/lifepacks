import {
  Accordion,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Balancer } from 'react-wrap-balancer'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import AccordionItem from 'src/components/AccordionItem/AccordionItem'
import { HEADER_HEIGHT } from 'src/components/Header/Header'
import PageContainer from 'src/components/PageContainer/PageContainer'
import { faq } from 'src/data/faqData'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

import createGreatLookingGuides from './create-great-looking-guides.png'
import earnMoneyAffiliateLinks from './earn-money-affiliate-links.png'
import shareCollectionsSingleLink from './share-collections-single-link.png'

const AboutPage = () => {
  const { isAuthenticated } = useAuth()

  const getStartedLink = isAuthenticated ? routes.newPack() : routes.signUp()

  return (
    <>
      <MetaTags ogUrl={getEnvironmentUrl(routes.about())} />

      <Box
        as="section"
        bg="linear-gradient(180deg, #FFDFE7 0%, #DDDBF0 100%);"
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
          <Flex align="center" justify="center" py="163px">
            <Stack
              w={'full'}
              maxW={{ base: '674px' }}
              textAlign="center"
              spacing={6}
            >
              <Heading
                fontSize={{ base: '48px', xl: '56px' }}
                lineHeight={1}
                letterSpacing="tighter"
                color="marketing.deepBlue"
                fontWeight={800}
              >
                <Balancer>
                  Lifepacks is the most legit way to recommend your favorite
                  things.
                </Balancer>
              </Heading>
              <Text
                fontFamily="bitter"
                fontSize={{ base: '20px', md: '22px' }}
                lineHeight="1.33"
                color="marketing.deepBlue"
              >
                You’re an expert with exceptional taste. People look to you to
                guide them through the great Amazon™ wilderness. Now you can
                finally formalize your best recommendations in one place.
              </Text>
              <Box>
                <Button
                  as={Link}
                  size={{ base: 'lg', md: 'xl' }}
                  to={getStartedLink}
                  variant="primary"
                >
                  Get Started
                </Button>
              </Box>
            </Stack>
          </Flex>
        </PageContainer>
      </Box>

      <Box as="section">
        <PageContainer minHeight="auto" pt={12} pb={12}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={6}
          >
            <GridItem>
              <Flex align="center" height="100%" px="50px">
                <Stack spacing={6}>
                  <Heading
                    fontSize={{ base: '48px' }}
                    lineHeight={1}
                    letterSpacing="tighter"
                    color="marketing.deepBlue"
                    fontWeight={800}
                  >
                    <Balancer>Create great looking guides in minutes.</Balancer>
                  </Heading>
                  <Text
                    fontFamily="bitter"
                    fontSize={{ base: '20px' }}
                    lineHeight="1.33"
                    color="marketing.deepBlue"
                  >
                    We made it ridiculously easy to curate your favorite
                    products into professional looking guides
                  </Text>
                  <Box>
                    <Button
                      as={Link}
                      size={{ base: 'lg', md: 'xl' }}
                      to={getStartedLink}
                      variant="primary"
                    >
                      Get Started
                    </Button>
                  </Box>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem>
              <Box>
                <Image src={createGreatLookingGuides}></Image>
              </Box>
            </GridItem>
          </Grid>
        </PageContainer>
      </Box>

      <Box as="section">
        <PageContainer minHeight="auto" pt={12} pb={12}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={6}
          >
            <GridItem>
              <Box>
                <Image src={shareCollectionsSingleLink}></Image>
              </Box>
            </GridItem>
            <GridItem>
              <Flex align="center" height="100%" px="50px">
                <Stack spacing={6}>
                  <Heading
                    fontSize={{ base: '48px' }}
                    lineHeight={1}
                    letterSpacing="tighter"
                    color="marketing.deepBlue"
                    fontWeight={800}
                  >
                    <Balancer>Share collections with a single link.</Balancer>
                  </Heading>
                  <Text
                    fontFamily="bitter"
                    fontSize={{ base: '20px' }}
                    lineHeight="1.33"
                    color="marketing.deepBlue"
                  >
                    We made it ridiculously easy to curate your favorite
                    products into professional looking guides
                  </Text>
                  <Box>
                    <Button
                      as={Link}
                      size={{ base: 'lg', md: 'xl' }}
                      to={getStartedLink}
                      variant="primary"
                    >
                      Get Started
                    </Button>
                  </Box>
                </Stack>
              </Flex>
            </GridItem>
          </Grid>
        </PageContainer>
      </Box>

      <Box as="section">
        <PageContainer minHeight="auto" pt={12} pb={12}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={6}
          >
            <GridItem>
              <Flex align="center" height="100%" px="50px">
                <Stack spacing={6}>
                  <Heading
                    fontSize={{ base: '48px' }}
                    lineHeight={1}
                    letterSpacing="tighter"
                    color="marketing.deepBlue"
                    fontWeight={800}
                  >
                    <Balancer>Earn money with affiliate links.</Balancer>
                  </Heading>
                  <Text
                    fontFamily="bitter"
                    fontSize={{ base: '20px' }}
                    lineHeight="1.33"
                    color="marketing.deepBlue"
                  >
                    We made it ridiculously easy to curate your favorite
                    products into professional looking guides
                  </Text>
                  <Box>
                    <Button
                      as={Link}
                      size={{ base: 'lg', md: 'xl' }}
                      to={getStartedLink}
                      variant="primary"
                    >
                      Get Started
                    </Button>
                  </Box>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem>
              <Box>
                <Image src={earnMoneyAffiliateLinks}></Image>
              </Box>
            </GridItem>
          </Grid>
        </PageContainer>
      </Box>

      <Box as="section" bg="white">
        <PageContainer
          minHeight="auto"
          pt={{ base: 10, md: '120px' }}
          pb={{ base: 10, md: '120px' }}
        >
          <Flex direction="column" px={{ base: 0, md: 4 }} align="center">
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={{ base: 'none', md: '93%' }}
              letterSpacing="tight"
              textAlign="center"
            >
              Ask us anything
            </Heading>
            <Container
              maxW="100ch"
              mt={{ base: 10, md: 16 }}
              px={{ base: 0, md: 4 }}
            >
              <Accordion defaultIndex={[0]} allowMultiple>
                <Stack spacing={4}>
                  {faq.slice(0, 3).map(({ question, answer }, index) => (
                    <AccordionItem
                      key={index}
                      title={question}
                      body={answer}
                      colorMode="dark"
                    />
                  ))}
                </Stack>
              </Accordion>
              <Flex mt={{ base: 10, md: 16 }} justify="center">
                <Button
                  as={Link}
                  to={routes.faq()}
                  size={{ base: 'lg', md: 'xl' }}
                  variant="outline"
                  colorScheme="gray"
                >
                  View all FAQ
                </Button>
              </Flex>
            </Container>
          </Flex>
        </PageContainer>
      </Box>
    </>
  )
}

export default AboutPage
