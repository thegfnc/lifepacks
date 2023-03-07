import { Box, Flex } from '@chakra-ui/react'

const PageContainer = ({ children }) => {
  return (
    <Flex justifyContent={'center'} minHeight={'100vh'}>
      <Box width={'100%'} maxWidth={'7xl'} p={{ base: 4, md: 8 }}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageContainer
