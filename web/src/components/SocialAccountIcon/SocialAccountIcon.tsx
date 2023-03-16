import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaReddit,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa'
import { MdLink } from 'react-icons/md'

import SocialAccount from 'src/types/SocialAccount'

type SocialAccountIconProps = {
  accountType: SocialAccount
}

const socialAccountParams = {
  [SocialAccount.YouTube]: {
    Icon: FaYoutube,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.Instagram]: {
    Icon: FaInstagram,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.Facebook]: {
    Icon: FaFacebook,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.Twitter]: {
    Icon: FaTwitter,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.WhatsApp]: {
    Icon: FaWhatsapp,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.Telegram]: {
    Icon: FaTelegram,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.Reddit]: {
    Icon: FaReddit,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.LinkedIn]: {
    Icon: FaLinkedin,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.Email]: {
    Icon: FaEnvelope,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccount.Link]: {
    Icon: MdLink,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
}

const SocialAccountIcon = ({ accountType }: SocialAccountIconProps) => {
  const { Icon, iconColor } = socialAccountParams[accountType]

  return <Icon color={iconColor} size="24px" />
}

export default SocialAccountIcon
