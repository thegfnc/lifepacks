import { render } from '@redwoodjs/testing/web'

import PackItem from './PackItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackItem />)
    }).not.toThrow()
  })
})
