const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  dueDate: Date,
});

const TaskModel = mongoose.model("Tasks", taskSchema);

module.exports = TaskModel;
