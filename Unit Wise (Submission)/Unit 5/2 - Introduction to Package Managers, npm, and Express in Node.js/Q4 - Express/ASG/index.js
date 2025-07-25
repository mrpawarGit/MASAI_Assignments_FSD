const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
