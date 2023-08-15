import { SimpleGrid, Stack } from '@chakra-ui/react'
import { Pack, PackItem, UserProfile } from 'types/graphql'

import PackThumbnailGridItem from 'src/components/PackThumbnailGridItem'
import PackThumbnailListItem from 'src/components/PackThumbnailListItem'

type PackPartial = Pick<Pack, 'id' | 'createdAt' | 'slug' | 'title'> & {
  packItems: Pick<PackItem, 'imageUrl' | 'title'>[]
  userProfile: Pick<
    UserProfile,
    'username' | 'givenName' | 'familyName' | 'imageUrl'
  >
}

type PackListProps = {
  packs: PackPartial[]
  showByline?: boolean
  layout?: 'grid' | 'list'
}

const PackList = ({
  packs,
  showByline = false,
  layout = 'grid',
}: PackListProps) => {
  if (layout === 'grid') {
    return (
      <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
        {packs.map((pack) => {
          return (
            <PackThumbnailGridItem
              key={pack.id}
              pack={pack}
              showByline={showByline}
            />
          )
        })}
      </SimpleGrid>
    )
  } else if (layout === 'list') {
    return (
      <Stack spacing={4}>
        {packs.map((pack) => {
          return (
            <PackThumbnailListItem
              key={pack.id}
              pack={pack}
              showByline={showByline}
            />
          )
        })}
      </Stack>
    )
  }

  return null
}

export default PackList
