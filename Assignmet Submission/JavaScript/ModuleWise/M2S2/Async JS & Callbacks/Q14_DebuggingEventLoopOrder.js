/*
Q: 14
Title: Debugging Event Loop Order

Problem Statement:
You are given a JavaScript snippet that logs messages in a specific order. However, there is an error in the output order because of asynchronous code. Debug the code so it matches the following order of execution:

console.log("Begin"); setTimeout(() => { console.log("Timeout Task"); }, 0); Promise.resolve().then(() => { console.log("Promise Task"); }); console.log("End");

The correct order should be:
  1.Begin
  2.End
  3.Promise Task
  4.Timeout Task
Correct any issues in the code and explain why the output order follows this specific sequence. */


console.log("Begin"); 

setTimeout(() => { 
  console.log("Timeout Task"); 
}, 0);

Promise.resolve().then(() => { 
  console.log("Promise Task"); 
});

console.log("End");