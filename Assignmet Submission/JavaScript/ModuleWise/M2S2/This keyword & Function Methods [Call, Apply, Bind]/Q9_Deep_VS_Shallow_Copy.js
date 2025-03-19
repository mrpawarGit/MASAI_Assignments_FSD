/* 
Q: 9
Title : L1: Deep vs Shallow copy
Now it's time to do some reading Doc Link Really hoping you read the article , it's very imperative for the following problem

Write a function deepClone(obj) that creates a deep copy of a given object using JSON.stringify() and JSON.parse(). The function should ensure that modifying the cloned object does not affect the original object.

Example Input:

{ name: "Alice", hobbies: ["reading", "traveling"] }

Example Output (After modifying the clone):

Original: { name: "Alice", hobbies: ["reading", "traveling"] }
Clone: { name: "Alice", hobbies: ["reading", "traveling", "coding"] }
*/

const original = { name: "Alice", hobbies: ["reading", "traveling"] }


function deepClone(obj){
  return JSON.parse(JSON.stringify(obj));
}

//deep copy
const deep = deepClone(original);
//shallow copy
const shallow = { ...original};
shallow.hobbies = [...shallow.hobbies,"coding"]


console.log(deep)
console.log(shallow)

