import { render } from '@redwoodjs/testing/web'

import 'src/helpers/testUtils/matchMedia.mock'
import { ThemeWrapper } from 'src/helpers/testUtils/ThemeWrapper'

import UserProfilePage from './UserProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserProfilePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ThemeWrapper>
          <UserProfilePage username="jmdesiderio" />
        </ThemeWrapper>
      )
    }).not.toThrow()
  })
})
