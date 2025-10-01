"use strict";
// class
class Student {
    // constructor
    constructor(name, age, roll) {
        this.name = name;
        this.age = age;
        this.roll = roll;
    }
    displayDetails() {
        console.log(`Student: ${this.name}, Age: ${this.age}, Roll No: ${this.roll}`);
    }
}
// obj
let student1 = new Student("Raju", 18, 22);
student1.displayDetails();
let student2 = new Student("Nana", 18, 28);
student2.displayDetails();
