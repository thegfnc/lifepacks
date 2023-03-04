import { render } from '@redwoodjs/testing/web'

import ImageUploadField from './ImageUploadField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ImageUploadField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImageUploadField />)
    }).not.toThrow()
  })
})
