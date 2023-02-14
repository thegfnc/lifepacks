export const schema = gql`
  type CurrentUserProfile {
    id: Int!
    userId: String!
    username: String!
    givenName: String
    familyName: String
    biography: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type UserProfile {
    username: String!
    givenName: String
    familyName: String
    biography: String
  }

  type Query {
    currentUserProfile: CurrentUserProfile @requireAuth
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
