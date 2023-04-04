import { render } from '@redwoodjs/testing/web'

import MailingListSignUpForm from './MailingListSignUpForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MailingListSignUpForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MailingListSignUpForm />)
    }).not.toThrow()
  })
})
