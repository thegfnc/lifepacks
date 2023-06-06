import { Heading, Link, Stack, Text } from '@chakra-ui/react'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer/PageContainer'

const Paragraph = ({ children }) => (
  <Text
    fontSize={{ base: 'lg', md: 'xl' }}
    fontFamily="bitter"
    color="blackAlpha.800"
  >
    {children}
  </Text>
)

const PrivacyPolicyPage = () => {
  return (
    <PageContainer size="sm">
      <MetaTags
        title="Privacy Policy"
        description='This Privacy Policy (PP) governs how Lifepacks collects, uses, and shares your personal information when you use our app (the "App").'
        ogType="website"
        ogUrl={`https://lifepacks.co${routes.privacyPolicy()}`}
      />

      <Heading
        as="h1"
        fontSize={{ base: '3xl', md: '5xl' }}
        lineHeight="none"
        fontWeight="extrabold"
      >
        Privacy Policy
      </Heading>
      <Stack spacing={{ base: 4, md: 6 }} mt={{ base: 4, md: 10 }}>
        <Paragraph>
          This Privacy Policy (PP) governs how Lifepacks collects, uses, and
          shares your personal information when you use our app (the
          &quot;App&quot;).
        </Paragraph>
        <Paragraph>
          <b>1. Collection of Personal Information</b>
        </Paragraph>
        <Paragraph>
          We collect personal information from you when you create an account,
          use the App, or otherwise interact with us. The personal information
          we collect may include your name, email address, phone number,
          address, and payment information.
        </Paragraph>
        <Paragraph>
          <b>2. Use of Personal Information</b>
        </Paragraph>
        <Paragraph>
          We use your personal information to provide you with the App, to
          improve the App, to contact you, to process payments, and to comply
          with applicable laws and regulations. We may also use your personal
          information for marketing purposes, but only with your consent.
        </Paragraph>
        <Paragraph>
          <b>3. Sharing of Personal Information</b>
        </Paragraph>
        <Paragraph>
          We may share your personal information with our third-party partners
          who help us provide the App, such as payment processors and analytics
          providers. We may also share your personal information if we are
          required to do so by law or if we believe that sharing is necessary to
          protect our rights, property, or safety, or the rights, property, or
          safety of others.
        </Paragraph>
        <Paragraph>
          <b>4. Your Rights</b>
        </Paragraph>
        <Paragraph>
          You have the right to access, correct, delete, or restrict the use of
          your personal information. You also have the right to object to the
          processing of your personal information and to the right to data
          portability. To exercise these rights, please contact us at{' '}
          <Link href="mailto:lifepacksco@gmail.com">lifepacksco@gmail.com</Link>
          .
        </Paragraph>
        <Paragraph>
          <b>5. Security</b>
        </Paragraph>
        <Paragraph>
          We take steps to protect your personal information from unauthorized
          access, use, disclosure, alteration, or destruction. These steps
          include, but are not limited to, using encryption and other security
          technologies, and implementing physical and procedural security
          measures.
        </Paragraph>
        <Paragraph>
          <b>6. Changes to this PP</b>
        </Paragraph>
        <Paragraph>
          We may update this PP from time to time. If we make any material
          changes, we will notify you by email or through a notice on the App.
        </Paragraph>
        <Paragraph>
          <b>7. Contact Us</b>
        </Paragraph>
        <Paragraph>
          If you have any questions about this PP, please contact us at{' '}
          <Link href="mailto:lifepacksco@gmail.com">lifepacksco@gmail.com</Link>
          .
          <br />
          <br />
          Please note that this is just a sample PP and may not be appropriate
          for all apps. You should consult with an attorney to create a PP that
          is specific to your app and your business needs.
        </Paragraph>
      </Stack>
    </PageContainer>
  )
}

export default PrivacyPolicyPage
