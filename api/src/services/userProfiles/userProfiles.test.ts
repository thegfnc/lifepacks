import type { UserProfile } from '@prisma/client'

import {
  userProfiles,
  userProfile,
  createUserProfile,
  updateUserProfile,
  deleteUserProfile,
} from './userProfiles'
import type { StandardScenario } from './userProfiles.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userProfiles', () => {
  scenario('returns all userProfiles', async (scenario: StandardScenario) => {
    const result = await userProfiles()

    expect(result.length).toEqual(Object.keys(scenario.userProfile).length)
  })

  scenario(
    'returns a single userProfile',
    async (scenario: StandardScenario) => {
      const result = await userProfile({ id: scenario.userProfile.one.id })

      expect(result).toEqual(scenario.userProfile.one)
    }
  )

  scenario('creates a userProfile', async () => {
    const result = await createUserProfile({
      input: {
        userId: 'String3108506',
        username: 'String2387264',
        updatedAt: '2023-01-21T06:28:17.267Z',
      },
    })

    expect(result.userId).toEqual('String3108506')
    expect(result.username).toEqual('String2387264')
    expect(result.updatedAt).toEqual(new Date('2023-01-21T06:28:17.267Z'))
  })

  scenario('updates a userProfile', async (scenario: StandardScenario) => {
    const original = (await userProfile({
      id: scenario.userProfile.one.id,
    })) as UserProfile
    const result = await updateUserProfile({
      id: original.id,
      input: { userId: 'String33881132' },
    })

    expect(result.userId).toEqual('String33881132')
  })

  scenario('deletes a userProfile', async (scenario: StandardScenario) => {
    const original = (await deleteUserProfile({
      id: scenario.userProfile.one.id,
    })) as UserProfile
    const result = await userProfile({ id: original.id })

    expect(result).toEqual(null)
  })
})
