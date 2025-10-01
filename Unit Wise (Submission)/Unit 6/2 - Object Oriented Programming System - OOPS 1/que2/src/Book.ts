class Book {
  private title: string;
  private author: string;
  private price: number;

  constructor(title: string, author: string, price: number) {
    this.title = title;
    this.author = author;
    this.price = price;
  }

  disp(): void {
    console.log(
      `Book Title:${this.title}, Author:${this.author} & Price:${this.price}`
    );
  }
}

let b1 = new Book("Shyam Chi Aai", "Sane Guruji", 199);
b1.disp();
