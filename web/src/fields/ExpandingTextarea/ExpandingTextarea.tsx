import { forwardRef, useEffect, useRef, useCallback } from 'react'

import { Textarea, TextareaProps, useMergeRefs } from '@chakra-ui/react'

import { UseFormRegisterReturn } from '@redwoodjs/forms'

type ExpandingTextareaProps = UseFormRegisterReturn &
  TextareaProps & {
    focusOnMount?: boolean
  }

type Ref = HTMLTextAreaElement

// Code was inspired by react-expanding-textarea
// Pull from here as bugs arise –
// https://github.com/rpearce/react-expanding-textarea/blob/main/source/index.tsx

const setHeight = (node) => {
  node.style.height = 'inherit'
  node.style.height = `${node.scrollHeight}px`
  // In case you have a limitation
  // e.target.style.height = `${Math.min(e.target.scrollHeight, limit)}px`;
}

const ExpandingTextarea = forwardRef<Ref, ExpandingTextareaProps>(
  ({ focusOnMount = false, onChange, onBlur, name, ...rest }, ref) => {
    const internalRef = useRef(null)
    const callbackRef = useCallback(
      (inputElement) => {
        if (focusOnMount && inputElement) {
          inputElement.focus()
        }
      },
      [focusOnMount]
    )

    const refs = useMergeRefs(internalRef, ref, callbackRef)

    useEffect(() => {
      setHeight(internalRef.current)
    }, [internalRef])

    const handleChange = (e) => {
      onChange(e)

      setHeight(e.target)
    }

    return (
      <Textarea
        onChange={handleChange}
        onBlur={onBlur}
        name={name}
        ref={refs}
        rows={1}
        {...rest}
      />
    )
  }
)

export default ExpandingTextarea
