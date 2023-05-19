import { useEffect } from 'react'

import * as Sentry from '@sentry/react'

import { useAuth } from 'src/auth'

let isSentryInitialized = false

if (
  process.env.VERCEL_ENV &&
  process.env.SENTRY_WEB_DSN &&
  !isSentryInitialized
) {
  Sentry.init({
    dsn: process.env.SENTRY_WEB_DSN,
    release: process.env.VERCEL_GIT_COMMIT_SHA,
    environment: process.env.VERCEL_ENV,
    integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
    tracesSampleRate: 0.1,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  })

  isSentryInitialized = true
}

export const getIsSentryInitialized = () => isSentryInitialized

export const useSentrySetUser = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    Sentry.setUser({
      id: currentUser?.sub,
      email: currentUser?.email,
      ip_address: '{{auto}}',
    })
  }, [currentUser])
}

export default Sentry
