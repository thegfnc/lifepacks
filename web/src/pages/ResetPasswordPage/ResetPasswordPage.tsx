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
} from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

const ForgotPasswordPage = () => {
  const { isAuthenticated, client, loading } = useAuth()
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate(routes.home())
    }
  }, [loading, isAuthenticated])

  // const emailRef = useRef<HTMLInputElement>(null)
  // useEffect(() => {
  //   emailRef.current?.focus()
  // }, [])

  const onSubmit = async (data: Record<string, string>) => {
    setError(null)

    try {
      const response = await client.auth.update({
        password: data.password,
      })

      if (response.error) {
        setError(response.error.message)
      } else {
        toast.success('Your password has been changed.')
        navigate(routes.home())
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
          <Heading fontSize={'4xl'}>Reset Password</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Enter your new password
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
                <Submit>Reset Password</Submit>
              </Stack>
            </Stack>
          </Form>
        </Box>
      </Stack>
    </Flex>
  )
}
export default ForgotPasswordPage
