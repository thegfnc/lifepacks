import { render } from '@redwoodjs/testing/web'

import PasswordInput from './PasswordInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PasswordInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <PasswordInput
          name="password"
          autoComplete="new-password"
          onChange={() => new Promise(() => {})}
          onBlur={() => new Promise(() => {})}
        />
      )
    }).not.toThrow()
  })
})
