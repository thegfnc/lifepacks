import { Dispatch, SetStateAction } from 'react'

import { Alert, AlertIcon } from '@chakra-ui/react'
import type {
  FindEditUserProfileQuery,
  FindEditUserProfileQueryVariables,
  UpdateCurrentUserProfileMutation,
  UpdateCurrentUserProfileMutationVariables,
} from 'types/graphql'

import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import { QUERY as BYLINE_CELL_QUERY } from 'src/cells/BylineCell'
import { QUERY as USER_PROFILE_SIDEBAR_CELL_QUERY } from 'src/cells/UserProfileCell'
import UserProfileForm, {
  UserProfileFormSubmitData,
} from 'src/forms/UserProfileForm/UserProfileForm'
import stripTypename from 'src/helpers/stripTypename'
import { CURRENT_USER_PROFILE_QUERY } from 'src/hooks/useCurrentUserProfile'

type EditUserProfileCellProps = CellSuccessProps<
  FindEditUserProfileQuery,
  FindEditUserProfileQueryVariables
> & {
  onFormDirtyStateChange?: Dispatch<SetStateAction<boolean>>
  onCancel?: () => void
  onCompleted?: () => void
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
      twitterUrl
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

  const onSubmit = (data: UserProfileFormSubmitData) => {
    mutate({ variables: { input: data } })
  }

  return (
    <>
      {error && (
        <Alert status="error">
          <AlertIcon />
          {error.message}
        </Alert>
      )}
      <UserProfileForm
        onFormDirtyStateChange={onFormDirtyStateChange}
        onSubmit={onSubmit}
        onCancel={onCancel}
        isLoading={loading}
        defaultValues={stripTypename(currentUserProfile)}
      />
    </>
  )
}
