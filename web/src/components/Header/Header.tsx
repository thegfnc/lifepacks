import { AddIcon } from '@chakra-ui/icons'
import {
  Avatar,
  Box,
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
import { CurrentUserProfile } from 'types/graphql'

import { CurrentUser } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type HeaderProps = {
  isAuthenticated: boolean
  isAuthLoading: boolean
  currentUser: CurrentUser
  currentUserProfileData: CurrentUserProfile
  logOut: () => void
}

const Header = ({
  isAuthenticated,
  isAuthLoading,
  currentUser,
  currentUserProfileData,
  logOut,
}: HeaderProps) => {
  const { currentUserProfile } = currentUserProfileData || {}

  return (
    <>
      <Box bg={'gray.100'} px={4}>
        <Flex h={16} alignItems={'center'}>
          <HStack
            spacing={{ base: 2, md: 8 }}
            ml={{ base: 2, md: 0 }}
            alignItems={'center'}
          >
            <Heading as={Link} to={routes.home()} size="lg" color={'gray.800'}>
              Lifepacks
            </Heading>
          </HStack>
          <Flex alignItems={'center'} justifyContent="flex-end" flexGrow={1}>
            {isAuthLoading || !currentUserProfile ? (
              <Spinner />
            ) : (
              <HStack spacing={3} dir="horizontal">
                {isAuthenticated ? (
                  <>
                    <Button
                      variant={'solid'}
                      colorScheme={'teal'}
                      size={'sm'}
                      mr={4}
                      leftIcon={<AddIcon />}
                      as={Link}
                      to={routes.pack({ slug: 'new' })}
                    >
                      Add New Pack
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
                        <MenuItem as={Link} to={routes.pack({ slug: 'new' })}>
                          Add New Pack
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={logOut}>Log Out</MenuItem>
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
    </>
  )
}

export default Header
