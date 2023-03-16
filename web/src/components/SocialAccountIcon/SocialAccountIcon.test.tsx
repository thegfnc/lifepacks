import { render } from '@redwoodjs/testing/web'

import SocialAccount from 'src/types/SocialAccount'

import SocialAccountIcon from './SocialAccountIcon'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialAccountIcon', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SocialAccountIcon accountType={SocialAccount.Instagram} />)
    }).not.toThrow()
  })
})
