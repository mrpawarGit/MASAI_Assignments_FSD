const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/home", (req, res) => {
  res.send("<h1>This is home page</h1>");
});

app.get("/contactus", (req, res) => {
  res.send("<h2>Contact us at contact@contact.com</h2>");
});

// server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
