import { render } from '@redwoodjs/testing/web'

import PackPage from './PackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PackPage />)
    }).not.toThrow()
  })
})
