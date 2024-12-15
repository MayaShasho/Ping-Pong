import "./config.js";
import express from "express";
import cors from "cors";
import pongRoute from "./routes/pong.js";

const app = express();
app.use(cors());
const port = 3002;

app.use("/pong", pongRoute);

app.listen(port, () => {
    console.log(`Pong Server listening on port ${port}`);
});
