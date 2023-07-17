import { useState } from 'react'

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
  FormErrorMessage,
} from '@chakra-ui/react'

import { Form, useForm } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import PasswordInput from 'src/fields/PasswordInput/PasswordInput'

type ResetPasswordFormValues = {
  password: string
}

const ForgotPasswordPage = () => {
  const { client } = useAuth()
  const formMethods = useForm<ResetPasswordFormValues>()
  const { register, formState } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = async (data: ResetPasswordFormValues) => {
    let errorMessage = null

    setError(errorMessage)
    setIsLoading(true)

    try {
      const { error } = await client.auth.updateUser({
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
    } else {
      toast.success('Your password has been changed.')
      navigate(routes.home())
    }
  }

  return (
    <>
      <MetaTags
        title="Reset Password"
        description="Enter your new password to update your account."
      />

      <Flex align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} w={'md'} py={24} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={{ base: '2xl', md: '3xl' }}>
              Reset Password
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Enter your new password
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

                <FormControl isInvalid={Boolean(formState.errors.password)}>
                  <FormLabel>Password</FormLabel>
                  <PasswordInput
                    autoComplete="new-password"
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
                </FormControl>

                <Button type="submit" isLoading={isLoading}>
                  Reset Password
                </Button>
              </Stack>
            </Form>
          </Box>
        </Stack>
      </Flex>
    </>
  )
}
export default ForgotPasswordPage
