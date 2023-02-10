import { render } from '@redwoodjs/testing/web'

import SocialAccountButton from './SocialAccountButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialAccountButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialAccountButton />)
    }).not.toThrow()
  })
})
