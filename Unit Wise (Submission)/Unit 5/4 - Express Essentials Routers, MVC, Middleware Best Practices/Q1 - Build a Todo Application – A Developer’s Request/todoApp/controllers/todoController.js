const {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  searchTodos,
} = require("../models/todoModel");

exports.getTodos = (req, res) => {
  res.json(getAllTodos());
};

exports.createTodo = (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const newTodo = addTodo({ title, completed });
  res.status(201).json(newTodo);
};

exports.searchTodo = (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: "Query is required" });
  }
  const results = searchTodos(q);
  res.json(results);
};

exports.updateTodoById = (req, res) => {
  const id = +req.params.id;
  const updated = updateTodo(id, req.body);
  if (!updated) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json(updated);
};

exports.deleteTodoById = (req, res) => {
  const id = +req.params.id;
  const deleted = deleteTodo(id);
  if (!deleted) {
    return res.status(404).json({ error: "Todo not found" });
  }
  res.json({ message: "Todo deleted", todo: deleted });
};
