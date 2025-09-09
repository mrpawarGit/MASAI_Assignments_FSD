const mongoose = require("mongoose");

const connectToDB = async (req, res) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/advtaskdb");
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error while connecting to DB");
  }
};

module.exports = connectToDB;
