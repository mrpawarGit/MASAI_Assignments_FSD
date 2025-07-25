const express = require("express");
const readData = require("./read");
const sysData = require("./systemData");

const app = express();

// default
app.get("/", (req, res) => {
  res.send("Server Started");
});

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// readfile route
app.get("/readfile", (req, res) => {
  res.send(`<h4>${readData()}</h4>`);
});

// system details
app.get("/systemdetails", (req, res) => {
  res.send(sysData());
});

// /getip
app.get("/getip", (req, res) => {
  res.redirect("https://masaischool.com/");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
