import { GraphQLClientConfigProp } from '@redwoodjs/web/apollo'

export const graphQLClientConfig: GraphQLClientConfigProp = {
  cacheConfig: {
    typePolicies: {
      UserProfile: {
        keyFields: ['username'],
      },
    },
  },
}
