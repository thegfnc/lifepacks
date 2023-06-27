import { useEffect, useState } from 'react'

import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Alert,
  AlertIcon,
  FormHelperText,
  Link as ChakraLink,
} from '@chakra-ui/react'

import { Form, useForm } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import ThirdPartyLogo from 'src/components/ThirdPartyLogo/ThirdPartyLogo'
import PasswordInput from 'src/fields/PasswordInput/PasswordInput'
import getEnvironmentUrl from 'src/helpers/getEnvironmentUrl'
import { trackLoginWithGoogle, trackLoginWithPassword } from 'src/lib/analytics'

type LogInFormValues = {
  email: string
  password: string
}

const LogInPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  const formMethods = useForm<LogInFormValues>()
  const { register, formState } = formMethods

  const [isLoadingPasswordLogin, setIsLoadingPasswordLogin] = useState(false)
  const [isLoadingGoogleLogin, setIsLoadingGoogleLogin] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.explore())
    }
  }, [isAuthenticated])

  const logInWithGoogle = async () => {
    setError(null)
    setIsLoadingGoogleLogin(true)

    const { error } = await logIn({
      authMethod: 'oauth',
      provider: 'google',
      options: {
        redirectTo: getEnvironmentUrl(routes.explore()),
      },
    })

    if (error) {
      setError(error.message)
      setIsLoadingGoogleLogin(false)
      return
    }

    trackLoginWithGoogle()
  }

  const onSubmit = async (data: LogInFormValues) => {
    let errorMessage = null

    setError(errorMessage)
    setIsLoadingPasswordLogin(true)

    try {
      const { error } = await logIn({
        authMethod: 'password',
        email: data.email,
        password: data.password,
      })

      if (error) {
        errorMessage = error.message
      }
    } catch (error) {
      errorMessage = error.message
    }

    if (errorMessage) {
      setError(errorMessage)
      setIsLoadingPasswordLogin(false)
    } else {
      trackLoginWithPassword()
    }
  }

  return (
    <>
      <MetaTags
        title="Log In"
        description="Log in to your Lifepacks account."
      />

      <Flex align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} w={'md'} py={24} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={{ base: '2xl', md: '3xl' }}>
              Log into your account
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
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

                <FormControl isInvalid={Boolean(formState.errors.password)}>
                  <FormLabel>Password</FormLabel>
                  <PasswordInput
                    autoComplete="current-password"
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    })}
                  />
                  <FormErrorMessage>
                    {formState.errors.password?.message}
                  </FormErrorMessage>
                  <FormHelperText textAlign={'right'}>
                    <ChakraLink as={Link} to={routes.forgotPassword()}>
                      Forgot password?
                    </ChakraLink>
                  </FormHelperText>
                </FormControl>

                <Stack spacing={3}>
                  <Button type="submit" isLoading={isLoadingPasswordLogin}>
                    Log in
                  </Button>
                  <Button
                    onClick={logInWithGoogle}
                    isLoading={isLoadingGoogleLogin}
                    leftIcon={<ThirdPartyLogo type="Google" />}
                    colorScheme="gray"
                  >
                    Log in with Google
                  </Button>
                </Stack>
              </Stack>
            </Form>
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

export default LogInPage
