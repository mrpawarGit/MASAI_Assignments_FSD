/**
Q: 12
Title: L0 - Filter_and_Sort_Data_with_Higher-Order_Functions

Problem Statement:
You are given an array of student objects. Each student object contains a name and marks. Write a function processStudents that performs the following steps:

1.Filter the students to create a new array of students who scored above 60 marks.
2.Sort the filtered array in descending order of marks.
3.Map the sorted array to extract only the names of the students.
4.Return the array of sorted names.

Example:

Input:

  { "name": "Alice", "marks": 58 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 45 },
  { "name": "Emma", "marks": 76 },
  { "name": "Frank", "marks": 63 },
  { "name": "Grace", "marks": 89 },
  { "name": "Hannah", "marks": 95 },
  { "name": "Ian", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Kate", "marks": 67 },
  { "name": "Leo", "marks": 88 },
  { "name": "Mia", "marks": 91 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
]
Output: ["Hannah", "Charlie", "Mia", "Grace", "Leo", "Bob", "Olivia", "Jack", "Emma", "Nathan", "Kate", "Frank"]
 */

const students = [
  { "name": "Alice", "marks": 58 },
  { "name": "Bob", "marks": 85 },
  { "name": "Charlie", "marks": 92 },
  { "name": "David", "marks": 45 },
  { "name": "Emma", "marks": 76 },
  { "name": "Frank", "marks": 63 },
  { "name": "Grace", "marks": 89 },
  { "name": "Hannah", "marks": 95 },
  { "name": "Ian", "marks": 54 },
  { "name": "Jack", "marks": 79 },
  { "name": "Kate", "marks": 67 },
  { "name": "Leo", "marks": 88 },
  { "name": "Mia", "marks": 91 },
  { "name": "Nathan", "marks": 72 },
  { "name": "Olivia", "marks": 82 }
]


function processStudents(){
  const topStudents = students.filter((ele)=>{return ele.marks>60})
                      .sort((a,b)=>{return b.marks - a.marks})
                      .map((ele)=>ele.name);

  console.log(topStudents)
}

processStudents();