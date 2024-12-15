import './App.css';
import { useState } from 'react';
import axios from 'axios';
import MessageDisplay from './components/messageDisplay/messageDisplay.js';
import ButtonComponent from './components/buttons/button.js';

function App() {
  const [messages, setMessages] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleStart = async () => {
    if (isRunning) {
      return;
    }
    setIsRunning(true);
    setMessages((prev) => [...prev, "Starting Ping-Pong..."]);
    try {
      await axios.get("http://localhost:3001/ping/start");
      await axios.get("http://localhost:3002/pong/start");

      await axios.get('http://localhost:3001/ping');
    } catch (error) {
      console.error("Error starting Ping-Pong:", error);
    }
  };

  const handleStop = async () => {
    if (!isRunning) {
      return;
    }
    setIsRunning(false);
    setMessages((prev) => [...prev, "Ping-Pong Stopped"]);
    try {
      await axios.get("http://localhost:3001/ping/stop");
      await axios.get("http://localhost:3002/pong/stop");
    } catch (error) {
      console.error("Error stopping Ping-Pong:", error);
    }
  };


  return (
    <div className="App">
      <h1 className='AppHeader'>Ping Pong Project</h1>
      <ButtonComponent handleStart={handleStart} handleStop={handleStop} />
      <MessageDisplay messages={messages} />
    </div>
  );
}

export default App;
