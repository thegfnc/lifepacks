import { Center } from '@chakra-ui/react'
import { MdImage } from 'react-icons/md'

const ImageFallback = () => {
  return (
    <Center h="full" w="full" bg="blackAlpha.100" borderRadius="lg" p={2}>
      <MdImage size="24px" color="rgba(0, 0, 0, 0.36)" />
    </Center>
  )
}

export default ImageFallback
