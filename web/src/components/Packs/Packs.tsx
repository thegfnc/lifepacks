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
    <SimpleGrid spacing={6} columns={{ base: 1, sm: 2, md: 3 }}>
      {packs.map((pack) => {
        return (
          <LinkBox as={Card} key={pack.id} borderRadius="24px">
            <Grid
              templateRows="repeat(3, 1fr)"
              templateColumns="repeat(3, 1fr)"
              h="full"
              w="full"
            >
              <GridItem
                rowSpan={2}
                colSpan={2}
                as={Center}
                p={4}
                borderRightWidth={'1px'}
                borderColor="blackAlpha.200"
              >
                <Image
                  src={pack.packItems[0]?.imageUrl}
                  fit="contain"
                  alt={pack.packItems[0]?.title}
                  fallback={<ImageFallback />}
                />
              </GridItem>
              <GridItem as={Center} p={4}>
                <Image
                  src={pack.packItems[1]?.imageUrl}
                  fit="contain"
                  alt={pack.packItems[1]?.title}
                  fallback={<ImageFallback />}
                />
              </GridItem>
              <GridItem
                as={Center}
                p={4}
                borderTopWidth={'1px'}
                borderColor="blackAlpha.200"
              >
                <Image
                  src={pack.packItems[2]?.imageUrl}
                  fit="contain"
                  alt={pack.packItems[2]?.title}
                  fallback={<ImageFallback />}
                />
              </GridItem>
              <GridItem
                as={Flex}
                direction="column"
                justify="space-between"
                colSpan={3}
                borderTopWidth={'1px'}
                borderColor="blackAlpha.200"
                p={4}
              >
                <Heading fontSize="26px" lineHeight={7} fontWeight="bold">
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
                <Flex
                  mt={4}
                  justify={showByline ? 'space-between' : 'flex-end'}
                  w="full"
                >
                  {showByline && (
                    <HStack spacing={0}>
                      <ChakraLink
                        fontSize="sm"
                        as={Link}
                        to={routes.userProfile({
                          username: pack.userProfile.username,
                        })}
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
                      </ChakraLink>
                      <ChakraLink
                        fontSize="sm"
                        as={Link}
                        to={routes.userProfile({
                          username: pack.userProfile.username,
                        })}
                        pl={2}
                      >
                        {getUserDisplayName(
                          pack.userProfile.givenName,
                          pack.userProfile.familyName,
                          pack.userProfile.username
                        )}
                      </ChakraLink>
                    </HStack>
                  )}
                  <Text color="blackAlpha.600" fontSize="sm">
                    {format(new Date(pack.createdAt), 'MMM d, yyyy')}
                  </Text>
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
