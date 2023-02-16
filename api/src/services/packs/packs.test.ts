// import type { Pack } from '@prisma/client'

import {
  packs,
  pack,
  // createPack,
  // updatePack,
  // deletePack
} from './packs'
import type { StandardScenario } from './packs.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('packs', () => {
  scenario('returns all packs', async (scenario: StandardScenario) => {
    const result = await packs({ username: 'cooldude' })

    expect(result.length).toEqual(Object.keys(scenario.pack).length)
  })

  scenario('returns a single pack', async (scenario: StandardScenario) => {
    const result = await pack({ username: 'cooldude', slug: 'camping' })

    expect(result).toEqual(scenario.pack.camping)
  })

  // scenario('creates a pack', async () => {
  //   const result = await createPack({
  //     input: {
  //       userId: 'String2072547',
  //       slug: 'String',
  //       title: 'String',
  //       description: 'String',
  //       updatedAt: '2023-02-13T15:55:47.331Z',
  //     },
  //   })

  //   expect(result.userId).toEqual('String2072547')
  //   expect(result.slug).toEqual('String')
  //   expect(result.title).toEqual('String')
  //   expect(result.description).toEqual('String')
  //   expect(result.updatedAt).toEqual(new Date('2023-02-13T15:55:47.331Z'))
  // })

  // scenario('updates a pack', async (scenario: StandardScenario) => {
  //   const original = (await pack({ id: scenario.pack.one.id })) as Pack
  //   const result = await updatePack({
  //     id: original.id,
  //     input: { userId: 'String50031332' },
  //   })

  //   expect(result.userId).toEqual('String50031332')
  // })

  // scenario('deletes a pack', async (scenario: StandardScenario) => {
  //   const original = (await deletePack({ id: scenario.pack.one.id })) as Pack
  //   const result = await pack({ id: original.id })

  //   expect(result).toEqual(null)
  // })
})
