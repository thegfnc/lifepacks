import {
  Accordion,
  Heading,
  Link as ChakraLink,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import AccordionItem from 'src/components/AccordionItem/AccordionItem'
import Feedback from 'src/components/Feedback/Feedback'
import PageContainer from 'src/components/PageContainer/PageContainer'
import { faq } from 'src/data/faqData'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

const FaqPage = () => {
  return (
    <PageContainer size="sm">
      <Metadata
        title="Frequently Asked Questions"
        description="Here are the most common questions we get about Lifepacks."
        og={{ url: getEnvironmentUrl(routes.faq()) }}
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
        <Stack spacing={4} mt={{ base: 6, md: 10 }} mb={10}>
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={index} title={question} body={answer} />
          ))}
        </Stack>
      </Accordion>
      <Box mt={{ base: 20, md: '120px' }}>
        <Feedback />
      </Box>
    </PageContainer>
  )
}

export default FaqPage
