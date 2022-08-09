const { json } = require("express");
const product = require("../models/product.model");

module.exports = {

// get all products
  getAll: async (req, res) => {
    const Products = await product.find();
    res.json(Products);
  },

// get category product
  getCategory : async (req, res) => {
    const {category} = req.body;
    const Products = await product.find({category});
    res.json(Products);
  }
};
