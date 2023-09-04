import { Dispatch, SetStateAction, useEffect } from 'react'

import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { CurrentUserProfile } from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'

import RichTextEditor from 'src/components/RichTextEditor/RichTextEditor'
import SocialAccountIcon from 'src/components/SocialAccountIcon/SocialAccountIcon'
import ImageUploadField from 'src/fields/ImageUploadField/ImageUploadField'
import isValidUrl from 'src/helpers/isValidUrl'
import SocialAccount from 'src/types/SocialAccount'

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
  mailingListSignUp?: boolean
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
  const { register, formState, control, setFocus } = formMethods

  useEffect(() => {
    onFormDirtyStateChange(formState.isDirty)
  }, [formState.isDirty, onFormDirtyStateChange])

  useEffect(() => {
    setFocus('givenName')
  }, [setFocus])

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
                    pattern: {
                      value: /^[a-z0-9]+$/,
                      message:
                        'Username can only contain lowercase letters and numbers',
                    },
                    maxLength: {
                      value: 50,
                      message: 'Username cannot be more than 50 characters',
                    },
                    minLength: {
                      value: 3,
                      message: 'Username must be at least 3 characters',
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
            <Input
              autoComplete="given-name"
              {...register('givenName', {
                maxLength: {
                  value: 100,
                  message: 'First name cannot be more than 100 characters',
                },
              })}
            />
            <FormErrorMessage>
              {formState.errors.givenName?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.familyName)}>
            <FormLabel>Last Name</FormLabel>
            <Input
              autoComplete="family-name"
              {...register('familyName', {
                maxLength: {
                  value: 100,
                  message: 'Last name cannot be more than 100 characters',
                },
              })}
            />
            <FormErrorMessage>
              {formState.errors.familyName?.message}
            </FormErrorMessage>
          </FormControl>

          {/* <FormControl isInvalid={Boolean(formState.errors.biography)}>
            <FormLabel>Biography</FormLabel>
            <Textarea
              {...register('biography', {
                maxLength: {
                  value: 500,
                  message: 'Biography cannot be more than 500 characters',
                },
              })}
            />
            <FormErrorMessage>
              {formState.errors.biography?.message}
            </FormErrorMessage>
          </FormControl> */}

          <RichTextEditor
            control={control}
            name="biography"
            defaultValue={formState.defaultValues?.biography}
            label="Biography"
          />

          <Box>
            <FormLabel>Social Links</FormLabel>
            <Stack>
              <FormControl isInvalid={Boolean(formState.errors.youtubeUrl)}>
                <InputGroup>
                  <InputLeftElement width="2.75rem">
                    <SocialAccountIcon accountType={SocialAccount.YouTube} />
                  </InputLeftElement>
                  <Input
                    pl="2.75rem"
                    placeholder="https://youtube.com/xxxx"
                    {...register('youtubeUrl', {
                      maxLength: {
                        value: 2000,
                        message:
                          'YouTube URL cannot be more than 2000 characters',
                      },
                      validate: (value) => {
                        if (value === '') return true
                        return isValidUrl(value) || 'YouTube URL is invalid'
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {formState.errors.youtubeUrl?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(formState.errors.instagramUrl)}>
                <InputGroup>
                  <InputLeftElement width="2.75rem">
                    <SocialAccountIcon accountType={SocialAccount.Instagram} />
                  </InputLeftElement>
                  <Input
                    pl="2.75rem"
                    placeholder="https://instagram.com/xxxx"
                    {...register('instagramUrl', {
                      maxLength: {
                        value: 2000,
                        message:
                          'Instagram URL cannot be more than 2000 characters',
                      },
                      validate: (value) => {
                        if (value === '') return true
                        return isValidUrl(value) || 'Instagram URL is invalid'
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {formState.errors.instagramUrl?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(formState.errors.twitterUrl)}>
                <InputGroup>
                  <InputLeftElement width="2.75rem">
                    <SocialAccountIcon accountType={SocialAccount.Twitter} />
                  </InputLeftElement>
                  <Input
                    pl="2.75rem"
                    placeholder="https://twitter.com/xxxx"
                    {...register('twitterUrl', {
                      maxLength: {
                        value: 2000,
                        message:
                          'Twitter URL cannot be more than 2000 characters',
                      },
                      validate: (value) => {
                        if (value === '') return true
                        return isValidUrl(value) || 'Twitter URL is invalid'
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {formState.errors.twitterUrl?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={Boolean(formState.errors.facebookUrl)}>
                <InputGroup>
                  <InputLeftElement width="2.75rem">
                    <SocialAccountIcon accountType={SocialAccount.Facebook} />
                  </InputLeftElement>
                  <Input
                    pl="2.75rem"
                    placeholder="https://facebook.com/xxxx"
                    {...register('facebookUrl', {
                      maxLength: {
                        value: 2000,
                        message:
                          'Facebook URL cannot be more than 2000 characters',
                      },
                      validate: (value) => {
                        if (value === '') return true
                        return isValidUrl(value) || 'Facebook URL is invalid'
                      },
                    })}
                  />
                </InputGroup>
                <FormErrorMessage>
                  {formState.errors.facebookUrl?.message}
                </FormErrorMessage>
              </FormControl>
            </Stack>
          </Box>
          {!isUpdateForm && (
            <Checkbox
              defaultChecked
              spacing={2}
              alignItems="top"
              lineHeight="1.2"
              colorScheme="gray"
              color="blackAlpha.700"
              mt={4}
              {...register('mailingListSignUp')}
            >
              <Text fontSize="sm">
                I want to receive occassional updates about features and
                promotions from Lifepacks.
              </Text>
            </Checkbox>
          )}
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
              <Button variant="secondary" onClick={onCancel}>
                Cancel
              </Button>
            )}
            <Button type="submit" variant="primary" isLoading={isLoading}>
              {isUpdateForm ? 'Update Profile' : 'Create Profile'}
            </Button>
          </SimpleGrid>
        </Stack>
      </Form>
    </>
  )
}

export default UserProfileForm
