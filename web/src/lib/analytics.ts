// README
//
// Google Analytics 4 has absolutely ruined the experience for custom events
// but since we want to keep the connection to Google Ads and Search Console
// we need to keep sending data to it.
//
// We are now sending data to both GA4 and Vercel Analytics with recommended events
// (https://support.google.com/analytics/answer/9267735?sjid=3967556108346018057-NA)
// being sent to both and custom events being sent exclusively to Vercel Analytics.
//
// Might explore a new analytics partner in the future since Vercel is prohibitively
// expensive past the amount included with the pro plan but this should do for now.

import va from '@vercel/analytics'

import { Gtag } from 'src/types/Gtag'

function getDataLayer() {
  if (typeof window !== 'undefined') {
    return window.dataLayer || []
  }
  return []
}

const gtag: Gtag = function () {
  // eslint-disable-next-line prefer-rest-params
  getDataLayer().push(arguments)
}

//////////////////////////////
// Tracking Functions Below //
//////////////////////////////

export const setUserId = (user_id: string) => {
  gtag('set', { user_id })
}

export const trackLoginWithGoogle = () => {
  va.track('login', { method: 'google' })
  gtag('event', 'login', {
    method: 'google',
  })
}

export const trackLoginWithPassword = () => {
  va.track('login', { method: 'password' })
  gtag('event', 'login', {
    method: 'password',
  })
}

export const trackSignUpWithPassword = () => {
  va.track('sign_up', { method: 'password' })
  gtag('event', 'sign_up', {
    method: 'password',
  })
}

export const trackSharePack = (method: string, item_id: string) => {
  va.track('share_pack', { method, url: item_id })
  gtag('event', 'share', {
    content_type: 'pack',
    method,
    item_id,
  })
}

export const trackSelectPack = (
  content_id: string | number,
  content_slug: string
) => {
  va.track('select_pack', { id: content_id, slug: content_slug })
  gtag('event', 'select_content', {
    content_type: 'pack',
    content_id,
    content_slug,
  })
}

export const trackSelectUserProfile = (content_id: string | number) => {
  va.track('select_user_profile', { username: content_id })
  gtag('event', 'select_content', {
    content_type: 'user_profile',
    content_id,
  })
}

export const trackFeedbackSelect = (select_value: string) => {
  va.track('feedback_select', { select_value })
}

export const trackFeedbackWritten = (select_value: string, text: string) => {
  va.track('feedback_written', { select_value, text })
}
