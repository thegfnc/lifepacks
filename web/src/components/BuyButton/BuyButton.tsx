import { Button, chakra } from '@chakra-ui/react'

import isValidUrl from 'src/helpers/isValidUrl'

type BuyButtonProps = {
  purchaseUrl: string
}

// Try to keep this sorted from most popular to least popular
const findStoreNameFromPurchaseUrl = (purchaseUrl: string) => {
  const patterns = [
    { name: 'Amazon', pattern: /amazon\.com/ },
    { name: 'Amazon', pattern: /a\.co/ },
    { name: 'Walmart', pattern: /walmart\.com/ },
    { name: 'Target', pattern: /target\.com/ },
    { name: 'Best Buy', pattern: /bestbuy\.com/ },
    { name: 'Home Depot', pattern: /homedepot\.com/ },
    { name: 'eBay', pattern: /ebay\.com/ },
    { name: 'Etsy', pattern: /etsy\.com/ },
    { name: 'Sweetwater', pattern: /sweetwater\.com/ },
  ]

  for (const { name, pattern } of patterns) {
    if (purchaseUrl.match(pattern)) {
      return name
    }
  }

  return null
}

const BuyButton = ({ purchaseUrl }: BuyButtonProps) => {
  const isValidPurchaseUrl = isValidUrl(purchaseUrl)
  const storeName = findStoreNameFromPurchaseUrl(purchaseUrl)
  const buttonText = storeName ? `Buy on ${storeName}` : 'Buy Item'

  const linkProps = {
    as: chakra('a'),
    href: purchaseUrl,
    target: '_blank',
  }

  return (
    <Button
      colorScheme="yellow"
      size="lg"
      w={{ base: 'full', md: 'auto' }}
      {...(isValidPurchaseUrl ? linkProps : {})}
    >
      {buttonText}
    </Button>
  )
}

export default BuyButton
