// Q1. Given an array of students:
const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 92 },
  { name: "Charlie", marks: 70 },
];

const fill = students.filter((s) => s.marks > 80);
const avg = fill.reduce((acc, ele) => acc + ele.marks, 0) / fill.length;

console.log(avg);

// Write a function to sort an array of objects by age, and then return the total of the top 3 oldest people’s ages.

const people = [
  { name: "A", age: 21 },
  { name: "B", age: 42 },
  { name: "C", age: 29 },
  { name: "D", age: 36 },
];

const sorted = people.sort((a, b) => b.age - a.age);
const sum = sorted.slice(0, 3).reduce((acc, ele) => acc + ele.age, 0);

console.log(sum);

// Q3. Predict and explain the output:
console.log(a);
var a = 10;
function test() {
  console.log(a);
  var a = 20;
}
test();

/**
 * output will be
 *
 * var a = 10; => undefined
 * its called before its declared so it will give undefined, because its hoisted
 *
 * test(); =>undefined
 * its called before its declared so it will give undefined, because its hoisted
 *
 */
