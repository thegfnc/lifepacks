import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react'

import Logo from '../Logo/Logo'
import PageContainer from '../PageContainer/PageContainer'
import SocialAccountButton from '../SocialAccountButton/SocialAccountButton'
import { SocialAccountType } from '../SocialAccountIcon/SocialAccountIcon'

const Footer = () => (
  <Box borderTopColor={'blackAlpha.200'} borderTopWidth={'1px'}>
    <PageContainer minHeight="auto">
      <Stack
        as="footer"
        role="contentinfo"
        spacing="8"
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        py={{ base: '4', md: '6' }}
      >
        <Stack spacing={{ base: '6', md: '8' }} align="start">
          <Logo />
          <Text color="muted">Make guides for the products you swear by.</Text>
        </Stack>
        <Stack
          direction={{ base: 'column-reverse', md: 'column', lg: 'row' }}
          spacing={{ base: '12', md: '8' }}
        >
          <Stack spacing="4">
            <Text fontSize="sm" fontWeight="semibold" color="subtle">
              Stay up to date
            </Text>
            <Stack
              spacing="4"
              direction={{ base: 'column', sm: 'row' }}
              maxW={{ lg: '360px' }}
            >
              <Input placeholder="Enter your email" type="email" required />
              <Button type="submit" flexShrink={0}>
                Subscribe
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Divider />
      <Stack
        pt="8"
        pb="12"
        justify="space-between"
        direction={{ base: 'column-reverse', md: 'row' }}
        align="center"
      >
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Lifepacks. All rights reserved.
        </Text>
        <ButtonGroup variant="ghost">
          <SocialAccountButton
            linkUrl="#"
            accountType={SocialAccountType.YouTube}
          />
          <SocialAccountButton
            linkUrl="#"
            accountType={SocialAccountType.Instagram}
          />
          <SocialAccountButton
            linkUrl="#"
            accountType={SocialAccountType.Facebook}
          />
        </ButtonGroup>
      </Stack>
    </PageContainer>
  </Box>
)

export default Footer
