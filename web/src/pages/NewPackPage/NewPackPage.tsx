import { Flex, Spinner, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import NewPack from 'src/components/NewPack/NewPack'
import PageContainer from 'src/components/PageContainer/PageContainer'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

const Loading = () => {
  return <Spinner />
}

const NewPackPage = () => {
  const { data } = useCurrentUserProfile()

  return (
    <PageContainer>
      <MetaTags title="EditPack" description="EditPack page" />

      <Flex justifyContent="center">
        <Stack w="3xl" spacing={6}>
          {data?.currentUserProfile ? (
            <NewPack username={data.currentUserProfile.username} />
          ) : (
            <Loading />
          )}
        </Stack>
      </Flex>
    </PageContainer>
  )
}

export default NewPackPage
