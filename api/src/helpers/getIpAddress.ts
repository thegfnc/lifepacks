import { AuthContextPayload } from '@redwoodjs/api'

type GetIpAddressInput = {
  event: AuthContextPayload[2]['event']
}

const getIpAddress = ({ event }: GetIpAddressInput) => {
  return event?.headers?.['client-ip'] || 'null'
}

export default getIpAddress
