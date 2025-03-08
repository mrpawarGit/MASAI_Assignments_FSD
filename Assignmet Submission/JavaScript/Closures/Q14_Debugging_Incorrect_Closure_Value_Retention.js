/**
Q: 14
Title:
L1 - Debugging Incorrect Closure Value Retention

Problem Statement:
You are given the following code that is supposed to create a list of functions. Each function should print a unique index (0, 1, 2, ...) when called. However, instead of printing the correct index, every function prints the same final value.

Your task is to debug the code and fix the closure-related issue so that each function retains and prints its correct index.

Buggy Code:
function createFunctionList() {

let functions = [];

for (var i = 0; i < 5; i++) {

functions.push(function () {

console.log("Index:", i);

});

}

return functions; }

const functionList = createFunctionList();

functionList[0]();    // Expected Output: "Index: 0", Actual Output: "Index: 5"

functionList[1]();   // Expected Output: "Index: 1", Actual Output: "Index: 5"

functionList[2]();   // Expected Output: "Index: 2", Actual Output: "Index: 5"

functionList[3]();   // Expected Output: "Index: 3", Actual Output: "Index: 5"

functionList[4]();   // Expected Output: "Index: 4", Actual Output: "Index: 5"
Task:
Investigate why the function list is not printing the correct index.
Modify the code to ensure that each function prints its corresponding index when invoked.
Hint: The issue is related to how closures capture variables from the lexical environment. Consider the scope of var and how to create a unique scope for each function.
 */


function createFunctionList() {
  let functions = [];

  for (let i = 0; i < 5; i++) {
    functions.push(function () {
      console.log("Index:", i);
    });
  }

  return functions;
}

const functionList = createFunctionList();

functionList[0]();    // Expected Output: "Index: 0", Actual Output: "Index: 5"

functionList[1]();   // Expected Output: "Index: 1", Actual Output: "Index: 5"

functionList[2]();   // Expected Output: "Index: 2", Actual Output: "Index: 5"

functionList[3]();   // Expected Output: "Index: 3", Actual Output: "Index: 5"

functionList[4]();   // Expected Output: "Index: 4", Actual Output: "Index: 5"