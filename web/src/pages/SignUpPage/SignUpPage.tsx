import { useEffect, useState } from 'react'

import { CheckCircleIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
  TextField,
} from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'

const SignUpPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState(null)

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
    setError(null)

    try {
      const response = await signUp({
        email: data.email,
        password: data.password,
      })

      if (response.error) {
        setError(response.error.message)
      } else {
        setIsSuccess(true)
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign up for an account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          {isSuccess ? (
            <Box textAlign="center" py={10} px={6}>
              <CheckCircleIcon boxSize={'35px'} color={'green.500'} />
              <Heading as="h2" size="md" mt={6} mb={2}>
                Account Sign Up
              </Heading>
              <Text color={'gray.500'}>
                Your account sign up request has succeeded. Check your email
                inbox for a link to confirm your account.
              </Text>
            </Box>
          ) : (
            <Form onSubmit={onSubmit}>
              <Stack spacing={4}>
                {error && <p>{error}</p>}
                <Label name="email">Email address</Label>
                <TextField
                  name="email"
                  // ref={emailRef}
                  validation={{
                    required: {
                      value: true,
                      message: 'E-mail address is required',
                    },
                  }}
                />
                <FieldError name="email" />

                <Label name="password">Password</Label>
                <PasswordField
                  name="password"
                  autoComplete="new-password"
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                />
                <FieldError name="password" />

                <Stack spacing={10}>
                  <Submit>Sign up</Submit>
                </Stack>
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
  )
}
export default SignUpPage
