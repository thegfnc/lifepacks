// This object will be used to override Chakra-UI theme defaults.
// See https://chakra-ui.com/docs/styled-system/theming/theme for theming options

module.exports = {
  fonts: {
    heading: `Rubik, sans-serif`,
    body: `Rubik, sans-serif`,
    bitter: `Bitter, serif`,
  },
  colors: {
    cream: {
      500: '#F4EBD2',
    },
    yellow: {
      50: '#fffaef',
      100: '#fff1cc',
      200: '#ffeab4',
      300: '#ffe091',
      400: '#ffda7c',
      500: '#ffd15b',
      600: '#e8be53',
      700: '#b59441',
      800: '#8c7332',
      900: '#6b5826',
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
      50: '#efe6fd',
      100: '#ceb0fa',
      200: '#b78af7',
      300: '#9654f4',
      400: '#8133f1',
      500: '#6200ee',
      600: '#5900d9',
      700: '#4600a9',
      800: '#360083',
      900: '#290064',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'white',
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
      defaultProps: {
        colorScheme: 'purple',
      },
    },
  },
}
