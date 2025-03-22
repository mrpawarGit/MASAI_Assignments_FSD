/*
Q: 11
Title: - Understanding Synchronous Code Execution

Problem Statement:
Write a JavaScript program that demonstrates synchronous code execution. You should create three console logs that print "Task 1", "Task 2", and "Task 3" in sequence. Since synchronous code runs line-by-line, the console output should display each task in the order they are written.
*/

//Synchronous Program
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

/* 
//Asynchronous Program
setTimeout(()=>{
  console.log("Task 1");
},1000)
setTimeout(()=>{
  console.log("Task 2");
},2000)
setTimeout(()=>{
  console.log("Task 3");
},3000)

*/