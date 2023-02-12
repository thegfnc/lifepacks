import { AddIcon } from '@chakra-ui/icons'
import { Button, Flex, Input, Stack, Textarea } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import PageContainer from 'src/components/PageContainer/PageContainer'

const EditPackPage = () => {
  return (
    <PageContainer>
      <MetaTags title="EditPack" description="EditPack page" />

      <Flex justifyContent="center">
        <Stack w="3xl" spacing={6}>
          <Input
            placeholder="Title"
            fontSize="5xl"
            fontWeight="extrabold"
            color="blackAlpha.900"
            variant="unstyled"
            size="lg"
            lineHeight={1}
          />
          <Textarea
            placeholder="What is your lifepack about..."
            fontSize="xl"
            lineHeight={7}
            color="blackAlpha.800"
            variant="unstyled"
          />
          <Button leftIcon={<AddIcon boxSize={3} />}>Add Item</Button>
        </Stack>
      </Flex>
    </PageContainer>
  )
}

export default EditPackPage
