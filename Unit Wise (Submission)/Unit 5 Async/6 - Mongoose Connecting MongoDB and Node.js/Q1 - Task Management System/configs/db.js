const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/taskdb");
    console.log("DB Connected");
  } catch (error) {
    console.log("Error while connecting DB");
    console.log(error);
  }
};

module.exports = connectDB;
