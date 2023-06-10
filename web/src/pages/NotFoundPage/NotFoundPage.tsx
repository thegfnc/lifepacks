import {
  Heading,
  Flex,
  Center,
  Text,
  Box,
  HStack,
  Button,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import Logo from 'src/components/Logo/Logo'
import PageContainer from 'src/components/PageContainer/PageContainer'

export default () => (
  <PageContainer size="sm">
    <Center>
      <Logo />
    </Center>
    <Center h="full" flexDirection="column">
      <Flex>
        <Heading as="h1" fontSize="7xl" lineHeight="1">
          404
        </Heading>
        <Box
          ml={8}
          pl={8}
          borderLeftWidth="1px"
          borderLeftColor="blackAlpha.300"
        >
          <Heading as="h2">Page not found</Heading>
          <Text>Check the URL in the address bar and please try again.</Text>
          <HStack mt={8} spacing={4}>
            <Button size="lg" as={Link} to={routes.home()}>
              Home
            </Button>
            <Button
              size="lg"
              as={Link}
              to={routes.explore()}
              colorScheme="gray"
              variant="outline"
            >
              Explore Packs
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Center>
  </PageContainer>
)
