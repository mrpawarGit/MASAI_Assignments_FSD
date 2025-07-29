const express = require("express");
const app = express();
const fs = require("fs");

// body parser
app.use(express.json());

// route for reading file
app.get("/dishes", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let dishes = data.dishes;
  console.log(dishes);
  res.status(200).send(dishes);
});

// add new dishes
app.post("/dishes", (req, res) => {
  let newDish = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let dishes = data.dishes;
  // push
  let id = dishes[dishes.length - 1].id + 1;
  newDish = { ...newDish, id };
  dishes.push(newDish);
  // update in db
  fs.writeFileSync("./db.json", JSON.stringify(data));
  res.status(200).json({ msg: "New Dishe Added", newDish: newDish });
});

// get dish by id
app.get("/dishes/:id", (req, res) => {});

// update dish by id
app.put("/dishes/:id", (req, res) => {
  let id = req.params.id;
  let updatedFields = req.body;

  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let dishes = data.dishes;

  let index = dishes.findIndex((dish) => dish.id == id);

  if (index === -1) {
    res.status(404).json({ msg: "Dish Not Found" });
  } else {
    // update dish
    dishes[index] = { ...dishes[index], ...updatedFields };
    // replace with old
    data.dishes = dishes;

    fs.writeFileSync("./db.json", JSON.stringify(data));
    res.status(200).json({ msg: "Dish Updated", updatedDish: dishes[index] });
  }
});

// default handle
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("Server Started on http://localhost:3000/");
});
