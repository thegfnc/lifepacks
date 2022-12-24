import { useEffect, useState } from 'react'

import { CheckCircleIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
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
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useBoolean,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Form, useForm } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SignUpPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  const formMethods = useForm()
  const { register, formState } = formMethods

  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isShowingPassword, setIsShowingPassword] = useBoolean()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // const emailRef = useRef<HTMLInputElement>(null)
  // useEffect(() => {
  //   emailRef.current?.focus()
  // }, [])

  const onSubmit = async (data) => {
    let errorMessage = null

    setError(errorMessage)
    setIsLoading(true)

    try {
      const { error } = await signUp({
        email: data.email,
        password: data.password,
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
        title="Sign Up"
        description="Sign up for a free account at Lifepacks."
      />

      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} w={'md'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign up for an account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box rounded={'lg'} bg={'white'} boxShadow={'lg'} p={8}>
            {isSuccess ? (
              <Box textAlign="center" py={10}>
                <CheckCircleIcon boxSize={'35px'} color={'green.500'} />
                <Heading as="h2" size="md" mt={6} mb={2}>
                  Account Sign Up
                </Heading>
                <Text color={'gray.500'}>
                  Your account sign up request has succeeded. You should receive
                  an email soon with a link to confirm your account.
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
                            isShowingPassword
                              ? 'Hide Password'
                              : 'Show Password'
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
                  </FormControl>

                  <Button type="submit" isLoading={isLoading}>
                    Sign up
                  </Button>
                </Stack>
              </Form>
            )}
          </Box>
          <Stack align={'center'}>
            <Text fontSize={'lg'} color={'gray.600'}>
              <span>Already have an account?</span>{' '}
              <Link to={routes.logIn()}>Log In</Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
    </>
  )
}
export default SignUpPage
