import { createContext, Dispatch, ReactNode, SetStateAction } from 'react'

const HeaderCtaContext = createContext<
  Dispatch<SetStateAction<ReactNode>> | (() => void)
>(() => {})

export default HeaderCtaContext
