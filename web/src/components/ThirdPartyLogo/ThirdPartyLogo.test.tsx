import { render } from '@redwoodjs/testing/web'

import ThirdPartyLogo from './ThirdPartyLogo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ThirdPartyLogo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ThirdPartyLogo type="Google" />)
    }).not.toThrow()
  })
})
