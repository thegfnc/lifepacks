import type { Prisma, PackItem } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PackItemCreateArgs>({
  packItem: {
    one: {
      data: {
        userId: 'String2032442',
        title: 'String',
        purchaseUrl: 'String',
        imageUrl: 'String',
        description: 'String',
        displaySequence: 5913390,
        updatedAt: '2023-02-13T15:56:29.208Z',
        pack: {
          create: {
            userId: 'String2061720',
            slug: 'String',
            title: 'String',
            description: 'String',
            updatedAt: '2023-02-13T15:56:29.208Z',
          },
        },
      },
    },
    two: {
      data: {
        userId: 'String1361930',
        title: 'String',
        purchaseUrl: 'String',
        imageUrl: 'String',
        description: 'String',
        displaySequence: 9982660,
        updatedAt: '2023-02-13T15:56:29.208Z',
        pack: {
          create: {
            userId: 'String9641608',
            slug: 'String',
            title: 'String',
            description: 'String',
            updatedAt: '2023-02-13T15:56:29.208Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<PackItem, 'packItem'>
