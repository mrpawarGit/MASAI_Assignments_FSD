/**
Q: 14
Title: L1 - Debugging Object Methods

Problem Statement:
You need to debug and refactor a script meant to handle user profiles in an application. The script uses object methods but has issues with method referencing and logical errors.

Code Sample:

const userProfile = {

name: "Alice",

age: 28,

details: function() {

return ${this.name} is ${this.age} years old.; },

updateAge(newAge) {

if (newAge <= 0) {

console.log("Invalid age.");

return; }

this.age = newAge;

console.log(this.details); } };

userProfile.updateAge(30);

console.log(userProfile.details()); // Expected: "Alice is 30 years old."

Steps:

-Correct the updateAge method to ensure it properly logs updated user details.
-Fix any other method referencing errors or logical inconsistencies.
-Ensure that all changes adhere to good practices in JavaScript ES6.
 */