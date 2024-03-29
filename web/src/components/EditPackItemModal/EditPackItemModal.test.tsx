import { render } from '@redwoodjs/testing/web'

import EditPackItemModal from './EditPackItemModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditPackItemModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <EditPackItemModal
          isOpen={false}
          title="title"
          packItem={{
            title: "REI Co-op Trailbreak 30 Sleeping Bag - Men's",
            imageUrl:
              'https://target.scene7.com/is/image/Target/GUEST_58639e78-ad9c-43ca-93fc-d0497a9f2585?wid=1000&hei=1000&qlt=80&fmt=webp',
            purchaseUrl:
              'https://www.rei.com/product/157770/rei-co-op-trailbreak-30-sleeping-bag-mens',
            description:
              'While the above sleeping bag will suffice for three seasons, if you’re a beginner camper who is looking for one that will get you through four seasons (or one that can just handle cooler temperatures), the Mandagies recommend investing in this more expensive down-filled option from REI’s in-house line.',
          }}
          onClose={() => {}}
          onSubmit={(packItem) => {
            console.log(packItem)
          }}
        />
      )
    }).not.toThrow()
  })
})
