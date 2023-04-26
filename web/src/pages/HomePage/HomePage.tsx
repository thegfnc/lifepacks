import { useState } from 'react'

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import amazonLogo from 'public/logos/amazon.png'
import ebayLogo from 'public/logos/ebay.png'
import homeDepotLogo from 'public/logos/home_depot.png'
import targetLogo from 'public/logos/target.png'
import walmartLogo from 'public/logos/walmart.png'
import websiteScreenshot from 'public/website_screenshot.png'

import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Pack from 'src/components/Pack/Pack'
import PackItem from 'src/components/PackItem/PackItem'
import PageContainer from 'src/components/PageContainer/PageContainer'
import UserProfile, {
  UserProfileLayout,
} from 'src/components/UserProfile/UserProfile'

import { examplePacks, faqs } from './homePageData'

const HomePage = () => {
  const { isAuthenticated } = useAuth()
  const [examplePackTabIndex, setExamplePackTabIndex] = useState(0)

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate(routes.newPack())
    } else {
      navigate(routes.signUp())
    }
  }

  return (
    <>
      <MetaTags
        title="Make guides for the products you swear by"
        description="Publish product recommendations just like the pros at Wirecutter."
        ogType="website"
        ogUrl="https://www.lifepacks.co/"
        ogContentUrl={`https://www.lifepacks.co${websiteScreenshot}`}
      />

      <Box bg="brown.500" overflow="hidden">
        <PageContainer
          minHeight="auto"
          pt={{ base: 8, md: 6 }}
          pb={{ base: 8, md: 6 }}
        >
          <Stack direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1} align={'center'}>
              <Box
                w={'full'}
                maxW={{ base: 'none', md: 'lg' }}
                textAlign={{ base: 'center', md: 'left' }}
                mr={{ base: 0, md: 4 }}
              >
                <Heading
                  fontSize={{ base: '4xl', md: '6xl' }}
                  lineHeight={{ base: 'none', md: '93%' }}
                  letterSpacing="tight"
                >
                  Make guides <br />
                  for the products <br />
                  you swear by
                </Heading>
                <Text
                  fontFamily="bitter"
                  fontSize={{ base: 'lg', md: '2xl' }}
                  lineHeight="short"
                  mt={{ base: 4, md: 6 }}
                >
                  Publish product recommendations just like the professionals.
                </Text>
                <Box mt={{ base: 4, md: 10 }}>
                  <Button
                    as={Link}
                    size={{ base: 'md', md: 'xl' }}
                    to={routes.explore()}
                    w={{ base: 'full', md: 'auto' }}
                  >
                    Explore Packs
                  </Button>
                </Box>
              </Box>
            </Flex>
            <Flex flex={1}>
              <Stack
                spacing={{ base: 4, md: 6 }}
                mt={{ base: 8, md: 0 }}
                mb={{ base: '-24rem', md: '-10rem' }}
              >
                <PackItem
                  title="HiFiMan Sundara"
                  description="The best cans for any entry-level audiophile. Hands down."
                  purchaseUrl="#"
                  imageUrl="https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/34344f82-a086-4155-a60d-18061796386d-hifimansundara.jpeg"
                />
                <PackItem
                  title="Apple AirPods Pro"
                  description="The best cans for any entry-level audiophile. Hands down."
                  purchaseUrl="#"
                  imageUrl="https://lewdorirqeadvphajbbq.supabase.co/storage/v1/object/public/pack-item-images/21717ce2-ae68-4bd2-98f9-636f21996656-mqd83.jpeg"
                />
              </Stack>
            </Flex>
          </Stack>
        </PageContainer>
      </Box>

      <Box bg="purple.500" overflow="hidden" maxH="115vh">
        <PageContainer minHeight="auto" pt={{ base: 8, md: '120px' }} pb={10}>
          <Flex direction="column" align="center">
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={{ base: 'none', md: '93%' }}
              letterSpacing="tight"
              color="white"
              textAlign="center"
            >
              Share your expert opinion
            </Heading>
            <HStack mt={8} display={{ base: 'none', md: 'block' }}>
              {examplePacks.map((examplePack, index) => {
                const isCurrentTab = index === examplePackTabIndex

                return (
                  <Button
                    key={examplePack.tabLabel}
                    bg={isCurrentTab ? 'white' : 'whiteAlpha.300'}
                    _hover={{ bg: isCurrentTab ? 'white' : 'whiteAlpha.400' }}
                    _active={{ bg: isCurrentTab ? 'white' : 'whiteAlpha.500' }}
                    color={isCurrentTab ? 'black' : 'white'}
                    onClick={() => setExamplePackTabIndex(index)}
                    leftIcon={<Text>{examplePack.tabEmoji}</Text>}
                    rounded="full"
                  >
                    <Text>{examplePack.tabLabel}</Text>
                  </Button>
                )
              })}
            </HStack>
            <HStack mt={6} display={{ base: 'block', md: 'none' }}>
              {examplePacks.map((examplePack, index) => {
                const isCurrentTab = index === examplePackTabIndex

                return (
                  <IconButton
                    key={examplePack.tabLabel}
                    bg={isCurrentTab ? 'white' : 'whiteAlpha.300'}
                    _hover={{ bg: isCurrentTab ? 'white' : 'whiteAlpha.400' }}
                    _active={{ bg: isCurrentTab ? 'white' : 'whiteAlpha.500' }}
                    onClick={() => setExamplePackTabIndex(index)}
                    aria-label={examplePack.tabLabel}
                    px={'14px'}
                    icon={<Text fontSize="xl">{examplePack.tabEmoji}</Text>}
                    rounded="full"
                  />
                )
              })}
            </HStack>
            <Box
              bg="brown.500"
              px={{ base: 6, md: 24 }}
              py={{ base: 6, md: '76px' }}
              mt={{ base: 8, md: '65px' }}
              borderRadius={{ base: '3xl', md: '24px' }}
              position="relative"
            >
              <Box
                borderBottomColor="blackAlpha.200"
                borderBottomWidth="1px"
                position="absolute"
                top={0}
                left={0}
                right={0}
                height="36px"
                display={{ base: 'none', md: 'block' }}
              >
                <HStack spacing={2} position="absolute" top={3} left={6}>
                  <Box h="3" w="3" borderRadius="full" bg="blackAlpha.200" />
                  <Box h="3" w="3" borderRadius="full" bg="blackAlpha.200" />
                  <Box h="3" w="3" borderRadius="full" bg="blackAlpha.200" />
                </HStack>
              </Box>
              <Flex>
                <Flex direction={{ base: 'column', md: 'row' }}>
                  <Box
                    width={{ base: 'full', md: '70%' }}
                    paddingRight={{ base: 0, md: 20 }}
                    mt={{ base: 6, md: 0 }}
                    order={{ base: 2, md: 1 }}
                  >
                    <Pack pack={examplePacks[examplePackTabIndex].pack} />
                  </Box>
                  <Box
                    width={{ base: 'full', md: '30%' }}
                    borderLeftWidth={{ base: '0', md: '1px' }}
                    borderLeftColor={'blackAlpha.200'}
                    paddingLeft={{ base: 0, md: 14 }}
                    order={{ base: 1, md: 2 }}
                    display={{ base: 'none', md: 'block' }}
                  >
                    <UserProfile
                      layout={UserProfileLayout.Sidebar}
                      userProfile={
                        examplePacks[examplePackTabIndex].userProfile
                      }
                    />
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </PageContainer>
      </Box>

      <Box bg="yellow.500" py={{ base: 10, md: '120px' }}>
        <PageContainer minHeight="auto" pt={0} pb={0}>
          <Box px={4} textAlign="center">
            <Heading
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight={{ base: 'none', md: '93%' }}
              letterSpacing="tight"
              textAlign="center"
            >
              Get paid for your <br />
              recommendations
            </Heading>
            <Text
              fontFamily="bitter"
              fontSize={{ base: 'lg', md: '2xl' }}
              lineHeight="short"
              mt={{ base: 4, md: 6 }}
            >
              Use affiliate links to profit when someone buys from your pack.
            </Text>
          </Box>
        </PageContainer>
        <Flex
          mt={{ base: 10, md: '75px' }}
          justify="center"
          overflow="hidden"
          pb={{ base: 10, md: 16 }}
        >
          <HStack spacing={{ base: 6, md: 12 }}>
            <Center
              p={20}
              h="290px"
              w="290px"
              bg="white"
              borderRadius="32px"
              boxShadow="xl"
            >
              <Image src={ebayLogo} />
            </Center>
            <Center
              p={20}
              h="290px"
              w="290px"
              bg="white"
              borderRadius="32px"
              boxShadow="xl"
            >
              <Image src={walmartLogo} h="120px" w="120px" />
            </Center>
            <Center
              p={20}
              h="290px"
              w="290px"
              bg="white"
              borderRadius="32px"
              boxShadow="xl"
            >
              <Image src={amazonLogo} h="120px" w="120px" />
            </Center>
            <Center
              p={20}
              h="290px"
              w="290px"
              bg="white"
              borderRadius="32px"
              boxShadow="xl"
            >
              <Image src={targetLogo} h="120px" w="120px" />
            </Center>
            <Center
              p={20}
              h="290px"
              w="290px"
              bg="white"
              borderRadius="32px"
              boxShadow="xl"
            >
              <Image src={homeDepotLogo} h="120px" w="120px" />
            </Center>
          </HStack>
        </Flex>
        <PageContainer minHeight="auto" pt={0} pb={0}>
          <Box textAlign="center">
            <Button
              size="xl"
              onClick={handleGetStarted}
              w={{ base: 'full', md: 'auto' }}
              px="92px"
            >
              Get Started
            </Button>
          </Box>
        </PageContainer>
      </Box>

      <Box bg="brown.500">
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
                  {faqs.map(({ question, answer }, index) => (
                    <AccordionItem key={index}>
                      {({ isExpanded }) => (
                        <Box
                          bg={isExpanded ? 'purple.500' : 'white'}
                          color={isExpanded ? 'white' : 'blackAlpha.700'}
                          p={{ base: 4, md: 6 }}
                          borderRadius="32px"
                          transition={'background .2s ease-in-out'}
                        >
                          <AccordionButton
                            p={{ base: 3, md: 4 }}
                            borderRadius="16px"
                          >
                            <Box
                              flex="1"
                              textAlign="left"
                              fontSize={{ base: 'xl', md: '2xl' }}
                              fontWeight="medium"
                            >
                              {question}
                            </Box>
                          </AccordionButton>
                          <AccordionPanel
                            p={0}
                            px={3}
                            mb={3}
                            fontFamily="bitter"
                            fontSize={{ base: 'lg', md: '2xl' }}
                            color="white"
                            lineHeight="short"
                          >
                            {answer}
                          </AccordionPanel>
                        </Box>
                      )}
                    </AccordionItem>
                  ))}
                </Stack>
              </Accordion>
            </Container>
          </Flex>
        </PageContainer>
      </Box>
    </>
  )
}

export default HomePage
