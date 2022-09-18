const Productmodel = require("./models/productmodel");
const data = require("./data/productdata");

const connectDB = require("./config/db");

connectDB();
const importData = async () => {
  try {
    await Productmodel.deleteMany({});
    await Productmodel.insertMany(data);
    console.log("data imported successfully");
    process.exit();
  } catch (err) {
    console.log("db connection error");
    process.exit(1);
  }
};

importData();
