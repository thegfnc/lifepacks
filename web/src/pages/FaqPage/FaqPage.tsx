import {
  Accordion,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import AccordionItem from 'src/components/AccordionItem/AccordionItem'
import PageContainer from 'src/components/PageContainer/PageContainer'
import { faq } from 'src/data/faqData'

const FaqPage = () => {
  return (
    <PageContainer size="sm">
      <MetaTags
        title="Frequently Asked Questions"
        description="Here are the most common questions we get about Lifepacks."
        ogType="website"
        ogUrl={`https://lifepacks.co${routes.faq()}`}
      />

      <Heading
        as="h1"
        fontSize={{ base: '3xl', md: '5xl' }}
        lineHeight="none"
        fontWeight="extrabold"
      >
        Frequently Asked Questions
      </Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        mt={{ base: 4, md: 6 }}
        fontFamily="bitter"
        color="blackAlpha.800"
      >
        Here are the most common questions we get about Lifepacks. If you have
        additional questions, please reach out to{' '}
        <ChakraLink href="mailto:lifepacksco@gmail.com">
          lifepacksco@gmail.com
        </ChakraLink>
        .{' '}
      </Text>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        mt={4}
        fontFamily="bitter"
        color="blackAlpha.800"
      >
        For an overview of affiliate links, check out the{' '}
        <ChakraLink as={Link} to={routes.affiliateLinks101()}>
          Affiliate Links 101 page
        </ChakraLink>
        .
      </Text>
      <Accordion allowMultiple>
        <Stack spacing={4} mt={10}>
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={index} title={question} body={answer} />
          ))}
        </Stack>
      </Accordion>
    </PageContainer>
  )
}

export default FaqPage
