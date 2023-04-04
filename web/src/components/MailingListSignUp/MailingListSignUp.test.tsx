import { render } from '@redwoodjs/testing/web'

import MailingListSignUp from './MailingListSignUp'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MailingListSignUp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MailingListSignUp />)
    }).not.toThrow()
  })
})
