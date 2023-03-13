import { render } from '@redwoodjs/testing/web'

import UserProfileSidebar from './UserProfileSidebar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserProfileSidebar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserProfileSidebar userProfile={{ username: 'jmdesiderio' }} />)
    }).not.toThrow()
  })
})
