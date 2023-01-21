import { render } from '@redwoodjs/testing/web'

import CompleteSignUpPage from './CompleteSignUpPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CompleteSignUpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CompleteSignUpPage />)
    }).not.toThrow()
  })
})
