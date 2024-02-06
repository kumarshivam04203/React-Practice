import React, { useState } from "react";

function RatingApp() {
    const [selectedEmoji, setSelectedEmoji] = useState("");
    const [isFeedbackVisible, setFeedbackVisible] = useState(false);
    const [feedbackText, setFeedbackText] = useState("");

    const handleEmojiClick = (emoji) => {
        setSelectedEmoji(emoji);
        setFeedbackVisible(true);
    }

    const handleSubmission = () => {
        console.log(`Selected Emoji: ${selectedEmoji}`);
        console.log(`Feedback Text: ${feedbackText}`);
        // You can perform additional actions here, e.g., sending the feedback to a server.
        resetFeedback();
    }

    const resetFeedback = () => {
        setSelectedEmoji("");
        setFeedbackText("");
        setFeedbackVisible(false);
    }

    return (
        <div id="feedback">
            <button onClick={() => handleEmojiClick('😍')}> 😍 </button>
            <button onClick={() => handleEmojiClick('😀')}> 😀 </button>
            <button onClick={() => handleEmojiClick('🙁')}> 🙁 </button>
            <button onClick={() => handleEmojiClick('😭')}> 😭 </button>
            
            {isFeedbackVisible && (
                <div>
                    <textarea
                        placeholder="Enter your detailed feedback..."
                        value={feedbackText}
                        onChange={(e) => setFeedbackText(e.target.value)}
                    ></textarea>
                    <button onClick={handleSubmission} id="submit">Submit</button>
                </div>
            )}
        </div>
    );
}
export default RatingApp