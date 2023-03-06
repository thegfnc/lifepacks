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
      p={10}
      boxShadow="none"
    >
      <CardHeader p={0}>
        <SimpleGrid columns={2} spacing={0}>
          <Center mr={10}>
            <Image w="full" alt={title} src={imageUrl} />
          </Center>
          <Center borderLeftWidth="1px" borderLeftColor="blackAlpha.200">
            <Box w="full" ml={10}>
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
              >
                Buy on Amazon
              </Button>
            </Box>
          </Center>
        </SimpleGrid>
      </CardHeader>
      {description && (
        <CardBody
          mt={10}
          p={0}
          pt={10}
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
