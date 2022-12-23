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
  useColorModeValue,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'

type AppLayoutProps = {
  children?: React.ReactNode
}

const NavLink = ({ route, label }: { route: string; label: string }) => (
  <Link to={route}>{label}</Link>
)

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  const Links = [
    { route: routes.home(), label: 'Contact' },
    { route: routes.home(), label: 'Dashboard' },
    { route: routes.home(), label: 'Team' },
  ]

  const onClickLogout = async () => {
    await logOut()
    navigate(routes.home())
  }

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
            <HStack mr="4" dir="horizontal">
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
                </>
              ) : (
                <>
                  <Link to={routes.signUp()}>Sign Up</Link>
                  <Link to={routes.logIn()}>Log In</Link>
                </>
              )}
            </HStack>
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
          </Flex>
        </Flex>
      </Box>
      {children}
    </>
  )
}

export default AppLayout
