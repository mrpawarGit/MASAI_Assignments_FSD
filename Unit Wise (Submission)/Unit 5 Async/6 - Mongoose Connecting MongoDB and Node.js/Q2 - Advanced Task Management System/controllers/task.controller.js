const Task = require("../models/task.model");

// add task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json({ msg: "Task Added Successfully", task });
  } catch (error) {
    res.json({ msg: "Something went wrong" });
  }
};

// get task
const getTask = async (req, res) => {
  try {
    const task = await Task.find();
    if (!task.length) {
      res.json({ msg: "Empty - No Task Found" });
    }
    res.json(task);
  } catch (error) {
    res.json({ msg: "Something went wrong" });
  }
};

// delete task
const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json({ msg: "Task Deleted", task: deletedTask });
  } catch (error) {
    res.json({ msg: "Something went wrong" });
  }
};

// update task status
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    if (update.isCompleted) {
      update.completionDate = new Date();
    }

    const task = await Task.findByIdAndUpdate(id, update);
    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    const updated_task = await Task.findById(id);
    res.json({ msg: "Task updated", updated_task });
  } catch (error) {
    res.json({ msg: "Something went wrong" });
  }
};

module.exports = { createTask, getTask, deleteTask, updateTask };
