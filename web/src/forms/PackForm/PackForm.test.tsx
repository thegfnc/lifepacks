import { render } from '@redwoodjs/testing/web'

import PackForm from './PackForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PackForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackForm onSubmit={() => {}} isLoading={false} />)
    }).not.toThrow()
  })
})
