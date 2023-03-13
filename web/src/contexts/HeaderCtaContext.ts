import { createContext, Dispatch, ReactNode, SetStateAction } from 'react'

const HeaderCtaContext = createContext<
  [ReactNode, Dispatch<SetStateAction<ReactNode>>] | null
>(null)

export default HeaderCtaContext
