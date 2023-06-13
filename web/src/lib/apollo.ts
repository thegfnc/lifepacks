export const graphQLClientConfig = {
  cacheConfig: {
    typePolicies: {
      UserProfile: {
        keyFields: ['username'],
      },
      CurrentUserProfile: {
        keyFields: ['username'],
      },
    },
  },
}
