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

module.exports = TaskRouter;
