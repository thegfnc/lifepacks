import { render } from '@redwoodjs/testing/web'

import ExpandingTextarea from './ExpandingTextarea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ExpandingTextarea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ExpandingTextarea />)
    }).not.toThrow()
  })
})
