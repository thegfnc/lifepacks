import { Icon } from '@chakra-ui/react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

export enum SocialAccountType {
  YouTube = 'YouTube',
  Instagram = 'Instagram',
  Facebook = 'Facebook',
}

type SocialAccountIconProps = {
  accountType: SocialAccountType
}

const socialAccountParams = {
  [SocialAccountType.YouTube]: {
    icon: FaYoutube,
    iconColor: 'blackAlpha.800',
  },
  [SocialAccountType.Instagram]: {
    icon: FaInstagram,
    iconColor: 'blackAlpha.800',
  },
  [SocialAccountType.Facebook]: {
    icon: FaFacebook,
    iconColor: 'blackAlpha.800',
  },
}

const SocialAccountButton = ({ accountType }: SocialAccountIconProps) => {
  const accountParams = socialAccountParams[accountType]

  return (
    <Icon
      as={accountParams.icon}
      color={accountParams.iconColor}
      h="20px"
      w="20px"
    />
  )
}

export default SocialAccountButton
