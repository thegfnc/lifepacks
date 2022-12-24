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
import { FieldError, Form, Label, Submit, TextField } from '@redwoodjs/forms'
import { Link, routes, navigate } from '@redwoodjs/router'

const ForgotPasswordPage = () => {
  const { isAuthenticated, client } = useAuth()
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

  const onSubmit = async (data: { email: string }) => {
    setError(null)

    try {
      const response = await client.auth.api.resetPasswordForEmail(data.email, {
        redirectTo: `${window.location.origin}/reset-password`,
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
          <Heading fontSize={'4xl'}>Forgot your password?</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            You&apos;ll get an email with a reset link
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
                Password Reset Requested
              </Heading>
              <Text color={'gray.500'}>
                Your password reset request has succeeded. Check your inbox for
                next steps on how to set a new password.
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

                <Stack spacing={10}>
                  <Submit>Request Reset</Submit>
                </Stack>
              </Stack>
            </Form>
          )}
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
export default ForgotPasswordPage
