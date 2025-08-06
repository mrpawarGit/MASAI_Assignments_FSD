const { getAllBooks, getBookById, saveBooks } = require("../models/bookModel");

exports.getAvailableBooks = (req, res) => {
  const available = getAllBooks().filter((b) => b.status === "available");
  res.json(available);
};

exports.borrowBook = (req, res) => {
  const id = +req.params.id;
  const { readerName } = req.body;
  if (!readerName)
    return res.status(400).json({ error: "readerName is required" });

  const books = getAllBooks();
  const book = books.find((b) => b.id === id);

  if (!book) return res.status(404).json({ error: "Book not found" });
  if (book.status !== "available")
    return res.status(400).json({ error: "Book is not available" });

  book.status = "borrowed";
  book.borrowedBy = readerName;
  book.borrowedDate = new Date().toISOString();

  saveBooks(books);
  res.json(book);
};

exports.returnBook = (req, res) => {
  const id = +req.params.id;
  const books = getAllBooks();
  const book = books.find((b) => b.id === id);

  if (!book) return res.status(404).json({ error: "Book not found" });

  book.status = "available";
  book.borrowedBy = null;
  book.borrowedDate = null;

  saveBooks(books);
  res.json(book);
};
