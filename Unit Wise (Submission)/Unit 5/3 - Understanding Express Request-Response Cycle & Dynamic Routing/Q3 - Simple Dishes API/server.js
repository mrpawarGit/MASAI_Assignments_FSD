const express = require("express");
const app = express();
const fs = require("fs");

// body parser
app.use(express.json());

// route for reading file
app.get("/all-dishes", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let dishes = data.dishes;
  console.log(dishes);
  res.send(dishes);
});

// add new dishes
app.post("/add-dish", (req, res) => {
  let newDish = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let dishes = data.dishes;
  // push
  dishes.push(newDish);
  // update in db
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.json({ msg: "New Dishes Added", newDish: newDish });
});

// default handle
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("Server Started on http://localhost:3000/");
});
