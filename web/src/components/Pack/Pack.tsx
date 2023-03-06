import { ReactNode } from 'react'

import { Flex, Heading, Stack, Text } from '@chakra-ui/react'
import { Pack as PackType, PackItem as PackItemType } from 'types/graphql'

import BylineCell from 'src/cells/BylineCell'
import PackItem from 'src/components/PackItem/PackItem'

type PackPartial = Pick<PackType, 'createdAt' | 'title' | 'description'> & {
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
    <Stack spacing={6}>
      <Flex alignItems="center" justifyContent="space-between">
        <BylineCell username={username} date={pack.createdAt} />
        {actionButtons}
      </Flex>
      <Heading as="h1" fontSize="5xl" lineHeight="none" fontWeight="extrabold">
        {pack.title}
      </Heading>
      <Text
        fontSize="xl"
        marginTop={8}
        fontFamily="bitter"
        color="blackAlpha.800"
      >
        {pack.description}
      </Text>
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
