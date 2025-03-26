/**
Q11 - Title: Understanding Factory Functions in JavaScript

Problem Statement:
Write a factory function called createEmployee that generates an object representing an employee. Each employee object should have the properties name, role, and salary, along with a method introduce() that prints a message introducing the employee's name and role.

Steps:

-Create the factory function createEmployee.
-The function should accept name, role, and salary as parameters.
-Return an object with properties name, role, salary, and a method introduce().
-The introduce() method should print a string: "Hello, I am [name], working as a [role]."

Example:
const employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce();

Output: Hello, I am Alice, working as a Developer.

*/

function createEmployee(name, role, salary) {
  let emp = {}
  emp.name = name
  emp.role = role
  emp.salary = salary
  emp.introduce = function () {
    console.log(`Hello, I am ${this.name}, working as a ${this.role}.`)
  }
  return emp
}

let employee1 = createEmployee("Alice", "Developer", 60000);
employee1.introduce();
// Output: Hello, I am Alice, working as a Developer.
