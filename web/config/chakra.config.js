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
      50: '#fffcec',
      100: '#fff6c5',
      200: '#fff1a9',
      300: '#ffeb82',
      400: '#ffe76a',
      500: '#ffe145',
      600: '#e8cd3f',
      700: '#b5a031',
      800: '#8c7c26',
      900: '#6b5f1d',
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
      50: '#E5DFFF',
      100: '#cdc5ff',
      200: '#b5a9ff',
      300: '#9482ff',
      400: '#7f6aff',
      500: '#5f45ff',
      600: '#563fe8',
      700: '#4331b5',
      800: '#34268c',
      900: '#281d6b',
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
        rounded: 'full',
      },
      sizes: {
        xl: {
          fontSize: 'xl',
          lineHeight: 'shorter',
          py: 5,
          px: 7,
        },
      },
      variants: {
        primary: {
          color: 'white',
          bg: 'purple.500',
          _hover: {
            bg: 'purple.600',
          },
          _active: {
            bg: 'purple.700',
          },
        },
        secondary: {
          color: 'blackAlpha.900',
          bg: 'blackAlpha.100',
          _hover: {
            bg: 'blackAlpha.200',
          },
          _active: {
            bg: 'blackAlpha.300',
          },
        },
        green: {
          color: 'white',
          bg: 'green.500',
          _hover: {
            bg: 'green.600',
          },
          _active: {
            bg: 'green.700',
          },
        },
        yellow: {
          color: 'blackAlpha.900',
          bg: 'yellow.500',
          _hover: {
            bg: 'yellow.600',
          },
          _active: {
            bg: 'yellow.700',
          },
        },
        outline: {
          color: 'blackAlpha.900',
          borderColor: 'blackAlpha.200',
          fontWeight: 400,
          _hover: {
            bg: 'blackAlpha.100',
          },
          _active: {
            bg: 'blackAlpha.300',
          },
        },
        ghost: {
          color: 'blackAlpha.900',
          fontWeight: 400,
          _hover: {
            bg: 'blackAlpha.100',
          },
          _active: {
            bg: 'blackAlpha.300',
          },
        },
      },
    },
  },
}
