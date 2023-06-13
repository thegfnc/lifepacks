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
    <Card borderRadius="32px" p={{ base: 6, md: 10 }} boxShadow="lg">
      <CardHeader p={0}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={0}
          minH={{ base: 0, md: '220px' }}
        >
          <Center mr={{ base: 0, md: 10 }} mb={{ base: 6, md: 0 }}>
            <Image maxW="full" maxH="400px" alt={title} src={imageUrl} />
          </Center>
          <Center
            borderTopWidth={{ base: '1px', md: '0' }}
            borderLeftWidth={{ base: '0', md: '1px' }}
            borderColor="blackAlpha.200"
          >
            <Box w="full" ml={{ base: 0, md: 10 }} mt={{ base: 6, md: 0 }}>
              <Heading size="md" lineHeight={7} fontWeight="medium">
                {title}
              </Heading>
              <BuyButton purchaseUrl={purchaseUrl} />
            </Box>
          </Center>
        </SimpleGrid>
      </CardHeader>
      {description && (
        <CardBody
          mt={{ base: 6, md: 10 }}
          p={0}
          pt={{ base: 6, md: 10 }}
          fontSize="lg"
          lineHeight={7}
          color="blackAlpha.800"
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
