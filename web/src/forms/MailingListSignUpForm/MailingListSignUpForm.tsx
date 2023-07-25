import {
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
            <FormLabel
              fontSize={{ base: '20px', md: '28px' }}
              fontWeight="semibold"
              color="subtle"
            >
              Stay in the loop
            </FormLabel>
            <InputGroup mt={{ base: 4, md: 6 }}>
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
                fontSize={{ base: '18px', md: '4xl' }}
                bg="whiteAlpha.200"
                color="whiteAlpha.600"
                _placeholder={{ color: 'whiteAlpha.600' }}
                pl={{ base: 4, md: 10 }}
                pr={{ base: '86px', md: 28 }}
                py={{ base: '24px', md: '46px' }}
                borderRadius={{ base: 'xl', md: '3xl' }}
                borderWidth={0}
                lineHeight="none"
              />
              <InputRightElement h="full" width="auto" mr={{ base: 4, md: 10 }}>
                <IconButton
                  aria-label="Subscribe"
                  type="submit"
                  flexShrink={0}
                  variant="primary"
                  isLoading={isLoading}
                  icon={<MdArrowRightAlt size="24px" />}
                  borderRadius="full"
                  size={'lg'}
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
