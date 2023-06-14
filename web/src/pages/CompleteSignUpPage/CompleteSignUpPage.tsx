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
  MailingListSignUpMutation,
  MailingListSignUpMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import UserProfileForm, {
  UserProfileFormSubmitData,
} from 'src/forms/UserProfileForm/UserProfileForm'
import useCurrentUserProfile, {
  CURRENT_USER_PROFILE_QUERY,
} from 'src/hooks/useCurrentUserProfile'

const CREATE_CURRENT_USER_PROFILE_MUTATION = gql`
  mutation CreateCurrentUserProfileMutation(
    $input: CreateCurrentUserProfileInput!
  ) {
    createCurrentUserProfile(input: $input) {
      id
    }
  }
`

const MAILING_LIST_SIGN_UP_MUTATION = gql`
  mutation MailingListSignUpMutation($input: MailingListSignUpInput!) {
    mailingListSignUp(input: $input) {
      id
    }
  }
`

const CompleteSignUpPage = () => {
  const { currentUser } = useAuth()
  const { currentUserProfile } = useCurrentUserProfile()

  const [
    mutateCreateCurrentUserProfile,
    {
      loading: loadingCreateCurrentUserProfile,
      error: errorCreateCurrentUserProfile,
    },
  ] = useMutation<
    CreateCurrentUserProfileMutation,
    CreateCurrentUserProfileMutationVariables
  >(CREATE_CURRENT_USER_PROFILE_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_PROFILE_QUERY }],
  })

  const [
    mutateMailingListSignUp,
    { loading: loadingMailingListSignUp, error: errorMailingListSignUp },
  ] = useMutation<
    MailingListSignUpMutation,
    MailingListSignUpMutationVariables
  >(MAILING_LIST_SIGN_UP_MUTATION)

  if (currentUserProfile) {
    navigate(routes.explore())
  }

  const onSubmit = ({
    mailingListSignUp,
    ...data
  }: UserProfileFormSubmitData) => {
    mutateCreateCurrentUserProfile({ variables: { input: data } })

    if (mailingListSignUp) {
      mutateMailingListSignUp({
        variables: {
          input: {
            email: currentUser.email,
            givenName: data.givenName,
            familyName: data.familyName,
          },
        },
      })
    }
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
            {(errorCreateCurrentUserProfile || errorMailingListSignUp) && (
              <Alert status="error" mb={4}>
                <AlertIcon />
                {
                  (errorCreateCurrentUserProfile || errorMailingListSignUp)
                    .message
                }
              </Alert>
            )}
            <UserProfileForm
              onSubmit={onSubmit}
              isLoading={
                loadingCreateCurrentUserProfile || loadingMailingListSignUp
              }
            />
          </Box>
        </Stack>
      </Flex>
    </>
  )
}
export default CompleteSignUpPage
