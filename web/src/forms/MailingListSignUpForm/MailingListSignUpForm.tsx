import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react'

import { Form, useForm } from '@redwoodjs/forms'

type MailingListSignUpFormProps = {
  onSubmit: (data: MailingListSignUpFormValues) => void
  isLoading: boolean
}

type MailingListSignUpFormValues = {
  email: string
}

export type MailingListSignUpSubmitData = MailingListSignUpFormValues

const MailingListSignUpForm = ({
  onSubmit,
  isLoading,
}: MailingListSignUpFormProps) => {
  const formMethods = useForm<MailingListSignUpFormValues>()
  const { register, formState } = formMethods

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Stack spacing="4">
        <Stack
          spacing="4"
          direction={{ base: 'column', sm: 'row' }}
          maxW={{ lg: '360px' }}
          align="flex-end"
        >
          <FormControl isInvalid={Boolean(formState.errors.email)}>
            <FormLabel fontSize="sm" fontWeight="semibold" color="subtle">
              Stay up to date
            </FormLabel>
            <Input
              placeholder="Enter your email"
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
          <Button
            type="submit"
            flexShrink={0}
            colorScheme="whiteAlpha"
            isLoading={isLoading}
          >
            Subscribe
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}

export default MailingListSignUpForm
