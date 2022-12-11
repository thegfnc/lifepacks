export const schema = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    createdAt: DateTime!
  }

  type Query {
    user(id: Int!): User! @requireAuth
  }
`
