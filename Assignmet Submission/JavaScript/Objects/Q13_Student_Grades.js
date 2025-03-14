/**
Q: 13
Title:
L1 - Student Grades Based on Score

Problem Statement:

Write a program that classifies students based on their scores stored in an object. The object contains student names as keys and their scores as values. You need to print each student’s name along with their grade based on the following conditions:

Score >= 90 → "A"
Score >= 80 and < 90 → "B"
Score >= 70 and < 80 → "C"
Score >= 60 and < 70 → "D"
Score < 60 → "F"
You must use a for-in loop to iterate through the object.

Example:

let studentScores = {
  John: 85,
  Emma: 92,
  Sam: 67,
  Bob: 45
};

Output:

John - B
Emma - A
Sam - D
Bob - F

Submission Guidelines:

Please submit your Masai Git directory link.

 */

function studentGrades(studentScores) {
  for (let s in studentScores) {
    let score = studentScores[s];

    if (score >= 90) {
      console.log(s, "- A");
    } else if (score >= 80) {
      console.log(s, "- B");
    } else if (score >= 70) {
      console.log(s, "- C");
    } else if (score >= 60) {
      console.log(s, "- D");
    } else {
      console.log(s, "- F");
    }
  }
}

let studentScores = {
  John: 85,
  Emma: 92,
  Sam: 67,
  Bob: 45
};

studentGrades(studentScores);

