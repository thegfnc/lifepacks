import { useEffect, useState } from 'react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Flex,
  Box,
  Stack,
  Heading,
  Text,
  Button,
  useBoolean,
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  FormErrorMessage,
} from '@chakra-ui/react'

import { useAuth } from '@redwoodjs/auth'
import { Form, useForm } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const ForgotPasswordPage = () => {
  const { isAuthenticated, client, loading } = useAuth()
  const formMethods = useForm()
  const { register, formState } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isShowingPassword, setIsShowingPassword] = useBoolean()

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
    let errorMessage = null

    setError(errorMessage)
    setIsLoading(true)

    try {
      const { error } = await client.auth.update({
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
        description="Enter your new password to reset it on your account."
      />

      <Flex minH={'100vh'} align={'center'} justify={'center'} bg={'gray.50'}>
        <Stack spacing={8} mx={'auto'} w={'md'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Reset Password</Heading>
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
