import { render } from '@redwoodjs/testing/web'

import { SocialAccountType } from '../SocialAccountIcon/SocialAccountIcon'

import SocialAccountButton from './SocialAccountButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialAccountButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SocialAccountButton
          accountType={SocialAccountType.YouTube}
          linkUrl="https://www.youtube.com/"
        />
      )
    }).not.toThrow()
  })
})
