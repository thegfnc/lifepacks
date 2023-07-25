import { useEffect, useState } from 'react'

import { CheckCircleIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Link as ChakraLink,
} from '@chakra-ui/react'

import { Form, useForm } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'

type ForgotPasswordFormValues = {
  email: string
}

const ForgotPasswordPage = () => {
  const { isAuthenticated, client } = useAuth()
  const formMethods = useForm<ForgotPasswordFormValues>()
  const { register, formState } = formMethods

  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    let errorMessage = null

    setError(errorMessage)
    setIsLoading(true)

    try {
      const { error } = await client.auth.resetPasswordForEmail(data.email, {
        redirectTo: getEnvironmentUrl(routes.resetPassword()),
      })

      if (error) {
        errorMessage = error.message
      }
    } catch (error) {
      errorMessage = error.message
    }

    setIsLoading(false)
    if (errorMessage) {
      setError(errorMessage)
    } else {
      setIsSuccess(true)
    }
  }

  return (
    <>
      <MetaTags
        title="Forgot Password"
        description="Enter your e-mail to recieve a reset password link."
      />

      <Flex align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} w={'md'} py={24} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={{ base: '2xl', md: '3xl' }}>
              Forgot your password?
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              You&apos;ll get an email with a reset link
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            {isSuccess ? (
              <Box textAlign="center" py={10}>
                <CheckCircleIcon boxSize={'35px'} color={'green.500'} />
                <Heading as="h2" size="md" mt={6} mb={2}>
                  Password Reset Requested
                </Heading>
                <Text color={'gray.500'}>
                  Your password reset request has succeeded. Check your inbox
                  for next steps on how to set a new password.
                </Text>
              </Box>
            ) : (
              <Form formMethods={formMethods} onSubmit={onSubmit}>
                <Stack spacing={6}>
                  {error && (
                    <Alert status="error">
                      <AlertIcon />
                      {error}
                    </Alert>
                  )}

                  <FormControl isInvalid={Boolean(formState.errors.email)}>
                    <FormLabel>E-mail address</FormLabel>
                    <Input
                      type="email"
                      autoComplete="email"
                      {...register('email', {
                        required: {
                          value: true,
                          message: 'E-mail address is required',
                        },
                      })}
                    />
                    <FormErrorMessage>
                      {formState.errors.email?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <Button type="submit" isLoading={isLoading} variant="primary">
                    Request Password Reset
                  </Button>
                </Stack>
              </Form>
            )}
          </Box>
          <Stack align={'center'}>
            <Text fontSize={'lg'} color={'gray.600'}>
              <span>Don&apos;t have an account?</span>{' '}
              <ChakraLink as={Link} to={routes.signUp()}>
                Sign Up
              </ChakraLink>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  )
}
export default ForgotPasswordPage
