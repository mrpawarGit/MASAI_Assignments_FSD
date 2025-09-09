const express = require("express");

const publicRouter = express.Router();
publicRouter.get("/", (req, res) => {
  res.json({ msg: "This is public router" });
});

const limitedRouter = express.Router();
limitedRouter.get("/", (req, res) => {
  res.json({ msg: "This is Limited Router" });
});

module.exports = { publicRouter, limitedRouter };
