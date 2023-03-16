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
    | 'twitterUrl'
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
  twitterUrl: string
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
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.400"
                fontSize="lg"
              >
                @
              </InputLeftElement>
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
            </InputGroup>
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
            <InputGroup>
              <InputLeftElement width="2.75rem">
                <SocialAccountIcon accountType={SocialAccountType.Twitter} />
              </InputLeftElement>
              <Input
                pl="2.75rem"
                placeholder="https://youtube.com/xxxx"
                {...register('twitterUrl')}
              />
            </InputGroup>
          </Stack>
          <SimpleGrid
            pt={4}
            pb={isUpdateForm ? 4 : 0}
            px={isUpdateForm ? { base: 4, md: 6 } : 0}
            columns={onCancel ? 2 : 1}
            spacing={4}
            position={isUpdateForm ? 'absolute' : 'relative'}
            bottom={isUpdateForm ? 0 : 'auto'}
            left={isUpdateForm ? 0 : 'auto'}
            bg={isUpdateForm ? 'white' : 'none'}
            w="full"
            borderBottomRadius={isUpdateForm ? '3xl' : 'none'}
            borderTopWidth={isUpdateForm ? '1px' : 0}
            borderTopColor={isUpdateForm ? 'blackAlpha.300' : 'none'}
          >
            {onCancel && (
              <Button variant="outline" colorScheme="gray" onClick={onCancel}>
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
