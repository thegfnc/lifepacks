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
    beforeSend(event, hint) {
      // Check if it is an exception, and if so, show the report dialog
      if (event.exception) {
        console.log('event', event)
        console.log('hint', hint)
        // Sentry.showReportDialog({ eventId: event.event_id })
      }
      return event
    },
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
