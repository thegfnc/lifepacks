import {
  ArrowDownIcon,
  ArrowUpIcon,
  DeleteIcon,
  EditIcon,
} from '@chakra-ui/icons'
import { Box, Fade, HStack, IconButton, useBoolean } from '@chakra-ui/react'

import PackItem from '../PackItem/PackItem'

type PackItemEditableProps = {
  imageUrl: string
  title: string
  description: string
  moveItemUp?: () => void
  moveItemDown?: () => void
  editItem?: () => void
  deleteItem?: () => void
}

const PackItemEditable = ({
  imageUrl,
  title,
  description,
  moveItemUp,
  moveItemDown,
  editItem,
  deleteItem,
}: PackItemEditableProps) => {
  const [isHovering, setIsHovering] = useBoolean()

  return (
    <>
      <Box
        position="relative"
        onMouseEnter={setIsHovering.on}
        onMouseLeave={setIsHovering.off}
      >
        <PackItem imageUrl={imageUrl} title={title} description={description} />
        <Fade in={isHovering}>
          <Box
            bg="blackAlpha.50"
            position="absolute"
            left={0}
            top={0}
            h="100%"
            w="100%"
            borderRadius="3xl"
          ></Box>
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
      </Box>
    </>
  )
}

export default PackItemEditable
