import { useForm } from '@redwoodjs/forms'
import { render, renderHook } from '@redwoodjs/testing/web'

import ImageUploadField from './ImageUploadField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ImageUploadField', () => {
  it('renders successfully', () => {
    globalThis.URL.revokeObjectURL = jest.fn()
    const { result } = renderHook(() => useForm())

    expect(() => {
      render(
        <ImageUploadField
          control={result.current.control}
          bucket="pack-item-images"
          name="imageUrl"
        />
      )
    }).not.toThrow()
  })
})
