import { render } from '@redwoodjs/testing/web'

import EditUserProfileModal from './EditUserProfileModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EditUserProfileModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EditUserProfileModal isOpen={false} onClose={() => {}} />)
    }).not.toThrow()
  })
})
