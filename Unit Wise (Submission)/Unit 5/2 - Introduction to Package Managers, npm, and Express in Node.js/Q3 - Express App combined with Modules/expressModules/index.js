const express = require("express");
const readData = require("./read");
const sysData = require("./systemData");
const dns = require("dns");

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
  dns.lookup("masaischool.com", (err, address) => {
    res.send(`IP address of masaischool.com is: ${address || "Not Found"}`);
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
