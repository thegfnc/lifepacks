import { useEffect } from 'react'

import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Flex,
  Text,
  Avatar,
  Box,
  Link as ChakraLink,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  Hide,
  IconButton,
  Stack,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
} from '@chakra-ui/react'

import { Link, routes, useLocation } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'
import getUserDisplayName from 'src/helpers/getUserDisplayName'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

import { HEADER_HEIGHT } from './Header'

const HeaderMobileMenu = () => {
  const { isAuthenticated, logOut } = useAuth()
  const { pathname } = useLocation()
  const { currentUserProfile, refetch } = useCurrentUserProfile()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  const logOutAndRefetchCurrentUserProfile = () => {
    onClose()
    logOut()
    refetch()
  }

  const userDisplayName = getUserDisplayName(
    currentUserProfile?.givenName,
    currentUserProfile?.familyName,
    currentUserProfile?.username
  )

  const aboutLink = {
    name: 'About',
    to: routes.about(),
  }
  const faqLink = {
    name: 'FAQ',
    to: routes.faq(),
  }

  // Build menu items
  const menuMobileBody = []
  const menuMobileFooter = []

  if (isAuthenticated && currentUserProfile) {
    const viewProfileLink = {
      name: 'View Profile',
      to: routes.userProfile({ username: currentUserProfile.username }),
    }
    const logOutLink = {
      name: 'Log Out',
      onClick: logOutAndRefetchCurrentUserProfile,
    }

    menuMobileBody.push(viewProfileLink, aboutLink, faqLink)
    menuMobileFooter.push(logOutLink)
  } else if (!isAuthenticated) {
    const logInLink = {
      name: 'Log In',
      to: routes.logIn(),
    }
    const signUpLink = {
      name: 'Sign Up',
      to: routes.signUp(),
    }

    menuMobileBody.push(aboutLink, faqLink)
    menuMobileFooter.push(signUpLink, logInLink)
  }

  return (
    <>
      {menuMobileBody.length > 0 || menuMobileFooter.length > 0 ? (
        <Hide above="md">
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            aria-label="Open Header Menu"
            variant="ghost"
            fontSize="2xl"
            mr="-6px"
            ml="-4px"
          />
        </Hide>
      ) : null}

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent display="block">
          <DrawerHeader
            display="flex"
            justifyContent="space-between"
            height={HEADER_HEIGHT}
            alignItems="center"
            py={0}
          >
            <Flex>
              {currentUserProfile?.username && (
                <>
                  <Avatar
                    h={10}
                    w={10}
                    src={getImageUrlWithTransform({
                      src: currentUserProfile?.imageUrl,
                      transform: {
                        width: 80,
                        height: 80,
                        resize: 'cover',
                      },
                    })}
                    name={userDisplayName}
                  />

                  <Box px={3}>
                    <Text fontWeight="medium" fontSize="md">
                      {userDisplayName}
                    </Text>
                    {!userDisplayName.endsWith(currentUserProfile.username) && (
                      <Text
                        fontSize="xs"
                        color="blackAlpha.600"
                        fontWeight="400"
                      >
                        {'@' + currentUserProfile.username}
                      </Text>
                    )}
                  </Box>
                </>
              )}
            </Flex>
            <DrawerCloseButton
              position="relative"
              size="lg"
              top={0}
              right={0}
              borderRadius="full"
            />
          </DrawerHeader>
          <DrawerBody
            borderBottom="1px solid"
            borderTop="1px solid"
            borderColor="blackAlpha.100"
          >
            <Stack py={6} spacing={4}>
              {menuMobileBody.map((item) => (
                <ChakraLink
                  key={item.name}
                  as={Link}
                  to={item.to}
                  fontSize="lg"
                >
                  {item.name}
                </ChakraLink>
              ))}
            </Stack>
          </DrawerBody>
          <DrawerFooter justifyContent="flex-start" py={6}>
            <Stack spacing={4}>
              {menuMobileFooter.map((item) =>
                item.onClick ? (
                  <ChakraLink
                    key={item.name}
                    onClick={item.onClick}
                    fontSize="lg"
                    color="blackAlpha.700"
                  >
                    {item.name}
                  </ChakraLink>
                ) : (
                  <ChakraLink
                    key={item.to}
                    as={Link}
                    to={item.to}
                    fontSize="lg"
                    color="blackAlpha.700"
                  >
                    {item.name}
                  </ChakraLink>
                )
              )}
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HeaderMobileMenu
