const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/libdb");
    console.log("DB Got connected successfully");
  } catch (error) {
    console.log("Error While Connecting DB");
    console.log(error);
  }
};

module.exports = connectDB;
