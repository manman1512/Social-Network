const user = require('../models/user.model');
const post = require('../models/post.model');

module.exports = {
  //CREATE POST
  createPost: async (req, res) => {
    console.log(req.user);
    req.body.username =req.user.username;
    const newPost = new post(req.body);
    try {
      const savePost = await newPost.save();
      res.status(200).json({ message: 'Tao post thanh cong!', savePost });
    } catch (error) {
      console.log(error);
      res.status(409).json({
        success: false,
        message: 'Title khong duoc trung hoac thieu Username!',
      });
    }
  },

  //UPDATE POST
  updatePostById: async (req, res) => {
    const { id } = req.params;
    try {
      const Post = await post.findById(id);
      if (Post.username === req.user.username) {
        try {
          const updatePost = await post.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
          );
          res.status(200).json({
            success: true,
            message: 'Update post thanh cong!',
            updatePost,
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Loi server' });
        }
      } else {
        res.status(401).json('Username khong dung!');
      }
    } catch (error) {
      res.status(500).json('Chi update duoc post cua ban!');
    }
  },

  //DELETE POST
  deletePostById: async (req, res) => {
    const { id } = req.params;

    try {
      const Post = await post.findById(id);
      console.log("🚀 ~ file: post.controller.js ~ line 57 ~ updatePostById: ~ Post", Post)
      if (Post.username === req.user.username) {
        try {
          await Post.delete();
          res.status(200).json({
            success: true,
            message: 'Delete post thanh cong!',
          });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Loi server' });
        }
      } else {
        res.status(401).json('Username khong dung!');
      }
    } catch (error) {
      res.status(500).json('Chi delete duoc post cua ban!');
    }
  },

  //GET POST BY ID
  getPostById: async (req, res) => {
    const { id } = req.params;

    try {
      const Post = await post.findById(id);
      res.status(200).json(Post);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  //GET ALL POSTS
  getAllPost: async (req, res) => {
    const username = req.query.user;
    const cateName = req.query.cat; //categories

    try {
      let posts;
      if (username) {
        posts = await post.find({ username });
      } else if (cateName) {
        posts = await post.find({
          categories: {
            $in: [cateName],
          },
        });
      } else {
        posts = await post.find();
      }
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
