import { Button } from '@chakra-ui/react'

type BuyButtonProps = {
  purchaseUrl: string
}

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
  ]

  for (const { name, pattern } of patterns) {
    if (purchaseUrl.match(pattern)) {
      return name
    }
  }

  return null
}

const BuyButton = ({ purchaseUrl }: BuyButtonProps) => {
  const storeName = findStoreNameFromPurchaseUrl(purchaseUrl)
  const buttonText = storeName ? `Buy on ${storeName}` : 'Buy Item'

  return (
    <Button
      as="a"
      colorScheme="yellow"
      size="lg"
      mt={4}
      href={purchaseUrl}
      target="_blank"
      w={{ base: 'full', md: 'auto' }}
    >
      {buttonText}
    </Button>
  )
}

export default BuyButton
