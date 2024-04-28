import {
  Accordion,
  Box,
  Button,
  Center,
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
import { Metadata } from '@redwoodjs/web'

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
      <Metadata og={{ url: getEnvironmentUrl(routes.about()) }} />

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
          maxHeight={{ base: 'none', lg: 'calc(100vh - 110px)' }}
          minHeight={{ base: 'auto', lg: '630px' }}
        >
          <Flex align="center" justify="center" py={{ base: 24, md: '163px' }}>
            <Stack
              w={'full'}
              maxW={{ base: '674px' }}
              textAlign="center"
              spacing={6}
            >
              <Heading
                fontSize={{ base: '40px', lg: '56px' }}
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
                fontSize={{ base: '18px', md: '22px' }}
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
        <PageContainer minHeight="auto" pt={0} pb={0}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={6}
            my={{ base: 14, md: 12 }}
          >
            <GridItem>
              <Flex align="center" height="100%" px={{ base: 0, md: '50px' }}>
                <Stack spacing={6}>
                  <Heading
                    fontSize={{ base: '40px', md: '48px' }}
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
                    products into professional looking guides. Add a title and
                    some products with optional descriptions and voila ...
                    you&apos;re done.
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
        <PageContainer minHeight="auto" pt={0} pb={0}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={6}
            my={{ base: 14, md: 12 }}
          >
            <GridItem order={{ base: 2, md: 1 }}>
              <Box>
                <Image src={shareCollectionsSingleLink}></Image>
              </Box>
            </GridItem>
            <GridItem order={{ base: 1, md: 2 }}>
              <Flex align="center" height="100%" px={{ base: 0, md: '50px' }}>
                <Stack spacing={6}>
                  <Heading
                    fontSize={{ base: '40px', md: '48px' }}
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
                    After making a pack, you&apos;ll be able to reuse the same
                    link to share your recommendations with your friends, fans,
                    and followers on virtually every platform. This helps you
                    spread your message further faster without having to
                    constantly copy, paste, and reformat.
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
        <PageContainer minHeight="auto" pt={0} pb={0}>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
            }}
            gap={6}
            my={{ base: 14, md: 12 }}
          >
            <GridItem>
              <Flex align="center" height="100%" px={{ base: 0, md: '50px' }}>
                <Stack spacing={6}>
                  <Heading
                    fontSize={{ base: '40px', md: '48px' }}
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
                    All of your favorite affiliate programs are compatible with
                    Lifepacks and you keep all of the profit. Sign up for your
                    favorite affiliate program, generate the link with your
                    embedded code, and paste it into each item on your pack.
                    Everyone that signs up during our alpha period will keep
                    100% of their affiliate revenue.
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

      <Box as="section" bg="white" textAlign="center">
        <PageContainer minHeight="auto" pt="0" pb="0">
          <Stack spacing="72px" py={{ base: 20, md: '160px' }}>
            <Heading
              fontSize={{ base: '40px', xl: '56px' }}
              lineHeight={1}
              letterSpacing="tighter"
              color="marketing.deepBlue"
              fontWeight={800}
            >
              <Balancer>Lifepacks is for everyone.</Balancer>
            </Heading>
            <Grid
              templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
              gap="80px"
            >
              <GridItem
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Center
                  background="linear-gradient(180deg, #E5DFFF 0%, #FFEACD 100%);"
                  borderRadius="full"
                  fontSize={{ base: '72px', lg: '80px', xl: '96px' }}
                  lineHeight={1}
                  aspectRatio={1}
                  maxWidth={{ base: '260px', md: '320px' }}
                  width="full"
                >
                  🧐
                </Center>
                <Heading
                  fontSize={{ base: '32px' }}
                  letterSpacing="tight"
                  color="marketing.deepBlue"
                  fontWeight={800}
                  mt="28px"
                >
                  Experts
                </Heading>
                <Text mt={3} maxW="270px">
                  Experts use Lifepacks to easily share the products they swear
                  by with friends and followers.
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Center
                  background="linear-gradient(180deg, #E5DFFF 0%, #FFEACD 100%);"
                  borderRadius="full"
                  fontSize={{ base: '72px', lg: '80px', xl: '96px' }}
                  lineHeight={1}
                  aspectRatio={1}
                  maxWidth={{ base: '260px', md: '320px' }}
                  width="full"
                >
                  🥰
                </Center>
                <Heading
                  fontSize={{ base: '32px' }}
                  letterSpacing="tight"
                  color="marketing.deepBlue"
                  fontWeight={800}
                  mt="28px"
                >
                  Hobbyists
                </Heading>
                <Text mt={3} maxW="270px">
                  Hobbyists use Lifepacks to find recommendations from reviewers
                  they can actually trust.
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                alignItems="center"
                flexDirection="column"
              >
                <Center
                  background="linear-gradient(180deg, #E5DFFF 0%, #FFEACD 100%);"
                  borderRadius="full"
                  fontSize={{ base: '72px', lg: '80px', xl: '96px' }}
                  lineHeight={1}
                  aspectRatio={1}
                  maxWidth={{ base: '260px', md: '320px' }}
                  width="full"
                >
                  🤩
                </Center>
                <Heading
                  fontSize={{ base: '32px' }}
                  letterSpacing="tight"
                  color="marketing.deepBlue"
                  fontWeight={800}
                  mt="28px"
                >
                  Influencers
                </Heading>
                <Text mt={3} maxW="270px">
                  Influencers use Lifepacks to share affiliate links on their
                  platforms and earn money on the side.
                </Text>
              </GridItem>
            </Grid>
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
        </PageContainer>
      </Box>

      <Box as="section">
        <PageContainer
          minHeight="auto"
          pt={{ base: 20, md: '160px' }}
          pb={{ base: 20, md: '160px' }}
        >
          <Flex direction="column" px={{ base: 0, md: 4 }} align="center">
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={{ base: 'none', md: '93%' }}
              letterSpacing="tight"
              textAlign="center"
              color="marketing.deepBlue"
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
                  {faq.slice(0, 4).map(({ question, answer }, index) => (
                    <AccordionItem key={index} title={question} body={answer} />
                  ))}
                </Stack>
              </Accordion>
              <Flex mt={{ base: 10, md: 16 }} justify="center">
                <Button
                  as={Link}
                  to={routes.faq()}
                  size={{ base: 'lg', md: 'xl' }}
                  variant="secondary"
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
