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
      //console.log(students);
    },

    //2
    updateScore(name, subject, score) {
      students.forEach((stu) => {
        if (stu.name === name) {
          stu.subjects[subject] = score;
        }
      })
      //console.log(students)
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
      //console.log(students)
    },

    //5
    getSortedStudents(sortBy){
      if(sortBy=="name"){
        return students.sort((a,b)=>a.name.localeCompare(b.name))
      }
    },
    //6
    getInsights(){
      //
      let total_students = students.length
      console.log("Total Students:",total_students);
      //
      let avgScore = students.map((stu,ind)=>{
        return {
          name:stu.name,
          avgScore:((stu.subjects.Science + stu.subjects.Maths + stu.subjects.Eng)/3).toFixed(2)
        }
      })
      console.log("Avg Of All Students:",avgScore)
      //above 85
      let toppers = avgScore.filter((ele)=>ele.avgScore>85)
      
      console.log("Toppers:",toppers);

      //failed -> below 35
      let fail = avgScore.filter((stu)=>stu.avgScore<35)
      console.log("Failed students:",fail)
    }
    
  }
}

let sm = createStudentManager();
sm.addStudent("Raju");
sm.addStudent("Rani");

sm.updateScore("Raju", "Science", 80);
sm.updateScore("Raju", "Maths", 80);
sm.updateScore("Raju", "Eng", 80);

console.log(sm.getStudentDetails("Raju"))

sm.addSubject("Rani","Science",25)
sm.addSubject("Rani","Maths",75)
sm.addSubject("Rani", "Eng", 80)

console.log(sm.getSortedStudents("name"))

sm.addStudent("Naman");
sm.addSubject("Naman", "Eng", 25)
sm.addSubject("Naman", "Maths", 35)
sm.addSubject("Naman", "Science", 20)

sm.addStudent("Suman");
sm.addSubject("Suman", "Eng", 85)
sm.addSubject("Suman", "Maths", 95)
sm.addSubject("Suman", "Science", 92)


sm.getInsights();









