import axios from "axios";

let isRunning = true;

export const sendPing = async (req, res) => {
    if (!isRunning) {
        return res.status(400).send("Ping-Pong is stopped.");
    }
    console.log("Ping");
    res.send("Ping");
    try {
        setTimeout(() => {
            axios.get("http://localhost:3002/pong")
                .catch(error => console.error("Error calling Pong server:", error.message));
        }, 1000);
    } catch (error) {
        console.error("Error calling Pong server:", error.message);

    }
};

export const stopPing = (req, res) => {
    isRunning = false;
    console.log("Ping-Pong stopped.");
    res.send("Ping-Pong stopped.");
};

export const startPing = (req, res) => {
    isRunning = true;
    console.log("Ping-Pong started.");
    res.send("Ping-Pong started.");
};
