import { Flex, IconButton, IconButtonProps, Text } from '@chakra-ui/react'

import SocialAccount from 'src/types/SocialAccount'

import SocialAccountIcon from '../SocialAccountIcon/SocialAccountIcon'

type SocialAccountButtonsProps = {
  accountType: SocialAccount
  linkUrl?: string
  onClick?: () => void
  boxSize?: IconButtonProps['boxSize']
  label?: string
  colorMode?: 'light' | 'dark'
}

const colors = {
  dark: {
    bg: 'blackAlpha.200',
    _hover: { bg: 'blackAlpha.300' },
    _active: { bg: 'blackAlpha.400' },
  },
  light: {
    bg: 'whiteAlpha.400',
    _hover: { bg: 'whiteAlpha.500' },
    _active: { bg: 'whiteAlpha.600' },
  },
}

const SocialAccountButton = ({
  accountType,
  linkUrl,
  onClick,
  boxSize = 10,
  label = null,
  colorMode = 'dark',
}: SocialAccountButtonsProps) => {
  if (!linkUrl && !onClick) {
    throw new Error(
      'SocialAccountButton requires either the linkUrl or onClick prop'
    )
  }

  const props = {}
  if (linkUrl) {
    props['as'] = 'a'
    props['href'] = linkUrl
    props['target'] = '_blank'
  } else if (onClick) {
    props['onClick'] = onClick
  }

  return (
    <Flex direction="column" align="center">
      <IconButton
        bg={colors[colorMode].bg}
        _hover={colors[colorMode]._hover}
        _active={colors[colorMode]._active}
        isRound={true}
        boxSize={boxSize}
        aria-label={accountType}
        icon={
          <SocialAccountIcon accountType={accountType} colorMode={colorMode} />
        }
        {...props}
      />
      {label && (
        <Text fontSize="xs" mt={2}>
          {label}
        </Text>
      )}
    </Flex>
  )
}

export default SocialAccountButton
