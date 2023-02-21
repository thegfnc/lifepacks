import { render } from '@redwoodjs/testing/web'

import PackItem from './PackItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <PackItem
          imageUrl="https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588"
          purchaseUrl="http://www.amazon.com/xxxx"
          title="Cool Item"
          description="Wow it's cool because..."
        />
      )
    }).not.toThrow()
  })
})
