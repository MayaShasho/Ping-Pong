import './button.css';
import React from 'react';

const ButtonComponent = ({ handleStart, handleStop }) => {
    return (
        <div className="ButtonContainer">
            <button className="StartButton" onClick={handleStart}>Start Ping-Pong</button>
            <button className="StopButton" onClick={handleStop}>Stop Ping-Pong</button>
        </div>
    );
};

export default ButtonComponent;
