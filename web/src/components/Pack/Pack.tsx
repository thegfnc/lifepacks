import { Heading, Stack, Button, Box } from '@chakra-ui/react'
import { Pack as PackType, PackItem as PackItemType } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import PackItem from 'src/components/PackItem/PackItem'

import RichTextStyleWrapper from '../RichTextStyleWrapper/RichTextStyleWrapper'

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
      <Stack spacing={{ base: 6, md: 10 }}>
        <Stack spacing={{ base: 4, md: 6 }}>
          <Heading
            as="h1"
            fontSize={{ base: '36px', md: '48px' }}
            lineHeight={{ base: '40px', md: '52px' }}
            fontWeight="extrabold"
            dangerouslySetInnerHTML={{ __html: pack.title }}
          />
          {pack.description && (
            <RichTextStyleWrapper
              fontSize={{ base: '18px', md: '21px' }}
              lineHeight={{ base: '1.33', md: '28px' }}
              fontFamily="bitter"
              color="blackAlpha.900"
            >
              <Box dangerouslySetInnerHTML={{ __html: pack.description }} />
            </RichTextStyleWrapper>
          )}
        </Stack>
        <Stack spacing={{ base: 4, md: 6 }}>
          {pack.packItems.map((packItem) => (
            <PackItem
              key={packItem.id}
              id={packItem.id}
              imageUrl={packItem.imageUrl}
              purchaseUrl={packItem.purchaseUrl}
              title={packItem.title}
              description={packItem.description}
            />
          ))}
        </Stack>
        <Button
          as={Link}
          size={{ base: 'lg', md: 'xl' }}
          to={routes.home()}
          variant="secondary"
          alignSelf="center"
        >
          View All Packs
        </Button>
      </Stack>
    </>
  )
}

export default Pack
