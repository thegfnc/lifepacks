import { Box, Link, Stack, Text } from '@chakra-ui/react'

import Logo from '../Logo/Logo'
import MailingListSignUp from '../MailingListSignUp/MailingListSignUp'
import PageContainer from '../PageContainer/PageContainer'

const Footer = () => (
  <Box bg="blackAlpha.900" color="white">
    <PageContainer minHeight="auto" pb={0} pt={0}>
      <Box as="footer" role="contentinfo" py={{ base: '12', md: '24' }}>
        <MailingListSignUp />
        <Text
          mt={{ base: 4, md: 6 }}
          color="whiteAlpha.700"
          fontSize={{ base: 'sm', md: 'md' }}
        >
          For direct support and press inquiries, contact us directly at{' '}
          <Link href="mailto:lifepacksco@gmail.com" color="white">
            lifepacksco@gmail.com
          </Link>
        </Text>
      </Box>
      <Stack
        py={{ base: 6, md: 10 }}
        justify="space-between"
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'flex-start', md: 'center' }}
        borderTopColor="whiteAlpha.200"
        borderTopWidth="1px"
        spacing={2}
      >
        <Logo color="whiteAlpha.600" />
        <Text fontSize="md" color="whiteAlpha.600">
          &copy; {new Date().getFullYear()} Lifepacks. All rights reserved.
        </Text>
      </Stack>
    </PageContainer>
  </Box>
)

export default Footer
