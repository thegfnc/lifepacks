import { render } from '@redwoodjs/testing/web'

import PackItemEditable from './PackItemEditable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackItemEditable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackItemEditable />)
    }).not.toThrow()
  })
})
