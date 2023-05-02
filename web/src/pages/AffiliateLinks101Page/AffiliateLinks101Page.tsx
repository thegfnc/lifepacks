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
} from '@chakra-ui/react'
import { MdArrowOutward } from 'react-icons/md'

import { MetaTags } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer/PageContainer'

import { affiliatePrograms } from './affiliateLinks101PageData'

const AffiliateLinkCard = ({ store }) => {
  const [isHovering, setIsHovering] = useBoolean()

  return (
    <LinkBox
      as={Card}
      boxShadow="none"
      borderRadius="3xl"
      padding={6}
      onMouseEnter={setIsHovering.on}
      onMouseLeave={setIsHovering.off}
    >
      <Stack spacing={4}>
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
        title="AffiliateLinks101"
        description="AffiliateLinks101 page"
      />

      <Heading as="h1" fontSize="5xl" lineHeight="none" fontWeight="extrabold">
        Affiliate Links 101
      </Heading>
      <Text fontSize="xl" mt={6} fontFamily="bitter" color="blackAlpha.800">
        Affiliate links are a way for people to earn commissions by promoting
        products they love. Essentially, when you sign up for an affiliate
        program, you get a special link that you can share with your audience.
        If someone clicks on that link and makes a purchase, you earn a
        percentage of the sale. It&apos;s a win-win situation: the company gets
        more customers, and you get a little extra income.
      </Text>
      <Text fontSize="xl" fontFamily="bitter" color="blackAlpha.800" mt={4}>
        To create an affiliate link and earn a commission, you’ll need to sign
        up with the corresponding provider. Here’s a list of the most popular
        ones.
      </Text>
      <Stack mt={10} spacing={3}>
        {affiliatePrograms.map((store) => (
          <AffiliateLinkCard store={store} key={store.storeName} />
        ))}
      </Stack>
    </PageContainer>
  )
}

export default AffiliateLinks101Page
