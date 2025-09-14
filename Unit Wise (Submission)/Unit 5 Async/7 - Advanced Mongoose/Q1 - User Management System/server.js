const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const app = express();
// json pasrser
app.use(express.json());

// serever

app.listen(PORT, () => {
  console.log("Server strted at", PORT);
});
