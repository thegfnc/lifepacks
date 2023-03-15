import { Flex, Spinner, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

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
  const { data } = useCurrentUserProfile()

  return (
    <PageContainer>
      <MetaTags
        title="Edit Pack"
        description="Update your recommendations in this pack."
      />

      <Flex justifyContent="center">
        <Stack w="3xl" spacing={6}>
          {data?.currentUserProfile ? (
            <EditPackCell username={data.currentUserProfile.username} id={id} />
          ) : (
            <Loading />
          )}
        </Stack>
      </Flex>
    </PageContainer>
  )
}

export default EditPackPage
