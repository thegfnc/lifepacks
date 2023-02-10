import { AddIcon } from '@chakra-ui/icons'
import {
  Avatar,
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
        h={16}
      >
        <Flex width="100%" maxWidth={'7xl'} px={10}>
          <HStack
            spacing={{ base: 2, md: 8 }}
            ml={{ base: 2, md: 0 }}
            alignItems={'center'}
          >
            <Heading
              as={Link}
              to={routes.home()}
              size="md"
              color={'blackAlpha.900'}
            >
              Lifepacks
            </Heading>
          </HStack>
          <Flex alignItems={'center'} justifyContent="flex-end" flexGrow={1}>
            {isAuthLoading || isCurrentUserProfileLoading ? (
              <Spinner />
            ) : (
              <HStack spacing={3} dir="horizontal">
                {isAuthenticated && currentUserProfile ? (
                  <>
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
                    <Button
                      variant={'solid'}
                      colorScheme={'teal'}
                      size={'sm'}
                      mr={4}
                      leftIcon={<AddIcon />}
                      as={Link}
                      to={routes.pack({ slug: 'new' })}
                    >
                      New Pack
                    </Button>
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
      </Flex>
    </>
  )
}

export default Header
