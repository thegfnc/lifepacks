import { Center } from '@chakra-ui/react'
import { MdImage } from 'react-icons/md'

const ImageFallback = () => {
  return (
    <Center h="full" bg="blackAlpha.100" borderRadius="lg" p={8}>
      <MdImage size="24px" color="rgba(0, 0, 0, 0.36)" />
    </Center>
  )
}

export default ImageFallback
