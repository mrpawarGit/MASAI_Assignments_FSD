const employees = [
  { name: "Amit", dept: "Tech", salary: 70000, rating: 4.8 },
  { name: "Neha", dept: "Tech", salary: 60000, rating: 4.2 },
  { name: "Ravi", dept: "HR", salary: 55000, rating: 4.7 },
  { name: "Sonia", dept: "Tech", salary: 75000, rating: 4.9 },
  { name: "Karan", dept: "Finance", salary: 50000, rating: 3.9 },
];

// Use filter() to get only "Tech" department employees.
const techEmployees = employees.filter((emp) => emp.dept === "Tech");

// Use another filter() to keep only employees with rating > 4.5.
const tTech = techEmployees.filter((emp) => emp.rating > 4.5);

// Sort them by salary (highest → lowest).
const sorted = tTech.sort((a, b) => b.salary - a.salary);

const totalSal = sorted.reduce((acc, emp) => acc + emp.salary, 0);
const names = sorted.map((emp) => emp.name);

console.log(names); // ["Sonia", "Amit"]
console.log("Total Salary:", totalSal); // Total Salary: 145000
