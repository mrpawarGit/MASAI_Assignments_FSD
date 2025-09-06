const express = require("express");
const fs = require("fs").promises;

const app = express();
app.use(express.json());

// get students
app.get("/students", async (req, res) => {
  try {
    const data = await fs.readFile("./db.json", "utf-8");
    const students = JSON.parse(data).students || [];
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ msg: "Error reading data", error: error.message });
  }
});

// post student
app.post("/students", async (req, res) => {
  try {
    const newStudent = req.body;
    const data = await fs.readFile("./db.json", "utf-8");
    const parsed = JSON.parse(data);
    const students = parsed.students || [];

    const id = students.length ? students[students.length - 1].id + 1 : 1;
    const studentWithId = { ...newStudent, id };

    students.push(studentWithId);
    parsed.students = students;

    await fs.writeFile("./db.json", JSON.stringify(parsed, null, 2));

    res.status(201).json({ msg: "New student added", student: studentWithId });
  } catch (error) {
    res.status(500).json({ msg: "Error saving student", error: error.message });
  }
});

app.use((req, res) => {
  res.status(404).json({ msg: "Not Found" });
});

app.listen(3000, () => {
  console.log("Server started http://localhost:3000/");
});
