import { ReactNode, useEffect, useRef } from 'react'

import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
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
  Link as ChakraLink,
  Box,
  IconButton,
  useDisclosure,
  Collapse,
  Stack,
  useOutsideClick,
} from '@chakra-ui/react'
import { MdLogout, MdOutlineAccountCircle } from 'react-icons/md'

import { Link, routes, useLocation } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

import Logo from '../Logo/Logo'

type HeaderProps = {
  ctaComponent?: ReactNode
}

const Header = ({ ctaComponent }: HeaderProps) => {
  const collapseRef = useRef()
  const { isAuthenticated, loading: isAuthLoading, logOut } = useAuth()
  const { pathname } = useLocation()
  const { isOpen, onToggle, onClose } = useDisclosure()
  const {
    data,
    loading: isCurrentUserProfileLoading,
    refetch,
  } = useCurrentUserProfile()

  // Close the navigation panel on route change and outside click
  useEffect(() => {
    onClose()
  }, [onClose, pathname])

  useOutsideClick({
    ref: collapseRef,
    handler: () => onClose(),
  })

  const logOutAndRefetchCurrentUserProfile = () => {
    logOut()
    refetch()
  }

  const userDisplayName = getUserDisplayName(
    data?.currentUserProfile?.givenName,
    data?.currentUserProfile?.familyName,
    data?.currentUserProfile?.username
  )

  const navigation = (
    <ChakraLink as={Link} to={routes.explore()}>
      Explore Packs
    </ChakraLink>
  )

  return (
    <>
      <Flex
        borderBottomColor={'blackAlpha.200'}
        borderBottomWidth={'1px'}
        alignItems={'center'}
        justifyContent="center"
        h={'4.5rem'}
      >
        <Flex
          width="100%"
          maxWidth={'7xl'}
          px={{ base: 4, md: 8 }}
          alignItems={'center'}
        >
          <Flex ml={-2} mr={2} display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={4} h={4} />
                ) : (
                  <HamburgerIcon w={6} h={6} />
                )
              }
              color="black"
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Logo />
          <Box ml={10} display={{ base: 'none', md: 'block' }}>
            {navigation}
          </Box>

          <Flex alignItems={'center'} justifyContent="flex-end" flexGrow={1}>
            {isAuthLoading || isCurrentUserProfileLoading ? (
              <Spinner />
            ) : (
              <HStack spacing={2} dir="horizontal">
                {isAuthenticated && data?.currentUserProfile ? (
                  <>
                    {ctaComponent || (
                      <Button size={'md'} as={Link} to={routes.newPack()}>
                        Create Pack
                      </Button>
                    )}
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
                          src={data?.currentUserProfile?.imageUrl}
                          name={userDisplayName}
                        />
                      </MenuButton>
                      <MenuList borderRadius="xl">
                        {data?.currentUserProfile?.username && (
                          <Box px={3}>
                            <Text fontWeight="medium">{userDisplayName}</Text>
                            {!userDisplayName.endsWith(
                              data.currentUserProfile.username
                            ) && (
                              <Text fontSize="xs" color="blackAlpha.600">
                                {'@' + data.currentUserProfile.username}
                              </Text>
                            )}
                          </Box>
                        )}
                        <MenuDivider />
                        <MenuItem
                          as={Link}
                          to={routes.userProfile({
                            username: data?.currentUserProfile?.username,
                          })}
                          icon={<MdOutlineAccountCircle size="20px" />}
                        >
                          View Profile
                        </MenuItem>
                        <MenuItem
                          onClick={logOutAndRefetchCurrentUserProfile}
                          icon={<MdLogout size="20px" />}
                        >
                          Log Out
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                ) : (
                  <>
                    <Button
                      as={Link}
                      to={routes.logIn()}
                      colorScheme="gray"
                      variant="outline"
                    >
                      Log In
                    </Button>
                    <Button
                      as={Link}
                      to={routes.signUp()}
                      colorScheme={'purple'}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </HStack>
            )}
          </Flex>
        </Flex>
      </Flex>
      <Collapse ref={collapseRef} in={isOpen} animateOpacity>
        <Stack
          p={4}
          borderBottomColor={'blackAlpha.200'}
          borderBottomWidth={'1px'}
        >
          {navigation}
        </Stack>
      </Collapse>
    </>
  )
}

export default Header
