import { render } from '@redwoodjs/testing/web'

import SocialAccountButton, { SocialAccountType } from './SocialAccountButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SocialAccountButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SocialAccountButton
          accountType={SocialAccountType.YouTube}
          username="@jmdesiderio"
          linkUrl="https://www.youtube.com/"
        />
      )
    }).not.toThrow()
  })
})
