const { getAllBooks, getBookById, saveBooks } = require("../models/bookModel");

exports.addBook = (req, res) => {
  const books = getAllBooks();
  const newBook = {
    id: Date.now(),
    ...req.body,
    status: "available",
    borrowedBy: null,
    borrowedDate: null,
  };
  books.push(newBook);
  saveBooks(books);
  res.status(201).json(newBook);
};

exports.getBooks = (req, res) => {
  res.json(getAllBooks());
};

exports.updateBook = (req, res) => {
  const id = +req.params.id;
  const books = getAllBooks();
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });

  books[index] = { ...books[index], ...req.body };
  saveBooks(books);
  res.json(books[index]);
};

exports.deleteBook = (req, res) => {
  const id = +req.params.id;
  let books = getAllBooks();
  const index = books.findIndex((b) => b.id === id);
  if (index === -1) return res.status(404).json({ error: "Book not found" });

  const deleted = books.splice(index, 1)[0];
  saveBooks(books);
  res.json({ message: "Book deleted", book: deleted });
};
