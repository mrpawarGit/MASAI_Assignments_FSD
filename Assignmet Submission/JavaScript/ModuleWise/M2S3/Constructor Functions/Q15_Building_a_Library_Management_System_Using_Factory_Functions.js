/*
Q: 15
Title:
L2 - Building a Library Management System Using Factory Functions

Problem Statement:
Create a factory function createLibrary that manages a collection of books in a library. Each library should allow for adding new books, removing books by title, and displaying all available books. Implement helper factory functions for creating Book objects, which include properties title and author, and a method details() to print the book’s details.

Steps:

Define the Book factory function with title, author, and a details() method.
Define the createLibrary factory function that returns an object with methods to:
Add a book to the collection.
Remove a book by title.
List all books by calling each book’s details() method.
Implement createLibrary to store books in an internal array.
Example:
const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

*/

function Book(title, author) {
  let book = {};
  book.title = title;
  book.author = author;
  book.details = function () {
    console.log("Title:",this.title, "Author:",this.author);
  }

  return book
}

function createLibrary(){
  let lib = [];
  return{
    addBook(book){
      lib.push(book)
    },
    removeBook(title){
      lib = lib.filter((book)=>(book.title !== title))
    }
    ,
    listBooks(){
      return lib.forEach(book=>book.details())
    }
  }
}

const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

