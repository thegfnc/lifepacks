import { useEffect } from 'react'

import { useAuth } from 'src/auth'

declare global {
  interface Window {
    gtag: (command: 'set', config: UserId) => void
  }
}

interface UserId {
  user_id: string
}

const useGA4Setup = () => {
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser?.sub) {
      window.gtag('set', { user_id: currentUser.sub })
    }
  }, [currentUser])
}

export default useGA4Setup
