export const graphQLClientConfig = {
  cacheConfig: {
    typePolicies: {
      UserProfile: {
        keyFields: ['username'],
      },
    },
  },
}
