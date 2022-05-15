const router = require('express').Router();
const { Post } = require('../db/models');

router.route('/')
  .get(async (req, res) => {
    const posts = await Post.findAll();
    res.render('index', { posts });
  });

module.exports = router;
