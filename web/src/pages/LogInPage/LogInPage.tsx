import { useEffect, useState } from 'react'

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
import { Link, navigate, routes } from '@redwoodjs/router'

export default function LogInPage() {
  const { isAuthenticated, logIn } = useAuth()
  const [error, setError] = useState(null)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // const emailRef = useRef<HTMLInputElement>(null)
  // useEffect(() => {
  //   emailRef.current.focus()
  // }, [])

  const onSubmit = async (data: Record<string, string>) => {
    setError(null)

    try {
      const response = await logIn({
        email: data.email,
        password: data.password,
      })

      response?.error?.message && setError(response.error.message)
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
          <Heading fontSize={'4xl'}>Log into your account</Heading>
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
                autoComplete="current-password"
                validation={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                }}
              />
              <FieldError name="password" />

              <Stack spacing={10}>
                <Box textAlign={'right'}>
                  <Link to={routes.forgotPassword()}>Forgot password?</Link>
                </Box>
                <Submit>Log in</Submit>
              </Stack>
            </Stack>
          </Form>
        </Box>
        <Stack align={'center'}>
          <Text fontSize={'lg'} color={'gray.600'}>
            <span>Don&apos;t have an account?</span>{' '}
            <Link to={routes.signUp()}>Sign Up</Link>
          </Text>
        </Stack>
      </Stack>
    </Flex>
  )
}
