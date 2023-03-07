import {
  Box,
  Flex,
  Image,
  Link as ChakraLink,
  Stack,
  Tag,
  Text,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { Pack, PackItem } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'

import ImageFallback from '../ImageFallback/ImageFallback'

type PackPartial = Pick<Pack, 'id' | 'createdAt' | 'slug' | 'title'> & {
  packItems: Pick<PackItem, 'imageUrl' | 'title'>[]
}

type PacksProps = {
  username: string
  packs: PackPartial[]
}

const Packs = ({ username, packs }: PacksProps) => {
  return (
    <Stack spacing={6}>
      {packs.map((pack) => {
        return (
          <Flex
            key={pack.id}
            px={{ base: 4, md: 8 }}
            py={{ base: 6, md: 8 }}
            borderRadius="32px"
            borderWidth="1px"
            borderColor="blackAlpha.300"
            direction={{ base: 'column', md: 'row' }}
          >
            <Flex
              direction="column"
              alignItems="flex-start"
              justifyContent="space-between"
              borderTopWidth={{ base: '1px', md: 0 }}
              borderRightWidth={{ base: 0, md: '1px' }}
              borderColor="blackAlpha.200"
              pr={{ base: 0, md: 8 }}
              pt={{ base: 6, md: 0 }}
              mt={{ base: 6, md: 0 }}
              position="relative"
              w={{ base: 'full', md: '50%' }}
              order={{ base: 2, md: 1 }}
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
                right={{ base: 0, md: 8 }}
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
            <Box
              ml={{ base: 0, md: 8 }}
              px="68px"
              width={{ base: 'full', md: '50%' }}
              order={{ base: 1, md: 2 }}
            >
              <Image
                src={pack.packItems[0]?.imageUrl}
                w="full"
                alt={pack.packItems[0]?.title}
                fallback={<ImageFallback />}
              />
            </Box>
          </Flex>
        )
      })}
    </Stack>
  )
}

export default Packs
