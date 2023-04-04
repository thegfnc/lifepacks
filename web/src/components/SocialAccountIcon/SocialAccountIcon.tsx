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
  colorMode?: 'light' | 'dark'
}

const socialAccountParams = {
  [SocialAccount.YouTube]: {
    Icon: FaYoutube,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.Instagram]: {
    Icon: FaInstagram,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.Facebook]: {
    Icon: FaFacebook,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.Twitter]: {
    Icon: FaTwitter,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.WhatsApp]: {
    Icon: FaWhatsapp,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.Telegram]: {
    Icon: FaTelegram,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.Reddit]: {
    Icon: FaReddit,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.LinkedIn]: {
    Icon: FaLinkedin,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.Email]: {
    Icon: FaEnvelope,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
  [SocialAccount.Link]: {
    Icon: MdLink,
    darkIconColor: 'rgba(0, 0, 0, 0.80)',
    lightIconColor: 'rgba(255, 255, 255, 0.80)',
  },
}

const SocialAccountIcon = ({
  accountType,
  colorMode = 'dark',
}: SocialAccountIconProps) => {
  const { Icon, darkIconColor, lightIconColor } =
    socialAccountParams[accountType]

  const color = colorMode === 'dark' ? darkIconColor : lightIconColor

  return <Icon color={color} size="24px" />
}

export default SocialAccountIcon
