import { render } from '@redwoodjs/testing/web'

import CompleteSignUpPage from './CompleteSignUpPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CompleteSignUpPage', () => {
  global.URL.revokeObjectURL = jest.fn()

  it('renders successfully', () => {
    expect(() => {
      render(<CompleteSignUpPage />)
    }).not.toThrow()
  })
})
