const express = require("express");

const router = express.Router();

const productcontroller = require("../controller/productController");

router.get("/", productcontroller.getallProducts);

router.get("/:id", productcontroller.getProductbyid);

module.exports = router;
