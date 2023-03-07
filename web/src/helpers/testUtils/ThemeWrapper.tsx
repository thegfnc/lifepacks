import React from 'react'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import * as theme from 'config/chakra.config'

const extendedTheme = extendTheme(theme)

export const ThemeWrapper = ({ children }) => (
  <ChakraProvider theme={extendedTheme}>{children}</ChakraProvider>
)
