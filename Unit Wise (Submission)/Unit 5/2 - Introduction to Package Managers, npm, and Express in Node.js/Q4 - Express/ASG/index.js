const express = require("express");
const parseFilePath = require("./fileinfo");
const parseUrl = require("./urlparser");

const app = express();

app.get("/", (req, res) => {
  res.send("Server Started");
});

app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

app.get("/fileinfo", (req, res) => {
  const { filepath } = req.query;

  const result = parseFilePath(filepath);
  res.json(result);
});

app.get("/parseurl", (req, res) => {
  const { url } = req.query;

  const result = parseUrl(url);
  res.json(result);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
