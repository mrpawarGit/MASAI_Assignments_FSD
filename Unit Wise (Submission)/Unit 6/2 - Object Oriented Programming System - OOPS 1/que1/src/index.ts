// class
class Student {
  // member variables
  private name: string;
  private age: number;
  private roll: number;

  // constructor
  constructor(name: string, age: number, roll: number) {
    this.name = name;
    this.age = age;
    this.roll = roll;
  }

  displayDetails(): void {
    console.log(
      `Student: ${this.name}, Age: ${this.age}, Roll No: ${this.roll}`
    );
  }
}

// obj
let student1 = new Student("Raju", 18, 22);
student1.displayDetails();

let student2 = new Student("Nana", 18, 28);
student2.displayDetails();
