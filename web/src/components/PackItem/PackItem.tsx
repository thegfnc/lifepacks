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

import getImageUrlWithTransform from 'src/helpers/getImageUrlWithTransform'

import BuyButton from '../BuyButton/BuyButton'

type PackItemProps = {
  id: number
  imageUrl: string
  purchaseUrl: string
  title: string
  description: string
}

const PackItem = ({
  id,
  imageUrl,
  purchaseUrl,
  title,
  description,
}: PackItemProps) => {
  return (
    <Card borderRadius={{ base: '24px', md: '32px' }} p={{ base: 4, md: 10 }}>
      <CardHeader p={0}>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={0}
          minH={{ base: 0, md: '220px' }}
        >
          <Center mr={{ base: 0, md: 10 }} mb={{ base: 4, md: 0 }}>
            <Image
              maxW="full"
              maxH={{ base: '320px' }}
              alt={title}
              src={getImageUrlWithTransform({
                src: imageUrl,
                transform: { width: 700, height: 700 },
              })}
              borderRadius="lg"
            />
          </Center>
          <Center
            borderTopWidth={{ base: '1px', md: '0' }}
            borderLeftWidth={{ base: '0', md: '1px' }}
            borderColor="blackAlpha.100"
          >
            <Box w="full" ml={{ base: 0, md: 10 }} mt={{ base: 4, md: 0 }}>
              <Heading fontSize="21px" lineHeight="28px" fontWeight="medium">
                {title}
              </Heading>
              <Box mt={4}>
                <BuyButton packItemId={id} purchaseUrl={purchaseUrl} />
              </Box>
            </Box>
          </Center>
        </SimpleGrid>
      </CardHeader>
      {description && (
        <CardBody
          mt={{ base: 4, md: 10 }}
          p={0}
          pt={{ base: 4, md: 8 }}
          fontSize={{ base: 'md', md: '16px' }}
          lineHeight={{ base: '1.5', md: '24px' }}
          color="blackAlpha.700"
          borderTopWidth="1px"
          borderTopColor="blackAlpha.100"
        >
          {description}
        </CardBody>
      )}
    </Card>
  )
}

export default PackItem
