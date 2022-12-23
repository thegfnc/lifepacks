import { render } from '@redwoodjs/testing/web'

import LogInPage from './LogInPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LogInPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogInPage />)
    }).not.toThrow()
  })
})
