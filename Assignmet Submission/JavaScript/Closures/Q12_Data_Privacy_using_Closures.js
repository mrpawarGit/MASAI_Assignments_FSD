/**
L0 - Data Privacy using Closures

Problem Statement:
Create a closure that simulates a simple counter. Implement a function createCounter that has a private count variable. The function should return two methods: increment to increase the count by 1 and getCount to return the current value of the counter. Ensure that count cannot be accessed directly from outside the closure.

Example:

const counter = createCounter();
console.log(counter.increment()); // Output: 1;
console.log(counter.increment()); // Output: 2;
console.log(counter.getCount()); // Output: 2;
 */

function createCounter(){
  let count=0;

  return{
    getCount: function(){
      return count;
    },
    increment: function(){
      count++;
      return count;
    }
  }
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1;
console.log(counter.increment()); // Output: 2;
console.log(counter.getCount()); // Output: 2;