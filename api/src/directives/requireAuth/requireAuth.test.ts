import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import requireAuth from './requireAuth'

describe('requireAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(requireAuth.schema).toBeTruthy()
    expect(getDirectiveName(requireAuth.schema)).toBe('requireAuth')
  })

  it('requireAuth has stub implementation. Should not throw when current user', () => {
    // If you want to set values in context, pass it through e.g.
    // mockRedwoodDirective(requireAuth, { context: { currentUser: { id: 1, name: 'Lebron McGretzky' } }})
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: { currentUser: { sub: '4c18c0e2-568a-4da9-a785-3d5b1343abdb' } },
    })

    expect(mockExecution).not.toThrowError()
  })
})
