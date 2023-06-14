import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'

import BuyButton from '../BuyButton/BuyButton'

type PackItemProps = {
  imageUrl: string
  purchaseUrl: string
  title: string
  description: string
}

const PackItem = ({
  imageUrl,
  purchaseUrl,
  title,
  description,
}: PackItemProps) => {
  return (
    <Card
      borderRadius={{ base: '24px', md: '32px' }}
      p={{ base: 4, md: 10 }}
      boxShadow={{ base: 'md', md: 'lg' }}
    >
      <CardHeader p={0}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={0}
          minH={{ base: 0, md: '220px' }}
        >
          <Center mr={{ base: 0, md: 10 }} mb={{ base: 4, md: 0 }}>
            <Image
              maxW="full"
              maxH={{ base: '350px' }}
              alt={title}
              src={imageUrl}
            />
          </Center>
          <Center
            borderTopWidth={{ base: '1px', md: '0' }}
            borderLeftWidth={{ base: '0', md: '1px' }}
            borderColor="blackAlpha.200"
          >
            <Box w="full" ml={{ base: 0, md: 10 }} mt={{ base: 4, md: 0 }}>
              <Heading size="md" lineHeight="1.2" fontWeight="semibold">
                {title}
              </Heading>
              <Box mt={4}>
                <BuyButton purchaseUrl={purchaseUrl} />
              </Box>
            </Box>
          </Center>
        </SimpleGrid>
      </CardHeader>
      {description && (
        <CardBody
          mt={{ base: 4, md: 10 }}
          p={0}
          pt={{ base: 4, md: 10 }}
          fontSize={{ base: 'md', md: 'lg' }}
          lineHeight={{ base: '1.5', md: '1.33' }}
          color="blackAlpha.700"
          borderTopWidth="1px"
          borderTopColor="blackAlpha.200"
        >
          {description}
        </CardBody>
      )}
    </Card>
  )
}

export default PackItem
