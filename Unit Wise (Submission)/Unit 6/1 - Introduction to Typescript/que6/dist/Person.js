"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello ${this.name}, age:${this.age}`;
    }
    static isAdult(age) {
        return age >= 18;
    }
}
let p1 = new Person("Raj", 21);
console.log(p1.greet());
console.log("isAdult:", Person.isAdult(20));
console.log("isAdult:", Person.isAdult(10));
