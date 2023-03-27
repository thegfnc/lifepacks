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
  Link as ChakraLink,
  Box,
} from '@chakra-ui/react'
import { MdLogout, MdOutlineAccountCircle } from 'react-icons/md'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

import Logo from '../Logo/Logo'

type HeaderProps = {
  ctaComponent?: ReactNode
}

const Header = ({ ctaComponent }: HeaderProps) => {
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

  const userDisplayName = getUserDisplayName(
    data?.currentUserProfile?.givenName,
    data?.currentUserProfile?.familyName,
    data?.currentUserProfile?.username
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
          <Logo />
          <Box ml={10}>
            <ChakraLink as={Link} to={routes.explore()}>
              Explore Packs
            </ChakraLink>
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
    </>
  )
}

export default Header
