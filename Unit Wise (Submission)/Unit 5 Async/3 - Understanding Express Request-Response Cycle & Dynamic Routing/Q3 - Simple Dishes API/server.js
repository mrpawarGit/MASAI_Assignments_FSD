const express = require("express");

const app = express();

app.get("/users/get", (req, res) => {
  res.json({ id: 1, name: "John Doe", email: "john@example.com" });
});

app.use((req, res) => {
  res.json({ error: "404 Not Found" });
});
app.listen(3000, () => {
  console.log("Server Started at 3000");
});
