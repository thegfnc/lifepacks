import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  Square,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { Pack, PackItem } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

interface PackPartial
  extends Pick<Pack, 'id' | 'createdAt' | 'slug' | 'title'> {
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
          <Flex
            key={pack.id}
            py={6}
            borderBottomWidth="1px"
            borderBottomColor="blackAlpha.200"
          >
            <Square size="180px" borderRadius="3xl">
              <Image
                src={pack.packItems[0]?.imageUrl}
                boxSize="180px"
                fit="contain"
                alt={pack.packItems[0]?.title}
              />
            </Square>
            <Flex ml={8} alignItems="center">
              <Box>
                <Text>{format(new Date(pack.createdAt), 'MMM d')}</Text>
                <Box mt={2}>
                  <ChakraLink
                    as={Link}
                    to={routes.pack({
                      username,
                      slug: pack.slug,
                    })}
                    fontSize="xl"
                    lineHeight={7}
                    fontWeight="bold"
                  >
                    {pack.title}
                  </ChakraLink>
                </Box>
                <Tag size="md" mt={4}>
                  {pack.packItems.length}{' '}
                  {pack.packItems.length === 1 ? 'Item' : 'Items'}
                </Tag>
              </Box>
            </Flex>
          </Flex>
        )
      })}
    </Stack>
  )
}

export default Packs
