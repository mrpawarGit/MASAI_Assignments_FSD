const express = require("express");
const connectDB = require("./db/config");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
connectDB();

const app = express();
// json pasrser
app.use(express.json());

//

app.get("/test", (req, res) => {
  res.json({ msg: "Test Route" });
});

// serever
app.listen(PORT, () => {
  console.log("Server strted at", PORT);
});
