import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  SimpleGrid,
  Square,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { Pack, PackItem } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

type PackPartial = Pick<Pack, 'id' | 'createdAt' | 'slug' | 'title'> & {
  packItems: Pick<PackItem, 'imageUrl' | 'title'>[]
}

type PacksProps = {
  username: string
  packs: PackPartial[]
}

const Packs = ({ username, packs }: PacksProps) => {
  return (
    <Stack>
      {packs.map((pack) => {
        return (
          <SimpleGrid
            key={pack.id}
            columns={2}
            p={8}
            borderRadius="32px"
            borderWidth="1px"
            borderColor="blackAlpha.300"
          >
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              borderRightWidth="1px"
              borderRightColor="blackAlpha.200"
              pr={8}
              position="relative"
            >
              <ChakraLink
                as={Link}
                to={routes.pack({
                  username,
                  slug: pack.slug,
                })}
                fontSize="26px"
                lineHeight={7}
                fontWeight="bold"
              >
                {pack.title}
              </ChakraLink>
              <Text color="blackAlpha.700" mt={8}>
                {format(new Date(pack.createdAt), 'MMM d, yyyy')}
              </Text>
              <Tag
                size="md"
                position="absolute"
                right={8}
                bottom={0}
                colorScheme="purple"
                borderRadius="full"
                bg="purple.50"
                fontWeight="normal"
              >
                {pack.packItems.length}{' '}
                {pack.packItems.length === 1 ? 'Item' : 'Items'}
              </Tag>
            </Flex>
            <Box ml={8} px="68px">
              <Image
                src={pack.packItems[0]?.imageUrl}
                w="full"
                alt={pack.packItems[0]?.title}
              />
            </Box>
          </SimpleGrid>
        )
      })}
    </Stack>
  )
}

export default Packs
