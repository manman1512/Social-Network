const express = require('express');
const router = express.Router();

const {
  createPost,
  updatePostById,
  deletePostById,
  getPostById,
  getAllPost,
  getPostsByAuthor
} = require('../controllers/post.controller');

router.get('/getAllPost', getAllPost);
router.get('/getPostById/:id', getPostById);
router.post('/', createPost);
router.patch('/updatePostById/:id', updatePostById);
router.delete('/deletePostById/:id', deletePostById);
router.get("/getPostsByAuthor", getPostsByAuthor)
module.exports = router;
