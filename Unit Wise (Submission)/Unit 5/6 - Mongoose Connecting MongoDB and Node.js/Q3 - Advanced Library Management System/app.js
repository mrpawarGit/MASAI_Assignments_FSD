const express = require("express");
const libRouter = require("./routes/library.routes");
const connectDB = require("./config/db");

const app = express();
connectDB();

app.use(express.json()); // parser

app.use("/lib", libRouter);

// invalid handle
app.use((req, res) => {
  res.json({ msg: "Not Found" });
});

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
