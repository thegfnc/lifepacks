import { render } from '@redwoodjs/testing/web'

import PackItemForm from './PackItemForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackItemForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackItemForm />)
    }).not.toThrow()
  })
})
