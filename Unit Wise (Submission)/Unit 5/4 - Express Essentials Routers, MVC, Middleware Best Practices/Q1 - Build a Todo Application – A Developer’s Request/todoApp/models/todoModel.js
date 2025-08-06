const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "db.json");

const readDB = () => {
  const data = fs.readFileSync(DB_PATH, "utf-8");
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};

const getAllTodos = () => readDB();

const addTodo = (todo) => {
  const todos = readDB();
  const newTodo = { id: Date.now(), ...todo };
  todos.push(newTodo);
  writeDB(todos);
  return newTodo;
};

const updateTodo = (id, updates) => {
  const todos = readDB();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return null;
  todos[index] = { ...todos[index], ...updates };
  writeDB(todos);
  return todos[index];
};

const deleteTodo = (id) => {
  const todos = readDB();
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return null;
  const deleted = todos.splice(index, 1)[0];
  writeDB(todos);
  return deleted;
};

const searchTodos = (query) => {
  const todos = readDB();
  return todos.filter((todo) =>
    todo.title.toLowerCase().includes(query.toLowerCase())
  );
};

module.exports = {
  getAllTodos,
  addTodo,
  updateTodo,
  deleteTodo,
  searchTodos,
};
