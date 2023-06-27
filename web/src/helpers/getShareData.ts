import { toast } from '@redwoodjs/web/toast'

import { trackShare } from 'src/lib/analytics'
import SocialAccount from 'src/types/SocialAccount'

export const getShareUrl = (
  accountType: SocialAccount,
  shareUrl: string,
  shareTitle: string
): string => {
  const encodedShareUrl = encodeURIComponent(shareUrl)
  const encodedShareText = encodeURIComponent(
    `Check out my new pack – '${shareTitle}'`
  )

  switch (accountType) {
    case SocialAccount.Link:
      return shareUrl
    case SocialAccount.Twitter:
      return `https://twitter.com/intent/tweet?text=${encodedShareText}&url=${encodedShareUrl}`
    case SocialAccount.Facebook:
      return `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl}&quote=${encodedShareText}`
    case SocialAccount.Reddit:
      return `https://www.reddit.com/submit?url=${encodedShareUrl}&title=${encodedShareText}`
    case SocialAccount.LinkedIn:
      return `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl}`
    case SocialAccount.WhatsApp:
      return `https://wa.me/?text=${encodedShareText}%20at%20${encodedShareUrl}`
    case SocialAccount.Telegram:
      return `https://t.me/share/url?url=${encodedShareUrl}&text=${encodedShareText}`
    case SocialAccount.Email:
      return `mailto:?subject=${encodedShareText}&body=${encodedShareText}%20at%20${encodedShareUrl}`
    default:
      console.error(`Sorry, ${accountType} does not support sharing urls.`)
      return ''
  }
}

export const getCopyLinkClickHandler = (
  shareUrl: string,
  shareTitle: string
) => {
  return () => {
    navigator.clipboard.writeText(
      getShareUrl(SocialAccount.Link, shareUrl, shareTitle)
    )
    getShareTrackingHandler('copy_link', shareUrl)()
    toast.success('Pack link copied to clipboard')
  }
}

export const getShareTrackingHandler = (
  accountType: SocialAccount | 'copy_link',
  shareUrl: string
) => {
  return () => {
    trackShare(accountType, 'pack', shareUrl)
  }
}
