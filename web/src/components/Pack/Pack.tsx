import { Heading, Stack, Text } from '@chakra-ui/react'
import { Pack as PackType, PackItem as PackItemType } from 'types/graphql'

import PackItem from 'src/components/PackItem/PackItem'

type PackPartial = Pick<PackType, 'title' | 'description'> & {
  packItems: Pick<
    PackItemType,
    'id' | 'imageUrl' | 'purchaseUrl' | 'title' | 'description'
  >[]
}

type PackProps = {
  pack: PackPartial
}

const Pack = ({ pack }: PackProps) => {
  return (
    <Stack spacing={6}>
      <Heading as="h1" fontSize="5xl" lineHeight="none" fontWeight="extrabold">
        {pack.title}
      </Heading>
      {pack.description && (
        <Text fontSize="xl" fontFamily="bitter" color="blackAlpha.800">
          {pack.description}
        </Text>
      )}
      {pack.packItems.map((packItem) => (
        <PackItem
          key={packItem.id}
          imageUrl={packItem.imageUrl}
          purchaseUrl={packItem.purchaseUrl}
          title={packItem.title}
          description={packItem.description}
        />
      ))}
    </Stack>
  )
}

export default Pack
