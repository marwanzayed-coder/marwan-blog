import ArticlesSchema from "../models/articles.js";

export const ArticlesController = {
  async newPost(req, res) {
    try {
      const post = await new ArticlesSchema(req.body);
      await post.save();
      res.status(201).json({
        msg: "Created Post!",
        post: {
          ...post._doc,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async getPosts(req, res) {
    try {
      const posts = await ArticlesSchema.find();
      res.status(200).json({
        msg: "Get Posts!",
        posts: [...posts],
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async getPost(req, res) {
    try {
      const post = await ArticlesSchema.find({ href: req.params.href });
      res.status(200).json({
        msg: "Get Post!",
        post: post,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  async updataPost(req, res) {
    try {
      const post = await ArticlesSchema.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body }
      );
      res.json({
        msg: "Updata Post",
        post: post,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
