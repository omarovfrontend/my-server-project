const router = require('express').Router();
const axios = require('axios');

router.route('/')
  .get((req, res) => {
    res.render('joke');
  })
  .post(async (req, res) => {
    const result = await axios('https://api.chucknorris.io/jokes/random');
    res.json({ joke: result.data.value });
  });

module.exports = router;
