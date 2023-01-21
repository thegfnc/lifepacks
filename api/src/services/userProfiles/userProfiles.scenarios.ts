import type { Prisma, UserProfile } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserProfileCreateArgs>({
  userProfile: {
    one: {
      data: {
        userId: 'String9952131',
        username: 'String805617',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
    two: {
      data: {
        userId: 'String6067388',
        username: 'String8349404',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserProfile, 'userProfile'>
