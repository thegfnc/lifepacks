import { useState } from 'react'

import {
  Accordion,
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Hide,
  HStack,
  IconButton,
  Image,
  Show,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AccordionItem from 'src/components/AccordionItem/AccordionItem'
import Pack from 'src/components/Pack/Pack'
import PackItem from 'src/components/PackItem/PackItem'
import PageContainer from 'src/components/PageContainer/PageContainer'
import UserProfile, {
  UserProfileLayout,
} from 'src/components/UserProfile/UserProfile'
import { faq } from 'src/data/faqData'
import { examplePacks, stores } from 'src/data/homePageData'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

const AboutPage = () => {
  const [examplePackTabIndex, setExamplePackTabIndex] = useState(0)

  return (
    <>
      <MetaTags ogUrl={getEnvironmentUrl(routes.about())} />

      <Box as="section" bg="purple.500" overflow="hidden" maxH="115vh">
        <PageContainer
          minHeight="auto"
          pt={{ base: 8, md: '120px' }}
          pb={0}
          px={{ base: 2, md: 10 }}
        >
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
            {/* desktop */}
            <Show above="lg">
              <HStack mt={8}>
                {examplePacks.map((examplePack, index) => {
                  const isCurrentTab = index === examplePackTabIndex

                  return (
                    <Button
                      key={examplePack.tabLabel}
                      bg={isCurrentTab ? 'white' : 'whiteAlpha.300'}
                      _hover={{ bg: isCurrentTab ? 'white' : 'whiteAlpha.400' }}
                      _active={{
                        bg: isCurrentTab ? 'white' : 'whiteAlpha.500',
                      }}
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
            </Show>
            {/* mobile */}
            <Hide above="lg">
              <HStack mt={6}>
                {examplePacks.map((examplePack, index) => {
                  const isCurrentTab = index === examplePackTabIndex

                  return (
                    <IconButton
                      key={examplePack.tabLabel}
                      bg={isCurrentTab ? 'white' : 'whiteAlpha.300'}
                      _hover={{ bg: isCurrentTab ? 'white' : 'whiteAlpha.400' }}
                      _active={{
                        bg: isCurrentTab ? 'white' : 'whiteAlpha.500',
                      }}
                      onClick={() => setExamplePackTabIndex(index)}
                      aria-label={examplePack.tabLabel}
                      px={'14px'}
                      icon={<Text fontSize="xl">{examplePack.tabEmoji}</Text>}
                      rounded="full"
                    />
                  )
                })}
              </HStack>
            </Hide>
            <Box
              bg="beige.500"
              px={{ base: 6, md: 14, xl: 24 }}
              pt={{ base: 6, md: '76px' }}
              pb={{ base: 6, md: 14 }}
              mt={{ base: 8, md: '65px' }}
              borderTopLeftRadius={{ base: '3xl', md: '24px' }}
              borderTopRightRadius={{ base: '3xl', md: '24px' }}
              position="relative"
            >
              <Show above="md">
                <Box
                  borderBottomColor="blackAlpha.200"
                  borderBottomWidth="1px"
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  height="36px"
                >
                  <HStack spacing={2} position="absolute" top={3} left={6}>
                    <Box h="3" w="3" borderRadius="full" bg="blackAlpha.200" />
                    <Box h="3" w="3" borderRadius="full" bg="blackAlpha.200" />
                    <Box h="3" w="3" borderRadius="full" bg="blackAlpha.200" />
                  </HStack>
                </Box>
              </Show>
              <Flex>
                <Flex direction={{ base: 'column', md: 'row' }}>
                  <Box
                    width={{ base: 'full', lg: '70%' }}
                    paddingRight={{ base: 0, lg: 10, xl: 20 }}
                    mt={{ base: 6, md: 0 }}
                    order={{ base: 2, md: 1 }}
                  >
                    <Pack pack={examplePacks[examplePackTabIndex].pack} />
                  </Box>
                  <Show above="lg">
                    <Box
                      width={{ base: 'full', md: '30%' }}
                      borderLeftWidth={{ base: '0', md: '1px' }}
                      borderLeftColor={'blackAlpha.200'}
                      paddingLeft={{ base: 0, md: 10 }}
                      order={{ base: 1, md: 2 }}
                    >
                      <UserProfile
                        layout={UserProfileLayout.Sidebar}
                        userProfile={
                          examplePacks[examplePackTabIndex].userProfile
                        }
                      />
                    </Box>
                  </Show>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </PageContainer>
      </Box>

      <Box as="section" bg="yellow.500" py={{ base: 12, md: '120px' }}>
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
        {/* desktop */}
        <Show above="md">
          <Flex
            mt={{ base: 10, md: '75px' }}
            justify="center"
            overflow="hidden"
            pb={{ base: 10, md: 16 }}
          >
            <HStack spacing={{ base: 6, md: 12 }}>
              {stores.map((store) => (
                <Center
                  key={store.storeName}
                  p={20}
                  h={'290px'}
                  w={'290px'}
                  bg="white"
                  borderRadius="32px"
                  boxShadow="xl"
                >
                  <Image src={store.storeLogo} h={'120px'} w={'120px'} />
                </Center>
              ))}
            </HStack>
          </Flex>
        </Show>
        {/* mobile */}
        <Hide above="md">
          <Flex justify="center" mt={6} mb={2} mx={2}>
            <Flex justify="center" w="full" maxW="500px" flexWrap="wrap">
              {stores.slice(0, 4).map((store) => (
                <Center
                  key={store.storeName}
                  p={'45px'}
                  h={'170px'}
                  w={'170px'}
                  bg="white"
                  borderRadius="32px"
                  boxShadow="xl"
                  mb={4}
                  mx={2}
                >
                  <Image src={store.storeLogo} h="80px" w="80px" />
                </Center>
              ))}
            </Flex>
          </Flex>
        </Hide>
        <PageContainer minHeight="auto" pt={0} pb={0}>
          <Box textAlign="center">
            <Button
              as={Link}
              size={{ base: 'lg', md: 'xl' }}
              to={routes.affiliateLinks101()}
            >
              Learn More
            </Button>
          </Box>
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
