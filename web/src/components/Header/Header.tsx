import { ReactNode, useEffect } from 'react'

import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Avatar,
  Box,
  Link as ChakraLink,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Show,
  Hide,
  IconButton,
  Stack,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  MdLogout,
  MdOutlineAccountCircle,
  MdOutlineHelpOutline,
} from 'react-icons/md'

import { Link, routes, useLocation } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

import Logo from '../Logo/Logo'

type HeaderProps = {
  ctaComponent?: ReactNode
}

export const HEADER_HEIGHT = '80px'

const Header = ({ ctaComponent }: HeaderProps) => {
  const { isAuthenticated, loading: isAuthLoading, logOut } = useAuth()
  const { pathname } = useLocation()
  const {
    currentUserProfile,
    loading: isCurrentUserProfileLoading,
    refetch,
  } = useCurrentUserProfile()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  const logOutAndRefetchCurrentUserProfile = () => {
    logOut()
    refetch()
  }

  const userDisplayName = getUserDisplayName(
    currentUserProfile?.givenName,
    currentUserProfile?.familyName,
    currentUserProfile?.username
  )

  // Build menu items
  const menu = []

  if ((isAuthenticated && currentUserProfile) || !isAuthenticated) {
    menu.push({
      name: 'About',
      to: routes.about(),
      isActive: pathname === routes.about(),
    })
    menu.push({
      name: 'FAQ',
      to: routes.faq(),
      isActive: pathname === routes.faq(),
    })
  }

  if (!isAuthenticated) {
    menu.push({
      name: 'Log In',
      to: routes.logIn(),
      isActive: pathname === routes.logIn(),
    })
  }

  // Determine main action button
  let mainActionButton

  if (isAuthenticated && currentUserProfile) {
    mainActionButton = ctaComponent || (
      <Button size="lg" as={Link} to={routes.newPack()} variant="primary">
        Create Pack
      </Button>
    )
  } else if (isAuthenticated) {
    mainActionButton = (
      <Button
        size="lg"
        onClick={logOutAndRefetchCurrentUserProfile}
        variant="outline"
      >
        Log Out
      </Button>
    )
  } else {
    mainActionButton = (
      <Button size="lg" as={Link} to={routes.signUp()} variant="primary">
        Sign Up
      </Button>
    )
  }

  return (
    <>
      <Flex
        as="header"
        alignItems={'center'}
        justifyContent="center"
        h={HEADER_HEIGHT}
        color={pathname === routes.home() ? 'marketing.deepBlue' : 'inherit'}
      >
        <Flex
          width="100%"
          maxWidth={'7xl'}
          px={{ base: 4, md: 10 }}
          alignItems={'center'}
        >
          <Logo
            color={
              pathname === routes.home()
                ? 'marketing.deepBlue'
                : 'blackAlpha.900'
            }
          />

          <Flex alignItems={'center'} justifyContent="flex-end" flexGrow={1}>
            {isAuthLoading || isCurrentUserProfileLoading ? (
              <Spinner />
            ) : (
              <HStack spacing={2} dir="horizontal">
                <Show above="md">
                  <HStack spacing={0}>
                    {menu.map((item) => (
                      <ChakraLink
                        key={item.to}
                        as={Link}
                        to={item.to}
                        px={3}
                        fontWeight={500}
                        textDecoration={item.isActive ? 'underline' : 'none'}
                      >
                        {item.name}
                      </ChakraLink>
                    ))}
                  </HStack>
                </Show>

                {mainActionButton}

                {isAuthenticated && currentUserProfile && (
                  <>
                    <Menu placement="bottom-end">
                      <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        h={12}
                        w={12}
                      >
                        <Avatar
                          h={12}
                          w={12}
                          src={getImageUrlWithTransform({
                            src: currentUserProfile?.imageUrl,
                            transform: {
                              width: 96,
                              height: 96,
                              resize: 'cover',
                            },
                          })}
                          name={userDisplayName}
                        />
                      </MenuButton>
                      <MenuList borderRadius="xl">
                        {currentUserProfile?.username && (
                          <Box px={3}>
                            <Text fontWeight="medium">{userDisplayName}</Text>
                            {!userDisplayName.endsWith(
                              currentUserProfile.username
                            ) && (
                              <Text fontSize="xs" color="blackAlpha.600">
                                {'@' + currentUserProfile.username}
                              </Text>
                            )}
                          </Box>
                        )}
                        <MenuDivider />
                        <MenuItem
                          as={Link}
                          to={routes.userProfile({
                            username: currentUserProfile?.username,
                          })}
                          icon={<MdOutlineAccountCircle size="20px" />}
                        >
                          View Profile
                        </MenuItem>
                        <MenuItem
                          as={Link}
                          to={routes.faq()}
                          icon={<MdOutlineHelpOutline size="20px" />}
                        >
                          Help
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem
                          onClick={logOutAndRefetchCurrentUserProfile}
                          icon={<MdLogout size="20px" />}
                        >
                          Log Out
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                )}

                <Hide above="md">
                  <IconButton
                    icon={<HamburgerIcon />}
                    onClick={onOpen}
                    aria-label="Open Header Menu"
                    variant="ghost"
                    fontSize="2xl"
                    mr="-6px"
                    ml="-4px"
                  />
                </Hide>
              </HStack>
            )}
          </Flex>
        </Flex>
      </Flex>

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton size="lg" right={2} borderRadius="full" />
          <DrawerBody>
            <Stack py={12} spacing={4}>
              {menu.map((item) => (
                <ChakraLink
                  key={item.to}
                  as={Link}
                  to={item.to}
                  px={3}
                  fontWeight={500}
                  textDecoration={item.isActive ? 'underline' : 'none'}
                  fontSize="lg"
                >
                  {item.name}
                </ChakraLink>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header
