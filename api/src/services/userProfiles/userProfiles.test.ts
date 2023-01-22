import {
  currentUserProfile,
  createCurrentUserProfile,
  // updateCurrentUserProfile,
} from './userProfiles'
import type { StandardScenario } from './userProfiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userProfiles', () => {
  scenario(
    'returns the userProfile of the currently authenticated user',
    async (scenario: StandardScenario) => {
      mockCurrentUser({
        email: 'jmdesiderio@gmail.com',
        sub: '4c18c0e2-568a-4da9-a785-3d5b1343abdb',
      })

      const result = await currentUserProfile()

      expect(scenario.userProfile.one.username).toEqual(result.username)
    }
  )

  scenario(
    'creates a userProfile for the currently authenticated user',
    async () => {
      mockCurrentUser({
        email: 'drivenmebefore@gmail.com',
        sub: 'd046694b-5f9b-4825-87e0-3419cab94a17',
      })
      const result = await createCurrentUserProfile({
        input: {
          username: 'drivenmebefore',
          givenName: 'Brandon',
          familyName: 'Boyd',
        },
      })
      expect(result.userId).toEqual('d046694b-5f9b-4825-87e0-3419cab94a17')
      expect(result.username).toEqual('drivenmebefore')
      expect(result.givenName).toEqual('Brandon')
      expect(result.familyName).toEqual('wow')
    }
  )

  // scenario(
  //   'updates a userProfile for the currently authenticated user',
  //   async (scenario: StandardScenario) => {
  //     const original = (await currentUserProfile({
  //       id: scenario.userProfile.one.id,
  //     })) as UserProfile
  //     const result = await updateCurrentUserProfile({
  //       id: original.id,
  //       input: { userId: 'String33881132' },
  //     })

  //     expect(result.userId).toEqual('String33881132')
  //   }
  // )
})
