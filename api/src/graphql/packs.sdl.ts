export const schema = gql`
  type Pack {
    id: Int!
    userId: String!
    slug: String!
    title: String!
    description: String!
    packItems: [PackItem]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    packs(username: String!): [Pack!]! @skipAuth
    pack(username: String!, slug: String, id: Int): Pack @skipAuth
  }

  # input CreatePackInput {
  #   slug: String!
  #   title: String!
  #   description: String!
  # }

  input UpdatePackInput {
    title: String
    description: String
  }

  type Mutation {
    #   createPack(input: CreatePackInput!): Pack! @requireAuth
    updatePack(id: Int!, input: UpdatePackInput!): Pack! @requireAuth
    deletePack(id: Int!): Pack! @requireAuth
  }
`
