import { Heading, Link, Stack, Text } from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer/PageContainer'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

const Paragraph = ({ children }) => (
  <Text
    fontSize={{ base: 'lg', md: 'xl' }}
    fontFamily="bitter"
    color="blackAlpha.800"
  >
    {children}
  </Text>
)

const TermsOfServicePage = () => {
  return (
    <PageContainer size="sm">
      <Metadata
        title="Terms of Service"
        description='This Terms of Service (TOS) agreement governs your use of the Lifepacks app (the "App"). By using the App, you agree to be bound by this TOS'
        og={{ url: getEnvironmentUrl(routes.termsOfService()) }}
      />

      <Heading
        as="h1"
        fontSize={{ base: '3xl', md: '5xl' }}
        lineHeight="none"
        fontWeight="extrabold"
      >
        Terms of Service
      </Heading>
      <Stack spacing={{ base: 4, md: 6 }} mt={{ base: 4, md: 10 }}>
        <Paragraph>
          This Terms of Service (TOS) agreement governs your use of the
          Lifepacks app (the &quot;App&quot;). By using the App, you agree to be
          bound by this TOS.
        </Paragraph>
        <Paragraph>
          <b>1. Account Creation and Use</b>
        </Paragraph>
        <Paragraph>
          In order to use the App, you must create an account. You agree to
          provide accurate and complete information when creating your account.
          You are responsible for maintaining the security of your account and
          password. You agree not to share your account or password with anyone
          else.
        </Paragraph>
        <Paragraph>
          <b>2. Content</b>
        </Paragraph>
        <Paragraph>
          The App may contain content that is owned by Lifepacks or its
          third-party licensors. You agree not to modify, copy, distribute,
          transmit, display, perform, reproduce, publish, license, create
          derivative works from, transfer, or sell any content, in whole or in
          part, without the prior written permission of Lifepacks.
        </Paragraph>
        <Paragraph>
          <b>3. User Conduct</b>
        </Paragraph>
        <Paragraph>
          You agree to use the App in a manner that is lawful, ethical, and in
          accordance with this TOS. You agree not to use the App for any of the
          following purposes:
          <br />
          <br />
          To violate any law or regulation.
          <br />
          To harass, abuse, or threaten others.
          <br />
          To spam or send unsolicited messages.
          <br />
          To post or upload defamatory, offensive, or illegal content.
          <br />
          To infringe on the copyrights or other intellectual property rights of
          others.
          <br />
          To collect or store personal information about others without their
          consent.
        </Paragraph>
        <Paragraph>
          <b>4. Termination</b>
        </Paragraph>
        <Paragraph>
          Lifepacks may terminate your account at any time for any reason,
          including but not limited to a violation of this TOS.
        </Paragraph>
        <Paragraph>
          <b>5. Governing Law</b>
        </Paragraph>
        <Paragraph>
          This TOS is governed by and construed in accordance with the laws of
          the State of Texas, without regard to its conflict of laws provisions.
        </Paragraph>
        <Paragraph>
          <b>6. Entire Agreement</b>
        </Paragraph>
        <Paragraph>
          This TOS constitutes the entire agreement between you and Lifepacks
          with respect to the App and supersedes all prior or contemporaneous
          communications, representations, or agreements, whether oral or
          written.
        </Paragraph>
        <Paragraph>
          <b>7. Severability</b>
        </Paragraph>
        <Paragraph>
          If any provision of this TOS is held to be invalid or unenforceable,
          such provision will be struck from this TOS and the remaining
          provisions will remain in full force and effect.
        </Paragraph>
        <Paragraph>
          <b>8. Waiver</b>
        </Paragraph>
        <Paragraph>
          No waiver of any provision of this TOS will be effective unless in
          writing and signed by both parties.
        </Paragraph>
        <Paragraph>
          <b>9. Notices</b>
        </Paragraph>
        <Paragraph>
          All notices and other communications under this TOS will be in writing
          and will be deemed to have been duly given when delivered in person,
          upon the first business day following deposit in the United States
          mail, postage prepaid, certified or registered, return receipt
          requested, addressed as follows:
          <br />
          <br />
          Lifepacks
          <br />
          <Link href="mailto:lifepacksco@gmail.com">lifepacksco@gmail.com</Link>
          <br />
          <br />
          or to such other address as either party may designate in writing from
          time to time.
        </Paragraph>
        <Paragraph>
          <b>10. Binding Effect</b>
        </Paragraph>
        <Paragraph>
          This TOS will be binding upon and inure to the benefit of the parties
          hereto and their respective successors and permitted assigns.
        </Paragraph>
        <Paragraph>
          <b>11. Headings</b>
        </Paragraph>
        <Paragraph>
          The headings in this TOS are for convenience only and will not affect
          its interpretation.
        </Paragraph>
        <Paragraph>
          <b>12. Counterparts</b>
        </Paragraph>
        <Paragraph>
          This TOS may be executed in one or more counterparts, each of which
          will be deemed an original, but all of which together will constitute
          one and the same instrument.
        </Paragraph>
      </Stack>
    </PageContainer>
  )
}

export default TermsOfServicePage
