import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'

import SocialAccountIcon from 'src/components/SocialAccountIcon/SocialAccountIcon'
import {
  getCopyLinkClickHandler,
  getShareTrackingHandler,
  getShareUrl,
} from 'src/helpers/getShareData'
import SocialAccount from 'src/types/SocialAccount'

type ShareMenuProps = {
  shareUrl: string
  shareTitle: string
}

const ShareMenu = ({ shareUrl, shareTitle }: ShareMenuProps) => {
  return (
    <Menu>
      <MenuButton as={Button} variant="secondary" size="lg">
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
          onClick={getShareTrackingHandler(SocialAccount.Twitter, shareUrl)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Twitter} />}
        >
          Twitter
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Facebook, shareUrl, shareTitle)}
          onClick={getShareTrackingHandler(SocialAccount.Facebook, shareUrl)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Facebook} />}
        >
          Facebook
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Reddit, shareUrl, shareTitle)}
          onClick={getShareTrackingHandler(SocialAccount.Reddit, shareUrl)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Reddit} />}
        >
          Reddit
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.LinkedIn, shareUrl, shareTitle)}
          onClick={getShareTrackingHandler(SocialAccount.LinkedIn, shareUrl)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.LinkedIn} />}
        >
          LinkedIn
        </MenuItem>
        <MenuDivider />
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.WhatsApp, shareUrl, shareTitle)}
          onClick={getShareTrackingHandler(SocialAccount.WhatsApp, shareUrl)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.WhatsApp} />}
        >
          WhatsApp
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Telegram, shareUrl, shareTitle)}
          onClick={getShareTrackingHandler(SocialAccount.Telegram, shareUrl)}
          target="_blank"
          icon={<SocialAccountIcon accountType={SocialAccount.Telegram} />}
        >
          Telegram
        </MenuItem>
        <MenuItem
          as="a"
          href={getShareUrl(SocialAccount.Email, shareUrl, shareTitle)}
          onClick={getShareTrackingHandler(SocialAccount.Email, shareUrl)}
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
