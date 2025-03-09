/**
Q: 1
Problem Statement 1:
You need to implement a task management system in JavaScript using closures, higher-order functions, and method chaining. The system should allow users to:

1.Add tasks with a title and status (pending by default).
2.Mark tasks as complete using map.
3.Filter tasks based on their status (pending or completed) using filter.
4.List all tasks using forEach and log them properly.
5.Sort tasks alphabetically using sort and localeCompare.
6.Count tasks using reduce to return total counts of completed and pending tasks.
7.Allow method chaining so multiple operations can be performed sequentially.

Version Control & Deployment

Use Git for version control and push your code to a public GitHub repository.
Submission Requirements
 */

function taskManager() {
  let tasks = [];

  return {
    addTask(title) {
      tasks.push({ title, status: "pending" });
      return this;
    },

    completeTask: function(title) {
      tasks = tasks.map(task => {
        if (task.title == title) {
          return { ...task, status: "complete" };
        } else {
          return task;
        }
      });
      return this;
    },

    filterTask: function(status) {
      return tasks.filter(task => task.status === status);
    },

    listTask: function() {
      tasks.forEach(task => console.log(task));
      return this;
    },

    sortTask: function() {
      tasks.sort((a, b) => a.title.localeCompare(b.title));
      return this;
    },

    countTask: function() {
      return tasks.reduce(
        (acc, task) => {
          acc[task.status] = (acc[task.status] || 0) + 1;
          return acc;
        },
        { pending: 0, complete: 0 }
      );
    }
  };
}

const tk = taskManager();
tk.addTask("Presentation");
tk.addTask("Manufacturing");
tk.listTask();

tk.completeTask("Presentation");
tk.listTask()

console.log("Filtered Tasks:", tk.filterTask("complete"));

tk.sortTask();
tk.listTask();

console.log("Task Count:", tk.countTask());
