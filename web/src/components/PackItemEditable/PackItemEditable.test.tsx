import { render } from '@redwoodjs/testing/web'

import PackItemEditable from './PackItemEditable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackItemEditable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <PackItemEditable
          imageUrl="https://www.rei.com/media/cc6cd38d-23f6-464d-9107-fc3c9b7dbd2b.jpg?size=784x588"
          purchaseUrl="http://www.amazon.com/xxxx"
          title="Cool Item"
          description="Wow it's cool because..."
        />
      )
    }).not.toThrow()
  })
})
