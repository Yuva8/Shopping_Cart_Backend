const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const cors = require("cors");

const productRoute = require("./routes/productRoutes");
dotenv.config();
app.use(cors());
app.use(express.json());

connectdb();

app.get("/", (req, res) => {
  res.send("API End point...");
});
app.use("/api/products", productRoute);

const PORT = process.env.PORT || 3700;
app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}`);
});
