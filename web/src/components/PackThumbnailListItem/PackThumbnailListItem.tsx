import { useRef } from 'react'

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Avatar,
  Button,
  Card,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Link as ChakraLink,
  LinkBox,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
  Box,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { MdDeleteOutline, MdMoreHoriz, MdOutlineModeEdit } from 'react-icons/md'
import {
  DeletePackMutation,
  DeletePackMutationVariables,
  Pack,
  PackItem,
  UserProfile,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY as PACK_LIST_QUERY } from 'src/cells/PackListCell'
import { QUERY as PACKS_MOST_RECENT_QUERY } from 'src/cells/PacksMostRecentCell'
import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'
import { trackSelectPack, trackSelectUserProfile } from 'src/lib/analytics'

import ImageFallback from '../ImageFallback/ImageFallback'

type PackPartial = Pick<Pack, 'id' | 'createdAt' | 'slug' | 'title'> & {
  packItems: Pick<PackItem, 'imageUrl' | 'title'>[]
  userProfile: Pick<
    UserProfile,
    'username' | 'givenName' | 'familyName' | 'imageUrl'
  >
}

type PackThumbnailListItemProps = {
  pack: PackPartial
  showByline?: boolean
}

const MUTATION = gql`
  mutation DeletePackMutation($id: Int!) {
    deletePack(id: $id) {
      id
    }
  }
`

