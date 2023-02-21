import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react'
import {
  CreateCurrentUserProfileMutation,
  CreateCurrentUserProfileMutationVariables,
} from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import useCurrentUserProfile, {
  CURRENT_USER_PROFILE_QUERY,
} from 'src/hooks/useCurrentUserProfile'

type CompleteSignUpFormValues = {
  username: string
  givenName: string
  familyName: string
  biography: string
}

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
  const formMethods = useForm<CompleteSignUpFormValues>()
  const { data } = useCurrentUserProfile()
  const [mutate, { loading, error }] = useMutation<
    CreateCurrentUserProfileMutation,
    CreateCurrentUserProfileMutationVariables
  >(MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_PROFILE_QUERY }],
  })

  if (data?.currentUserProfile) {
    navigate(routes.home())
  }

  const { register, formState } = formMethods

  const onSubmit = (data: CompleteSignUpFormValues) => {
    mutate({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags
        title="Complete Sign Up"
        description="Finish signing up by creating a user profile."
      />

      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
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
            <Form formMethods={formMethods} onSubmit={onSubmit}>
              <Stack spacing={6}>
                {error && (
                  <Alert status="error">
                    <AlertIcon />
                    {error.message}
                  </Alert>
                )}

                <FormControl isInvalid={Boolean(formState.errors.username)}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    autoComplete="username"
                    {...register('username', {
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {formState.errors.username?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={Boolean(formState.errors.givenName)}>
                  <FormLabel>First Name</FormLabel>
                  <Input autoComplete="given-name" {...register('givenName')} />
                  <FormErrorMessage>
                    {formState.errors.givenName?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={Boolean(formState.errors.familyName)}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    autoComplete="family-name"
                    {...register('familyName')}
                  />
                  <FormErrorMessage>
                    {formState.errors.familyName?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={Boolean(formState.errors.biography)}>
                  <FormLabel>Biography</FormLabel>
                  <Textarea {...register('biography')} />
                  <FormErrorMessage>
                    {formState.errors.biography?.message}
                  </FormErrorMessage>
                </FormControl>

                <Button type="submit" isLoading={loading}>
                  Create profile
                </Button>
              </Stack>
            </Form>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}
export default CompleteSignUpPage
