import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import { toast } from '@redwoodjs/web/toast'

import SocialAccountIcon from 'src/components/SocialAccountIcon/SocialAccountIcon'
import { getCopyLinkClickHandler, getShareUrl } from 'src/helpers/getShareData'
import SocialAccount from 'src/types/SocialAccount'

type ShareMenuProps = {
  shareUrl: string
  shareTitle: string
}

const ShareMenu = ({ shareUrl, shareTitle }: ShareMenuProps) => {
  return (
    <Menu>
      <MenuButton as={Button} variant="outline" colorScheme="gray">
        Share
      </MenuButton>
      <MenuList borderRadius="xl">
        <MenuItem
          onClick={getCopyLinkClickHandler(shareUrl, shareTitle)}
          icon={<SocialAccountIcon accountType={SocialAccount.Link} />}
        >
          Copy Link
        </MenuItem>
        <MenuDivider />
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Twitter, shareUrl, shareTitle)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Twitter} />}
        >
          Twitter
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Facebook, shareUrl, shareTitle)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Facebook} />}
        >
          Facebook
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Reddit, shareUrl, shareTitle)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Reddit} />}
        >
          Reddit
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.LinkedIn, shareUrl, shareTitle)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.LinkedIn} />}
        >
          LinkedIn
        </MenuItem>
        <MenuDivider />
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.WhatsApp, shareUrl, shareTitle)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.WhatsApp} />}
        >
          WhatsApp
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Telegram, shareUrl, shareTitle)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Telegram} />}
        >
          Telegram
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Email, shareUrl, shareTitle)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Email} />}
        >
          Email
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ShareMenu
