import { Spinner, Stack } from '@chakra-ui/react'

import { Metadata } from '@redwoodjs/web'

import EditPackCell from 'src/cells/EditPackCell'
import PageContainer from 'src/components/PageContainer/PageContainer'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type EditPackPageProps = {
  id: number
}

const Loading = () => {
  return <Spinner />
}

const EditPackPage = ({ id }: EditPackPageProps) => {
  const { currentUserProfile } = useCurrentUserProfile()

  return (
    <PageContainer size="sm">
      <Metadata
        title="Edit Pack"
        description="Update your recommendations in this pack."
      />

      <Stack spacing={6}>
        {currentUserProfile ? (
          <EditPackCell username={currentUserProfile.username} id={id} />
        ) : (
          <Loading />
        )}
      </Stack>
    </PageContainer>
  )
}

export default EditPackPage
