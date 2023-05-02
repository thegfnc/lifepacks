import { render } from '@redwoodjs/testing/web'

import AffiliateLinks101Page from './AffiliateLinks101Page'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AffiliateLinks101Page', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AffiliateLinks101Page />)
    }).not.toThrow()
  })
})
