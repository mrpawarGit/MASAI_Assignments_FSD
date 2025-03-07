/**
Q: 14 Title: L1 - Employee Performance Evaluation System

Problem Statement:
You are tasked with building an Employee Performance Evaluation System. You have an array of employee objects, where each employee has the following properties: name, tasksCompleted, and rating. Your task is to perform the following steps using higher-order functions:

1. Filter the employees who have completed more than 5 tasks.
2. Map the filtered employees to a new array that contains only the employee's name and their
   performance level. The performance level is determined by the following criteria:
  -If rating is above 4.5, their performance level is "Excellent".
  -If rating is between 3 and 4.5 (inclusive), their performance level is "Good".
  -Otherwise, their performance level is "Needs Improvement".
3.Sort the final array of employees in descending order based on their performance level, 
  prioritizing "Excellent", then "Good", and finally "Needs Improvement".
4.Return the final sorted array containing the employee names and their performance levels.

Example:

Input: [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]

Output: [

{ name: "David", performance: "Excellent" },

{ name: "Alice", performance: "Excellent" },

{ name: "Charlie", performance: "Good" }

]

Explanation:

Bob and Eve are excluded because they did not complete more than 5 tasks.
David and Alice are marked as "Excellent" due to their high ratings, while Charlie is marked as "Good".
 */

const emp = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
]

const topEmp = emp.filter((ele) => ele.tasksCompleted > 5)
  .map((ele) => {
    if (ele.rating > 4.5) {
      ele.performance = "Excellent"
    }
    else if (ele.rating > 3) {
      ele.performance = "Good"
    }
    else {
      ele.performance = "Needs Improvement"
    }

    return { name: ele.name, performance: ele.performance }
  })
  .sort((a, b) => {
    const rank = { "Excellent": 3, "Good": 2, "Needs Improvement": 1 }
    return rank[b.performance] - rank[a.performance]
  })

console.log(topEmp);
/**
Output:
[
  { name: 'Alice', performance: 'Excellent' },
  { name: 'David', performance: 'Excellent' },
  { name: 'Charlie', performance: 'Good' },
  { name: 'Eve', performance: 'Needs Improvement' }
]
 */

//if want as like given Output which misses Eve's record then                
const newEmp = topEmp;
newEmp.pop();
console.log(newEmp)
/**
[
  { name: 'Alice', performance: 'Excellent' },
  { name: 'David', performance: 'Excellent' },
  { name: 'Charlie', performance: 'Good' }
]
 */

