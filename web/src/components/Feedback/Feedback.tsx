import { useState } from 'react'

import { CheckCircleIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Center,
  Fade,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  Heading,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { MdThumbDown, MdThumbUp } from 'react-icons/md'

import { Form, useForm } from '@redwoodjs/forms'

import { trackFeedbackSelect, trackFeedbackWritten } from 'src/lib/analytics'

type FeedbackType = 'yes' | 'no' | null

type FeedbackWrittenValues = {
  feedback: string
}

const Feedback = () => {
  const [feedbackSelection, setFeedbackSelection] = useState<FeedbackType>(null)
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const formMethods = useForm<FeedbackWrittenValues>()
  const { register, formState } = formMethods

  const handleYesClick = () => {
    if (feedbackSelection) return
    setFeedbackSelection('yes')
    trackFeedbackSelect('yes')
  }

  const handleNoClick = () => {
    if (feedbackSelection) return
    setFeedbackSelection('no')
    trackFeedbackSelect('no')
  }

  const onSubmitWrittenFeedback = (data: FeedbackWrittenValues) => {
    trackFeedbackWritten(feedbackSelection, data.feedback)
    setIsSubmitted(true)
  }

  return (
    <Center textAlign="center">
      <Stack>
        <Heading size="md">Was this page helpful?</Heading>
        <Center>
          <HStack>
            <Button
              leftIcon={<MdThumbUp />}
              colorScheme="green"
              onClick={handleYesClick}
              isDisabled={Boolean(feedbackSelection === 'no')}
            >
              Yes
            </Button>
            <Button
              leftIcon={<MdThumbDown />}
              colorScheme="red"
              onClick={handleNoClick}
              isDisabled={Boolean(feedbackSelection === 'yes')}
            >
              No
            </Button>
          </HStack>
        </Center>
        <Fade in={Boolean(feedbackSelection)} unmountOnExit={true}>
          {isSubmitted ? (
            <Box
              textAlign="center"
              p={6}
              bgColor="whiteAlpha.700"
              mt={6}
              borderRadius="xl"
            >
              <CheckCircleIcon boxSize={'35px'} color={'green.500'} />
              <Heading as="h2" size="md" mt={6} mb={2}>
                Feedback Submitted
              </Heading>
              <Text color={'gray.500'}>
                Thank you for taking the time to help us improve Lifepacks!
              </Text>
            </Box>
          ) : (
            <Form formMethods={formMethods} onSubmit={onSubmitWrittenFeedback}>
              <Stack mt={6}>
                <FormControl isInvalid={Boolean(formState.errors.feedback)}>
                  <FormLabel>
                    How can we improve? <i>(optional)</i>
                  </FormLabel>
                  <Textarea
                    cols={40}
                    variant="filled"
                    bgColor="whiteAlpha.700"
                    _hover={{ bgColor: 'whiteAlpha.900' }}
                    _active={{ bgColor: 'white' }}
                    _focusVisible={{ bgColor: 'white' }}
                    {...register('feedback', {
                      required: {
                        value: true,
                        message:
                          'Written feedback is required to submit this form.',
                      },
                    })}
                  ></Textarea>
                  <FormErrorMessage>
                    {formState.errors.feedback?.message}
                  </FormErrorMessage>
                </FormControl>
                <Box textAlign="right">
                  <Button type="submit">Submit Feedback</Button>
                </Box>
              </Stack>
            </Form>
          )}
        </Fade>
      </Stack>
    </Center>
  )
}

export default Feedback
