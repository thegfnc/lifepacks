import {
  Card,
  Flex,
  HStack,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  SlideFade,
  Stack,
  Text,
  useBoolean,
  Link as ChakraLink,
} from '@chakra-ui/react'
import { MdArrowOutward } from 'react-icons/md'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer/PageContainer'
import { affiliatePrograms } from 'src/data/affiliateLinks101PageData'

const AffiliateLinkCard = ({ store }) => {
  const [isHovering, setIsHovering] = useBoolean()

  return (
    <LinkBox
      as={Card}
      boxShadow="none"
      onMouseEnter={setIsHovering.on}
      onMouseLeave={setIsHovering.off}
      borderRadius="3xl"
      overflow="hidden"
    >
      <Stack
        spacing={4}
        padding={6}
        _hover={{ bg: 'blackAlpha.50' }}
        transition={'background .2s ease-in-out'}
      >
        <Flex justify="space-between" align="center">
          <HStack spacing="14px">
            <Image src={store.storeLogo} h="32px" w="32px" borderRadius="lg" />
            <LinkOverlay
              href={store.affiliateProgramLink}
              target="_blank"
              fontWeight="bold"
              fontSize="xl"
            >
              {store.storeName}
            </LinkOverlay>
          </HStack>
          <SlideFade in={isHovering} offsetY="5px" offsetX="-5px">
            <MdArrowOutward size="24px" color="rgba(0, 0, 0, 0.36)" />
          </SlideFade>
        </Flex>
        <Text color="blackAlpha.600">{store.storeDescription}</Text>
      </Stack>
    </LinkBox>
  )
}

const AffiliateLinks101Page = () => {
  return (
    <PageContainer size="sm">
      <MetaTags
        title="Affiliate Links 101"
        description="Sign up for an affiliate program to earn commissions while promoting products you love."
        ogType="website"
        ogUrl={`https://lifepacks.co${routes.affiliateLinks101()}`}
      />

      <Heading
        as="h1"
        fontSize={{ base: '3xl', md: '5xl' }}
        lineHeight="none"
        fontWeight="extrabold"
      >
        Affiliate Links 101
      </Heading>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        mt={{ base: 4, md: 6 }}
        fontFamily="bitter"
        color="blackAlpha.800"
      >
        Affiliate links are a way for people to earn commissions by promoting
        products they love. Essentially, when you sign up for an affiliate
        program, you get a special link that you can share with your audience.
        If someone clicks on that link and makes a purchase, you earn a
        percentage of the sale. It&apos;s a win-win situation: the company gets
        more customers, and you get a little extra income.
      </Text>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        fontFamily="bitter"
        color="blackAlpha.800"
        mt={4}
      >
        To create an affiliate link and earn a commission, you’ll need to sign
        up with the corresponding provider. Here’s a list of the most popular
        ones.
      </Text>
      <Text
        fontSize={{ base: 'lg', md: 'xl' }}
        mt={4}
        fontFamily="bitter"
        color="blackAlpha.800"
      >
        For frequently asked questions, check out the{' '}
        <ChakraLink as={Link} to={routes.faq()}>
          FAQ page
        </ChakraLink>
        .
      </Text>
      <Stack mt={{ base: 6, md: 10 }} spacing={3}>
        {affiliatePrograms.map((store) => (
          <AffiliateLinkCard store={store} key={store.storeName} />
        ))}
      </Stack>
    </PageContainer>
  )
}

export default AffiliateLinks101Page
