import { ReactNode } from 'react'

import { Box, Flex, BoxProps } from '@chakra-ui/react'

type PageContainerProps = {
  children: ReactNode
  minHeight?: BoxProps['minHeight']
  maxHeight?: BoxProps['maxHeight']
  size?: 'sm' | 'lg'
  px?: BoxProps['padding']
  pt?: BoxProps['padding']
  pb?: BoxProps['padding']
}

const maxWidths = {
  sm: '810px',
  lg: '7xl',
}

const PageContainer = ({
  children,
  minHeight = '100vh',
  maxHeight = 'none',
  size = 'lg',
  px = { base: 4, md: 10 },
  pt = { base: 4, md: 8 },
  pb = { base: 4, md: '120px' },
}: PageContainerProps) => {
  const maxWidth = maxWidths[size]

  return (
    <Flex justifyContent={'center'} minHeight={minHeight} maxHeight={maxHeight}>
      <Box width={'100%'} maxWidth={maxWidth} px={px} pt={pt} pb={pb}>
        {children}
      </Box>
    </Flex>
  )
}

export default PageContainer
