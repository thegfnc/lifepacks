import * as Sentry from '@sentry/node'

// RedwoodJS + Sentry Inspiration:
// https://gist.github.com/rockymeza/7dec7ddb435a6851e6e27d40b1ad0c1a#file-sentry-js-L5-L13

let isSentryInitialized = false

if (process.env.SENTRY_DSN && !isSentryInitialized) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.VERCEL_ENV || 'development',
    release: process.env.VERCEL_GIT_COMMIT_SHA,
  })
  isSentryInitialized = true
}
