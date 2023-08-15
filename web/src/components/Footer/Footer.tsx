import {
  Box,
  Link as ChakraLink,
  Grid,
  GridItem,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import { LogoIcon } from '../Logo/Logo'
import MailingListSignUp from '../MailingListSignUp/MailingListSignUp'
import PageContainer from '../PageContainer/PageContainer'

const Footer = () => (
  <Box as="footer" bg="blackAlpha.50">
    <PageContainer minHeight="auto" pb={0} pt={0}>
      <Grid
        as="footer"
        role="contentinfo"
        py={20}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
        }}
        gap={8}
      >
        <GridItem
          colSpan={{ base: 1, lg: 2 }}
          display="flex"
          alignItems="flex-start"
        >
          <Link to={routes.home()}>
            <LogoIcon boxSize={44} />
          </Link>
        </GridItem>
        <GridItem>
          <Heading size="sm" lineHeight="base">
            Resources
          </Heading>
          <Stack my={4}>
            <ChakraLink as={Link} to={routes.about()}>
              About
            </ChakraLink>
            <ChakraLink as={Link} to={routes.affiliateLinks101()}>
              Affiliate Links 101
            </ChakraLink>
            <ChakraLink as={Link} to={routes.faq()}>
              FAQ
            </ChakraLink>
          </Stack>
        </GridItem>
        <GridItem>
          <MailingListSignUp />
          <Text mt={{ base: 4, md: 12 }} fontSize="sm" color="blackAlpha.600">
            For support and press inquiries, contact us directly at{' '}
            <ChakraLink href="mailto:lifepacksco@gmail.com">
              lifepacksco@gmail.com
            </ChakraLink>
          </Text>
        </GridItem>
      </Grid>
      <HStack
        py={{ base: 6, md: 8 }}
        justify="space-between"
        align="center"
        borderTopColor="blackAlpha.200"
        borderTopWidth="1px"
        spacing={2}
        color="blackAlpha.700"
      >
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()}{' '}
          <ChakraLink as={Link} to={routes.home()}>
            Lifepacks
          </ChakraLink>
        </Text>
        <Text fontSize="sm" py={{ base: 4, md: 0 }} as="div">
          <HStack spacing={3}>
            <ChakraLink as={Link} to={routes.termsOfService()}>
              Terms
            </ChakraLink>
            <Text>{' · '}</Text>
            <ChakraLink as={Link} to={routes.privacyPolicy()}>
              Privacy
            </ChakraLink>
          </HStack>
        </Text>
      </HStack>
    </PageContainer>
  </Box>
)

export default Footer
