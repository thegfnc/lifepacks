import type { Pack } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario({
  pack: {
    camping: {
      data: {
        userId: 'b3b7d312-e144-4472-94e7-a830f0fe0ec6',
        slug: 'camping',
        title: 'Camping',
        description: 'String',
        updatedAt: '2023-02-13T15:55:47.365Z',
      },
    },
    computers: {
      data: {
        userId: 'b3b7d312-e144-4472-94e7-a830f0fe0ec6',
        slug: 'computers',
        title: 'Computers!',
        description: 'String',
        updatedAt: '2023-02-13T15:55:47.365Z',
      },
    },
  },
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
        username: 'drivenmebfore',
        givenName: 'Some',
        familyName: 'Otherguy',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pack, 'pack'>
