/*
Q.12 - Implementing Multiple Custom Methods for Array Operations

Problem Statement: 

Create a program that defines the following custom methods:
1. filterEvenNumbers(arr): This method takes an array of numbers and returns a new 
   array with only the even numbers using filter.
2. sumOfArray(arr): This method calculates and returns the sum of all elements in 
   an array using reduce.
3. sortAndConcat(arr1, arr2): This method takes two arrays of numbers, sorts each 
   array in ascending order using sort, and then concatenates them into one array 
   using concat. Return the sorted and concatenated array.

Your program should:
    -Take two input arrays of numbers.
    -Use the custom methods to filter, sum, sort, and concatenate the arrays.
    -Output the results of each operation. 
*/
//1
function filterEvenNumbers(arr){
   return arr.filter((ele)=>ele%2==0)
}
//2
function sumOfArray(arr){
   return arr.reduce((acc,ele)=>{
      acc += ele
      return acc;
   },0)
}
//3
function sortAndConcat(arr1, arr2){
   arr1 = arr1.sort((a,b)=>a-b);
   arr2 = arr2.sort((a,b)=>a-b);
   return arr1.concat(arr2);
}


let arr = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [15,16,11,14,13,12]

console.log("Even Array:",filterEvenNumbers(arr));
console.log("Sum:",sumOfArray(arr));
console.log("New Array:",sortAndConcat(arr,arr2));