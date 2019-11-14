const express = require("express");
const router = express.Router();
const {Product} = require("./product.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Product.find({});
  res.send(xs);
});

router.get("/random", async (req, res)=>{
  const xs = await Product.find({});
  const r = getRandomInt(0, xs.length - 1);
  res.status(200).send(xs[r])
});
router.get("/similar/:productId", async (req, res)=>{
  const product = await Product.findById(req.params.productId); //finds all products by their id
  const brand = product.title.split(" ")[0]; //splits the title
  const products = await Product.find({ "title": { $regex: brand, $options: "i"}}); //finds product that starts with nt. "samsung"
 //as "i"
 res.send(products); //outputs
});

module.exports = router;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
