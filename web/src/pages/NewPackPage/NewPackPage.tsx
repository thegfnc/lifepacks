import { Spinner, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import NewPack from 'src/components/NewPack/NewPack'
import PageContainer from 'src/components/PageContainer/PageContainer'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

const Loading = () => {
  return <Spinner />
}

const NewPackPage = () => {
  const { currentUserProfile } = useCurrentUserProfile()

  return (
    <PageContainer size="sm">
      <MetaTags
        title="Create Pack"
        description="Create a new pack to share your recommendations with the world."
      />

      <Stack spacing={6}>
        {currentUserProfile ? (
          <NewPack username={currentUserProfile.username} />
        ) : (
          <Loading />
        )}
      </Stack>
    </PageContainer>
  )
}

export default NewPackPage
