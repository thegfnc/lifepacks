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
          align="flex-end"
        >
          <FormControl isInvalid={Boolean(formState.errors.email)}>
            <FormLabel
              fontSize={'16px'}
              fontWeight="semibold"
              color="subtle"
              size="sm"
              lineHeight="base"
              marginBottom={0}
              marginRight={0}
            >
              Stay in touch
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
              borderRadius="xl"
              borderWidth={0}
              background="blackAlpha.50"
              mt={4}
            />
            <Button
              aria-label="Subscribe"
              type="submit"
              variant="secondary"
              isLoading={isLoading}
              w="full"
              mt={2}
              borderRadius="xl"
            >
              Sign up for mailing list
            </Button>
            <FormErrorMessage>
              {formState.errors.email?.message}
            </FormErrorMessage>
          </FormControl>
        </Stack>
      </Stack>
    </Form>
  )
}

export default MailingListSignUpForm
