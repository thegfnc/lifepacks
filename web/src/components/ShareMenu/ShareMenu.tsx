import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import { toast } from '@redwoodjs/web/dist/toast'

import SocialAccountIcon, {
  SocialAccountType,
} from 'src/components/SocialAccountIcon/SocialAccountIcon'

type ShareMenuProps = {
  shareUrl: string
  shareText: string
}

const ShareMenu = ({ shareUrl, shareText }: ShareMenuProps) => {
  return (
    <Menu>
      <MenuButton as={Button} variant="outline" colorScheme="gray">
        Share
      </MenuButton>
      <MenuList borderRadius="xl">
        <MenuItem
          onClick={() => {
            navigator.clipboard.writeText(window.location.href)
            toast.success('Pack link copied to clipboard')
          }}
          icon={<SocialAccountIcon accountType={SocialAccountType.Link} />}
        >
          Copy Link
        </MenuItem>
        <MenuDivider />
        <MenuItem
          as="a"
          href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccountType.Twitter} />}
        >
          Twitter
        </MenuItem>
        <MenuItem
          as="a"
          href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccountType.Facebook} />}
        >
          Facebook
        </MenuItem>
        <MenuItem
          as="a"
          href={`https://www.reddit.com/submit?url=${shareUrl}&title=${shareText}`}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccountType.Reddit} />}
        >
          Reddit
        </MenuItem>
        <MenuItem
          as="a"
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccountType.LinkedIn} />}
        >
          LinkedIn
        </MenuItem>
        <MenuDivider />
        <MenuItem
          as="a"
          href={`https://wa.me/?text=${shareText}%20at%20${shareUrl}`}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccountType.WhatsApp} />}
        >
          WhatsApp
        </MenuItem>
        <MenuItem
          as="a"
          href={`https://t.me/share/url?url=${shareUrl}&text=${shareText}`}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccountType.Telegram} />}
        >
          Telegram
        </MenuItem>
        <MenuItem
          as="a"
          href={`mailto:?subject=${shareText}&body=${shareText}%20at%20${shareUrl}`}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccountType.Email} />}
        >
          Email
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ShareMenu
