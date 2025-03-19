/*
Q: 13

Title: - Debugging an Array and String Manipulation Program

Problem Statement:
You are given a program that manipulates an array of student names. However, there are 
several bugs in the code that need to be fixed. Your task is to debug the program and 
make sure it works correctly. The program should perform the following:

1. Add a new student name at a specific position using splice.
2. Check if a student's name exists in the array using includes.
3. Convert the array of student names into a single string where names are separated 
   by commas using join.

The existing code is as follows:

function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Add "David" at index 1
    students.splice(1, 0, "David");

    // Check if "Eve" is in the list
    console.log(students.includes("Eve"));  // Should return false

    // Convert the array to a string with names separated by commas
    console.log(students.join(","));  // Expected: "Alice,David,Bob,Charlie"
}
manageStudents();

Tasks:
    1.Fix any bugs in the code.
    2.Write test cases to ensure that adding, searching, and joining operations are 
      working as expected.
    3.Ensure that the program works for different cases (e.g., adding at different 
      positions, checking different names).
*/

function manageStudents() {
  let students = ["Alice", "Bob", "Charlie"];

  // Add "David" at index 1
  students.splice(1, 0, "David");

  // Check if "Eve" is in the list
  console.log(students.includes("Eve"));  // Should return false

  // Convert the array to a string with names separated by commas
  console.log(students.join(","));  // Expected: "Alice,David,Bob,Charlie"
}
manageStudents();