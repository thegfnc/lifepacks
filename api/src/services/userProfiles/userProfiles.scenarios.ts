import type { Prisma, UserProfile } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        userId: '4c18c0e2-568a-4da9-a785-3d5b1343abdb',
        username: 'jmdesiderio',
        givenName: 'Jason',
        familyName: 'Desiderio',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
    two: {
      data: {
        userId: '93893d12-bbd4-4784-8f56-6cda6e21b169',
        username: 'String8349404',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserProfile, 'userProfile'>
