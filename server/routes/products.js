const express = require("express");
const router = express.Router();

const { getAll, getCategory } = require("../controllers/products.controller");

router.get("/", getAll);
router.get("/category", getCategory);

module.exports = router;
