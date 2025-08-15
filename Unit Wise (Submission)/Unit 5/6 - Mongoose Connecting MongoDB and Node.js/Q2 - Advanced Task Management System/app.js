const express = require("express");
const connectToDB = require("./config/db");
const TaskRouter = require("./routes/task.routes");

const app = express();
app.use(express.json());
connectToDB();

// route for tasks
app.use("/", TaskRouter);

// invalid handle
app.use((req, res) => {
  res.json({ msg: "Not Found" });
});

app.listen(3000, () => {
  console.log("Server Started http://localhost:3000/");
});
