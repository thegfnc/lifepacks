import { render } from '@redwoodjs/testing/web'

import EditUserProfilePage from './EditUserProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EditUserProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditUserProfilePage />)
    }).not.toThrow()
  })
})
