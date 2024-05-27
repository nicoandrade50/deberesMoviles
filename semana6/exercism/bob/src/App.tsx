import React, { useState } from 'react';
import { hey } from './utils';

const App: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [response, setResponse] = useState<string>('');

    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    };

    const handleButtonClick = () => {
        const reply = hey(message);
        setResponse(reply);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Chatbot</h1>
            <input 
                type="text" 
                value={message} 
                onChange={handleMessageChange} 
                placeholder="Type your message here" 
                style={{ padding: '10px', fontSize: '16px', width: '300px' }}
            />
            <button onClick={handleButtonClick} style={{ marginLeft: '10px', padding: '10px', fontSize: '16px' }}>
                Send
            </button>
            <p style={{ marginTop: '20px', fontSize: '18px' }}>{response}</p>
        </div>
    );
};

export default App;
