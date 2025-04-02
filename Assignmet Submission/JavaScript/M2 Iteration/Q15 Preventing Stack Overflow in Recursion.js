/*
Q: 15
Title:
L2 - Preventing Stack Overflow in Recursion

Problem Statement:
You are required to write a recursive function factorial to calculate the factorial of a given number. However, you also need to handle potential stack overflow issues by adding a check to prevent an infinite recursion in case of incorrect input or base cases. Specifically, ensure that:

If the input number is negative, print "Invalid input".
If the input is not a number, print "Invalid input".
Use recursion to compute the factorial for valid inputs.
Include a base case to stop the recursion at factorial(0).
You will implement a safety mechanism that prevents a stack overflow by avoiding incorrect recursive calls.

Steps:

Write a function factorial that calculates the factorial of a number.
Make sure that you read about Recursion in MDN (it's an interesting topics).
Include checks for negative numbers and non-numeric input.
Use recursion with a base case to avoid stack overflow.
Test with multiple inputs to demonstrate correctness and safety. */

function factorial(num){
  if(num<0){
    console.log("Inavlid Number")
    return
  }
  if(num==0) return 1;

  return num * factorial(num-1);
}

let fact = factorial(3);
console.log(fact)