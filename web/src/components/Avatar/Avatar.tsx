import { Avatar as ChakraAvatar } from '@chakra-ui/react'

type AvatarSize = 'sm' | 'md' | 'xl' | 'full'

type AvatarProps = {
  size: AvatarSize
  src: string
}

const Avatar = ({ size = 'md', src }: AvatarProps) => {
  return <ChakraAvatar size={size} src={src} />
}

export default Avatar
