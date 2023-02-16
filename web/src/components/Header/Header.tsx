import {
  Button,
  Flex,
  Heading,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Link as ChakraLink,
  Avatar,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

const Header = () => {
  const {
    currentUser,
    isAuthenticated,
    loading: isAuthLoading,
    logOut,
  } = useAuth()
  const { data: currentUserProfileData, loading: isCurrentUserProfileLoading } =
    useCurrentUserProfile()
  const { currentUserProfile } = currentUserProfileData || {}

  return (
    <>
      <Flex
        bg={'white'}
        borderBottomColor={'blackAlpha.200'}
        borderBottomWidth={'1px'}
        alignItems={'center'}
        justifyContent="center"
        h={'4.5rem'}
      >
        <Flex width="100%" maxWidth={'7xl'} px={8} alignItems={'center'}>
          <Heading
            as={Link}
            to={routes.home()}
            size="md"
            color={'blackAlpha.900'}
          >
            Lifepacks
          </Heading>

          <Flex alignItems={'center'} justifyContent="flex-end" flexGrow={1}>
            {isAuthLoading || isCurrentUserProfileLoading ? (
              <Spinner />
            ) : (
              <HStack spacing={3} dir="horizontal">
                {isAuthenticated && currentUserProfile ? (
                  <>
                    <Button
                      variant={'solid'}
                      colorScheme={'gray'}
                      size={'md'}
                      as={Link}
                      to={routes.newPack()}
                    >
                      Create Pack
                    </Button>
                    <Menu>
                      <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        h={10}
                        w={10}
                      >
                        <Avatar
                          size="md"
                          src={currentUserProfile?.imageUrl}
                          name={currentUserProfile?.givenName}
                        />
                      </MenuButton>
                      <MenuList>
                        <Text px={3}>{currentUser.email}</Text>
                        <MenuDivider />
                        <MenuItem
                          as={Link}
                          to={routes.user({
                            username: currentUserProfile.username,
                          })}
                        >
                          View Profile
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={logOut}>Log Out</MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                ) : (
                  <>
                    <ChakraLink as={Link} to={routes.logIn()} color="gray.500">
                      Log In
                    </ChakraLink>
                    <Button
                      as={Link}
                      to={routes.signUp()}
                      variant={'solid'}
                      colorScheme={'teal'}
                      size={'md'}
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
    </>
  )
}

export default Header
