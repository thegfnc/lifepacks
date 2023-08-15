import type { StoryObj, StoryFn } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './PackListCell'
import { standard } from './PackListCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? <Empty username="jmdesderio" /> : <></>
}

export const failure: StoryObj<typeof Failure> = {
  render: (args) => {
    return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
  },
}

export const success: StoryObj<typeof Success> = {
  render: (args) => {
    return Success ? (
      <Success username="jmddesiderio" {...standard()} {...args} />
    ) : (
      <></>
    )
  },
}

export default { title: 'Cells/PackList' }
