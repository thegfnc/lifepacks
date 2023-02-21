import { render } from '@redwoodjs/testing/web'

import NewPackPage from './NewPackPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewPackPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewPackPage />)
    }).not.toThrow()
  })
})
