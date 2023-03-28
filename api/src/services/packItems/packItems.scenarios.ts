import type { Prisma, PackItem } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PackItemCreateArgs>({
  userProfile: {
    one: {
      data: {
        userId: '6b555fae-0bf4-448a-b467-db072d608116',
        username: 'cooldude',
        givenName: 'Jason',
        familyName: 'Desiderio',
        updatedAt: '2023-01-21T06:28:17.296Z',
      },
    },
  },
  packItem: {
    one: {
      data: {
        userId: '6b555fae-0bf4-448a-b467-db072d608116',
        title: 'String',
        purchaseUrl: 'String',
        imageUrl: 'String',
        description: 'String',
        displaySequence: 5913390,
        updatedAt: '2023-02-13T15:56:29.208Z',
        pack: {
          create: {
            userId: '6b555fae-0bf4-448a-b467-db072d608116',
            slug: 'cooking',
            title: 'Cooking',
            description: 'String',
            updatedAt: '2023-02-13T15:56:29.208Z',
          },
        },
      },
    },
    two: {
      data: {
        userId: '6b555fae-0bf4-448a-b467-db072d608116',
        title: 'String',
        purchaseUrl: 'String',
        imageUrl: 'String',
        description: 'String',
        displaySequence: 9982660,
        updatedAt: '2023-02-13T15:56:29.208Z',
        pack: {
          create: {
            userId: '6b555fae-0bf4-448a-b467-db072d608116',
            slug: 'music',
            title: 'Music',
            description: 'String',
            updatedAt: '2023-02-13T15:56:29.208Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PackItem, 'packItem'>
