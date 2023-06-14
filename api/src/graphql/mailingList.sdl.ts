export const schema = gql`
  type Contact {
    id: Int
  }

  input MailingListSignUpInput {
    email: String!
    givenName: String
    familyName: String
  }

  type Mutation {
    mailingListSignUp(input: MailingListSignUpInput!): Contact @skipAuth
  }
`
