import type { Prisma, Pack } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PackCreateArgs>({
  pack: {
    one: {
      data: {
        userId: 'String2154224',
        slug: 'String',
        title: 'String',
        description: 'String',
        updatedAt: '2023-02-13T15:55:47.365Z',
      },
    },
    two: {
      data: {
        userId: 'String6631840',
        slug: 'String',
        title: 'String',
        description: 'String',
        updatedAt: '2023-02-13T15:55:47.365Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pack, 'pack'>
