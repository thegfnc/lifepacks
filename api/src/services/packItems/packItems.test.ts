// import type { PackItem } from '@prisma/client'

// import {
//   packItems,
//   packItem,
//   createPackItem,
//   updatePackItem,
//   deletePackItem,
// } from './packItems'
// import type { StandardScenario } from './packItems.scenarios'

// // Generated boilerplate tests do not account for all circumstances
// // and can fail without adjustments, e.g. Float.
// //           Please refer to the RedwoodJS Testing Docs:
// //       https://redwoodjs.com/docs/testing#testing-services
// // https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('packItems', () => {
  scenario('nothing to test yet', async () => {
    expect(true).toBeTruthy()
  })

  // scenario('returns all packItems', async (scenario: StandardScenario) => {
  //   const result = await packItems()

  //   expect(result.length).toEqual(Object.keys(scenario.packItem).length)
  // })

  // scenario('returns a single packItem', async (scenario: StandardScenario) => {
  //   const result = await packItem({ id: scenario.packItem.one.id })

  //   expect(result).toEqual(scenario.packItem.one)
  // })

  // scenario('creates a packItem', async (scenario: StandardScenario) => {
  //   const result = await createPackItem({
  //     input: {
  //       userId: 'String5333762',
  //       packId: scenario.packItem.two.packId,
  //       title: 'String',
  //       purchaseUrl: 'String',
  //       imageUrl: 'String',
  //       description: 'String',
  //       displaySequence: 2984378,
  //       updatedAt: '2023-02-13T15:56:29.164Z',
  //     },
  //   })

  //   expect(result.userId).toEqual('String5333762')
  //   expect(result.packId).toEqual(scenario.packItem.two.packId)
  //   expect(result.title).toEqual('String')
  //   expect(result.purchaseUrl).toEqual('String')
  //   expect(result.imageUrl).toEqual('String')
  //   expect(result.description).toEqual('String')
  //   expect(result.displaySequence).toEqual(2984378)
  //   expect(result.updatedAt).toEqual(new Date('2023-02-13T15:56:29.164Z'))
  // })

  // scenario('updates a packItem', async (scenario: StandardScenario) => {
  //   const original = (await packItem({
  //     id: scenario.packItem.one.id,
  //   })) as PackItem
  //   const result = await updatePackItem({
  //     id: original.id,
  //     input: { userId: 'String99899352' },
  //   })

  //   expect(result.userId).toEqual('String99899352')
  // })

  // scenario('deletes a packItem', async (scenario: StandardScenario) => {
  //   const original = (await deletePackItem({
  //     id: scenario.packItem.one.id,
  //   })) as PackItem
  //   const result = await packItem({ id: original.id })

  //   expect(result).toEqual(null)
  // })
})
