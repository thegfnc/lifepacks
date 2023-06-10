import { useRef } from 'react'

import {
  Alert,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertIcon,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { MdDeleteOutline, MdMoreHoriz, MdOutlineModeEdit } from 'react-icons/md'
import type {
  FindPackQuery,
  FindPackQueryVariables,
  DeletePackMutation,
  DeletePackMutationVariables,
} from 'types/graphql'

import { Link, navigate, routes, useParams } from '@redwoodjs/router'
import {
  CellSuccessProps,
  CellFailureProps,
  useMutation,
  MetaTags,
  Head,
} from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import PublishSuccessDrawer from 'src/components/PublishSuccessDrawer/PublishSuccessDrawer'
import ShareMenu from 'src/components/ShareMenu/ShareMenu'
import getLogoCard from 'src/helpers/getLogoCard'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

import Pack from '../../components/Pack/Pack'
import BylineCell from '../BylineCell'

type PackCellSuccessProps = CellSuccessProps<
  FindPackQuery,
  FindPackQueryVariables
> & {
  username: string
  slug: string
  setMetaTags?: boolean
}

export const QUERY = gql`
  query FindPackQuery($username: String!, $slug: String!) {
    pack(username: $username, slug: $slug) {
      id
      title
      description
      createdAt
      packItems {
        id
        imageUrl
        purchaseUrl
        title
        description
      }
    }
    userProfile(username: $username) {
      givenName
      familyName
      imageUrl
      username
    }
  }
`

const MUTATION = gql`
  mutation DeletePackMutation($id: Int!) {
    deletePack(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindPackQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  username,
  slug,
  pack,
  userProfile,
  setMetaTags = false,
}: PackCellSuccessProps) => {
  const { currentUserProfile } = useCurrentUserProfile()
  const isBylineVisible = useBreakpointValue({ base: false, md: true })
  const {
    isOpen: isDeleteAlertOpen,
    onOpen: onDeleteAlertOpen,
    onClose: onDeleteAlertClose,
  } = useDisclosure()
  const cancelDeleteRef = useRef()

  const { isAuthenticated } = useAuth()
  const { published } = useParams()
  const {
    isOpen: isPublishSuccessDrawerOpen,
    onClose: onPublishSuccessDrawerClose,
  } = useDisclosure({
    defaultIsOpen: Boolean(published),
  })

  // Remove the ?published=true from url after using the value to launch the drawer
  if (published) {
    navigate(routes.pack({ username, slug }), { replace: true })
  }

  const [mutate, { loading, error }] = useMutation<
    DeletePackMutation,
    DeletePackMutationVariables
  >(MUTATION, {
    onCompleted: () => {
      onDeleteAlertClose()
      navigate(routes.userProfile({ username }))
    },
  })

  const deletePack = () => {
    mutate({ variables: { id: pack.id } })
  }

  return (
    <>
      {setMetaTags && (
        <>
          <MetaTags
            title={
              pack.title +
              ' by ' +
              getUserDisplayName(
                userProfile.givenName,
                userProfile.familyName,
                userProfile.username
              )
            }
            description={pack.description}
            ogType="article"
            ogUrl={`https://lifepacks.co${routes.pack({ username, slug })}`}
            ogContentUrl={
              pack.packItems[0]?.imageUrl ||
              userProfile.imageUrl ||
              getLogoCard({ color: 'random' })
            }
          />
          <Head>
            <meta
              property="og:article:published_time"
              content={pack.createdAt}
            />
            <meta
              property="og:article:author"
              content={getUserDisplayName(
                userProfile.givenName,
                userProfile.familyName,
                userProfile.username
              )}
            />
          </Head>
        </>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      )}

      <Stack spacing={6}>
        <Flex
          alignItems="center"
          justifyContent={{ base: 'flex-end', md: 'space-between' }}
        >
          {isBylineVisible && (
            <BylineCell username={username} date={pack.createdAt} />
          )}
          <HStack>
            <ShareMenu
              shareUrl={
                'https://lifepacks.co' + routes.pack({ username, slug })
              }
              shareTitle={pack.title}
            />
            {currentUserProfile?.username === username && (
              <Menu>
                <MenuButton
                  as={IconButton}
                  aria-label="Options"
                  icon={<MdMoreHoriz size="24px" />}
                  variant="ghost"
                  colorScheme="gray"
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
          </HStack>
        </Flex>
        <Pack pack={pack} />
      </Stack>

      {isAuthenticated && currentUserProfile?.username === username && (
        <PublishSuccessDrawer
          isOpen={isPublishSuccessDrawerOpen}
          onClose={onPublishSuccessDrawerClose}
          shareUrl={'https://lifepacks.co' + routes.pack({ username, slug })}
          shareTitle={pack.title}
        />
      )}

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
    </>
  )
}
