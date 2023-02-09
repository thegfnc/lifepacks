import { Box, Flex } from '@chakra-ui/react'

const PageContainer = ({ children }) => {
  return (
    <Flex justifyContent={'center'} bg={'gray.100'} minHeight={'100vh'}>
      <Box width={'100%'} maxWidth={'7xl'} p={10}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageContainer
