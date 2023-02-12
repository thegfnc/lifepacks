import {
  ArrowDownIcon,
  ArrowUpIcon,
  DeleteIcon,
  EditIcon,
} from '@chakra-ui/icons'
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Fade,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  useBoolean,
} from '@chakra-ui/react'

export enum Mode {
  View,
  Edit,
}

type PackItemProps = {
  imageUrl: string
  title: string
  description: string
  mode?: Mode
  moveItemUp?: () => void
  moveItemDown?: () => void
  editItem?: () => void
  deleteItem?: () => void
}

const noop = () => {}

const PackItem = ({
  imageUrl,
  title,
  description,
  mode = Mode.View,
  moveItemUp,
  moveItemDown,
  editItem,
  deleteItem,
}: PackItemProps) => {
  const isEditMode = mode === Mode.Edit
  const [isHovering, setIsHovering] = useBoolean()

  return (
    <Card
      borderWidth={'1px'}
      borderColor={'blackAlpha.300'}
      boxShadow="lg"
      borderRadius="3xl"
      transitionProperty="background"
      transitionDuration="normal"
      transitionTimingFunction="ease-in-out"
      _hover={
        isEditMode && {
          bg: 'blackAlpha.50',
        }
      }
      onMouseEnter={isEditMode ? setIsHovering.on : noop}
      onMouseLeave={isEditMode ? setIsHovering.off : noop}
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
      {isEditMode && (
        <Fade in={isHovering}>
          <HStack position="absolute" top={4} right={4}>
            <IconButton
              aria-label="Move Pack Item Up"
              icon={<ArrowUpIcon />}
              color="black"
              bg="white"
              size="lg"
              borderRadius="xl"
              boxShadow="base"
              borderWidth="1px"
              borderColor="blackAlpha.300"
              onClick={moveItemUp}
            />
            <IconButton
              aria-label="Move Pack Item Down"
              icon={<ArrowDownIcon />}
              color="black"
              bg="white"
              size="lg"
              borderRadius="xl"
              boxShadow="base"
              borderWidth="1px"
              borderColor="blackAlpha.300"
              onClick={moveItemDown}
            />
            <IconButton
              aria-label="Edit Pack Item"
              icon={<EditIcon />}
              color="black"
              bg="white"
              size="lg"
              borderRadius="xl"
              boxShadow="base"
              borderWidth="1px"
              borderColor="blackAlpha.300"
              onClick={editItem}
            />
            <IconButton
              aria-label="Delete Pack Item"
              icon={<DeleteIcon />}
              color="red.500"
              bg="white"
              size="lg"
              borderRadius="xl"
              boxShadow="base"
              borderWidth="1px"
              borderColor="blackAlpha.300"
              onClick={deleteItem}
            />
          </HStack>
        </Fade>
      )}
    </Card>
  )
}

export default PackItem
