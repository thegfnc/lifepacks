import { useSentry } from '@envelop/sentry'

import { authDecoder } from '@redwoodjs/auth-supabase-api'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'

import directives from 'src/directives/**/*.{js,ts}'
import sdls from 'src/graphql/**/*.sdl.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth'
import { db } from 'src/lib/db'
import { logger } from 'src/lib/logger'
import Sentry, { getIsSentryInitialized } from 'src/lib/sentry'

const extraPlugins = []

if (getIsSentryInitialized()) {
  extraPlugins.push(
    useSentry({
      includeRawResult: true,
      includeResolverArgs: true,
      includeExecuteVariables: true,
    })
  )
}

export const handler = createGraphQLHandler({
  getCurrentUser,
  authDecoder,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  extraPlugins,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
    // Flush remaining Sentry events before shutdown.
    Sentry.close(2000)
  },
})
