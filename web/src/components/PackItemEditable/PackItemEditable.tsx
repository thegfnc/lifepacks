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
          <HStack
            spacing={1}
            position="absolute"
            top={4}
            right={4}
            p={2}
            bg="white"
            borderRadius="xl"
            boxShadow="base"
            borderWidth="1px"
            borderColor="blackAlpha.300"
          >
            {!hideMoveItemUp && (
              <IconButton
                aria-label="Move Pack Item Up"
                icon={<MdArrowUpward size="24px" />}
                colorScheme="whiteAlpha"
                color="black"
                bg="white"
                _hover={{
                  bg: 'blackAlpha.200',
                }}
                _active={{
                  bg: 'blackAlpha.300',
                }}
                size="md"
                borderRadius="xl"
                onClick={moveItemUp}
              />
            )}
            {!hideMoveItemDown && (
              <IconButton
                aria-label="Move Pack Item Down"
                icon={<MdArrowDownward size="24px" />}
                colorScheme="whiteAlpha"
                color="black"
                bg="white"
                _hover={{
                  bg: 'blackAlpha.200',
                }}
                _active={{
                  bg: 'blackAlpha.300',
                }}
                size="md"
                borderRadius="xl"
                onClick={moveItemDown}
              />
            )}
            <IconButton
              aria-label="Edit Pack Item"
              icon={<MdOutlineModeEdit size="24px" />}
              colorScheme="whiteAlpha"
              color="black"
              bg="white"
              _hover={{
                bg: 'blackAlpha.200',
              }}
              _active={{
                bg: 'blackAlpha.300',
              }}
              size="md"
              borderRadius="xl"
              onClick={editItem}
            />
            <IconButton
              aria-label="Delete Pack Item"
              icon={<MdDeleteOutline size="24px" />}
              colorScheme="whiteAlpha"
              color="red.500"
              bg="white"
              _hover={{
                bg: 'blackAlpha.200',
              }}
              _active={{
                bg: 'blackAlpha.300',
              }}
              size="md"
              borderRadius="xl"
              onClick={deleteItem}
            />
          </HStack>
        </Fade>
      </Box>
    </>
  )
}

export default PackItemEditable
