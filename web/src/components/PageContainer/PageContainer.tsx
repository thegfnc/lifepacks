import { ReactNode } from 'react'

import { Box, Flex, BoxProps } from '@chakra-ui/react'

type PageContainerProps = {
  children: ReactNode
  minHeight?: '100vh' | 'auto'
  px?: BoxProps['padding']
  pt?: BoxProps['padding']
  pb?: BoxProps['padding']
}

const PageContainer = ({
  children,
  minHeight = '100vh',
  px = { base: 4, md: 10 },
  pt = { base: 4, md: 8 },
  pb = { base: 4, md: 20 },
}: PageContainerProps) => {
  return (
    <Flex justifyContent={'center'} minHeight={minHeight}>
      <Box width={'100%'} maxWidth={'7xl'} px={px} pt={pt} pb={pb}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageContainer
