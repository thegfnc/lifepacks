import { Box, Fade, HStack, IconButton, useBoolean } from '@chakra-ui/react'
import {
  MdArrowUpward,
  MdArrowDownward,
  MdOutlineModeEdit,
  MdDeleteOutline,
} from 'react-icons/md'

import PackItem from '../PackItem/PackItem'

const noop = () => {}

type PackItemEditableProps = {
  imageUrl: string
  purchaseUrl: string
  title: string
  description: string
  hideMoveItemUp?: boolean
  hideMoveItemDown?: boolean
  moveItemUp?: () => void
  moveItemDown?: () => void
  editItem?: () => void
  deleteItem?: () => void
}

const PackItemEditable = ({
  imageUrl,
  purchaseUrl,
  title,
  description,
  hideMoveItemUp = false,
  moveItemUp = noop,
  hideMoveItemDown = false,
  moveItemDown = noop,
  editItem = noop,
  deleteItem = noop,
}: PackItemEditableProps) => {
  const [isHovering, setIsHovering] = useBoolean()

  return (
    <>
      <Box
        position="relative"
        onMouseEnter={setIsHovering.on}
        onMouseLeave={setIsHovering.off}
      >
        <PackItem
          imageUrl={imageUrl}
          purchaseUrl={purchaseUrl}
          title={title}
          description={description}
        />
        <Fade in={isHovering}>
          <Box
            bg="blackAlpha.50"
            position="absolute"
            left={0}
            top={0}
            h="100%"
            w="100%"
            borderRadius="3xl"
            pointerEvents="none"
          ></Box>
          <HStack position="absolute" top={4} right={4}>
            {!hideMoveItemUp && (
              <IconButton
                aria-label="Move Pack Item Up"
                icon={<MdArrowUpward />}
                color="black"
                bg="white"
                size="lg"
                borderRadius="xl"
                boxShadow="base"
                borderWidth="1px"
                borderColor="blackAlpha.300"
                isDisabled={hideMoveItemUp}
                onClick={moveItemUp}
              />
            )}
            {!hideMoveItemDown && (
              <IconButton
                aria-label="Move Pack Item Down"
                icon={<MdArrowDownward />}
                color="black"
                bg="white"
                size="lg"
                borderRadius="xl"
                boxShadow="base"
                borderWidth="1px"
                borderColor="blackAlpha.300"
                isDisabled={hideMoveItemDown}
                onClick={moveItemDown}
              />
            )}
            <IconButton
              aria-label="Edit Pack Item"
              icon={<MdOutlineModeEdit />}
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
              icon={<MdDeleteOutline />}
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
