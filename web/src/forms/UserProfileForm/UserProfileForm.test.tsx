import { render } from '@redwoodjs/testing/web'

import UserProfileForm from './UserProfileForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UserProfileForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserProfileForm onSubmit={() => {}} isLoading={false} />)
    }).not.toThrow()
  })
})
