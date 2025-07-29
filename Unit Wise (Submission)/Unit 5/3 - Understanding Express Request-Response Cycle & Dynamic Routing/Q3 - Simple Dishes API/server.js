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

// get dish by name
app.get("/dishes/get", (req, res) => {
  const { name } = req.query;
  // if (!name) {
  //   return res
  //     .status(400)
  //     .json({ message: "Please provide a dish name to search" });
  // }

  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let dishes = data.dishes;
  // console.log("GG");

  // lowring case
  let matchedDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(name.toLowerCase())
  );

  if (matchedDishes.length > 0) {
    res.status(200).json(matchedDishes);
  } else {
    res.status(404).json({ message: "No dishes found" });
  }
});

// get dish by id
app.get("/dishes/:id", (req, res) => {
  let id = req.params.id;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let dishes = data.dishes;
  let index = dishes.findIndex((dish) => dish.id == id);
  if (index == -1) {
    res.json({ msg: "Dish Not Found" });
  } else {
    res.json({ msg: "Dish Found", dish: dishes[index] });
  }
});

// update dish by id
app.put("/dishes/:id", (req, res) => {
  let id = req.params.id;
  // read file and check if id is present
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let dishes = data.dishes;
  let oldDish = req.body;

  let index = dishes.findIndex((dish) => dish.id == id);
  console.log(index);
  if (index == -1) {
    res.json({ msg: "Dish Not Found" });
  } else {
    let updatedDishes = dishes.map((ele, index) => {
      if (ele.id == id) {
        return { ...ele, ...oldDish };
      } else {
        return ele;
      }
    });

    // replace with old dish
    data.dishes = updatedDishes;

    // update in db
    fs.writeFileSync("./db.json", JSON.stringify(data));
    res
      .status(200)
      .json({ msg: "Dish Updated", updatedDish: updatedDishes[index] });
  }
});

// default handle
app.use((req, res) => {
  res.status(404).json({ error: "404 Not Found" });
});

app.listen(3000, () => {
  console.log("Server Started on http://localhost:3000/");
});
