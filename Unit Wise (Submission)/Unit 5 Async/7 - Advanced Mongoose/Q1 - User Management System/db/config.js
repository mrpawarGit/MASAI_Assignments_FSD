const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log("ERROR while connecting DB");
  }
};

module.exports = connectDB;
