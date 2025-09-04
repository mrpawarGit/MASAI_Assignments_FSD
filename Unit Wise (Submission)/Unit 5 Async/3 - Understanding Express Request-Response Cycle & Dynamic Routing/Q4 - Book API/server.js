const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

// get
app.get("/books", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let books = data.books;
  console.log(books);
  res.status(200).send(books);
});

// post
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

app.use((req, res) => {
  res.json({ msg: "Not Found" });
});

app.listen(3000, (req, res) => {
  console.log("Server started http://localhost:3000/");
});
