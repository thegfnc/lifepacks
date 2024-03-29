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
  Stack,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { MdDeleteOutline, MdMoreHoriz, MdOutlineModeEdit } from 'react-icons/md'
import sanitizeHtml from 'sanitize-html'
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

type PackPartial = Pick<
  Pack,
  'id' | 'createdAt' | 'slug' | 'title' | 'description'
> & {
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
        <Flex height={{ base: '192px', xl: '240px' }}>
          <Box
            as={Flex}
            direction="column"
            justify="space-between"
            p={6}
            flexGrow={1}
          >
            <Stack>
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
                      display="flex"
                    >
                      <Avatar
                        size={'xs'}
                        h={5}
                        w={5}
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
                      <Text ml={2} fontSize="sm" lineHeight={1}>
                        {getUserDisplayName(
                          pack.userProfile.givenName,
                          pack.userProfile.familyName,
                          pack.userProfile.username
                        )}
                      </Text>
                    </ChakraLink>
                  </Flex>
                </>
              )}
              <Heading
                fontSize="21px"
                lineHeight="28px"
                fontWeight="bold"
                letterSpacing=".2px"
                noOfLines={{ base: 2, xl: 3 }}
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
                  dangerouslySetInnerHTML={{ __html: pack.title }}
                />
              </Heading>
              <Text
                fontSize="14px"
                lineHeight="20px"
                color="blackAlpha.600"
                noOfLines={{ base: 1, xl: 2 }}
              >
                {sanitizeHtml(pack.description, {
                  allowedTags: [],
                  allowedAttributes: {},
                })}
              </Text>
            </Stack>
            <Flex align="center" w="full" justify="space-between">
              <HStack spacing="6px">
                <Text color="blackAlpha.600" fontSize="14px" lineHeight="20px">
                  {format(new Date(pack.createdAt), 'MMM d, yyyy')}
                </Text>
              </HStack>
              {isCurrentUserPack && (
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<MdMoreHoriz size="20px" />}
                    variant="ghost"
                    colorScheme="gray"
                    size="xs"
                    padding="2px"
                    color="blackAlpha.700"
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
            minW={{ base: '288px', xl: '338px' }}
            maxW={{ base: '288px', xl: '338px' }}
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
              <Center h="full" w="full">
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
                  borderRadius="lg"
                />
              </Center>
            </GridItem>
            {numberOfImages === 3 && (
              <>
                <GridItem p={{ base: 4, xl: 6 }} colSpan={2} rowSpan={1}>
                  <Center h="full" w="full">
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
                      borderRadius="lg"
                    />
                  </Center>
                </GridItem>
                <GridItem
                  p={{ base: 4, xl: 6 }}
                  borderTopWidth={'1px'}
                  borderColor="blackAlpha.200"
                  colSpan={2}
                >
                  <Center h="full" w="full">
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
                      borderRadius="lg"
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
          isCentered={true}
        >
          <AlertDialogOverlay>
            <AlertDialogContent borderRadius="3xl">
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Pack
              </AlertDialogHeader>

              <AlertDialogBody>
                {'Are you sure you want to delete this pack?'}
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button
                  variant="secondary"
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
