const express = require("express");
const connectToDB = require("./config/db");

const app = express();
app.use(express.json());
connectToDB();

// invalid handle
app.use((req, res) => {
  res.json({ msg: "Not Found" });
});

app.listen(3000, () => {
  console.log("Server Started http://localhost:3000/");
});
