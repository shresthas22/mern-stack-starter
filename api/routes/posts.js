const express = require("express");
const { builtinModules } = require("module");
const router = express.Router();
const Post = require("../models/Posts");
const Posts = require("../models/Posts");

// GETS ALL POSTS
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

// SUBMITS A POST
router.post("/", async (req, res) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
  });

  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Specific Post
router.get("/:postId", async (req, res) => {
  try {
    const post = await Posts.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete Post
router.delete("/:postId", async (req, res) => {
  try {
    const removedPost = await Posts.remove({ _id: req.params.postId });
    res.json(removedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Posts.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {}
});

module.exports = router;
