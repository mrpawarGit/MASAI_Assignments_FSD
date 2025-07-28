const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server Stated");
});

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.listen(3000, () => {
  console.log("Server Started at 3000");
});
