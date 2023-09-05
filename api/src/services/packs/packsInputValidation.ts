import sanitizeHtml from 'sanitize-html'

import { validate, validateWithSync } from '@redwoodjs/api'

export function validiateCommonPackInputFields(input) {
  validate(input.title, 'Title', {
    presence: true,
    length: {
      max: 100,
      message: 'Pack title must have no more than 100 characters.',
    },
  })

  validate(
    sanitizeHtml(input.description?.trim(), {
      allowedTags: [],
      allowedAttributes: {},
    }),
    'Description',
    {
      length: {
        max: 360,
        message: 'Pack description must have no more than 360 characters.',
      },
    }
  )

  validateWithSync(() => {
    if (input.packItems && input.packItems.length > 8) {
      throw new Error('You can only add up to 8 items to a pack.')
    }
  })
}
