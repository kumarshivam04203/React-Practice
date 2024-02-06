import React, { useState } from "react";

const SubmitMessage= () => {
    const [messages, setMessages] = useState([])
    const [inputValue, setInputValue] = useState('')

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleInput = (e) => {
        if(e.key === 'Enter' && e.shiftKey){
            e.preventDefault();
            sendMessage()
        }
    }
    const sendMessage = () => {
        if(inputValue.trim() !== '') {
            setMessages([...messages, inputValue])
            setInputValue('')
        }
    }

    return (
        <div>
            <h1>Submit Message</h1>
            {messages.map((message, index) => (
                <p key={index}>{message}</p>
            ))}

            <input type="text" value={inputValue} 
                onChange={handleChange}
                onKeyDown={handleInput}
                placeholder="Type the message and press Shift + Enter"
            />

        </div>

    )
}
export default SubmitMessage