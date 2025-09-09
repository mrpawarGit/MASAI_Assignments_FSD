const LibModel = require("../models/library.model");

// create / post
const addBook = async (req, res) => {
  try {
    const book = await LibModel.create(req.body);
    res.json({ msg: "New Book Added", book });
  } catch (error) {
    res.json({ msg: "Something went wrong" });
  }
};

module.exports = { addBook };
