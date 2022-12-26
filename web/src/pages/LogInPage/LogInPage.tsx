import { useEffect, useRef, useState } from 'react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Alert,
  AlertIcon,
  FormHelperText,
  useBoolean,
  Link as ChakraLink,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Form, useForm } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LogInPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const formMethods = useForm()
  const { register, formState } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isShowingPassword, setIsShowingPassword] = useBoolean()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
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

      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} w={'md'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={{ base: '3xl', md: '4xl' }}>
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
                    autoComplete="email"
                    ref={emailRef}
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
                  <InputGroup size="md">
                    <Input
                      type={isShowingPassword ? 'text' : 'password'}
                      autoComplete="current-password"
                      pr="2.75rem"
                      {...register('password', {
                        required: {
                          value: true,
                          message: 'Password is required',
                        },
                      })}
                    />
                    <InputRightElement width="2.75rem">
                      <IconButton
                        h="1.75rem"
                        size="sm"
                        aria-label={
                          isShowingPassword ? 'Hide Password' : 'Show Password'
                        }
                        icon={
                          isShowingPassword ? <ViewOffIcon /> : <ViewIcon />
                        }
                        onClick={setIsShowingPassword.toggle}
                      />
                    </InputRightElement>
                  </InputGroup>
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
