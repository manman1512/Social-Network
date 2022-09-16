const express = require('express');
const router = express.Router();

const {
  createPost,
  updatePostById,
  deletePostById,
  getPostById,
  getAllPost,
} = require('../controllers/post.controller');

router.get('/getAllPost', getAllPost);
router.get('/getPostById/:id', getPostById);
router.post('/', createPost);
router.put('/updatePostById/:id', updatePostById);
router.delete('/deletePostById/:id', deletePostById);

module.exports = router;
