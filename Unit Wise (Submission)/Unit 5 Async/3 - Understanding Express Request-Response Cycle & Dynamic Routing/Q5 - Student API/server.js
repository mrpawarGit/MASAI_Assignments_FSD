const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

// get
app.get("/students", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let students = data.students;
  console.log(students);
  res.status(200).send(students);
});

// post
app.post("/students", (req, res) => {
  let newStudent = req.body;
  let data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  // let students = data.students;
  let id = books[books.length - 1].id + 1;
  newStudent = { ...newStudent, id };
  books.push(newStudent);
  fs.writeFileSync("./db.json", JSON.stringify(data));

  res.status(200).json({ msg: "New Book Added", book: newStudent });
});

app.use((req, res) => {
  res.json({ msg: "Not Found" });
});

app.listen(3000, (req, res) => {
  console.log("Server started http://localhost:3000/");
});
