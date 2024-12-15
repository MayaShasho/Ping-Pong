import axios from "axios";

let isRunning = true;

export const sendPong = async (req, res) => {
    if (!isRunning) {
        return res.status(400).send("Ping-Pong is stopped.");
    }
    console.log("Pong");
    res.send("Pong");
    try {
        setTimeout(() => {
            axios.get("http://localhost:3001/ping").catch((error) => {
                console.error("Error calling Ping server:", error.message);
            });
        }, 1000);
    } catch (error) {
        console.error("Error calling Ping server:", error.message);
    }
};

export const stopPong = (req, res) => {
    isRunning = false;
    console.log("Ping-Pong stopped.");
    res.send("Ping-Pong stopped.");
};

export const startPong = (req, res) => {
    isRunning = true;
    console.log("Ping-Pong started.");
    res.send("Ping-Pong started.");
};
