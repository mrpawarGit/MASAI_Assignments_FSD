"use strict";
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    disp() {
        console.log(`Book Title:${this.title}, Author:${this.author} & Price:${this.price}`);
    }
}
let b1 = new Book("Shyam Chi Aai", "Sane Guruji", 199);
b1.disp();
