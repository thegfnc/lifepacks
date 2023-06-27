import { useEffect } from 'react'

import { useAuth } from 'src/auth'
import { setUserId } from 'src/lib/analytics'

const useGA4Setup = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    setUserId(currentUser?.sub)
  }, [currentUser])
}

export default useGA4Setup
