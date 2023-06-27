import { useEffect } from 'react'

import { useAuth } from 'src/auth'
import { gtag } from 'src/lib/analytics'

const useGA4Setup = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    gtag('set', { user_id: currentUser?.sub })
  }, [currentUser])
}

export default useGA4Setup
