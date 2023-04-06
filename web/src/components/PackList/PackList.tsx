import { SimpleGrid } from '@chakra-ui/react'
import { Pack, PackItem, UserProfile } from 'types/graphql'

import PackThumbnail from '../PackThumbnail/PackThumbnail'

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
}

const PackList = ({ packs, showByline = false }: PackListProps) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={6}>
      {packs.map((pack) => {
        return (
          <PackThumbnail key={pack.id} pack={pack} showByline={showByline} />
        )
      })}
    </SimpleGrid>
  )
}

export default PackList
