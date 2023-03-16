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

export enum SocialAccountType {
  YouTube = 'YouTube',
  Instagram = 'Instagram',
  Facebook = 'Facebook',
  Twitter = 'Twitter',
  WhatsApp = 'WhatsApp',
  Telegram = 'Telegram',
  Reddit = 'Reddit',
  LinkedIn = 'LinkedIn',
  Email = 'Email',
  Link = 'Link',
}

type SocialAccountIconProps = {
  accountType: SocialAccountType
}

const socialAccountParams = {
  [SocialAccountType.YouTube]: {
    Icon: FaYoutube,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.Instagram]: {
    Icon: FaInstagram,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.Facebook]: {
    Icon: FaFacebook,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.Twitter]: {
    Icon: FaTwitter,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.WhatsApp]: {
    Icon: FaWhatsapp,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.Telegram]: {
    Icon: FaTelegram,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.Reddit]: {
    Icon: FaReddit,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.LinkedIn]: {
    Icon: FaLinkedin,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.Email]: {
    Icon: FaEnvelope,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
  [SocialAccountType.Link]: {
    Icon: MdLink,
    iconColor: 'rgba(0, 0, 0, 0.80)',
  },
}

const SocialAccountButton = ({ accountType }: SocialAccountIconProps) => {
  const { Icon, iconColor } = socialAccountParams[accountType]

  return <Icon color={iconColor} size="24px" />
}

export default SocialAccountButton
