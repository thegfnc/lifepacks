// This object will be used to override Chakra-UI theme defaults.
// See https://chakra-ui.com/docs/styled-system/theming/theme for theming options

module.exports = {
  fonts: {
    heading: `Rubik, sans-serif`,
    body: `Rubik, sans-serif`,
    bitter: `Bitter, serif`,
  },
  colors: {
    brown: {
      500: '#EEE9DF',
    },
    yellow: {
      50: '#fffbf1',
      100: '#fef2d5',
      200: '#fdecc0',
      300: '#fce4a4',
      400: '#fcde92',
      500: '#fbd677',
      600: '#e4c36c',
      700: '#b29854',
      800: '#8a7641',
      900: '#695a32',
    },
    green: {
      50: '#e6f7f0',
      100: '#b0e5d2',
      200: '#8ad8bc',
      300: '#54c79d',
      400: '#33bc8a',
      500: '#00ab6d',
      600: '#009c63',
      700: '#00794d',
      800: '#005e3c',
      900: '#00482e',
    },
    purple: {
      50: '#f2eefe',
      100: '#d5cbfd',
      200: '#c1b2fc',
      300: '#a58efb',
      400: '#9379fa',
      500: '#7857f9',
      600: '#6d4fe3',
      700: '#553eb1',
      800: '#423089',
      900: '#322569',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brown.500',
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
        lineHeight: 'base',
        rounded: 'xl',
      },
      variants: {
        outline: {
          borderColor: 'blackAlpha.300',
          _hover: {
            bg: 'blackAlpha.100',
          },
          _active: {
            bg: 'blackAlpha.300',
          },
        },
        ghost: {
          _hover: {
            bg: 'blackAlpha.100',
          },
          _active: {
            bg: 'blackAlpha.300',
          },
        },
      },
      defaultProps: {
        colorScheme: 'purple',
      },
    },
  },
}
