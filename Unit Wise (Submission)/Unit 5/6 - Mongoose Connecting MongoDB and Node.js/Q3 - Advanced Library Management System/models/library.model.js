const mongoose = require("mongoose");

const librarySchema = mongoose.Schema({
  title: String, // For books
  author: String,
  status: String, // "available", "borrowed", "reserved"
  borrowerName: String, // If borrowed
  borrowDate: Date,
  dueDate: Date,
  returnDate: Date,
  overdueFees: Number, // Calculated on return if overdue
});

const LibModel = mongoose.model("library", librarySchema);

module.exports = LibModel;
