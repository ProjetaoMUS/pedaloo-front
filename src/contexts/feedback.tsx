import { createContext, useContext, useState } from 'react';

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
	const [feedbackMsg, setFeedbackMsg] = useState('');
	const [feedbackType, setfeedbackType] = useState('');
	const [showFeedback, setShowFeedback] = useState(false);

	const sendFeedback = (type, msg) => {
		setFeedbackMsg(msg);
		setfeedbackType(type)
		setShowFeedback(true);
		setTimeout(() => setShowFeedback(false), 1300);
	}

	return (
		<FeedbackContext.Provider value={{ feedbackMsg, feedbackType, showFeedback, sendFeedback }}>
			{children}
		</FeedbackContext.Provider>
	)
}

export function useFeedback() {
	return useContext(FeedbackContext);
}