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
import PasswordInput from 'src/fields/PasswordInput/PasswordInput'

type LogInFormValues = {
  email: string
  password: string
}

const LogInPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  const formMethods = useForm<LogInFormValues>()
  const { register, formState } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const onSubmit = async (data: LogInFormValues) => {
    let errorMessage = null

    setError(errorMessage)
    setIsLoading(true)

    try {
      const { error } = await logIn({
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
      setIsLoading(false)
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

                <Button type="submit" isLoading={isLoading}>
                  Log in
                </Button>
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
