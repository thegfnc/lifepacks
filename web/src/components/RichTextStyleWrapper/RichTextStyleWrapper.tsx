import { ReactNode } from 'react'

import { Text, TextProps } from '@chakra-ui/react'

type RichTextStyleWrapperProps = TextProps & {
  children: ReactNode
}

const RichTextStyleWrapper = ({
  children,
  ...rest
}: RichTextStyleWrapperProps) => {
  return (
    <Text
      as="div" // so that any type of element can be nested inside
      {...rest}
      sx={{
        p: {
          minHeight: '1em',
          margin: '1em 0',
          '&:first-of-type': {
            marginTop: 0,
          },
          '&:last-of-type': {
            marginBottom: 0,
          },
        },
      }}
    >
      {children}
    </Text>
  )
}

export default RichTextStyleWrapper
