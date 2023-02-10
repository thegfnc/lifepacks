import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer/PageContainer'

const PackPage = () => {
  return (
    <>
      <MetaTags title="Pack" description="Pack page" />

      <PageContainer>
        <Flex>
          <Box width="66%" paddingRight={14}>
            <HStack spacing={3}>
              <Avatar
                size={'md'}
                src={
                  'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
              <Text fontSize="lg">Marcia Espowood · Jan 8</Text>
            </HStack>
            <Heading
              as="h1"
              fontSize="5xl"
              lineHeight="none"
              fontWeight="extrabold"
              marginTop={6}
            >
              Camping in Comfort: The Top Gear to Take on Your Next Nature
              Escape
            </Heading>
            <Text fontSize="xl" lineHeight={7} marginTop={8}>
              Camping is a fun and adventurous way to escape the monotony of
              everyday life and explore the great outdoors. But, to make the
              most of your camping trip, you need the right gear. From tents to
              sleeping bags, from cookware to flashlights, having the right
              equipment can make or break your camping experience. In this
              article, we will be reviewing some of the best camping gear
              available on the market today, to help you make an informed
              decision when it comes to choosing the right gear for your next
              camping trip.
            </Text>
            <Stack spacing={6} marginTop={10}>
              <Card
                borderWidth={'1px'}
                borderColor={'blackAlpha.300'}
                boxShadow="lg"
                borderRadius="3xl"
              >
                <CardHeader
                  borderBottomWidth="1px"
                  borderBottomColor="blackAlpha.200"
                  p={0}
                >
                  <SimpleGrid columns={2} spacing={0}>
                    <Center p={8}>
                      <Image
                        maxHeight="296px"
                        maxWidth="296px"
                        src="https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588"
                      />
                    </Center>
                    <Center
                      borderLeftWidth="1px"
                      borderLeftColor="blackAlpha.200"
                    >
                      <Box p={8}>
                        <Heading size="md" lineHeight={7}>
                          REI Co-op Trailbreak 30 Sleeping Bag - Men&apos;s
                        </Heading>
                        <Button colorScheme="teal" size="lg" mt={4}>
                          $25 on Amazon
                        </Button>
                      </Box>
                    </Center>
                  </SimpleGrid>
                </CardHeader>
                <CardBody
                  p={8}
                  fontSize="lg"
                  lineHeight={7}
                  color="blackAlpha.800"
                >
                  While the above sleeping bag will suffice for three seasons,
                  if you’re a beginner camper who is looking for one that will
                  get you through four seasons (or one that can just handle
                  cooler temperatures), the Mandagies recommend investing in
                  this more expensive down-filled option from REI’s in-house
                  line.
                </CardBody>
              </Card>
              <Card
                borderWidth={'1px'}
                borderColor={'blackAlpha.300'}
                boxShadow="lg"
                borderRadius="3xl"
              >
                <CardHeader
                  borderBottomWidth="1px"
                  borderBottomColor="blackAlpha.200"
                  p={0}
                >
                  <SimpleGrid columns={2} spacing={0}>
                    <Center p={8}>
                      <Image
                        maxHeight="296px"
                        maxWidth="296px"
                        src="https://i5.walmartimages.com/asr/e2eaf2d6-392e-4703-8338-d9b113e0e124.85c6678244824a2e565fa624c03c2301.jpeg"
                      />
                    </Center>
                    <Center
                      borderLeftWidth="1px"
                      borderLeftColor="blackAlpha.200"
                    >
                      <Box p={8}>
                        <Heading size="md" lineHeight={7}>
                          Coleman Classic Two-Burner Propane Stove
                        </Heading>
                        <Button colorScheme="teal" size="lg" mt={4}>
                          $25 on Amazon
                        </Button>
                      </Box>
                    </Center>
                  </SimpleGrid>
                </CardHeader>
                <CardBody
                  p={8}
                  fontSize="lg"
                  lineHeight={7}
                  color="blackAlpha.800"
                >
                  Once you have your sleeping arrangements and apparel squared
                  away, the experts say you’ll want to think about your camp
                  kitchen. While some campgrounds have grills at each site, a
                  lot do not, so if you’re planning for a few days (or more),
                  you’ll probably want to bring your own portable stove.
                </CardBody>
              </Card>
            </Stack>
          </Box>
          <Box
            width="34%"
            borderLeftWidth={'1px'}
            borderLeftColor={'blackAlpha.200'}
            paddingLeft={14}
          >
            <Avatar
              size={'xl'}
              src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
            <Heading>Marcia Espowood</Heading>
            <Text>
              Marc is a seasoned outdoorsman who lives for exploring the
              wilderness, experiencing new adventures, and preserving the beauty
              of nature.
            </Text>
          </Box>
        </Flex>
      </PageContainer>
    </>
  )
}

export default PackPage
