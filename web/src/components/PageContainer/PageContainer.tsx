import { ReactNode } from 'react'

import { Box, Flex, BoxProps } from '@chakra-ui/react'

type PageContainerProps = {
  children: ReactNode
  minHeight?: '100vh' | 'auto'
  px?: BoxProps['padding']
  py?: BoxProps['padding']
}

const PageContainer = ({
  children,
  minHeight = '100vh',
  px = { base: 4, md: 8 },
  py = { base: 4, md: 8 },
}: PageContainerProps) => {
  return (
    <Flex justifyContent={'center'} minHeight={minHeight}>
      <Box width={'100%'} maxWidth={'7xl'} px={px} py={py}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageContainer
