/**
 
Title: L0 - Determine Senior Citizen Discount Eligibility

Problem Statement: Write a program that checks if a person is eligible for a senior citizen discount based on their age. If the age is 60 or more, the output should be "Eligible for Senior Discount". Otherwise, the output should be "Not Eligible for Senior Discount". Use the ternary operator for this task. Additionally, handle an edge case where the age provided is a negative number or 0. For such cases, output "Invalid Age".

Example:

let age = 65;

Output: "Eligible for Senior Discount"

let age = -1;

Output: "Invalid Age"

Submission Guidelines: Please submit your Masai Git directory link.

 */

function discount(age){

  let output = age<=0 ? "Invalid Age" : 
               age>=60 ? "Eligible for Senior Discount" : "Not Eligible for Senior Discount";

  return output;
}


console.log(discount(65));
