import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'
import * as Sentry from '@sentry/react'
import * as theme from 'config/chakra.config'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import { Toaster } from '@redwoodjs/web/toast'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'

import './index.css'

if (process.env.SENTRY_DSN) {
  const environment = process.env.VERCEL_ENV || 'development'
  const isDevelopmentEnv = environment === 'development'

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    tracesSampleRate: isDevelopmentEnv ? 1 : 0.1,
    replaysSessionSampleRate: isDevelopmentEnv ? 1 : 0.1,
    replaysOnErrorSampleRate: 1.0,
  })
}

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
