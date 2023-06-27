import { Gtag } from 'src/types/Gtag'

function getDataLayer() {
  if (typeof window !== 'undefined') {
    return window.dataLayer || []
  }
  return []
}

const gtag: Gtag = (...args) => {
  getDataLayer().push(args)
}

//////////////////////////////
// Tracking Functions Below //
//////////////////////////////

export const setUserId = (user_id: string) => {
  gtag('set', { user_id })
}

export const trackLoginWithGoogle = () => {
  gtag('event', 'login', {
    method: 'google',
  })
}

export const trackLoginWithPassword = () => {
  gtag('event', 'login', {
    method: 'password',
  })
}

export const trackSignUpWithPassword = () => {
  gtag('event', 'sign_up', {
    method: 'password',
  })
}

export const trackShare = (
  method: string,
  content_type: string,
  item_id: string
) => {
  gtag('event', 'share', {
    method,
    content_type,
    item_id,
  })
}

export const trackSelectPack = (
  content_id: string | number,
  content_slug: string
) => {
  gtag('event', 'select_content', {
    content_type: 'pack',
    content_id,
    content_slug,
  })
}

export const trackSelectUserProfile = (content_id: string | number) => {
  gtag('event', 'select_content', {
    content_type: 'user_profile',
    content_id,
  })
}
