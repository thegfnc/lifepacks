export const schema = gql`
  type Pack {
    id: Int!
    userId: String!
    slug: String!
    title: String!
    description: String
    userProfile: UserProfile!
    packItems: [PackItem]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    packsMostRecent(take: Int, cursor: Int): [Pack!]! @skipAuth
    packsStaffPicks: [Pack!]! @skipAuth
    packs(username: String!): [Pack!]! @skipAuth
    pack(username: String!, slug: String, id: Int): Pack! @skipAuth
  }

  input CreatePackInput {
    title: String!
    description: String
    packItems: [CreatePackItemInput]
  }

  input UpdatePackInput {
    title: String
    description: String
    packItems: [UpdatePackItemInput]
    packItemIdsToDelete: [Int]
  }

  type Mutation {
    createPack(input: CreatePackInput!): Pack! @requireAuth
    updatePack(id: Int!, input: UpdatePackInput!): Pack! @requireAuth
    deletePack(id: Int!): Pack! @requireAuth
  }
`
