import { Button, Circle, Icon, Text } from '@chakra-ui/react'
import { SiInstagram, SiYoutube } from 'react-icons/si'

export enum SocialAccountType {
  YouTube,
  Instagram,
}

type SocialAccountButtonsProps = {
  accountType: SocialAccountType
  username: string
  linkUrl: string
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
}

const SocialAccountButton = ({
  accountType,
  username,
  linkUrl,
}: SocialAccountButtonsProps) => {
  const accountParams = socialAccountParams[accountType]

  return (
    <Button
      variant="outline"
      size="lg"
      as="a"
      href={linkUrl}
      target="_blank"
      justifyContent="start"
      p={2}
      h="auto"
      borderRadius="xl"
    >
      <Circle bg={accountParams.iconBackground} p={2}>
        <Icon
          as={accountParams.icon}
          color={accountParams.iconColor}
          boxSize={5}
        />
      </Circle>
      <Text fontSize="sm" ml={2} color="blackAlpha.900" fontWeight="medium">
        {username}
      </Text>
    </Button>
  )
}

export default SocialAccountButton
