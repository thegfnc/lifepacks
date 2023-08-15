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
    <Center
      position="absolute"
      top={0}
      left={0}
      w="full"
      pt={{ base: 4, md: 10 }}
    >
      <Logo size="xl" />
    </Center>
    <Center h="full" textAlign={{ base: 'center', md: 'left' }}>
      <Flex direction={{ base: 'column', md: 'row' }}>
        <Heading as="h1" fontSize="7xl" lineHeight="1">
          404
        </Heading>
        <Box
          mt={{ base: 4, md: 0 }}
          ml={{ base: 0, md: 8 }}
          pl={{ base: 0, md: 8 }}
          borderLeftWidth={{ base: 0, md: '1px' }}
          borderLeftColor="blackAlpha.300"
        >
          <Heading as="h2">Page not found</Heading>
          <Text px={{ base: 4, md: 0 }} mt={{ base: 0, md: 2 }}>
            Check the URL in the address bar and please try again.
          </Text>
          <HStack
            mt={{ base: 12, md: 10 }}
            spacing={4}
            justify={{ base: 'center', md: 'flex-start' }}
          >
            <Button size="lg" as={Link} to={routes.home()}>
              Go to Home
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Center>
  </PageContainer>
)
