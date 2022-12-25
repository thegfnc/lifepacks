import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type AppLayoutProps = {
  children?: React.ReactNode
}

const NavLink = ({ route, label }: { route: string; label: string }) => (
  <Link to={route}>{label}</Link>
)

const AppLayout = ({ children }: AppLayoutProps) => {
  const {
    isAuthenticated,
    loading: isAuthLoading,
    currentUser,
    logOut,
  } = useAuth()

  const Links = [
    { route: routes.home(), label: 'Categories' },
    { route: routes.home(), label: 'About' },
    { route: routes.home(), label: 'Contact' },
  ]

  const onClickLogout = async () => {
    await logOut()
  }

  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Link to={routes.home()}>Logo</Link>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link.label}
                  route={link.route}
                  label={link.label}
                />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            {isAuthLoading ? (
              <Spinner />
            ) : (
              <HStack spacing={3} dir="horizontal">
                {isAuthenticated ? (
                  <>
                    <Link to={routes.home()}>
                      Logged in as {currentUser.email}
                    </Link>{' '}
                    <Button
                      variant={'solid'}
                      colorScheme={'teal'}
                      size={'sm'}
                      mr={4}
                      onClick={onClickLogout}
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
                    <Link to={routes.logIn()}>Log In</Link>
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
      {children}
    </>
  )
}

export default AppLayout
