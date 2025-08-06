const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router.get("/", todoController.getTodos);
router.post("/", todoController.createTodo);
router.get("/search", todoController.searchTodo);
router.put("/:id", todoController.updateTodoById);
router.delete("/:id", todoController.deleteTodoById);

module.exports = router;
