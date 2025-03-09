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

function taskManager(){
  let task = [];

  return{
    addTask: function(title){
      task.push({title, status:"pending"})
    },
    completeTask: function(title){
      task = task.map((ele)=>{
        if(ele.title==title){
          return {title,status:"complete"}
        }
      })
    },
    // filterTask: function(status){
    //  result = task.filter(()=>{
    //   return task.status == status;
    //  })
    //  return result;
    // }
    //,
    listTask: function(){
      task.forEach((ele)=>{
        console.log(ele);
      })
    }
  }
}

const tk = taskManager();
tk.addTask("Presentation");
tk.addTask("Manufacturing");
tk.listTask();

tk.completeTask("Presentation");
tk.listTask();

//tk.filterTask("complete")



