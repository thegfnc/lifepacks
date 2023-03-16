import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export enum SocialAccountType {
  YouTube = 'YouTube',
  Instagram = 'Instagram',
  Facebook = 'Facebook',
  Twitter = 'Twitter',
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
}

const SocialAccountButton = ({ accountType }: SocialAccountIconProps) => {
  const { Icon, iconColor } = socialAccountParams[accountType]

  return <Icon color={iconColor} size="24px" />
}

export default SocialAccountButton
