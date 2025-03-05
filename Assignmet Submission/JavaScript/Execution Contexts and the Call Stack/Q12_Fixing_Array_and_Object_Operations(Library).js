/**
Problem Statement:
You have been provided with a script that is intended to handle a system for tracking book collections in a small library. The script uses arrays and objects to manage information but contains logical errors and syntax misuse, especially around ES6 features.

Code Sample: given

Steps:

Debug and improve the addBook method to ensure all books added are valid and fully specified.
Read about the methods provided above in MDN
Review and correct the output of the system based on operations performed.
Refactor the code for better error handling and data integrity.
 */

const library = {

  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {

    if (!book.title || !book.author || !book.year) {

      console.log("\nThe book information is incomplete.");

      return;

    }
    this.books.push(book);
    console.log("\n"+ book.title + " by "+book.author+" added succesfully!")

  },

  findBookByTitle(title) {
    let result = this?.books?.find(book => book.title === title);
    if(result){
      return `\n${result.title} by ${result.author} has been found!`;
    }else{
      return "\nNot Found!"; 
    }
  },

  removeBook(title) {

    const index = this.books.findIndex(book => book.title === title);

    if (index !== -1) {

      this.books.splice(index, 1);
      console.log("\n"+ title,"removed!")

    } 
    else {
      console.log("\nBook not found.");
    }
  },
  dispAllBooks(){
    if(library.books.length>=1){
      console.log("\nAvailable books:")
      library.books.forEach(book => {
        console.log(book.title)
      });
    }

    else{
      console.log("Empty")
    } 
  }
};

//Adding books to the library
//incomplete data
library.addBook({ author: "George Orwell", year: 1949 });
//correct data
library.addBook({title:"Fighter", author: "George Orwell", year: 1949 });
library.addBook({title:"Marvel", author: "Harvy More", year: 2001 });

//Total number of books in lib
console.log("\nNumber of books in library:",library.books.length);

//searching book in library
console.log(library.findBookByTitle("Fighter"));
console.log(library.findBookByTitle("Fighterg"));

//removing book in library
library.removeBook("Fighter");

//printing all available books
library.dispAllBooks();



