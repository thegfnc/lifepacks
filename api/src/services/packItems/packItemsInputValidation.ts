import { validate } from '@redwoodjs/api'

import isValidUrl from 'src/helpers/isValidUrl'

export function validatePackIdInput(input) {
  validate(input.packId, 'Pack Id', {
    presence: true,
    numericality: { integer: true },
  })
}

export function validiateCommonPackItemInputFields(input) {
  validate(input.title, 'Title', { presence: true, length: { max: 100 } })
  validate(input.description, 'Description', { length: { max: 900 } })
  validate(input.imageUrl, 'Image', {
    length: { max: 2000 },
    presence: true,
    custom: {
      with: () => {
        if (!isValidUrl(input.imageUrl)) {
          throw new Error('Image URL is not valid.')
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
          throw new Error('Purchase URL is not valid.')
        }
      },
    },
  })
  validate(input.displaySequence, 'Displace Sequence', {
    presence: true,
    numericality: { integer: true },
  })
}
