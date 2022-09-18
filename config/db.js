const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
  } catch (err) {
    console.error(err);
    process.exit();
  }
};
