import { render } from '@redwoodjs/testing/web'

import FaqsPage from './FaqsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FaqsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FaqsPage />)
    }).not.toThrow()
  })
})
