const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String, enum: ["low", "medium", "high"], required: true },
  isCompleted: { type: Boolean, default: false },
  completionDate: Date,
  dueDate: Date,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
