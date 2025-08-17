const express = require("express");
const { addBook } = require("../controllers/library.controller");

const libRouter = express.Router();

libRouter.post("/", addBook); // add Book

module.exports = libRouter;
