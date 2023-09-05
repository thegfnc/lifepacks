import { Box } from '@chakra-ui/react'
import { Editor } from '@tiptap/react'

type CharacterCountDisplayProps = {
  editor: Editor
  maxLength?: number
}

const CharacterCountDisplay = ({
  editor,
  maxLength,
}: CharacterCountDisplayProps) => {
  if (maxLength === null) {
    return null
  }

  const characterCount = editor.storage.characterCount.characters()
  const isAtMaxLength = characterCount >= maxLength

  return (
    <Box
      fontSize="sm"
      color={isAtMaxLength ? 'red.600' : 'blackAlpha.500'}
      fontWeight={400}
      textAlign="right"
    >
      {characterCount}/{maxLength}
    </Box>
  )
}

export default CharacterCountDisplay
