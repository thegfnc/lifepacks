import { Button, Text } from '@chakra-ui/react'

import SocialAccountIcon, {
  SocialAccountType,
} from '../SocialAccountIcon/SocialAccountIcon'

type SocialAccountButtonsProps = {
  accountType: SocialAccountType
  username: string
  linkUrl: string
}

const SocialAccountButton = ({
  accountType,
  username,
  linkUrl,
}: SocialAccountButtonsProps) => {
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
      <SocialAccountIcon accountType={accountType} />
      <Text fontSize="sm" ml={2} color="blackAlpha.900" fontWeight="medium">
        {username}
      </Text>
    </Button>
  )
}

export default SocialAccountButton
