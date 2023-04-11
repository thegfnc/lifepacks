import * as Sentry from '@sentry/node'

// RedwoodJS + Sentry Inspiration:
// https://gist.github.com/rockymeza/7dec7ddb435a6851e6e27d40b1ad0c1a#file-sentry-js-L5-L13

let isSentryInitialized = false

if (process.env.SENTRY_DSN && !isSentryInitialized) {
  const environment = process.env.VERCEL_ENV || 'development'
  const isDevelopmentEnv = environment === 'development'

  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
    environment,
    tracesSampleRate: isDevelopmentEnv ? 1 : 0.1,
    integrations: [
      // Automatically instrument Node.js libraries and frameworks
      ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
    ],
  })
  isSentryInitialized = true
}
