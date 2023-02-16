import { render } from '@redwoodjs/testing/web'

import SocialAccountIcon, { SocialAccountType } from './SocialAccountIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialAccountIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialAccountIcon accountType={SocialAccountType.Instagram} />)
    }).not.toThrow()
  })
})
