import { Box, Stack, Text } from '@chakra-ui/react'

import Logo from '../Logo/Logo'
import MailingListSignUp from '../MailingListSignUp/MailingListSignUp'
import PageContainer from '../PageContainer/PageContainer'

const Footer = () => (
  <Box bg="blackAlpha.900" color="white">
    <PageContainer minHeight="auto" pb={0} pt={0}>
      <Box as="footer" role="contentinfo" py={{ base: '4', md: '24' }}>
        <MailingListSignUp />
      </Box>
      <Stack
        py="10"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
        borderTopColor="whiteAlpha.200"
        borderTopWidth="1px"
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
