import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import {
  CreateCurrentUserProfileMutation,
  CreateCurrentUserProfileMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import UserProfileForm, {
  UserProfileFormSubmitData,
} from 'src/forms/UserProfileForm/UserProfileForm'
import useCurrentUserProfile, {
  CURRENT_USER_PROFILE_QUERY,
} from 'src/hooks/useCurrentUserProfile'

const MUTATION = gql`
  mutation CreateCurrentUserProfileMutation(
    $input: CreateCurrentUserProfileInput!
  ) {
    createCurrentUserProfile(input: $input) {
      id
    }
  }
`

const CompleteSignUpPage = () => {
  const { currentUserProfile } = useCurrentUserProfile()
  const [mutate, { loading, error }] = useMutation<
    CreateCurrentUserProfileMutation,
    CreateCurrentUserProfileMutationVariables
  >(MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_PROFILE_QUERY }],
  })

  if (currentUserProfile) {
    navigate(routes.home())
  }

  const onSubmit = (data: UserProfileFormSubmitData) => {
    mutate({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags
        title="Create Profile"
        description="Choose a username and create your profile to complete the sign up process."
      />

      <Flex align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} w={'md'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={{ base: '3xl', md: '4xl' }}>
              Create a profile
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to complete the sign up process ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            {error && (
              <Alert status="error">
                <AlertIcon />
                {error.message}
              </Alert>
            )}
            <UserProfileForm onSubmit={onSubmit} isLoading={loading} />
          </Box>
        </Stack>
      </Flex>
    </>
  )
}
export default CompleteSignUpPage
