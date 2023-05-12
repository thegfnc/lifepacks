import {
  AccordionButton,
  AccordionItem as ChakraAccordionItem,
  AccordionPanel,
  Box,
  AccordionIcon,
  Flex,
  Fade,
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
          borderRadius="32px"
          transition={'background .15s ease-in-out'}
        >
          <AccordionButton
            p={{ base: 7, md: 10 }}
            borderRadius="32px"
            display="block"
            textAlign="left"
          >
            <Flex align="center">
              <Box
                flex="1"
                textAlign="left"
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="medium"
              >
                {title}
              </Box>
              <AccordionIcon boxSize="24px" />
            </Flex>
            <AccordionPanel
              p={0}
              mt={4}
              fontFamily="bitter"
              fontSize={{ base: 'lg', md: '2xl' }}
              color="white"
              lineHeight="short"
            >
              {body}
            </AccordionPanel>
          </AccordionButton>
        </Box>
      )}
    </ChakraAccordionItem>
  )
}

export default AccordionItem
