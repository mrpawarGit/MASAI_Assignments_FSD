const express = require("express");
const TaskModel = require("../models/task.model");

const TaskRouter = express.Router();

// read
TaskRouter.get("/", async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(404).json({ msg: "Something went wrong" });
    console.log(error);
  }
});

// create
TaskRouter.post("/", async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(200).json({ msg: "Task Added", task });
  } catch (error) {
    res.status(404).json({ msg: "Something went wrong" });
  }
});

// update
TaskRouter.put("/:taskid", async (req, res) => {
  const taskid = req.params.taskid;
  const newTask = req.body;
  try {
    const task = await TaskModel.findById(taskid);
    if (!task) {
      res.status(404).json({ msg: "Task / Id not found" });
    }
    const updated = await TaskModel.findByIdAndUpdate(taskid, newTask);
    res.json({ msg: "Task Updated", newTask });
  } catch (error) {
    res.status(404).json({ msg: "Something went wrong" });
  }
});

// delete
TaskRouter.delete("/:taskid", async (req, res) => {
  try {
    const taskid = req.params.taskid;
    await TaskModel.findByIdAndDelete(taskid);
    res.json({ msg: "Task Deleted" });
  } catch (error) {
    res.status(404).json({ msg: "Something went wrong" });
  }
});

module.exports = TaskRouter;
