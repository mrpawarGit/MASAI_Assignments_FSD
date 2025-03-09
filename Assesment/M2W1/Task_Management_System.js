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
    //1
    addTask(title) {
      tasks.push({ title, status: "pending" });
      return this;
    },
    //2
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
    //3
    filterTask: function(status) {
      return tasks.filter(task => task.status === status);
    },
    //4
    listTask: function() {
      tasks.forEach(task => console.log(task));
      return this;
    },
    //5
    sortTask: function() {
      tasks.sort((a, b) => a.title - b.title);
      return this;
    },

    //6
    countTask: function() {
      let ans = tasks.reduce((acc,cur)=>{
        return acc += cur;
      },0)
      return this;
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
