import type { Prisma, Pack } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PackCreateArgs>({
  userProfile: {
    one: {
      data: {
        userId: '6b555fae-0bf4-448a-b467-db072d608117',
        username: 'cooldude',
        givenName: 'Jason',
        familyName: 'Desiderio',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
    two: {
      data: {
        userId: '2aa849fb-eaaa-4aeb-84a0-a0492469521f',
        username: 'wildchild',
        givenName: 'Some',
        familyName: 'Otherguy',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
  },
  pack: {
    camping: {
      data: {
        userId: '6b555fae-0bf4-448a-b467-db072d608117',
        slug: 'camping',
        title: 'Camping',
        description: 'String',
        updatedAt: '2023-02-13T15:55:47.365Z',
      },
    },
    computers: {
      data: {
        userId: '6b555fae-0bf4-448a-b467-db072d608117',
        slug: 'computers',
        title: 'Computers!',
        description: 'String',
        updatedAt: '2023-02-13T15:55:47.365Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pack, 'pack'>
