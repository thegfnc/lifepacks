export const schema = gql`
  type CurrentUserProfile {
    id: Int
    userId: String
    username: String
    givenName: String
    familyName: String
    biography: String
    imageUrl: String
    createdAt: DateTime
    updatedAt: DateTime
  }

  type UserProfile {
    username: String!
    givenName: String
    familyName: String
    biography: String
    imageUrl: String
  }

  type Query {
    currentUserProfile: CurrentUserProfile @skipAuth
    userProfile(username: String!): UserProfile @skipAuth
  }

  input CreateCurrentUserProfileInput {
    username: String!
    givenName: String
    familyName: String
  }

  # input UpdateCurrentUserProfileInput {
  #   username: String
  #   givenName: String
  #   familyName: String
  # }

  type Mutation {
    createCurrentUserProfile(
      input: CreateCurrentUserProfileInput!
    ): CurrentUserProfile! @requireAuth
    # updateCurrentUserProfile(input: UpdateCurrentUserProfileInput!): CurrentUserProfile!
    #   @requireAuth
  }
`
