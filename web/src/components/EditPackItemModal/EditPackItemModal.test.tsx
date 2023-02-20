import { render } from '@redwoodjs/testing/web'

import EditPackItemModal from './EditPackItemModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditPackItemModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPackItemModal />)
    }).not.toThrow()
  })
})
