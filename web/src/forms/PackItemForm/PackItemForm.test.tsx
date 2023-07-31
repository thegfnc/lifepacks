import { render } from '@redwoodjs/testing/web'

import PackItemForm from './PackItemForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackItemForm', () => {
  globalThis.URL.revokeObjectURL = jest.fn()

  it('renders successfully', () => {
    expect(() => {
      render(<PackItemForm onSubmit={() => {}} />)
    }).not.toThrow()
  })
})
