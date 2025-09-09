const express = require("express");
const {
  createTask,
  getTask,
  deleteTask,
  updateTask,
} = require("../controllers/task.controller");

const TaskRouter = express.Router();

TaskRouter.post("/tasks", createTask); // add / post
TaskRouter.get("/tasks", getTask); // get
TaskRouter.delete("/tasks/:id", deleteTask); // delete task
TaskRouter.patch("/tasks/:id", updateTask); // update task

module.exports = TaskRouter;
