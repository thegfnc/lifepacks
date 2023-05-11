import {
  AccordionButton,
  AccordionItem as ChakraAccordionItem,
  AccordionPanel,
  Box,
  AccordionIcon,
} from '@chakra-ui/react'

type AccordionItemProps = {
  title: string
  body: string
  colorMode?: 'light' | 'dark'
}

const colors = {
  light: {
    bg: 'white',
  },
  dark: {
    bg: 'brown.500',
  },
}

const AccordionItem = ({
  title,
  body,
  colorMode = 'light',
}: AccordionItemProps) => {
  const themeColors = colors[colorMode]

  return (
    <ChakraAccordionItem border={0}>
      {({ isExpanded }) => (
        <Box
          bg={isExpanded ? 'purple.500' : themeColors.bg}
          color={isExpanded ? 'white' : 'blackAlpha.800'}
          p={{ base: 4, md: 6 }}
          borderRadius="32px"
          transition={'background .2s ease-in-out'}
        >
          <AccordionButton p={{ base: 3, md: 4 }} borderRadius="16px">
            <Box
              flex="1"
              textAlign="left"
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="medium"
            >
              {title}
            </Box>
            <AccordionIcon boxSize="24px" />
          </AccordionButton>
          <AccordionPanel
            p={0}
            px={3}
            mb={3}
            fontFamily="bitter"
            fontSize={{ base: 'lg', md: '2xl' }}
            color="white"
            lineHeight="short"
          >
            {body}
          </AccordionPanel>
        </Box>
      )}
    </ChakraAccordionItem>
  )
}

export default AccordionItem
