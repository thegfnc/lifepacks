import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import { MdArrowRightAlt } from 'react-icons/md'

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
            <FormLabel fontSize="28px" fontWeight="semibold" color="subtle">
              Stay in touch
            </FormLabel>
            <InputGroup>
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
                h="auto"
                width="full"
                fontSize="4xl"
                bg="whiteAlpha.200"
                color="whiteAlpha.600"
                _placeholder={{ color: 'whiteAlpha.600' }}
                pl={10}
                pr={28}
                py="46px"
                borderRadius="3xl"
                borderWidth={0}
                lineHeight="none"
              />
              <InputRightElement h="full" width="auto" mr="10">
                <IconButton
                  aria-label="Subscribe"
                  type="submit"
                  flexShrink={0}
                  colorScheme="purple"
                  isLoading={isLoading}
                  icon={<MdArrowRightAlt size="24px" />}
                  borderRadius="full"
                  size="lg"
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
