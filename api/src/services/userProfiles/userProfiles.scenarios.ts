import type { Prisma, UserProfile } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        userId: 'b3b7d312-e144-4472-94e7-a830f0fe0ec6',
        username: 'jmdesiderio',
        givenName: 'Jason',
        familyName: 'Desiderio',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
    two: {
      data: {
        userId: '93893d12-bbd4-4784-8f56-6cda6e21b169',
        username: 'drivenmebefore',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserProfile, 'userProfile'>
