import { render } from '@redwoodjs/testing/web'

import ShareMenu from './ShareMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShareMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShareMenu />)
    }).not.toThrow()
  })
})
