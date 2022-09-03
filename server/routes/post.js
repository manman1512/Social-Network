const express = require('express');
const router = express.Router();

const {
  createPost,
  updatePostById,
  deletePostById,
  getPostById,
  getAllPost,
} = require('../controllers/post.controller');

router.post('/', createPost);
router.put('/updatePostById/:id', updatePostById);
router.delete('/deletePostById/:id', deletePostById);
router.get('/getPostById/:id', getPostById);
router.get('/getAllPost/', getAllPost);

module.exports = router;
