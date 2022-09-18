const Productmodel = require("../models/productmodel");

exports.getallProducts = async (req, res) => {
  try {
    const products = await Productmodel.find({});
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getProductbyid = async (req, res) => {
  try {
    const product = await Productmodel.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
