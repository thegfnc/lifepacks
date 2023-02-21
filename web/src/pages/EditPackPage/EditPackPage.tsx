import { Flex, Stack } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import EditPackCell from 'src/components/EditPackCell'
import PageContainer from 'src/components/PageContainer/PageContainer'
import useCurrentUserProfile from 'src/hooks/useCurrentUserProfile'

type EditPackPageProps = {
  id: number
}

const EditPackPage = ({ id }: EditPackPageProps) => {
  const { data } = useCurrentUserProfile()

  return (
    <PageContainer>
      <MetaTags title="EditPack" description="EditPack page" />

      <Flex justifyContent="center">
        <Stack w="3xl" spacing={6}>
          {data?.currentUserProfile && (
            <EditPackCell username={data.currentUserProfile.username} id={id} />
          )}
        </Stack>
      </Flex>
    </PageContainer>
  )
}

export default EditPackPage
