import { useForm } from '@redwoodjs/forms'
import { render, renderHook } from '@redwoodjs/testing/web'

import RichTextEditor from './RichTextEditor'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RichTextEditor', () => {
  it('renders successfully', () => {
    expect(() => {
      const { result } = renderHook(() => useForm())

      render(<RichTextEditor name="rte" control={result.current.control} />)
    }).not.toThrow()
  })
})
