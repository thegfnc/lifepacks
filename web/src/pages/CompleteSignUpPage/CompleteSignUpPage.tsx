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
} from '@chakra-ui/react'

import { Form, useForm } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import useCurrentUserProfile, {
  CURRENT_USER_PROFILE_QUERY,
} from 'src/hooks/useCurrentUserProfile'

const CREATE_CURRENT_USER_PROFILE_MUTATION = gql`
  mutation CreateCurrentUserProfileMutation($input: CreateUserProfileInput!) {
    createCurrentUserProfile(input: $input) {
      id
    }
  }
`

const CompleteSignUpPage = () => {
  const formMethods = useForm()
  const currentUserProfile = useCurrentUserProfile()
  const [create, { loading, error }] = useMutation<
    CreateCurrentUserProfileMutation,
    CreateCurrentUserProfileMutationVariables
  >(CREATE_CURRENT_USER_PROFILE_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_PROFILE_QUERY }],
  })

  if (currentUserProfile.data.currentUserProfile) {
    navigate(routes.home())
  }

  const { register, formState } = formMethods

  const onSubmit = (data) => {
    create({ variables: { input: data } })
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
                    {error}
                  </Alert>
                )}

                <FormControl isInvalid={Boolean(formState.errors.username)}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type="text"
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
                  <Input
                    type="text"
                    autoComplete="given-name"
                    {...register('givenName')}
                  />
                  <FormErrorMessage>
                    {formState.errors.givenName?.message}
                  </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={Boolean(formState.errors.familyName)}>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    type="text"
                    autoComplete="family-name"
                    {...register('familyName')}
                  />
                  <FormErrorMessage>
                    {formState.errors.familyName?.message}
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
