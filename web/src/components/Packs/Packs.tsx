import {
  Avatar,
  Card,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { Pack, PackItem, UserProfile } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import getUserDisplayName from 'src/helpers/getUserDisplayName'

import ImageFallback from '../ImageFallback/ImageFallback'

type PackPartial = Pick<Pack, 'id' | 'createdAt' | 'slug' | 'title'> & {
  packItems: Pick<PackItem, 'imageUrl' | 'title'>[]
  userProfile: Pick<
    UserProfile,
    'username' | 'givenName' | 'familyName' | 'imageUrl'
  >
}

type PacksProps = {
  packs: PackPartial[]
  showByline?: boolean
}

const Packs = ({ packs, showByline = false }: PacksProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
      {packs.map((pack) => {
        const numberOfImages = Math.min(pack.packItems.length, 3)

        return (
          <LinkBox
            as={Card}
            key={pack.id}
            borderRadius="24px"
            css={{ aspectRatio: '1 / 1' }}
          >
            <Grid
              templateRows="repeat(3, minmax(0, 1fr))"
              templateColumns="repeat(6, minmax(0, 1fr))"
              h="full"
              w="full"
            >
              <GridItem
                rowSpan={2}
                colSpan={
                  numberOfImages === 3 ? 4 : numberOfImages === 2 ? 3 : 6
                }
                as={Center}
                p={4}
                borderRightWidth={numberOfImages >= 2 ? '1px' : 0}
                borderColor="blackAlpha.200"
              >
                <Image
                  src={pack.packItems[0]?.imageUrl}
                  fit="contain"
                  alt={pack.packItems[0]?.title}
                  fallback={<ImageFallback />}
                  maxH="full"
                  maxW="full"
                  borderRadius="xl"
                />
              </GridItem>
              {numberOfImages >= 2 && (
                <GridItem
                  as={Center}
                  p={4}
                  colSpan={numberOfImages === 2 ? 3 : 2}
                  rowSpan={numberOfImages === 2 ? 2 : 1}
                >
                  <Image
                    src={pack.packItems[1]?.imageUrl}
                    fit="contain"
                    alt={pack.packItems[1]?.title}
                    fallback={<ImageFallback />}
                    maxH="full"
                    maxW="full"
                    borderRadius="xl"
                  />
                </GridItem>
              )}
              {numberOfImages === 3 && (
                <GridItem
                  as={Center}
                  p={4}
                  borderTopWidth={'1px'}
                  borderColor="blackAlpha.200"
                  colSpan={2}
                >
                  <Image
                    src={pack.packItems[2]?.imageUrl}
                    fit="contain"
                    alt={pack.packItems[2]?.title}
                    fallback={<ImageFallback />}
                    maxH="full"
                    maxW="full"
                    borderRadius="xl"
                  />
                </GridItem>
              )}
              <GridItem
                as={Flex}
                direction="column"
                justify="space-between"
                colSpan={6}
                borderTopWidth={'1px'}
                borderColor="blackAlpha.200"
                p={4}
              >
                <Heading
                  fontSize={{ base: '22px', md: '26px' }}
                  lineHeight={{ base: 6, md: 7 }}
                  fontWeight="bold"
                  noOfLines={2}
                >
                  <LinkOverlay
                    as={Link}
                    to={routes.pack({
                      username: pack.userProfile.username,
                      slug: pack.slug,
                    })}
                  >
                    {pack.title}
                  </LinkOverlay>
                </Heading>
                <Flex align="center" w="full">
                  <HStack spacing="6px">
                    {showByline && (
                      <>
                        <ChakraLink
                          fontSize="sm"
                          as={Link}
                          to={routes.userProfile({
                            username: pack.userProfile.username,
                          })}
                          display="flex"
                          alignItems="center"
                        >
                          <Avatar
                            size={'xs'}
                            src={pack.userProfile.imageUrl}
                            name={getUserDisplayName(
                              pack.userProfile.givenName,
                              pack.userProfile.familyName,
                              pack.userProfile.username
                            )}
                          />
                          <Text as="span" ml={2}>
                            {getUserDisplayName(
                              pack.userProfile.givenName,
                              pack.userProfile.familyName,
                              pack.userProfile.username
                            )}
                          </Text>
                        </ChakraLink>
                        <Text color="blackAlpha.600">{'·'}</Text>
                      </>
                    )}
                    <Text color="blackAlpha.600" fontSize="sm">
                      {format(new Date(pack.createdAt), 'MMM d, yyyy')}
                    </Text>
                  </HStack>
                </Flex>
              </GridItem>
            </Grid>
          </LinkBox>
        )
      })}
    </SimpleGrid>
  )
}

export default Packs
