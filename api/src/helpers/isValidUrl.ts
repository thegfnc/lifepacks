import { URL } from 'url'

export default function isValidUrl(url) {
  try {
    new URL(url) // eslint-disable-line no-new
    return true
  } catch (error) {
    return false
  }
}
