const router = require("express").Router();
const {createCate, getCate, getCateByUser, getPostByTag} = require("../controllers/category.controller")

router.post("/", createCate);
router.get("/", getCate);
router.get("/:tagId", getPostByTag)
router.get("/user/:_id", getCateByUser)

module.exports = router;