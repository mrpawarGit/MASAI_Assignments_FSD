class Person {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet(): string {
    return `Hello ${this.name}, age:${this.age}`;
  }
  static isAdult(age: number): boolean {
    return age >= 18;
  }
}

let p1 = new Person("Raj", 21);
console.log(p1.greet());

console.log("isAdult:", Person.isAdult(20));
console.log("isAdult:", Person.isAdult(10));
