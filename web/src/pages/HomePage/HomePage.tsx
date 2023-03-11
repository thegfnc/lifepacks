import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import Pack from 'src/components/Pack/Pack'
import PackItem from 'src/components/PackItem/PackItem'
import PageContainer from 'src/components/PageContainer/PageContainer'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Welcome to Lifepacks." />

      <Box bg="#F4EBD2" overflow="hidden">
        <PageContainer fillPageHeight={false}>
          <Stack direction={{ base: 'column', md: 'row' }} px={4}>
            <Flex py={8} flex={1} align={'center'} justify={'flex-start'}>
              <Stack spacing={6} w={'full'} maxW="lg">
                <Heading fontSize="6xl" lineHeight="93%" letterSpacing="tight">
                  Make guides <br />
                  for the products <br />
                  you swear by
                </Heading>
                <Text fontFamily="bitter" fontSize="2xl" lineHeight="short">
                  Publish product recs just like the pros at Wirecutter and
                  Consumer Reports.
                </Text>
                <Box pt={4}>
                  <Button>Get Started</Button>
                </Box>
              </Stack>
            </Flex>
            <Flex flex={1}>
              <Stack spacing={6} mb="-10rem">
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
      <Box bg="#6C47FF">
        <PageContainer fillPageHeight={false}>
          <Flex direction="column" px={4} mt="88px" align="center">
            <Heading
              fontSize="6xl"
              lineHeight="93%"
              letterSpacing="tight"
              color="white"
            >
              Easily share your expertise
            </Heading>
            <HStack mt={5}>
              <Button leftIcon={<Text>⛺️</Text>}>Camping</Button>
              <Button leftIcon={<Text>🎧</Text>}>Audio</Button>
              <Button leftIcon={<Text>📸</Text>}>Photograph</Button>
              <Button leftIcon={<Text>🎹</Text>}>Music Gear</Button>
              <Button leftIcon={<Text>🏠</Text>}>Lifestyle</Button>
            </HStack>
            <Box>
              <Pack
                pack={{
                  title: 'Camping 101',
                  description:
                    'Camping can be a fun way to explore the great outdoors, but having the right gear can make all the difference in your comfort and safety while in nature.',
                  packItems: [],
                }}
              />
            </Box>
          </Flex>
        </PageContainer>
      </Box>
    </>
  )
}

export default HomePage
