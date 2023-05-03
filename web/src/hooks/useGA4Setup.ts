import { useEffect } from 'react'

import { useAuth } from 'src/auth'

// gtag types taken from
// https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/gtag.js/index.d.ts

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
    window.gtag('set', { user_id: currentUser?.sub })
  }, [currentUser])
}

export default useGA4Setup
