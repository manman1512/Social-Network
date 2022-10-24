const router = require("express").Router();
const {createCate, getCate, getCateByUser} = require("../controllers/category.controller")

router.post("/", createCate);
router.get("/", getCate);
router.get("/user/:_id", getCateByUser)

module.exports = router;