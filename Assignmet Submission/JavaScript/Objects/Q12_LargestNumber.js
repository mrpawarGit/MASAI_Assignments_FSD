/**
Q: 12
Title: L0 - Find Largest of Three Numbers Using Ternary Operator

Problem Statement: Create a program that takes three numbers as input and determines the largest number using nested ternary operators. You must solve this problem using only ternary logic without using the Math.max() function.

Example: let num1 = 45, num2 = 78, num3 = 33;
Output: 78 (The largest number)

 */

function largestNumber(num1,num2,num3){
  return num1>num2 && num1>num3 ? `${num1} (The largest number)`:
         num2>num1 && num2>num3 ? `${num2} (The largest number)`:
         num3>num1 && num3>num2 ? `${num3} (The largest number)`: "All are Equals";
}

console.log(largestNumber(1,2,3));