import { ReactNode } from 'react'

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

export const DESKTOP_HEADER_HEIGHT = '80px'

const Header = ({ ctaComponent }: HeaderProps) => {
  const { isAuthenticated, loading: isAuthLoading, logOut } = useAuth()
  const { pathname } = useLocation()
  const {
    currentUserProfile,
    loading: isCurrentUserProfileLoading,
    refetch,
  } = useCurrentUserProfile()

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
      <Button size={'lg'} as={Link} to={routes.newPack()} variant="primary">
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
        h={DESKTOP_HEADER_HEIGHT}
      >
        <Flex
          width="100%"
          maxWidth={'7xl'}
          px={{ base: 4, md: 10 }}
          alignItems={'center'}
        >
          <Logo />

          <Flex alignItems={'center'} justifyContent="flex-end" flexGrow={1}>
            {isAuthLoading || isCurrentUserProfileLoading ? (
              <Spinner />
            ) : (
              <HStack spacing={2} dir="horizontal">
                <HStack spacing={0}>
                  {menu.map((item) => (
                    <ChakraLink
                      key={item.to}
                      as={Link}
                      to={item.to}
                      px={4}
                      fontWeight={500}
                      textDecoration={item.isActive ? 'underline' : 'none'}
                    >
                      {item.name}
                    </ChakraLink>
                  ))}
                </HStack>

                {mainActionButton}

                {isAuthenticated && currentUserProfile ? (
                  <>
                    <Menu placement="bottom-end">
                      <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        h={10}
                        w={10}
                      >
                        <Avatar
                          h={10}
                          w={10}
                          src={getImageUrlWithTransform({
                            src: currentUserProfile?.imageUrl,
                            transform: {
                              width: 80,
                              height: 80,
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
                ) : null}
              </HStack>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default Header
