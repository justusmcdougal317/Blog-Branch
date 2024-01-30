const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));

router.get('/login', (req, res) => {
  console.log('Reached /login route');
  res.render('login', { /* Your data here */ });
});

router.get('/signup', (req, res) => {
  console.log('Reached /signup route');
  res.render('signup', { /* Your data here */ });
});

router.get('/homepage', (req, res) => {
  console.log('Reached /homepage route');
  res.render('homepage', { /* Your data here */ });
});

module.exports = router;