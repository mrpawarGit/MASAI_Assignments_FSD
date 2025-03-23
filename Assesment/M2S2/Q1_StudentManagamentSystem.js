/*
Q: 1
Develop a robust Student Performance Analysis System that efficiently manages student data, tracks academic performance, and generates meaningful insights using JavaScript Objects, Object Methods, and In-Built Methods.

Problem Statement
You are tasked with developing a Student Performance Analysis System for a school. The system should manage student data securely, track their performance across multiple subjects, and generate insightful reports.

Key Requirements
-Implement a function called createStudentManager() that securely manages student data using closures for data privacy.

-The function should return the following methods:
  -addStudent – Adds a new student with the following structure:
  -updateScore – Updates a student’s score for a given subject.
  -getStudentDetails – Retrieves details of a specific student. If the student doesn’t exist,  
   return "Student Not Found".
  -addSubject – Adds a new subject for a student with its score.

-The system should generate the following insights:
    -Calculate the average score for each student.
    -Identify students with an average score above 85 as top performers.
    -Identify subjects in which more than 50% of the students have scored below 40 (considered difficult subjects).
    -Identify students who have failed in at least one subject (score below 35).
    -Display a frequency map that shows how many students are enrolled in each subject.

-Use the following concepts effectively:
    -Implement Object.keys(), Object.values(), and Object.entries() for key-value manipulations.
    -Use .map(), .filter(), .reduce(), and .forEach() for efficient data manipulation and report generation.

-Add a method getSortedStudents(sortBy) that sorts students by:
    -"averageScore"
    -"name" (alphabetically)

-Deliverables:

-Implementation
  1.JavaScript code implementing the createStudentManager() function with the following methods:
      -addStudent
      -updateScore
      -getStudentDetails
      -addSubject
      -getSortedStudents()
  
  2.Insights generation logic that includes:
  -Average score calculation for each student.
  -Identification of top performers (average score above 85).
  -Identification of difficult subjects (where more than 50% of students score below 40).
  -Identification of students who have failed in at least one subject.
  -Generation of a frequency map showing subject-wise student counts.

-Correct Usage of Concepts
  Clear and effective use of:
    -Closures to ensure data privacy.
    -Object.keys(), Object.values(), and Object.entries() for object manipulations.
    -.map(), .filter(), .reduce(), and .forEach() for data transformation and insights generation.
*/

function createStudentManager() {
  let students = [];

  return {
    //1
    addStudent(name) {
      students.push({ name, subjects: {} });
      console.log(students);
    },

    //2
    updateScore(name, subject, score) {
      students.forEach((stu) => {
        if (stu.name === name) {
          stu.subjects[subject] = score;
        }
      })
      console.log(students)
    },

    //3
    getStudentDetails(name){
      let sDetails = "Student Not Found"
      students.forEach(stu=>{
        if(stu.name===name){
          sDetails = stu
        }
      })
      return sDetails;
    },

    //4 
    addSubject(name,subject,score){
      students.forEach((stu) => {
        if (stu.name === name) {
          stu.subjects[subject] = score;
        }
      })
      console.log(students)
    }
    
  }
}

let sm = createStudentManager();
sm.addStudent("Raju");
sm.addStudent("Rani");
sm.updateScore("Raju", "Science", 80);
sm.updateScore("Raju", "Maths", 80);

console.log(sm.getStudentDetails("Raju"))

sm.addSubject("Raju", "Eng", 80)
sm.addSubject("Rani","Eng",75)









