import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'
import * as theme from 'config/chakra.config'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { Toaster } from '@redwoodjs/web/toast'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'

import './index.css'

Sentry.init({
  dsn: 'https://344cc4d839624898a7b07d84c1650f34@o1064557.ingest.sentry.io/4504829684547584',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
})

const extendedTheme = extendTheme(theme)

const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <AuthProvider>
        <ColorModeScript />
        <ChakraProvider theme={extendedTheme}>
          <RedwoodApolloProvider useAuth={useAuth}>
            <Toaster />
            <Routes />
          </RedwoodApolloProvider>
        </ChakraProvider>
      </AuthProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
