import { ReactNode } from 'react'

import { Box, Flex } from '@chakra-ui/react'

type PageContainerProps = {
  children: ReactNode
  fillPageHeight?: boolean
}

const PageContainer = ({
  children,
  fillPageHeight = true,
}: PageContainerProps) => {
  return (
    <Flex
      justifyContent={'center'}
      minHeight={fillPageHeight ? '100vh' : 'auto'}
    >
      <Box width={'100%'} maxWidth={'7xl'} p={{ base: 4, md: 8 }}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageContainer
