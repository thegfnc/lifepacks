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
} from '@chakra-ui/react'
import { MdLogout, MdOutlineAccountCircle } from 'react-icons/md'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

import Logo from '../Logo/Logo'

type HeaderProps = {
  ctaComponent?: ReactNode
}

const Header = ({ ctaComponent }: HeaderProps) => {
  const { isAuthenticated, loading: isAuthLoading, logOut } = useAuth()
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

  return (
    <>
      <Flex
        as="header"
        alignItems={'center'}
        justifyContent="center"
        h={'4.5rem'}
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
                {isAuthenticated && currentUserProfile ? (
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
                          src={getImageUrlWithTransform({
                            src: currentUserProfile?.imageUrl,
                            transform: { width: 40, height: 40 },
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
                          onClick={logOutAndRefetchCurrentUserProfile}
                          icon={<MdLogout size="20px" />}
                        >
                          Log Out
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </>
                ) : isAuthenticated ? (
                  <Button
                    onClick={logOutAndRefetchCurrentUserProfile}
                    colorScheme="gray"
                    variant="outline"
                  >
                    Log Out
                  </Button>
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
