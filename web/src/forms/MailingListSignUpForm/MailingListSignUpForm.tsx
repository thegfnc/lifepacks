import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useBoolean,
} from '@chakra-ui/react'
import { MdArrowForward } from 'react-icons/md'

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
  const [isFormFieldActive, setIsFormFieldActive] = useBoolean()
  const formMethods = useForm<MailingListSignUpFormValues>()
  const { register, formState } = formMethods

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <Stack spacing="1">
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
              Newsletter
            </FormLabel>
            <InputGroup mt={4} size="lg">
              <Input
                placeholder="Enter email to sign up"
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
                onFocus={setIsFormFieldActive.on}
                onBlur={setIsFormFieldActive.off}
              />
              <InputRightElement>
                <IconButton
                  aria-label="Subscribe"
                  type="submit"
                  variant={isFormFieldActive ? 'primary' : 'secondary'}
                  isLoading={isLoading}
                  borderRadius="full"
                  size="sm"
                  color={isFormFieldActive ? 'white' : 'blackAlpha.400'}
                  icon={<MdArrowForward size="20px" />}
                />
              </InputRightElement>
            </InputGroup>
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
