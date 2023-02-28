import { forwardRef } from 'react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useBoolean,
} from '@chakra-ui/react'

import { UseFormRegisterReturn } from '@redwoodjs/forms'

type PasswordInputProps = UseFormRegisterReturn & {
  autoComplete: 'current-password' | 'new-password'
}

type Ref = HTMLInputElement

const PasswordInput = forwardRef<Ref, PasswordInputProps>(
  ({ autoComplete, onChange, onBlur, name }, ref) => {
    const [isShowingPassword, setIsShowingPassword] = useBoolean()

    return (
      <InputGroup size="md">
        <Input
          type={isShowingPassword ? 'text' : 'password'}
          autoComplete={autoComplete}
          pr="2.75rem"
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          ref={ref}
        />
        <InputRightElement width="2.75rem">
          <IconButton
            h="1.75rem"
            size="sm"
            rounded="lg"
            colorScheme="gray"
            aria-label={isShowingPassword ? 'Hide Password' : 'Show Password'}
            icon={isShowingPassword ? <ViewOffIcon /> : <ViewIcon />}
            onClick={setIsShowingPassword.toggle}
          />
        </InputRightElement>
      </InputGroup>
    )
  }
)

export default PasswordInput
