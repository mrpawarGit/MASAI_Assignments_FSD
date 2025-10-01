interface Printable {
  print(): string;
}

class Documents implements Printable {
  print(): string {
    return "Printing Document...";
  }
}

class Photo implements Printable {
  print(): string {
    return "Printing Photo...";
  }
}

let d1 = new Documents();
let p1 = new Photo();
let arr: string[] = [d1.print(), p1.print()];

console.log(arr);
