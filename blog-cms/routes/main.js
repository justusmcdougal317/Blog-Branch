const express = require('express');
const router = express.Router();

// Define routes for the main application
router.post('/login', async (req, res) => {
    // ... (unchanged)
  });
  
  router.get('/signup', (req, res) => {
    console.log('Reached /signup route');
    // Your logic for rendering the sign-up page goes here
    res.render('signup', { /* Your data here */ });
  });
  
  router.post('/signup', (req, res) => {
    // ... (unchanged)
  });
  
  router.get('/login', (req, res) => {
    // ... (unchanged)
  });
  
  router.get('/homepage', (req, res) => {
    // ... (unchanged)
  });
  

router.get('/', (req, res) => {
  res.render('index'); // Render the index.hbs file
});

module.exports = router;