const express = require("express");
const app = express();

const emitter = require("./eventLogger");
const delayedResponse = require("./delay");

app.get("/", (req, res) => {
  res.send("Server Stated");
});

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// emiter -> /emit?message=HelloWorld
app.get("/emit", (req, res) => {
  const { message } = req.query;

  if (!message) {
    return res
      .status(400)
      .json({ error: "Message query parameter is required" });
  }

  emitter.emit("log", message);
  res.json({ status: "Event emitted", message });
});

// Delay route -> /delay?message=WaitForIt&time=3000
app.get("/delay", async (req, res) => {
  const { message, time } = req.query;

  if (!message || !time) {
    return res
      .status(400)
      .json({ error: "Both message and time query parameters are required" });
  }

  const delay = parseInt(time);

  const result = await delayedResponse(message, delay);
  res.json({ delayedMessage: result, delay: `${delay}ms` });
});

app.listen(3000, () => {
  console.log("Server Started at 3000");
});
