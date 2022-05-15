const router = require('express').Router();
const upload = require('../middleware/uploadMiddle');
const { Post } = require('../db/models');

// ручка для добавления поста
router.route('/')
  .post(upload.single('img'), async (req, res) => {
    const newPost = await Post.create({ ...req.body, img: req.file.filename });
    res.json({ newPost });
  });

// ручка для удаления поста
router.route('/:id')
  .delete(async (req, res) => {
    await Post.destroy({ where: { id: req.params.id } });
    res.sendStatus('200');
  });

module.exports = router;
