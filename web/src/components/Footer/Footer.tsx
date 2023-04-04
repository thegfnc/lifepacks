import { Box, ButtonGroup, Divider, Stack, Text } from '@chakra-ui/react'

import SocialAccount from 'src/types/SocialAccount'

import Logo from '../Logo/Logo'
import MailingListSignUp from '../MailingListSignUp/MailingListSignUp'
import PageContainer from '../PageContainer/PageContainer'
import SocialAccountButton from '../SocialAccountButton/SocialAccountButton'

const Footer = () => (
  <Box bg="black" color="white">
    <PageContainer minHeight="auto">
      <Stack
        as="footer"
        role="contentinfo"
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        align={{ base: 'flex-start', md: 'flex-end' }}
        py={{ base: '4', md: '6' }}
      >
        <Stack spacing={{ base: '2', md: '4' }} align="start">
          <Logo color="white" />
          <Text color="muted">Make guides for the products you swear by.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <MailingListSignUp />
        </Stack>
      </Stack>
      <Divider colorScheme="whiteAlpha" />
      <Stack
        pt="6"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Lifepacks. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <SocialAccountButton
            colorMode="light"
            linkUrl="#"
            accountType={SocialAccount.Twitter}
          />
          <SocialAccountButton
            colorMode="light"
            linkUrl="#"
            accountType={SocialAccount.YouTube}
          />
          <SocialAccountButton
            colorMode="light"
            linkUrl="#"
            accountType={SocialAccount.Instagram}
          />
          <SocialAccountButton
            colorMode="light"
            linkUrl="#"
            accountType={SocialAccount.Facebook}
          />
        </ButtonGroup>
      </Stack>
    </PageContainer>
  </Box>
)

export default Footer
