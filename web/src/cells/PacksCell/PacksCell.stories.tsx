import type { ComponentStory } from '@storybook/react'

import { Loading, Empty, Failure, Success } from './PacksCell'
import { standard } from './PacksCell.mock'

export const loading = () => {
  return Loading ? <Loading /> : <></>
}

export const empty = () => {
  return Empty ? <Empty username="jmdesderio" /> : <></>
}

export const failure: ComponentStory<typeof Failure> = (args) => {
  return Failure ? <Failure error={new Error('Oh no')} {...args} /> : <></>
}

export const success: ComponentStory<typeof Success> = (args) => {
  return Success ? (
    <Success username="jmddesiderio" {...standard()} {...args} />
  ) : (
    <></>
  )
}

export default { title: 'Cells/PacksCell' }
