import { BoxProps, ColorProps, Heading, HStack, Text } from '@chakra-ui/react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type LogoProps = {
  color?: ColorProps['color']
  size?: 'md' | 'lg' | 'xl'
}

type LogoIconProps = {
  boxSize?: number
}

type LogoTextProps = {
  fontSize?: BoxProps['fontSize']
}

const LOGO_SIZES = {
  md: {
    iconBoxSize: 22,
    textFontSize: 'xl',
    stackSpacing: 2,
  },
  lg: {
    iconBoxSize: 28,
    textFontSize: '2xl',
    stackSpacing: '10px',
  },
  xl: {
    iconBoxSize: 32,
    textFontSize: '3xl',
    stackSpacing: 3,
  },
}

const LogoIcon = ({ boxSize }: LogoIconProps) => {
  return (
    <svg
      fill="none"
      height={boxSize}
      viewBox="0 0 24 24"
      width={boxSize}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="currentColor">
        <rect height="6" rx="1" width="6" x="9" y="1" />
        <rect height="6" rx="1" width="6" x="17" y="1" />
        <rect height="6" rx="1" width="6" x="17" y="9" />
        <rect height="6" rx="1" width="6" x="9" y="9" />
        <path d="m1.01562 9.81836c.02735-.16016.09766-.30469.19141-.42774.18359-.23828.47266-.39062.79297-.39062h4c.27344 0 .52344.11133.70312.28906.1836.18164.29688.43164.29688.71094v6c0 .5523.44772 1 1 1h6c.5508 0 1 .4473 1 1v4c0 .5527-.4492 1-1 1h-12c-.26953 0-.51172-.1074-.69141-.2793-.1914-.1816-.30859-.4375-.30859-.7207v-12c0-.0625.00391-.12305.01562-.18164z" />
      </g>
    </svg>
  )
}

const LogoText = ({ fontSize }: LogoTextProps) => {
  return (
    <Text fontSize={fontSize} fontWeight="medium">
      Lifepacks
    </Text>
  )
}

const Logo = ({ color = 'black', size = 'md' }: LogoProps) => {
  const { isAuthenticated } = useAuth()

  const logoSizes = LOGO_SIZES[size]

  return (
    <Heading
      as={Link}
      to={isAuthenticated ? routes.explore() : routes.home()}
      color={color}
    >
      <HStack spacing={logoSizes.stackSpacing}>
        <LogoIcon boxSize={logoSizes.iconBoxSize} />
        <LogoText fontSize={logoSizes.textFontSize} />
      </HStack>
    </Heading>
  )
}

export default Logo
