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
  title: string
  description: string
}

const PackItem = ({ imageUrl, title, description }: PackItemProps) => {
  return (
    <Card
      borderWidth={'1px'}
      borderColor={'blackAlpha.300'}
      boxShadow="lg"
      borderRadius="3xl"
      transitionProperty="background"
      transitionDuration="normal"
      transitionTimingFunction="ease-in-out"
    >
      <CardHeader
        borderBottomWidth="1px"
        borderBottomColor="blackAlpha.200"
        p={0}
      >
        <SimpleGrid columns={2} spacing={0}>
          <Center p={8}>
            <Image boxSize="296px" fit="contain" alt={title} src={imageUrl} />
          </Center>
          <Center borderLeftWidth="1px" borderLeftColor="blackAlpha.200">
            <Box p={8}>
              <Heading size="md" lineHeight={7}>
                {title}
              </Heading>
              <Button colorScheme="teal" size="lg" mt={4}>
                Buy on Amazon
              </Button>
            </Box>
          </Center>
        </SimpleGrid>
      </CardHeader>
      <CardBody p={8} fontSize="lg" lineHeight={7} color="blackAlpha.800">
        {description}
      </CardBody>
    </Card>
  )
}

export default PackItem
