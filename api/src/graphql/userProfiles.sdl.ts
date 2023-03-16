export const schema = gql`
  type UserProfile {
    username: String!
    givenName: String
    familyName: String
    biography: String
    imageUrl: String
    facebookUrl: String
    instagramUrl: String
    youtubeUrl: String
    twitterUrl: String
  }

  type CurrentUserProfile {
    id: Int!
    userId: String!
    username: String!
    givenName: String
    familyName: String
    biography: String
    imageUrl: String
    facebookUrl: String
    instagramUrl: String
    youtubeUrl: String
    twitterUrl: String
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    currentUserProfile: CurrentUserProfile @skipAuth
    userProfile(username: String!): UserProfile @skipAuth
  }

  input CreateCurrentUserProfileInput {
    username: String!
    givenName: String
    familyName: String
    biography: String
    imageUrl: String
    facebookUrl: String
    instagramUrl: String
    youtubeUrl: String
    twitterUrl: String
  }

  input UpdateCurrentUserProfileInput {
    givenName: String
    familyName: String
    biography: String
    imageUrl: String
    facebookUrl: String
    instagramUrl: String
    youtubeUrl: String
    twitterUrl: String
  }

  type Mutation {
    createCurrentUserProfile(
      input: CreateCurrentUserProfileInput!
    ): CurrentUserProfile! @requireAuth
    updateCurrentUserProfile(
      input: UpdateCurrentUserProfileInput!
    ): CurrentUserProfile! @requireAuth
  }
`
