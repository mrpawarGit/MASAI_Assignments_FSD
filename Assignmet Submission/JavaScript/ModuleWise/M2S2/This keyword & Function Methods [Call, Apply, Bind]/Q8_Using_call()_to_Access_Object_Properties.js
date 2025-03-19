/**
Q: 8
Title: - Using call() to Access Object Properties

Problem Statement:
Create a function personInfo that logs the name and age of a person. Using the call() method, call the function with a specific this context (an object with properties name and age).
 */

function printInfo(){
  console.log("Name:",this.name);
  console.log("Age:",this.age);
}

const personInfo = {
  name:"Sudheer",
  age: 22
}

printInfo.call(personInfo);

