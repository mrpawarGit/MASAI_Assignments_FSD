const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Started");
});

app.get("/home", (req, res) => {
  res.send("<h1>Welcome to Home Page</h1>");
});

app.get("/aboutus", (req, res) => {
  res.status(200).json({ message: "Welcome to About Us" });
});

app.get("/contactus", (req, res) => {
  res.send({
    name: "Demo",
    email: "demo@ex.com",
    phone: "+911234567890",
  });
});

app.use((req, res) => {
  res.status(404).send("404 Not Found!!");
});

app.listen(3000, (req, res) => {
  console.log("Sever Started");
});
