import { Circle, Icon } from '@chakra-ui/react'
import { SiFacebook, SiInstagram, SiYoutube } from 'react-icons/si'

export enum SocialAccountType {
  YouTube = 'YouTube',
  Instagram = 'Instagram',
  Facebook = 'Facebook',
}

type SocialAccountIconProps = {
  accountType: SocialAccountType
  size?: 'sm' | 'md'
}

const socialAccountParams = {
  [SocialAccountType.YouTube]: {
    icon: SiYoutube,
    iconBackground: '#FF3000',
    iconColor: 'white',
  },
  [SocialAccountType.Instagram]: {
    icon: SiInstagram,
    iconBackground:
      'linear-gradient(313.83deg, #FBE18A 3.06%, #FCBB45 23.85%, #F75274 40.67%, #D53692 54.53%, #8F39CE 76.31%, #5B4FE9 102.04%)',
    iconColor: 'white',
  },
  [SocialAccountType.Facebook]: {
    icon: SiFacebook,
    iconBackground: '#1877F2',
    iconColor: 'white',
  },
}

const boxSizes = {
  sm: 4,
  md: 5,
}

const paddings = {
  sm: 1.5,
  md: 2,
}

const SocialAccountButton = ({
  accountType,
  size = 'md',
}: SocialAccountIconProps) => {
  const accountParams = socialAccountParams[accountType]

  return (
    <Circle bg={accountParams.iconBackground} p={paddings[size]}>
      <Icon
        as={accountParams.icon}
        color={accountParams.iconColor}
        boxSize={boxSizes[size]}
      />
    </Circle>
  )
}

export default SocialAccountButton
