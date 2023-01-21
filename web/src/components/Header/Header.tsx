import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Stack,
  useDisclosure,
  Link as ChakraLink,
} from '@chakra-ui/react'

import { CurrentUser } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type HeaderProps = {
  isAuthenticated: boolean
  isAuthLoading: boolean
  currentUser: CurrentUser
  logOut: () => void
}

const Header = ({
  isAuthenticated,
  isAuthLoading,
  currentUser,
  logOut,
}: HeaderProps) => {
  const {
    isOpen: isOpenMobileMenu,
    onOpen: onOpenMobileMenu,
    onClose: onCloseMobileMenu,
  } = useDisclosure()

  const Links = [
    { route: routes.home(), label: 'Categories' },
    { route: routes.home(), label: 'About' },
    { route: routes.home(), label: 'Contact' },
  ]

  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={16} alignItems={'center'}>
          <IconButton
            size={'md'}
            icon={isOpenMobileMenu ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpenMobileMenu ? onCloseMobileMenu : onOpenMobileMenu}
          />
          <HStack
            spacing={{ base: 2, md: 8 }}
            ml={{ base: 2, md: 0 }}
            alignItems={'center'}
          >
            <Heading as={Link} to={routes.home()} size="lg" color={'gray.800'}>
              Lifepacks
            </Heading>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map(({ route, label }) => (
                <ChakraLink as={Link} key={label} to={route}>
                  {label}
                </ChakraLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'} justifyContent="flex-end" flexGrow={1}>
            {isAuthLoading ? (
              <Spinner />
            ) : (
              <HStack spacing={3} dir="horizontal">
                {isAuthenticated ? (
                  <>
                    <ChakraLink
                      as={Link}
                      to={routes.home()}
                      display={{ base: 'none', md: 'initial' }}
                    >
                      Logged in as {currentUser.email}
                    </ChakraLink>{' '}
                    <Button
                      variant={'solid'}
                      colorScheme={'teal'}
                      size={'sm'}
                      mr={4}
                      onClick={logOut}
                    >
                      Logout
                    </Button>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}
                      >
                        <Avatar
                          size={'sm'}
                          src={
                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                          }
                        />
                      </MenuButton>
                      <MenuList>
                        <MenuItem>Link 1</MenuItem>
                        <MenuItem>Link 2</MenuItem>
                        <MenuDivider />
                        <MenuItem>Link 3</MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                ) : (
                  <>
                    <ChakraLink as={Link} to={routes.logIn()}>
                      Log In
                    </ChakraLink>
                    <Button
                      as={Link}
                      to={routes.signUp()}
                      variant={'solid'}
                      colorScheme={'teal'}
                      size={'sm'}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </HStack>
            )}
          </Flex>
        </Flex>
      </Box>
      {isOpenMobileMenu ? (
        <Box
          pb={6}
          pt={2}
          px={6}
          display={{ md: 'none' }}
          pos="absolute"
          bg={'gray.100'}
          w="100%"
          zIndex={1}
        >
          <Stack as={'nav'} spacing={4}>
            {Links.map(({ label, route }) => (
              <ChakraLink as={Link} key={label} to={route}>
                {label}
              </ChakraLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  )
}

export default Header
