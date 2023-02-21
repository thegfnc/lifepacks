import { Dispatch, SetStateAction, useEffect } from 'react'

import {
  Alert,
  AlertIcon,
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
import type {
  FindEditUserProfileQuery,
  FindEditUserProfileQueryVariables,
  UpdateCurrentUserProfileMutation,
  UpdateCurrentUserProfileMutationVariables,
} from 'types/graphql'

import { Form, useForm } from '@redwoodjs/forms'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import { QUERY as BYLINE_CELL_QUERY } from 'src/components/BylineCell'
import SocialAccountIcon, {
  SocialAccountType,
} from 'src/components/SocialAccountIcon/SocialAccountIcon'
import { QUERY as USER_PROFILE_SIDEBAR_CELL_QUERY } from 'src/components/UserProfileSidebarCell'
import { CURRENT_USER_PROFILE_QUERY } from 'src/hooks/useCurrentUserProfile'

type EditUserProfileCellProps = CellSuccessProps<
  FindEditUserProfileQuery,
  FindEditUserProfileQueryVariables
> & {
  onFormDirtyStateChange?: Dispatch<SetStateAction<boolean>>
  onCancel?: () => void
  onCompleted?: () => void
}

type EditUserProfileFormValues = {
  givenName: string
  familyName: string
  biography: string
  facebookUrl: string
  instagramUrl: string
  youtubeUrl: string
}

export const QUERY = gql`
  query FindEditUserProfileQuery {
    currentUserProfile {
      username
      givenName
      familyName
      biography
      imageUrl
      facebookUrl
      instagramUrl
      youtubeUrl
    }
  }
`

const MUTATION = gql`
  mutation UpdateCurrentUserProfileMutation(
    $input: UpdateCurrentUserProfileInput!
  ) {
    updateCurrentUserProfile(input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditUserProfileQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  currentUserProfile,
  onFormDirtyStateChange = () => {},
  onCancel = () => {},
  onCompleted = () => {},
}: EditUserProfileCellProps) => {
  const formMethods = useForm<EditUserProfileFormValues>()
  const { register, formState } = formMethods

  useEffect(() => {
    onFormDirtyStateChange(formState.isDirty)
  }, [formState.isDirty, onFormDirtyStateChange])

  const [mutate, { loading, error }] = useMutation<
    UpdateCurrentUserProfileMutation,
    UpdateCurrentUserProfileMutationVariables
  >(MUTATION, {
    refetchQueries: [
      { query: CURRENT_USER_PROFILE_QUERY },
      {
        query: USER_PROFILE_SIDEBAR_CELL_QUERY,
        variables: { username: currentUserProfile.username },
      },
      {
        query: BYLINE_CELL_QUERY,
        variables: { username: currentUserProfile.username },
      },
    ],
    onCompleted,
  })

  const onSubmit = (data: EditUserProfileFormValues) => {
    mutate({ variables: { input: data } })
  }

  return (
    <>
      <Form formMethods={formMethods} onSubmit={onSubmit}>
        <Stack spacing={4}>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error.message}
            </Alert>
          )}
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

          <FormControl>
            <FormLabel>Username*</FormLabel>
            <Input disabled defaultValue={currentUserProfile.username} />
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.givenName)}>
            <FormLabel>First Name</FormLabel>
            <Input
              autoComplete="given-name"
              defaultValue={currentUserProfile.givenName}
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
              defaultValue={currentUserProfile.familyName}
              {...register('familyName')}
            />
            <FormErrorMessage>
              {formState.errors.familyName?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={Boolean(formState.errors.biography)}>
            <FormLabel>Biography</FormLabel>
            <Textarea
              defaultValue={currentUserProfile.biography}
              {...register('biography')}
            />
            <FormErrorMessage>
              {formState.errors.biography?.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl>
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
                  defaultValue={currentUserProfile.facebookUrl}
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
                  defaultValue={currentUserProfile.instagramUrl}
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
                  defaultValue={currentUserProfile.youtubeUrl}
                  {...register('youtubeUrl')}
                />
              </InputGroup>
            </Stack>
          </FormControl>
          <Flex justifyContent="flex-end" py={4}>
            <Button mr={3} onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" colorScheme="teal" isLoading={loading}>
              Update Profile
            </Button>
          </Flex>
        </Stack>
      </Form>
    </>
  )
}
