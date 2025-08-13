const express = require("express");
const connectDB = require("./configs/db");
const TaskRouter = require("./routes/task.routes");

const app = express();

app.use(express.json()); // parser

connectDB(); // db coonect

app.use("/tasks", TaskRouter);

// unkown routes
app.use((req, res) => {
  res.json({ msg: "Not Found" });
});

app.listen(3000, () => {
  console.log("Server started");
});
