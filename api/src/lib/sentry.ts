import * as Sentry from '@sentry/node'
import { ProfilingIntegration } from '@sentry/profiling-node'

import { db as client } from 'src/lib/db'

// RedwoodJS + Sentry Inspiration:
// https://gist.github.com/rockymeza/7dec7ddb435a6851e6e27d40b1ad0c1a#file-sentry-js-L5-L13

let isSentryInitialized = false

if (
  process.env.VERCEL_ENV &&
  process.env.SENTRY_API_DSN &&
  !isSentryInitialized
) {
  Sentry.init({
    dsn: process.env.SENTRY_API_DSN,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
    environment: process.env.VERCEL_ENV,
    tracesSampleRate: 0.1,
    profilesSampleRate: 0.1,
    integrations: [
      // Automatically instrument Node.js libraries and frameworks
      ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
      new ProfilingIntegration(),
      new Sentry.Integrations.Prisma({ client }),
      new Sentry.Integrations.GraphQL(),
    ],
  })
  isSentryInitialized = true
}

export default Sentry
