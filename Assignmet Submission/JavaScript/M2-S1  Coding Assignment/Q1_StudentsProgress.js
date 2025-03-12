/**
Q: 1 Online Learning Platform - Course Completion Analysis

Problem Statement:
An online learning platform tracks students' progress.

Requirements:
const studentsProgress = [
  { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
  { name: "Sita", completedLessons: 25, totalLessons: 50 },
  { name: "Manoj", completedLessons: 30, totalLessons: 60 },
  { name: "Pooja", completedLessons: 48, totalLessons: 50 },
  { name: "Anil", completedLessons: 15, totalLessons: 50 }
];

Implement the following logic:
-Filter students who have completed at least 50% of the course.
-Map to calculate their completion percentage.
-Reduce to find the average completion percentage of all active students.
-Filter students who have more than 80% completion to get a list of top learners.

Expected Output:
-List of active students with their completion percentage.
-The average course completion percentage.

Submission Guidelines
Implement the solution and ensure that it runs without errors.
Include comments in your code to explain the logic and flow.
Submit your GitHub directory Link.
 */

const studentsProgress = [
  { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
  { name: "Sita", completedLessons: 25, totalLessons: 50 },
  { name: "Manoj", completedLessons: 30, totalLessons: 60 },
  { name: "Pooja", completedLessons: 48, totalLessons: 50 },
  { name: "Anil", completedLessons: 15, totalLessons: 50 }
];

//1. filter() students who have completed at least 50% of the course.
const regStudets = studentsProgress.filter((ele)=>ele.completedLessons>=(ele.totalLessons/2))

//2 map() to calculate their completion percentage.
const students = regStudets.map((ele)=>{
  return {name:ele.name,percentage:(ele.completedLessons*100)/ele.totalLessons}
})

//3 Reduce() to find the average completion percentage of all active students.
const avg = students.reduce((sum,obj)=>sum + obj.percentage,0)/students.length;

//4 Filter() students who have more than 80% completion to get a list of top learners.
const filterTopStu = students.filter((obj)=>(obj.percentage>80))

//outputs
console.log("\nStudents who have completed at least 50% of the course:\n",regStudets); //1

console.log("\nStudents With Completion percentage:\n",students); //2

console.log("\nAvg of course completeion percentage:",avg) //3

console.log("\nStudent who have more than 80% completion rate:",filterTopStu) //4
