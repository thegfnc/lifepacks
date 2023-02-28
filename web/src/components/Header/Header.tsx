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
  const {
    data,
    loading: isCurrentUserProfileLoading,
    refetch,
  } = useCurrentUserProfile()

  const logOutAndRefetchCurrentUserProfile = () => {
    logOut()
    refetch()
  }

  return (
    <>
      <Flex
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
            color={'black'}
            fontWeight="medium"
          >
            Lifepacks
          </Heading>

          <Flex alignItems={'center'} justifyContent="flex-end" flexGrow={1}>
            {isAuthLoading || isCurrentUserProfileLoading ? (
              <Spinner />
            ) : (
              <HStack spacing={2} dir="horizontal">
                {isAuthenticated && data?.currentUserProfile ? (
                  <>
                    <Button size={'md'} as={Link} to={routes.newPack()}>
                      Create Pack
                    </Button>
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
                          name={data?.currentUserProfile?.givenName}
                        />
                      </MenuButton>
                      <MenuList>
                        <Text px={3}>{currentUser.email}</Text>
                        <MenuDivider />
                        <MenuItem
                          as={Link}
                          to={routes.userProfile({
                            username: data?.currentUserProfile?.username,
                          })}
                        >
                          View Profile
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={logOutAndRefetchCurrentUserProfile}>
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
    </>
  )
}

export default Header
