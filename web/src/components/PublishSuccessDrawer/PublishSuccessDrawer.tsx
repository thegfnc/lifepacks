import { CheckCircleIcon } from '@chakra-ui/icons'
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  HStack,
  Text,
} from '@chakra-ui/react'

import SocialAccountButton from 'src/components/SocialAccountButton/SocialAccountButton'
import {
  getCopyLinkClickHandler,
  getShareTrackingHandler,
  getShareUrl,
} from 'src/helpers/getShareData'
import SocialAccount from 'src/types/SocialAccount'

type PublishSuccessDrawerProps = {
  isOpen: boolean
  onClose: () => void
  shareUrl: string
  shareTitle: string
}

const PublishSuccessDrawer = ({
  isOpen,
  onClose,
  shareUrl,
  shareTitle,
}: PublishSuccessDrawerProps) => {
  return (
    <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent py={16} borderTopRadius="32px">
        <DrawerCloseButton top={4} right={4} />
        <DrawerBody>
          <Center>
            <Flex textAlign="center" align="center" direction="column">
              <CheckCircleIcon boxSize={'56px'} color={'green.500'} />
              <Heading mt={6}>Your pack is published</Heading>
              <Text fontFamily="bitter" fontSize="xl" mt={2}>
                Now share it with the world!
              </Text>
              <HStack spacing={8} mt={8}>
                <SocialAccountButton
                  accountType={SocialAccount.Link}
                  onClick={getCopyLinkClickHandler(shareUrl, shareTitle)}
                  boxSize={14}
                  label="Copy Link"
                />
                <SocialAccountButton
                  accountType={SocialAccount.Facebook}
                  linkUrl={getShareUrl(
                    SocialAccount.Facebook,
                    shareUrl,
                    shareTitle
                  )}
                  onClick={getShareTrackingHandler(
                    SocialAccount.Facebook,
                    shareUrl
                  )}
                  boxSize={14}
                  label="Facebook"
                />
                <SocialAccountButton
                  accountType={SocialAccount.Twitter}
                  linkUrl={getShareUrl(
                    SocialAccount.Twitter,
                    shareUrl,
                    shareTitle
                  )}
                  onClick={getShareTrackingHandler(
                    SocialAccount.Twitter,
                    shareUrl
                  )}
                  boxSize={14}
                  label="Twitter"
                />
                <SocialAccountButton
                  accountType={SocialAccount.Email}
                  linkUrl={getShareUrl(
                    SocialAccount.Email,
                    shareUrl,
                    shareTitle
                  )}
                  onClick={getShareTrackingHandler(
                    SocialAccount.Email,
                    shareUrl
                  )}
                  boxSize={14}
                  label="Email"
                />
              </HStack>
            </Flex>
          </Center>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default PublishSuccessDrawer
