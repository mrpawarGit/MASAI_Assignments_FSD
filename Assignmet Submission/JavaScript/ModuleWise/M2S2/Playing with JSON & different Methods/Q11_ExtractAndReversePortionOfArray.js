/*
Q.11 - Extract and Reverse a Portion of an Array

Problem Statement:
Given an array of integers [15, 30, 45, 60, 75, 90], write a function extractAndReverse 
that performs the following tasks:

1. Use the slice method to extract a subarray from the third element (inclusive) to the 
   fifth element (exclusive).
2. Reverse the extracted subarray and return it.
3. The original array should remain unchanged. The function should return the reversed 
   subarray.
*/

function newArray(arr){
   return arr.slice(2,4).reverse();
}

let arr = [15, 30, 45, 60, 75, 90];
let arr2 = newArray(arr)

console.log(arr);
console.log(arr2);