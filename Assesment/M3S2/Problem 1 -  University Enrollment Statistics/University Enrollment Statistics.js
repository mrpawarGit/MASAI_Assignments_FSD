/**
Problem 1: University Enrollment Statistics
You have an array of department objects, each with departmentName, location, and students (array of student ages).

Implement functions to:

1. Calculate the total number of students per department.
2. Identify the department with the maximum number of students.
3. List departments with less than 30 students.

Input:

[
  { departmentName: "Computer Science", location: "Building A", students: [21, 22, 20, 23, 22] },
  { departmentName: "Mechanical", location: "Building B", students: [24, 25, 24, 23] },
  { departmentName: "Civil", location: "Building C", students: [22, 22] }
]

Expected Output:

  Total students:
  Computer Science: 5
  Mechanical: 4
  Civil: 2

Department with max students: "Computer Science" (5 students)
Departments with less than 30 students: ["Computer Science", "Mechanical", "Civil"]
 */


let departments = [
  { departmentName: "Computer Science", location: "Building A", students: [21, 22, 20, 23, 22] },
  { departmentName: "Mechanical", location: "Building B", students: [24, 25, 24, 23] },
  { departmentName: "Civil", location: "Building C", students: [22, 22] }
]

//1 students per dept
function studentCount(departments) {
  console.log("Total students:")
  departments.forEach(ele => {
    console.log(`${ele.departmentName}:${ele.students.length}`)
  });
}

//2 dept with max number of students
function deptWithMaxStudents(departments) {
  let max = 0;
  dept = "";
  departments.forEach(ele => {
    //max = Math.max(ele.students.length,max)
    if (max < ele.students.length) {
      max = ele.students.length;
      dept = ele.departmentName;
    }
  })
  console.log(`\nDepartment with max students: "${dept}" (${max} students)`)
}

//3 dept with less than 30 students
function lessStudentDept(departments) {
  let arr = [];
  departments.forEach(ele => {
    if (ele.students.length < 30) {
      arr.push(ele.departmentName)
    }
  })

  console.log(`Departments with less than 30 students: ${arr}`)
}

//calling functions
studentCount(departments)
deptWithMaxStudents(departments)
lessStudentDept(departments)