const PackThumbnailListItem = ({
  pack,
  showByline = false,
}: PackThumbnailListItemProps) => {
  const { currentUserProfile } = useCurrentUserProfile()
  const {
    isOpen: isDeleteAlertOpen,
    onOpen: onDeleteAlertOpen,
    onClose: onDeleteAlertClose,
  } = useDisclosure()
  const cancelDeleteRef = useRef()

  const [mutate, { loading }] = useMutation<
    DeletePackMutation,
    DeletePackMutationVariables
  >(MUTATION, {
    onCompleted: () => {
      onDeleteAlertClose()
      toast.success('Pack deleted.')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [
      { query: PACKS_MOST_RECENT_QUERY },
      {
        query: PACK_LIST_QUERY,
        variables: { username: currentUserProfile?.username },
      },
    ],
  })

  const deletePack = () => {
    mutate({ variables: { id: pack.id } })
  }

  const isCurrentUserPack =
    currentUserProfile?.username === pack.userProfile.username
  const numberOfImages = Math.min(pack.packItems.length, 3)

  return (
    <>
      <LinkBox
        as={Card}
        key={pack.id}
        borderRadius="24px"
        transition="box-shadow .15s ease-in-out"
        _hover={{ boxShadow: 'md' }}
        _active={{ boxShadow: 'sm' }}
      >
        <Flex height={{ base: '192px', xl: '224px' }}>
          <Box
            as={Flex}
            direction="column"
            justify="space-between"
            p={6}
            flexGrow={1}
          >
            <Heading
              fontSize="20px"
              lineHeight="short"
              fontWeight="medium"
              letterSpacing=".2px"
              noOfLines={3}
            >
              <LinkOverlay
                as={Link}
                to={routes.pack({
                  username: pack.userProfile.username,
                  slug: pack.slug,
                })}
                onClick={() => {
                  trackSelectPack(pack.id, pack.slug)
                }}
              >
                {pack.title}
              </LinkOverlay>
            </Heading>
            <Flex align="center" w="full" justify="space-between">
              <HStack spacing="6px">
                {showByline && (
                  <>
                    <Flex alignItems="center">
                      <ChakraLink
                        as={Link}
                        to={routes.userProfile({
                          username: pack.userProfile.username,
                        })}
                        onClick={() =>
                          trackSelectUserProfile(pack.userProfile.username)
                        }
                      >
                        <Avatar
                          size={'xs'}
                          src={getImageUrlWithTransform({
                            src: pack.userProfile.imageUrl,
                            transform: {
                              width: 48,
                              height: 48,
                              resize: 'cover',
                            },
                          })}
                          name={getUserDisplayName(
                            pack.userProfile.givenName,
                            pack.userProfile.familyName,
                            pack.userProfile.username
                          )}
                        />
                      </ChakraLink>
                      <ChakraLink
                        as={Link}
                        to={routes.userProfile({
                          username: pack.userProfile.username,
                        })}
                        onClick={() =>
                          trackSelectUserProfile(pack.userProfile.username)
                        }
                      >
                        <Text ml={2} fontSize="sm">
                          {getUserDisplayName(
                            pack.userProfile.givenName,
                            pack.userProfile.familyName,
                            pack.userProfile.username
                          )}
                        </Text>
                      </ChakraLink>
                    </Flex>
                    <Text color="blackAlpha.600">{' · '}</Text>
                  </>
                )}
                <Text color="blackAlpha.600" fontSize="sm">
                  {format(new Date(pack.createdAt), 'MMM d, yyyy')}
                </Text>
              </HStack>
              {isCurrentUserPack && (
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<MdMoreHoriz size="24px" />}
                    variant="ghost"
                    colorScheme="gray"
                    size="xs"
                  />
                  <MenuList borderRadius="xl">
                    <MenuItem
                      as={Link}
                      to={routes.editPack({ id: pack.id })}
                      icon={<MdOutlineModeEdit size="24px" />}
                    >
                      Edit Pack
                    </MenuItem>
                    <MenuItem
                      icon={<MdDeleteOutline size="24px" />}
                      color="red.500"
                      onClick={onDeleteAlertOpen}
                    >
                      Delete Pack
                    </MenuItem>
                  </MenuList>
                </Menu>
              )}
            </Flex>
          </Box>
          <Grid
            templateRows="repeat(2, minmax(0, 1fr))"
            templateColumns="repeat(6, minmax(0, 1fr))"
            minW="338px"
            maxW="338px"
            borderLeft="1px solid"
            borderColor="blackAlpha.200"
          >
            <GridItem
              rowSpan={2}
              colSpan={numberOfImages === 3 ? 4 : 6}
              p={{ base: 4, xl: 6 }}
              borderRightWidth={numberOfImages === 3 ? '1px' : 0}
              borderColor="blackAlpha.200"
            >
              <Center borderRadius="xl" overflow="hidden" h="full" w="full">
                <Image
                  src={getImageUrlWithTransform({
                    src: pack.packItems[0]?.imageUrl,
                    transform: { width: 950, height: 950 },
                  })}
                  fit="contain"
                  alt={pack.packItems[0]?.title}
                  fallback={<ImageFallback />}
                  maxH="full"
                  maxW="full"
                />
              </Center>
            </GridItem>
            {numberOfImages === 3 && (
              <>
                <GridItem p={{ base: 4, xl: 6 }} colSpan={2} rowSpan={1}>
                  <Center borderRadius="xl" overflow="hidden" h="full" w="full">
                    <Image
                      src={getImageUrlWithTransform({
                        src: pack.packItems[1]?.imageUrl,
                        transform: { width: 450, height: 450 },
                      })}
                      fit="contain"
                      alt={pack.packItems[1]?.title}
                      fallback={<ImageFallback />}
                      maxH="full"
                      maxW="full"
                    />
                  </Center>
                </GridItem>
                <GridItem
                  p={{ base: 4, xl: 6 }}
                  borderTopWidth={'1px'}
                  borderColor="blackAlpha.200"
                  colSpan={2}
                >
                  <Center borderRadius="xl" overflow="hidden" h="full" w="full">
                    <Image
                      src={getImageUrlWithTransform({
                        src: pack.packItems[2]?.imageUrl,
                        transform: { width: 450, height: 450 },
                      })}
                      fit="contain"
                      alt={pack.packItems[2]?.title}
                      fallback={<ImageFallback />}
                      maxH="full"
                      maxW="full"
                    />
                  </Center>
                </GridItem>
              </>
            )}
          </Grid>
        </Flex>
      </LinkBox>

      {isCurrentUserPack && (
        <AlertDialog
          isOpen={isDeleteAlertOpen}
          leastDestructiveRef={cancelDeleteRef}
          onClose={onDeleteAlertClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Pack
              </AlertDialogHeader>

              <AlertDialogBody>
                {'Are you sure you want to delete this pack?'}
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  variant="outline"
                  colorScheme="gray"
                  ref={cancelDeleteRef}
                  onClick={onDeleteAlertClose}
                >
                  Cancel
                </Button>
                <Button
                  isLoading={loading}
                  colorScheme="red"
                  onClick={deletePack}
                  ml={3}
                >
                  Delete Pack
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </>
  )
}

export default PackThumbnailListItem
