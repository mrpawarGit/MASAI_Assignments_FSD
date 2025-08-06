const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "db.json");

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH));
const writeDB = (data) =>
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

const getAllBooks = () => readDB();
const getBookById = (id) => readDB().find((b) => b.id === id);
const saveBooks = (books) => writeDB(books);

module.exports = {
  getAllBooks,
  getBookById,
  saveBooks,
};
