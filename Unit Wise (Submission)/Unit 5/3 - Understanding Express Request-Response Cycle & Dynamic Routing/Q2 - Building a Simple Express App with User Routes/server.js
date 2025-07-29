const express = require("express");
const app = express();

app.use((req, res) => {
  res.status(404).send("Not Found !!");
});

app.listen(3000, () => {
  console.log("Server Started at http://localhost:3000/");
});
