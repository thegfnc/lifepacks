import sanitizeHtml from 'sanitize-html'

import { validate } from '@redwoodjs/api'

import isValidUrl from 'src/helpers/isValidUrl'

export function validatePackIdInput(input) {
  validate(input.packId, 'Pack Id', {
    presence: true,
    numericality: { integer: true },
  })
}

export function validiateCommonPackItemInputFields(input) {
  validate(input.title, 'Title', {
    presence: true,
    length: {
      max: 100,
      message: `Title for pack item "${input.title}" must have no more than 100 characters.`,
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
        max: 480,
        message: `Description for pack item "${input.title}" must have no more than 480 characters.`,
      },
    }
  )

  validate(input.imageUrl, 'Image', {
    length: { max: 2000 },
    presence: true,
    custom: {
      with: () => {
        if (!isValidUrl(input.imageUrl)) {
          throw new Error(
            `Image URL for pack item "${input.title}" is not valid.`
          )
        }
      },
    },
  })

  validate(input.purchaseUrl, 'Purchase URL', {
    length: { max: 2000 },
    presence: true,
    custom: {
      with: () => {
        if (!isValidUrl(input.purchaseUrl)) {
          throw new Error(
            `Purchase URL for pack item "${input.title}" is not valid.`
          )
        }
      },
    },
  })

  validate(input.displaySequence, 'Displace Sequence', {
    presence: true,
    numericality: { integer: true },
  })
}
