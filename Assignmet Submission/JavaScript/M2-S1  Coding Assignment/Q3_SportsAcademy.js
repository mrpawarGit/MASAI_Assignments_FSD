/**
Q: 3
Problem Statement
A sports academy tracks athlete details, including name, sport, scores, and personal details. You need to extract and manipulate data using destructuring and the spread operator.

Dataset:
const athletes = [
  { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
  { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
  { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
];

Tasks:
1️⃣ Extract the first athlete's name and sport using destructuring.
2️⃣ Destructure the scores of Neeraj, storing the first two separately and the rest in another variable.
3️⃣ Create a new object for Neeraj using the spread operator, updating his age to 27 and adding worldChampion: true.
4️⃣ Merge all scores from all athletes into a single array using the spread operator.

Expected Output:
"Virat plays Cricket"
88, 90, [85]
{ name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 27, worldChampion: true }
[89, 75, 102, 21, 19, 25, 88, 90, 85]

 */

const athletes = [
  { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
  { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
  { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
];

//1️ -Extract the first athlete's name and sport using destructuring.

let [{name,sport}]=athletes;

//2 -Destructure the scores of Neeraj, storing the first two separately and the rest in another variable.
let [,,{scores:[s1,s2,s3]}] = athletes
let arr = [s3];

//3 -Create a new object for Neeraj using the spread operator, updating his age to 27 and adding worldChampion: true.
let [,,{name:n1,sport:sp,scores:sc,age}]=athletes
const neeraj = {"name":n1,"sport":sp,"score":sc,"age":27};

//4 -Merge all scores from all athletes into a single array using the spread operator
let [{scores}] = athletes
let [,{scores:sc2}] = athletes
let [,,{scores:sc3}] = athletes
let mixScore = [...scores,...sc2,...sc3]

//outputs
console.log(`${name} plays ${sport}`); //1

console.log(s1,s2,arr); //2

console.log(neeraj) //3

console.log(mixScore) //4
