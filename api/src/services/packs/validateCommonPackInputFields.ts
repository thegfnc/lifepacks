import { validate, validateWithSync } from '@redwoodjs/api'

export default function validiateCommonPackInputFields(input) {
  validate(input.title, 'Title', { presence: true, length: { max: 100 } })
  validate(input.description, 'Description', { length: { max: 1000 } })
  validateWithSync(() => {
    if (input.packItems && input.packItems.length > 8) {
      throw new Error('You can only add up to 8 items to a pack.')
    }
  })
}
