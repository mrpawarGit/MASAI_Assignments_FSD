const express = require("express");
const fs = require("fs");

const app = express();

// body parser
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Server Started");
});

/**
POST /books → Add a new book.

GET /books/:id → Retrieve a book by its ID.
PUT /books/:id → Update a book by its ID.
DELETE /books/:id → Delete a book by its ID.
*/

// get all books
app.get("/books", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let books = data.books;
  console.log(books);
  res.status(200).send(books);
});

// post / add book
app.post("/books", (req, res) => {
  let newBook = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let books = data.books;

  let id = books[books.length - 1].id + 1;
  newBook = { ...newBook, id };
  books.push(newBook);
  fs.writeFileSync("./db.json", JSON.stringify(data));

  res.status(200).json({ msg: "New Book Added", book: newBook });
});

app.listen(3000, () => {
  console.log("Server Stated at http://localhost:3000/");
});
