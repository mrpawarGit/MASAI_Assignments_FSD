const express = require("express");
const app = express();
const fs = require("fs");

// body parser
app.use(express.json());

app.post("/add", (req, res) => {
  console.log(req.body);
  res.send("Data Added..");
});

// route for reading file
app.get("/all-dishes", (req, res) => {
  let data = fs.readFileSync("./db.json", "utf-8");
  console.log(data);
  res.send(data);
});

// default handle
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("Server Started on http://localhost:3000/");
});
