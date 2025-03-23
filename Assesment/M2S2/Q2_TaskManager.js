/*

Problem 2
You are tasked with creating a Task Manager that manages and secures user tasks using JavaScript concepts such as Closures, Higher-Order Functions, and JSON manipulation. The implementation should meet the following requirements:

Requirements:
Task Manager Module (Closure + Module Design)
Create a module named TaskManager that manages a list of tasks.
The list of tasks should be private (secured using closures) and accessible only through provided methods.
Each task should be stored in the following format:
Implement the following methods inside the module:
addTask(title) → Adds a new task with a unique id and completed status set to false.
getAllTasks() → Returns a JSON string of all tasks.
markComplete(taskId) → Marks a specific task as completed.
removeTask(taskId) → Removes a task by id.
Advanced Operations Using HOFs
Implement two additional functions:
getPendingTasks() → Returns an array of task titles that are not completed (using .filter()).
getCompletedTasks() → Returns an array of task titles that are completed (using .map() and .filter()).
Sorting and Method Chaining
Implement a method sortTasks() that:
Sorts tasks by title in ascending order using .sort() and .localeCompare().
Chains .map() and .sort() to return only the task titles in sorted order.
Deliverables:
Implementation
JavaScript code implementing the TaskManager module with the following features:
Private task data managed securely using closures.
Properly functioning methods:
addTask()
getAllTasks()
markComplete()
removeTask()
Advanced operations:
getPendingTasks() (using .filter()).
getCompletedTasks() (using .map() and .filter()).
Sorting functionality using:
.sort() and .localeCompare() for sorting task titles in ascending order.
Method chaining for efficient data manipulation.
Correct Usage of Concepts
Demonstration of:
Closures for task data security.
Higher-Order Functions (HOFs) like .map(), .filter(), and .sort().
*/