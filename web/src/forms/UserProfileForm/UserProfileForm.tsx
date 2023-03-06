import { Dispatch, SetStateAction, useEffect } from 'react'

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { CurrentUserProfile } from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'

import SocialAccountIcon, {
  SocialAccountType,
} from 'src/components/SocialAccountIcon/SocialAccountIcon'
import ImageUploadField from 'src/fields/ImageUploadField/ImageUploadField'

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
    | 'imageUrl'
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
  imageUrl: string
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
  const { username, ...defaultValuesWithoutUsername } = defaultValues || {}
  const isUpdateForm = Boolean(defaultValues)

  const formMethods = useForm<UserProfileFormValues>({
    defaultValues: defaultValuesWithoutUsername,
  })
  const { register, formState, control } = formMethods

  useEffect(() => {
    onFormDirtyStateChange(formState.isDirty)
  }, [formState.isDirty, onFormDirtyStateChange])

  return (
    <>
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <Stack spacing={4}>
          <FormControl>
            <FormLabel>Profile Image</FormLabel>
            <ImageUploadField
              bucket="user-profile-images"
              name="imageUrl"
              control={control}
            />
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.username)}>
            <FormLabel>Username*</FormLabel>
            {isUpdateForm ? (
              <Input disabled={true} defaultValue={username} />
            ) : (
              <Input
                autoComplete="username"
                {...register('username', {
                  required: {
                    value: true,
                    message: 'Username is required',
                  },
                })}
              />
            )}
            <FormErrorMessage>
              {formState.errors.username?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.givenName)}>
            <FormLabel>First Name</FormLabel>
            <Input autoComplete="given-name" {...register('givenName')} />
            <FormErrorMessage>
              {formState.errors.givenName?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.familyName)}>
            <FormLabel>Last Name</FormLabel>
            <Input autoComplete="family-name" {...register('familyName')} />
            <FormErrorMessage>
              {formState.errors.familyName?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.biography)}>
            <FormLabel>Biography</FormLabel>
            <Textarea {...register('biography')} />
            <FormErrorMessage>
              {formState.errors.biography?.message}
            </FormErrorMessage>
          </FormControl>

          <FormLabel>Social Links</FormLabel>
          <Stack>
            <InputGroup>
              <InputLeftElement width="2.75rem">
                <SocialAccountIcon accountType={SocialAccountType.Facebook} />
              </InputLeftElement>
              <Input
                pl="2.75rem"
                placeholder="https://facebook.com/xxxx"
                {...register('facebookUrl')}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement width="2.75rem">
                <SocialAccountIcon accountType={SocialAccountType.Instagram} />
              </InputLeftElement>
              <Input
                pl="2.75rem"
                placeholder="https://instagram.com/xxxx"
                {...register('instagramUrl')}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement width="2.75rem">
                <SocialAccountIcon accountType={SocialAccountType.YouTube} />
              </InputLeftElement>
              <Input
                pl="2.75rem"
                placeholder="https://youtube.com/xxxx"
                {...register('youtubeUrl')}
              />
            </InputGroup>
          </Stack>
          <SimpleGrid
            py={4}
            px={6}
            columns={2}
            spacing={4}
            position="absolute"
            bottom={0}
            left={0}
            bg="white"
            w="full"
            borderBottomRadius="3xl"
            borderTopWidth="1px"
            borderTopColor="blackAlpha.300"
          >
            {onCancel && (
              <Button
                variant="outline"
                colorScheme="gray"
                mr={3}
                onClick={onCancel}
              >
                Cancel
              </Button>
            )}
            <Button type="submit" colorScheme="purple" isLoading={isLoading}>
              {isUpdateForm ? 'Update Profile' : 'Create Profile'}
            </Button>
          </SimpleGrid>
        </Stack>
      </Form>
    </>
  )
}

export default UserProfileForm
