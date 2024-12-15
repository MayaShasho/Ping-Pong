import './messageDisplay.css';
import React from 'react';

const MessageDisplay = ({ messages }) => {
    return (
        <div className="MessageDisplayContainer">
            {messages.map((message, index) => (
                <p key={index} className="Message">{message}</p>
            ))}
        </div>
    );
};

export default MessageDisplay;
