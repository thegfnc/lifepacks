import { Dispatch, SetStateAction, useEffect } from 'react'

import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { BiImageAdd } from 'react-icons/bi'
import { CurrentUserProfile } from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'

import SocialAccountIcon, {
  SocialAccountType,
} from 'src/components/SocialAccountIcon/SocialAccountIcon'

type UserProfileFormProps = {
  onFormDirtyStateChange?: Dispatch<SetStateAction<boolean>>
  onSubmit: (data: UserProfileFormValues) => void
  onCancel?: () => void
  isLoading: boolean
  defaultValues?: Pick<
    CurrentUserProfile,
    | 'username'
    | 'givenName'
    | 'familyName'
    | 'biography'
    | 'facebookUrl'
    | 'instagramUrl'
    | 'youtubeUrl'
  >
}

type UserProfileFormValues = {
  username: string
  givenName: string
  familyName: string
  biography: string
  facebookUrl: string
  instagramUrl: string
  youtubeUrl: string
}

export type UserProfileFormSubmitData = UserProfileFormValues

const UserProfileForm = ({
  onFormDirtyStateChange = () => {},
  onSubmit,
  onCancel,
  isLoading,
  defaultValues,
}: UserProfileFormProps) => {
  const formMethods = useForm<UserProfileFormValues>()
  const { register, formState } = formMethods

  useEffect(() => {
    onFormDirtyStateChange(formState.isDirty)
  }, [formState.isDirty, onFormDirtyStateChange])

  return (
    <>
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Profile Image</FormLabel>
            <IconButton
              aria-label="Upload image"
              icon={<BiImageAdd size="1.5rem" />}
              borderWidth="1px"
              borderColor="gray.300"
              borderStyle="dashed"
              borderRadius="full"
              boxSize={24}
            />
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.username)}>
            <FormLabel>Username*</FormLabel>
            <Input
              autoComplete="username"
              disabled={Boolean(defaultValues)}
              defaultValue={defaultValues?.username}
              {...register('username', {
                required: {
                  value: !defaultValues,
                  message: 'Username is required',
                },
              })}
            />
            <FormErrorMessage>
              {formState.errors.username?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.givenName)}>
            <FormLabel>First Name</FormLabel>
            <Input
              autoComplete="given-name"
              defaultValue={defaultValues?.givenName}
              {...register('givenName')}
            />
            <FormErrorMessage>
              {formState.errors.givenName?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.familyName)}>
            <FormLabel>Last Name</FormLabel>
            <Input
              autoComplete="family-name"
              defaultValue={defaultValues?.familyName}
              {...register('familyName')}
            />
            <FormErrorMessage>
              {formState.errors.familyName?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.biography)}>
            <FormLabel>Biography</FormLabel>
            <Textarea
              defaultValue={defaultValues?.biography}
              {...register('biography')}
            />
            <FormErrorMessage>
              {formState.errors.biography?.message}
            </FormErrorMessage>
          </FormControl>

          <FormLabel>Social Links</FormLabel>
          <Stack>
            <InputGroup>
              <InputLeftElement width="3.25rem">
                <SocialAccountIcon
                  accountType={SocialAccountType.Facebook}
                  size="sm"
                />
              </InputLeftElement>
              <Input
                pl="3.25rem"
                placeholder="https://facebook.com/xxxx"
                defaultValue={defaultValues?.facebookUrl}
                {...register('facebookUrl')}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement width="3.25rem">
                <SocialAccountIcon
                  accountType={SocialAccountType.Instagram}
                  size="sm"
                />
              </InputLeftElement>
              <Input
                pl="3.25rem"
                placeholder="https://instagram.com/xxxx"
                defaultValue={defaultValues?.instagramUrl}
                {...register('instagramUrl')}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement width="3.25rem">
                <SocialAccountIcon
                  accountType={SocialAccountType.YouTube}
                  size="sm"
                />
              </InputLeftElement>
              <Input
                pl="3.25rem"
                placeholder="https://youtube.com/xxxx"
                defaultValue={defaultValues?.youtubeUrl}
                {...register('youtubeUrl')}
              />
            </InputGroup>
          </Stack>
          <Flex justifyContent="flex-end" py={4}>
            {onCancel && (
              <Button mr={3} onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit" colorScheme="teal" isLoading={isLoading}>
              {defaultValues ? 'Update Profile' : 'Create Profile'}
            </Button>
          </Flex>
        </Stack>
      </Form>
    </>
  )
}

export default UserProfileForm
