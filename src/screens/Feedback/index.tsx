import { Slide, Box, HStack, Text, CheckIcon, CloseIcon, QuestionIcon } from 'native-base';
import { useFeedback } from '../../contexts/feedback';
import { useEffect } from 'react';

export function Feedback() {
	const { feedbackMsg, feedbackType, showFeedback } = useFeedback();

  const FeedbackIcon = (props) => {
    switch (feedbackType) {
      case 'success':
        return <CheckIcon {...props} />;
      case 'error':
        return <CloseIcon {...props} />;
      default:
        return <QuestionIcon {...props} />;
    }
  }

	return (
	 <Slide in={showFeedback} placement="top">
      <Box
        position="absolute"
        w="100%"
        p="2"
        borderRadius="xs"
        bg={`${feedbackType}.100`}
        alignItems="center"
        justifyContent="center"
        safeArea
      >
        <HStack space={2}>
          <FeedbackIcon size="4" color={`${feedbackType}.600`} mt="1" />
          <Text color={`${feedbackType}.600`} textAlign="center" fontWeight="medium">
            {feedbackMsg}
          </Text>
        </HStack>
      </Box>
    </Slide>
    );
}