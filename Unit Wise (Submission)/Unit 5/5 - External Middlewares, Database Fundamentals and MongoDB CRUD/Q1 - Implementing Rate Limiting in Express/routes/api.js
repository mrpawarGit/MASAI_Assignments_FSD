const express = require("express");

const publicRouter = express.Router();

const limitedRouter = express.Router();

module.exports = { publicRouter, limitedRouter };
