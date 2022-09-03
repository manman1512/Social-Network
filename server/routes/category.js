const router = require("express").Router();
const {createCate, getCate} = require("../controllers/category.controller")

router.post("/", createCate);
router.get("/", getCate);

module.exports = router;