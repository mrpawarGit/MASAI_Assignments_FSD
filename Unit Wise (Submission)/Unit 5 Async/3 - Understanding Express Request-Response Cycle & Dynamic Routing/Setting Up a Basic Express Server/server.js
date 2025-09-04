const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Welcome to Home Page");
});

app.get("/aboutus", (req, res) => {
  res.json({ message: "Welcome to About Us" });
});

app.get("/contactus", (req, res) => {
  res.json({ address: "Maasi HQ", mail: "hr@masai.com", phone: "1005-5001" });
});

app.use((req, res) => {
  res.json({ msg: "Invalid Request" });
});

app.listen(3000, () => {
  console.log("Server Started at 3000");
});
