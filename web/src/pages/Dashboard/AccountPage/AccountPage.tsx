import { useAuth } from '@redwoodjs/auth'

import AccountCell from 'src/components/AccountCell'

const AccountPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <AccountCell id={currentUser.id} />
    </>
  )
}

export default AccountPage
