import { EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import Avatar from 'src/components/Avatar/Avatar'
import PackItem from 'src/components/PackItem/PackItem'
import PageContainer from 'src/components/PageContainer/PageContainer'
import UserProfileSidebar from 'src/components/UserProfileSidebar/UserProfileSidebar'

type PackPageProps = {
  username: string
  slug: string
}

const PackPage = ({ username }: PackPageProps) => {
  return (
    <>
      <MetaTags title="Pack" description="Pack page" />

      <PageContainer>
        <Flex>
          <Box width="70%" paddingRight={20}>
            <Flex alignItems="center" justifyContent="space-between">
              <HStack spacing={3}>
                <Avatar
                  size={'md'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <Text fontSize="lg">Marcia Espowood · Jan 8</Text>
              </HStack>
              <Button
                as={Link}
                leftIcon={<EditIcon />}
                variant="outline"
                to={routes.editPack({ id: 1 })}
              >
                Edit Pack
              </Button>
            </Flex>
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
              <PackItem
                imageUrl="https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588"
                title="REI Co-op Trailbreak 30 Sleeping Bag - Men's"
                description="While the above sleeping bag will suffice for three seasons,
                if you’re a beginner camper who is looking for one that will
                get you through four seasons (or one that can just handle
                cooler temperatures), the Mandagies recommend investing in
                this more expensive down-filled option from REI’s in-house
                line."
              />
              <PackItem
                imageUrl="https://i5.walmartimages.com/asr/e2eaf2d6-392e-4703-8338-d9b113e0e124.85c6678244824a2e565fa624c03c2301.jpeg"
                title="Coleman Classic Two-Burner Propane Stove"
                description="Once you have your sleeping arrangements and apparel squared
                  away, the experts say you’ll want to think about your camp
                  kitchen. While some campgrounds have grills at each site, a
                  lot do not, so if you’re planning for a few days (or more),
                  you’ll probably want to bring your own portable stove."
              />
            </Stack>
          </Box>
          <Box
            width="30%"
            borderLeftWidth={'1px'}
            borderLeftColor={'blackAlpha.200'}
            paddingLeft={14}
          >
            <UserProfileSidebar username={username} />
          </Box>
        </Flex>
      </PageContainer>
    </>
  )
}

export default PackPage
