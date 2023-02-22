import { ReactNode } from 'react'

import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { Pack as PackType, PackItem as PackItemType } from 'types/graphql'

import BylineCell, { Mode } from 'src/components/BylineCell/BylineCell'
import PackItem from 'src/components/PackItem/PackItem'

interface PackPartial
  extends Pick<PackType, 'createdAt' | 'title' | 'description'> {
  packItems: Pick<
    PackItemType,
    'id' | 'imageUrl' | 'purchaseUrl' | 'title' | 'description'
  >[]
}

type PackProps = {
  username: string
  pack: PackPartial
  actionButtons?: ReactNode
}

const Pack = ({ username, pack, actionButtons }: PackProps) => {
  return (
    <>
      <Flex alignItems="center" justifyContent="space-between">
        <BylineCell
          username={username}
          mode={Mode.Pack}
          date={pack.createdAt}
        />

        {actionButtons}
      </Flex>
      <Heading
        as="h1"
        fontSize="5xl"
        lineHeight="none"
        fontWeight="extrabold"
        marginTop={6}
      >
        {pack.title}
      </Heading>
      <Text fontSize="xl" lineHeight={7} marginTop={8}>
        {pack.description}
      </Text>
      <Stack spacing={6} marginTop={10}>
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
    </>
  )
}

export default Pack
