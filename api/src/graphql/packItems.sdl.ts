export const schema = gql`
  type PackItem {
    id: Int!
    userId: String!
    pack: Pack!
    packId: Int!
    title: String!
    purchaseUrl: String!
    imageUrl: String!
    description: String
    displaySequence: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  # type Query {
  #   packItems: [PackItem!]! @requireAuth
  #   packItem(id: Int!): PackItem @requireAuth
  # }

  input CreatePackItemInput {
    title: String!
    purchaseUrl: String!
    imageUrl: String!
    description: String
  }

  input UpdatePackItemInput {
    id: Int
    title: String
    purchaseUrl: String
    imageUrl: String
    description: String
  }

  # type Mutation {
  #   createPackItem(input: CreatePackItemInput!): PackItem! @requireAuth
  #   updatePackItem(id: Int!, input: UpdatePackItemInput!): PackItem!
  #     @requireAuth
  #   deletePackItem(id: Int!): PackItem! @requireAuth
  # }
`
