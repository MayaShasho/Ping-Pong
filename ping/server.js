import "./config.js";
import express from "express";
import cors from "cors";
import pingRoute from "./routes/ping.js";

const app = express();
app.use(cors());
const port = 3001;

app.use("/ping", pingRoute);

app.listen(port, () => {
    console.log(`Ping Server listening on port ${port}`);
});
