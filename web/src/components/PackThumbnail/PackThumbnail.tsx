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

import { QUERY as LATEST_PACKS_QUERY } from 'src/cells/LatestPacksCell'
import { QUERY as PACK_LIST_QUERY } from 'src/cells/PackListCell'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

import ImageFallback from '../ImageFallback/ImageFallback'

type PackPartial = Pick<Pack, 'id' | 'createdAt' | 'slug' | 'title'> & {
  packItems: Pick<PackItem, 'imageUrl' | 'title'>[]
  userProfile: Pick<
    UserProfile,
    'username' | 'givenName' | 'familyName' | 'imageUrl'
  >
}

type PackThumbnailProps = {
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

const PackThumbnail = ({ pack, showByline = false }: PackThumbnailProps) => {
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
      { query: LATEST_PACKS_QUERY },
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
            colSpan={numberOfImages === 3 ? 4 : numberOfImages === 2 ? 3 : 6}
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
            <Flex align="center" w="full" justify="space-between">
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
          </GridItem>
        </Grid>
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

export default PackThumbnail