const express = require("express");
const ratelimit = require("express-rate-limit");
const apiRoutes = require("./routes/api");
const app = express();

// middlewere
app.use(express.json());

// limit logic
const limit = ratelimit({
  windowMs: 1 * 60 * 1000, // 1 min
  limit: 5, // 5 req
  message: "Max req reached, wait for 1 min...",
});

// public
app.use("/api/public", apiRoutes.publicRouter);

// limitd
app.use("/api/limited", limit, apiRoutes.limitedRouter);

// undefined routes
app.use((req, res) => {
  res.json({ msg: "Req Not Found" });
});

// server
app.listen(3000, () => {
  console.log("Server started http://localhost:3000/");
});
