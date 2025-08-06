const express = require("express");
const app = express();
const todoRoutes = require("./routes/todoRoutes");

// Middleware
app.use(express.json());

app.use("/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

// Server
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
