const express = require("express");
const ratelimit = require("express-rate-limit");
const apiRoutes = require("./routes/api");
const app = express();

// middlewere
app.use(express.json());

// undefined routes
app.use((req, res) => {
  res.json({ msg: "Req Not Found" });
});

// server
app.listen(3000, () => {
  console.log("Server started http://localhost:3000/");
});
