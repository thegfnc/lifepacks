import { render } from '@redwoodjs/testing/web'

import BuyButton from './BuyButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BuyButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BuyButton purchaseUrl="https://www.amazon.com/" />)
    }).not.toThrow()
  })
})
