import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Heading,
  Image,
  SimpleGrid,
} from '@chakra-ui/react'

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
      borderWidth={'1px'}
      borderColor={'blackAlpha.300'}
      borderRadius="32px"
      p={{ base: 6, md: 10 }}
      boxShadow="none"
    >
      <CardHeader p={0}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
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
              <Button
                as="a"
                colorScheme="yellow"
                size="lg"
                mt={4}
                href={purchaseUrl}
                target="_blank"
                w={{ base: 'full', md: 'auto' }}
              >
                Buy on Amazon
              </Button>
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
