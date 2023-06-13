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
    <>
      <Stack spacing={{ base: 4, md: 6 }}>
        <Heading
          as="h1"
          fontSize={{ base: '28px', md: '42px' }}
          lineHeight="1.14"
          fontWeight="bold"
        >
          {pack.title}
        </Heading>
        {pack.description && (
          <Text
            fontSize={{ base: '18px', md: '20px' }}
            lineHeight={{ base: '1.33', md: '1.4' }}
            fontFamily="bitter"
            color="blackAlpha.800"
          >
            {pack.description}
          </Text>
        )}
        <Stack spacing={4} mt={{ base: 2, md: 4 }}>
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
      </Stack>
    </>
  )
}

export default Pack
