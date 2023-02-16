import { render } from '@redwoodjs/testing/web'

import EditPackPage from './EditPackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditPackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditPackPage />)
    }).not.toThrow()
  })
})
