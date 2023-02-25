import { Button, IconButton } from '@chakra-ui/react'

import SocialAccountIcon, {
  SocialAccountType,
} from '../SocialAccountIcon/SocialAccountIcon'

type SocialAccountButtonsProps = {
  accountType: SocialAccountType
  linkUrl: string
}

const SocialAccountButton = ({
  accountType,
  linkUrl,
}: SocialAccountButtonsProps) => {
  return (
    <IconButton
      bg="blackAlpha.200"
      _hover={{ bg: 'blackAlpha.300' }}
      _active={{ bg: 'blackAlpha.400' }}
      rounded="full"
      size="md"
      p={2}
      as="a"
      href={linkUrl}
      target="_blank"
      aria-label={accountType}
      icon={<SocialAccountIcon accountType={accountType} />}
    />
  )
}

export default SocialAccountButton
