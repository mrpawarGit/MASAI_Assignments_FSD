const express = require("express");
const app = express();

app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("Server Started on http://localhost:3000/");
});
