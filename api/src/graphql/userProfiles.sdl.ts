export const schema = gql`
  type UserProfile {
    id: Int!
    userId: String!
    username: String!
    givenName: String
    familyName: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    currentUserProfile: UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    username: String!
    givenName: String
    familyName: String
  }

  input UpdateUserProfileInput {
    username: String
    givenName: String
    familyName: String
  }

  type Mutation {
    createCurrentUserProfile(input: CreateUserProfileInput!): UserProfile!
      @requireAuth
    updateCurrentUserProfile(input: UpdateUserProfileInput!): UserProfile!
      @requireAuth
  }
`
